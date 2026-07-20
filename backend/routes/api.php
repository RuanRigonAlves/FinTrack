<?php

use App\Http\Controllers\Api\CategoryGroupController;
use App\Http\Controllers\Api\TransactionController;
use Illuminate\Support\Facades\Route;

Route::get('/test', function () {
    return response()->json([
        'message' => 'API funcionando!'
    ]);
});

Route::apiResource('transactions', TransactionController::class);
Route::apiResource('category-group', CategoryGroupController::class);