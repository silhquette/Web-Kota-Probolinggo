<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class LandingController extends Controller
{
     /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // get all articles
        $latest = Article::with(['category', 'user'])->latest()->limit(4)->get();

        // return view
        return inertia('Landing/Index', [
            'latest' => $latest
        ]);
    }
}
