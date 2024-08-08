<?php

namespace Database\Seeders;

use App\Models\Data;
use App\Models\Random;
use Faker\Core\Number;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class RandomsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Random::insert([
            'Name' => Str::random(10),
            'Iban' => str::random(10),
            
        ]);
    }
}
