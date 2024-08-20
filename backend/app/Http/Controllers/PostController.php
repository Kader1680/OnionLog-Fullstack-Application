<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    public function index(){
        $data = Post::all();

        return response()->json([
            'status' => 200,
            'error' => [],
            'data' => $data
            
        ]);
    }


    public function store(Request $request){
        $posts = new Post();
        $posts->content = $request->input("content");
        // $posts->id_user = $request->input("id_user");
        $posts->id_user = Auth::user()->id;
        $posts->save();
        return response()->json([
            'status' => 200,
            'error' => [],
            'data' => $posts,
            'message' => 'Post Added Succesfully'
            
        ]);
    }


    public function update(Request $request, Post $post)
    {
        $request->validate([
            'content' => 'required',
        ]);

        $post->update($request->all());

        return redirect()->route('posts.index')->with('success', 'Post updated successfully.');
    }

    public function destroy(Post $post)
    {
        $post->delete();

        return redirect()->route('posts.index')->with('success', 'Post deleted successfully.');
    }
}
