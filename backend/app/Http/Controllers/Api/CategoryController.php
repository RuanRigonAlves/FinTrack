<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Category::with('group')->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $category = Category::create(
            $request->validate([
                'name' => 'required|string|max:255',
                'type' => 'required|in:income,expense',
                'icon' => 'nullable|string',
                'color' => 'nullable|string',
                'group_id' => 'required|exists:category_groups,id',
            ])
        );

        return response()->json($category, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        return $category->load('group');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Category $category)
    {
        $category->update(
            $request->validate([
                'name' => 'required|string|max:255',
                'type' => 'required|in:income,expense',
                'icon' => 'nullable|string',
                'color' => 'nullable|string',
                'group_id' => 'required|exists:category_groups,id',
            ])
        );

        return $category->load('group');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        return response()->noContent();
    }
}
