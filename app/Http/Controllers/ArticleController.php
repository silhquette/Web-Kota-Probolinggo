<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Category;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreArticleRequest;
use App\Http\Requests\UpdateArticleRequest;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
        // dump($categories);
        
        // return view
        if (Auth::user()) {
            // get all articles
            $articles = Auth::user()->articles->load(['category', 'user']);
            return inertia('Articles/User/Index', [
                'articles' => $articles,
            ]);
        } else {
            // get all articles
            $latest = Article::with(['category', 'user'])->latest()->limit(4)->get();
            $categories = Category::with(['articles' => function ($query) {
                $query->with(['category', 'user'])->orderBy('created_at', 'desc');
            }])->get();
            return inertia('Articles/Index', [
                'latest' => $latest,
                'categories' => $categories
            ]);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::all();
        return inertia('Articles/Create', [
            'categories' => $categories
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreArticleRequest $request)
    {
        // create articles
        Article::create($request->all());

        // redirect 
        return redirect()->route('article.index')->with('success', 'Artikel Berhasil Diunggah!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Article $article)
    {
        // Eager load category and user for the article
        $article->load(['category', 'user']);

        //get all categories
        $categories = Category::with(['articles'])->get();

        //get latest posts
        $latest = Article::with(['category', 'user'])->latest()->limit(7)->get();

        return inertia('Articles/Show', [
            'article' => $article,
            'categories' => $categories,
            'latest' => $latest,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Article $article)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateArticleRequest $request, Article $article)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Article $article)
    {
         //delete article
         $article->delete();

         //redirect
         return redirect()->route('article.index')->with('success', 'Data Berhasil Dihapus!');
    }
}
