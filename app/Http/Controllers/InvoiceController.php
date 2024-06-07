<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreInvoiceRequest;
use App\Http\Requests\UpdateInvoiceRequest;
use App\Http\Resources\InvoiceListResource;
use App\Http\Resources\InvoiceResource;
use App\Mail\InvoiceEmail;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Storage;
use App\Models\Invoice;
use Illuminate\Support\Facades\Mail;

class InvoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $invoices = Invoice::where('user_id', Auth::id())->get();
        return InvoiceListResource::collection($invoices);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreInvoiceRequest $request)
    {
        $validatedData = $request->validated();
        $validatedData['user_id'] = Auth::id();
        $randomInvoicePath = Str::uuid()->toString() . '.pdf';
        $validatedData['path'] = $randomInvoicePath;
        $invoice = Invoice::create($validatedData);
        if ($invoice) {
            // Invoice created successfully
            $pdf = PDF::loadView('invoices', ['invoice' => $invoice]);
            $pdfContent = $pdf->output();
            Storage::disk('invoice')->put($randomInvoicePath, $pdfContent);
            if($validatedData['email_send_enabled']) {
                Mail::to($invoice->email)->send(new InvoiceEmail($invoice));
            }

            return response()->json(['message' => 'Invoice created successfully'],201);
        } else {
            // Return an error response if invoice creation failed
            return response()->json(['message' => 'Failed to create invoice'], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Invoice $invoice)
    {
        return new InvoiceResource($invoice);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateInvoiceRequest $request, Invoice $invoice)
    {
        $validatedInvoiceData = $request->validated();
        $invoiceUpdated = $invoice->update($validatedInvoiceData);
        $invoice->email_send_enabled = $validatedInvoiceData['email_send_enabled'];
        if ($invoiceUpdated) {
            $pdf = PDF::loadView('invoices', ['invoice' => $invoice]);
            $pdfContent = $pdf->output();
            Storage::disk('invoice')->put($invoice->path, $pdfContent);
            if($invoice->email_send_enabled) {
                Mail::to($invoice->email)->send(new InvoiceEmail($invoice));
            }
            return response()->json(['message' => 'Invoice updated successfully'], 200);
        } else {
            return response()->json(['message' => 'Failed to update invoice'], 500);
        }
            
            // return response()->json(['message' => 'Invoice updated successfully'], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Invoice $invoice)
    {   
        $this->authorize('delete', $invoice);
        $invoiceDeleted = $invoice->delete();
        if ($invoiceDeleted) {
            Storage::disk('invoice')->delete($invoice->path);
            return response()->json(['message' => 'Invoice deleted successfully'], 200);
        } else {
            return response()->json(['message' => 'Failed to delete invoice'], 500);
        }
    }
}
