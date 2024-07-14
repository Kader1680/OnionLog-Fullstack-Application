<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ImageController extends Controller
{
    

    public function store(){
        return view("create");
    }

    public function index(){
        
    }
    public function show(){

        $images = DB::table("images")->get();
        return view("home", compact("images"));
    }
    public function destroy(){
        
    }
}
