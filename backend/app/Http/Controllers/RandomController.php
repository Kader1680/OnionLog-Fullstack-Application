<?php

namespace App\Http\Controllers;

use App\Models\Data;
use Illuminate\Http\Request;

class RandomController extends Controller
{
    
    public function getAllRandom(){
        $data = data::all();
        return response()->json([
            'status' => 200,
            'data' => $data,
            'error' => []
        ]);
    }
}
