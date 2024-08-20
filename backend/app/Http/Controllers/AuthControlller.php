<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthControlller extends Controller
{
    public function signin(Request $request)
    {
        // validate input data coming from the request

        // $request->validate([
        //     'firstname'=> "required",
        //     'lastname'=> "required",
        //     'email'=> "required",
        //     'gender'=> "required",
        //     'username'=> "required",
        //     'password'=> "required|min:2",
        // ]);

        $user = User::create([

            'firstname'=> $request->input('firstname'),
            'lastname'=> $request->input('lastname'),
            'email'=> $request->input('email'),
            'gender'=> $request->input('gender'),
            'username'=> $request->input('username'),
            'password'=> Hash::make($request->input('password')),

           
        ]);


        return response()->json([
            'status' => 200,
            'error' => [],
            'data' => $user,
            'message' => 'User Added Succesfully'
            
        ]);

    }
    public function login(Request $request)
    {
        $request->validate([
            'email'=> "required",
            'password'=> "required|min:2",
        ]);
        $credetials = [
            'email' => $request->input("email"),
            'password' => $request->input("password"),
        ];
        $admin = "admin";
        if (Auth::attempt( $credetials)) {
            return response()->json([
                'status' => 200,
                'error' => [],
                'message' => 'authentication sucsseful'
                
            ]);
    
        }elseif (
        Auth::attempt([
        'email' => $request->input($admin), 
        'password' => $request->input($admin)])) {
            return response()->json(['message'=>"Welcome Admin to dashboard"]);
        }
        else{
            return response()->json(['message'=>"authentication faild"]);
        }



    }

    public function logout()
    {
        Auth::logout();
        return response()->json(['message' => 'Logged out successfully']);
    }

    public function show()
    {
            return User::all();
    }
}
