<?php

namespace App\Http\Controllers;

use App\Models\Vedio;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class VedioController extends Controller
{
    public function getVedio(){
        $data = Vedio::all();

        return response()->json([
            'status' => 200,
            'error' => [],
            'data' => $data
            
        ]);
    }

    public function store(Request $request)
    { 

        $file = $request->file("vedio");
        $file->move('upload',  $file->getClientOriginalName());
        $file_name = $file->getClientOriginalName();
         
        $insert = new Vedio();
        $insert->path = $file_name;
        $insert->save();

        return response()->json([
            'status' => 200,
            'error' => [],
            'data' => $insert
        ]);
         
    }

    public function show(){

        $data = DB::table("vedios")->get();
        return view("home", compact("data"));
    }
}
