<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class InvoiceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "name" => $this->name,
            "email" => $this->email,
            "mobile" => $this->mobile,
            "service" => $this->service,
            "price_per_hour" => $this->price_per_hour,
            "working_hours" => $this->working_hours,
            "email_send_enabled" => $this->email_send_enabled,
        ];
    }
}
