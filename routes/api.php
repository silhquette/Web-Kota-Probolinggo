<?php

use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArticleController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/articles', function () {
    // Tangkap query parameter 'query'
    $query = request()->query('query');

    // Cari artikel di database berdasarkan query
    $articles = Article::with(['category', 'user'])
                        ->where('title', 'like', '%' . $query . '%')
                        ->orWhere('body', 'like', '%' . $query . '%')
                        ->orWhere('excerpt', 'like', '%' . $query . '%')
                        ->get();

    // Kembalikan hasil pencarian sebagai JSON
    return response()->json($articles);
})->name('article.search');
