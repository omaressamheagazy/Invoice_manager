<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreInvoiceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            $this->name => 'required|string',
            $this->email => 'required|email',
            $this->phone => 'required|string',
            $this->service => 'required|string',
            $this->price_per_hour => 'required|numeric|gt:0',
            $this->working_hour => 'required|numeric|gt:0',
            $this->email_send_enabled => 'required|boolean',
        ];
    }
}
