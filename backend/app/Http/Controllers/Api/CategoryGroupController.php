<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CategoryGroup;
use Illuminate\Http\Request;

class CategoryGroupController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return CategoryGroup::with('categories')->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $group = CategoryGroup::create(
            $request->validate([
                'name' => 'required|string|max:255',
                'icon' => 'nullable|string',
                'color' => 'nullable|string',
            ])
        );

        return response()->json($group, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(CategoryGroup $categoryGroup)
    {
        return $categoryGroup->load('categories');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, CategoryGroup $categoryGroup)
    {
        $categoryGroup->update(
            $request->validate([
                'name' => 'required|string|max:255',
                'icon' => 'nullable|string',
                'color' => 'nullable|string',
            ])
        );

        return $categoryGroup;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CategoryGroup $categoryGroup)
    {
        $categoryGroup->delete();

        return response()->noContent();
    }
}
