<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateInvoiceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user()->can('update', $this->invoice);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string',
            'email' => 'required|email',
            'mobile' => 'required|string',
            'service' => 'required|string',
            'price_per_hour' => 'required|numeric|gt:0',
            'working_hours' => 'required|numeric|gt:0',
            'email_send_enabled' => 'required|boolean',
        ];
    }
}
