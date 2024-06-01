<?php

use Illuminate\Http\Request;
use App\Http\Controllers\InvoiceController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    // the following routes are considered the application business logic, all them need the email to be verified
    Route::middleware('verified')->group(function () { 
        Route::apiResource('invoices', InvoiceController::class);
    });
});