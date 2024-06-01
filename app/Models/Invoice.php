<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'email',
        'phone',
        'service',
        'price_per_hour',
        'working_hour',
        'user_id'
    ];
}
