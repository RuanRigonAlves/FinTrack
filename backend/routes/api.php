<?php

use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\CategoryGroupController;
use App\Http\Controllers\Api\TransactionController;
use Illuminate\Support\Facades\Route;

Route::apiResource('transactions', TransactionController::class);
Route::apiResource('categories', CategoryController::class);
Route::apiResource('category-group', CategoryGroupController::class);