<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class InvoiceListResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return
        [
            'reference' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'service' => $this->service,
            'total_price' => $this->price_per_hour * $this->working_hours,
            'generated_at' => $this->created_at,
        ];
    }
}
