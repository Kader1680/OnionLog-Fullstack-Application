<?php

namespace App\Http\Controllers;

use App\Models\Data;
use App\Models\Random;
use Illuminate\Http\Request;

class RandomController extends Controller
{
    
    public function getAllRandom(){
        $data = Random::all();

        return response()->json([
            'status' => 200,
            'error' => [],
            'data' => $data
            
        ]);
    }
}
