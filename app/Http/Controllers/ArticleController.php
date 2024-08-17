<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Category;
use App\Models\User;
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
        // return view
        if (Auth::user()) {
            // get all articles
            $articles = $articles = Auth::user()->articles()
            ->latest()
            ->with(['category', 'user'])
            ->get();
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
     * Display all Articles
     *
     * @return void
     */
    public function all()
    {
        $articles = Article::with(['category', 'user'])->latest()->get();

        return Inertia('Articles/All', [
            'articles' => $articles
        ]);
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
        // Ambil semua data dari request
        $data = $request->all();

        // Cek jika ada file gambar yang di-upload
        if ($request->hasFile('thumbnail')) {
            // Simpan gambar ke direktori storage/app/public/thumbnails dan dapatkan path-nya
            $data['header'] = $request->file('thumbnail')->store('thumbnails', 'public');
        } else {
            // Jika tidak ada gambar yang di-upload, pastikan nilai 'thumbnail' tidak diset sebagai 'null' atau string lainnya
            $data['header'] = null;
        }

        // Buat artikel baru dengan data yang telah diproses
        Article::create($data);

        // Redirect ke halaman index dengan pesan sukses
        return redirect(route('article.index'))->with('success', 'Artikel Berhasil Diunggah!');
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

        if (Auth::user()) {
            return inertia('Articles/User/Show', [
                'article' => $article,
                'categories' => $categories,
                'latest' => $latest,
            ]);
        } else {
            return inertia('Articles/Show', [
                'article' => $article,
                'categories' => $categories,
                'latest' => $latest,
            ]);
        }
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
        //  return redirect()->route('article.index')->with('success', 'Data Berhasil Dihapus!');
         return redirect(route('article.index'))->with('success', 'Data Berhasil Dihapus!');
    }
}
