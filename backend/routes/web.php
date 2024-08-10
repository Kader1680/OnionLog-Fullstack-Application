<?php

use App\Http\Controllers\ImageController;
use App\Http\Controllers\VedioController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [VedioController::class, "show"]);
 
Route::post('/upload', [ImageController::class, "store"]);
Route::post('/vedio', [VedioController::class, "store"]);
Route::get('/create', [ImageController::class, "index"]);


