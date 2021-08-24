<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);
               // $this->call(UsersTableSeeder::class);
               $this->call(QuestionsTableSeeder::class);
               $this->call(OptionsTableSeeder::class);
               $this->call(AreasTableSeeder::class);
               $this->call(PreparationlevelsTableSeeder::class);

    }
}
