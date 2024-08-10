<?php

use App\Http\Controllers\RandomController;
use App\Http\Controllers\VedioController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/data', [RandomController::class, "getAllRandom"]);
Route::get('/all', [VedioController::class, "getVedio"]);


// Route::get("/all")