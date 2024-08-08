<?php

namespace App\Http\Controllers;

use App\Models\Image;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ImageController extends Controller
{
    

    public function store(Request $request)
    {
       
      //save the data to the database
      

        
        //   $requestData = $request->all();
        //   $fileName = time().$request->file('src')->getClientOriginalName();
        //   $path = $request->file('src')->storeAs('images', $fileName);
        //   $requestData = [];
        //   $requestData['src'] = "/storage/" . $path;
        //   Image::create($requestData);
          



        $fil_extention = $request->src-> getClientOriginalExtension();
        $file_name = time().'.'.$fil_extention;
        $path = 'images';
        $request->src->move($path, $file_name);
        $data = [
            'src' => $file_name,
        ];
        Image::create($data);
        return view("create");
    }


    public function index(){
          return view("create");
        
    }
    public function show(){

        $images = DB::table("images")->get();
        return view("home", compact("images"));
    }
    public function destroy(){
        
    }
}
