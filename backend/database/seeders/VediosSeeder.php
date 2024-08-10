<?php

namespace Database\Seeders;

use App\Models\Vedio;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VediosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Vedio::insert([
           
            'path' => "zidane.mp4",
            "updated_at" => "2024-08-09",
            "created_at" => "2024-08-09"
            
        ]);
    }
}
