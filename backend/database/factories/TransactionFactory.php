<?php

namespace Database\Factories;

use App\Models\Transaction;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Transaction>
 */
class TransactionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $type = fake()->randomElement(['income', 'expense']);
        $categoryId = $type === 'income' ? fake()->randomElement([4, 5]) : fake()->randomElement([1, 2, 3]);
        
        return [
            'user_id' => 1,
            'account_id' => 1,

            'is_recurring' => fake()->boolean(20),
            'category_id' => $categoryId,
            'type' => $type,
            'description' => fake()->sentence(3),
            'amount' => fake()->randomFloat(2,10, $type === 'income' ? 5000 : 500),
            'date' => fake()->dateTimeBetween('-6 months', 'now')
        ];
    }
}
