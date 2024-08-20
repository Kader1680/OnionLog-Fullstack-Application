<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::insert([
            'first name' => Str::random(5),
            'last name' => Str::random(5),
            'email' => Str::random(5).'@gmail.com',
            'gender' => "female",
            'username' => Str::random(5),
            'password'  => Str::random(5),
             
        ]);
    }
}
