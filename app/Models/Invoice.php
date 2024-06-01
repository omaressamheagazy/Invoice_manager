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
        'mobile',
        'service',
        'price_per_hour',
        'working_hours',
        'user_id'
    ];
}
