<?php

namespace App\Http\Controllers;

use App\Models\Statistic;
use Illuminate\Http\Request;

class StatisticController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // get all statistics
        $statistics = Statistic::OrderBy('name', 'desc')->get();

        // return view
        return inertia('Statistics/Index', [
            'statistics' => $statistics
        ]);
    }
}
