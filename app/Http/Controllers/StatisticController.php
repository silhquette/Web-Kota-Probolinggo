<?php

namespace App\Http\Controllers;

use App\Models\Statistic;
use Illuminate\Http\Request;

class StatisticController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function dataStatistik()
    {
        // get all statistics
        $statistics = Statistic::OrderBy('name', 'desc')->get();

        // return view
        return inertia('Statistics/DataStatistik', [
            'statistics' => $statistics
        ]);
    }

    /**
     * Display a listing of the resource.
     */
    public function daftarKota()
    {
        // return view
        return inertia('Statistics/DaftarKota');
    }
}
