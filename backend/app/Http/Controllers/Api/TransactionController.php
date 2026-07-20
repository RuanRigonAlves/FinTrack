<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Transaction::with('category.group')->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $transaction = Transaction::create(
            $request->validate([
                'type' => 'required|in:income,expense',
                'amount' => 'required|numeric',
                'description' => 'required|string|max:255',
                'date' => 'required|date',
                'icon' => 'nullable|string',
                'category_id' => 'nullable|exists:categories,id',
                'account_id' => 'nullable|exists:accounts,id',
                'is_recurring' => 'nullable|boolean'
            ])
        );

        return response()->json($transaction, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Transaction $transaction)
    {
        return $transaction;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Transaction $transaction)
    {
        $transaction->update($request->validate([
            'type' => 'required|in:income,expense',
            'amount' => 'required|numeric',
            'description' => 'required|string|max:255',
            'date' => 'required|date',
            'icon' => 'nullable|string',
            'category_id' => 'nullable|exists:categories,id',
            'account_id' => 'nullable|exists:accounts,id',
        ]));

        return $transaction;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Transaction $transaction)
    {
        $transaction->delete();

        return response()->noContent();
    }
}
