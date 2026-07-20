<?php

namespace Database\Factories;

use App\Models\CategoryGroup;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<CategoryGroup>
 */
class CategoryGroupFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
           'name' => fake()->randomElement([
            'Essentials',
            'Lifestyle',
            'Transportation',
            'Health',
            'Entertainment',
            'Income',
        ]),

        'icon' => 'mdi-shape',

        'color' => fake()->safeHexColor(),
        ];
    }
}
