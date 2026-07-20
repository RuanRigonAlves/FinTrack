<?php

namespace Database\Seeders;

use App\Models\CategoryGroup;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategoryGroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        CategoryGroup::insert([
    [
        'name' => 'Income',
        'icon' => 'mdi-cash',
        'color' => '#4CAF50',
    ],
    [
        'name' => 'Essentials',
        'icon' => 'mdi-home',
        'color' => '#2196F3',
    ],
    [
        'name' => 'Transportation',
        'icon' => 'mdi-car',
        'color' => '#FF9800',
    ],
    [
        'name' => 'Health',
        'icon' => 'mdi-heart',
        'color' => '#E91E63',
    ],
    [
        'name' => 'Entertainment',
        'icon' => 'mdi-gamepad',
        'color' => '#9C27B0',
    ],
    ]);
    
    }
}
