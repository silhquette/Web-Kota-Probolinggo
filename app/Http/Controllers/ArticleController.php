<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Category;
use App\Http\Requests\StoreArticleRequest;
use App\Http\Requests\UpdateArticleRequest;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // get all articles
        $latest = Article::with(['category', 'user'])->latest()->limit(4)->get();
        $categories = Category::with(['articles' => function ($query) {
            $query->with(['category', 'user'])->orderBy('created_at', 'desc');
        }])->get();

        // dump($categories);

        // return view
        return inertia('Articles/Index', [
            'latest' => $latest,
            'categories' => $categories
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Articles/Create');
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
        //
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
        //
    }
}
