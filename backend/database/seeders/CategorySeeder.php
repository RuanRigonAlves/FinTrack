<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\CategoryGroup;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $income = CategoryGroup::where('name', 'Income')->first();
        $essentials = CategoryGroup::where('name', 'Essentials')->first();
        $transportation = CategoryGroup::where('name', 'Transportation')->first();
        $entertainment = CategoryGroup::where('name', 'Entertainment')->first();

    
        Category::insert([
        [
            'name' => 'Mercado',
            'type' => 'expense',
            'icon' => 'mdi-cart',
            'group_id' => $essentials->id,
        ],
        [
            'name' => 'Transporte',
            'type' => 'expense',
            'icon' => 'mdi-car',
            'group_id' => $transportation->id,
        ],
        [
            'name' => 'Lazer',
            'type' => 'expense',
            'icon' => 'mdi-gamepad',
            'group_id' => $entertainment->id,
        ],
        [
            'name' => 'Salário',
            'type' => 'income',
            'icon' => 'mdi-cash',
            'group_id' => $income->id,
        ],
        [
            'name' => 'Freelance',
            'type' => 'income',
            'icon' => 'mdi-laptop',
            'group_id' => $income->id,
        ],
            ]);
    }
}
