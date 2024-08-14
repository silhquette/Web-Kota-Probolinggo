<?php

namespace App\Http\Controllers;

use App\Models\Information;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PublicInformationController extends Controller
{
    public function publik()
    {
        $informations = Information::all()->groupBy('category');
        
        return Inertia('Informasi/Index', [
            'informations' => $informations
        ]);
    }

    public function berkala()
    {
        $informations = Information::where('announced', 'berkala')->get()->groupBy('category');
        
        return Inertia('Informasi/Berkala', [
            'informations' => $informations
        ]);
    }

    public function serta()
    {
        $informations = Information::where('announced', 'serta merta')->get()->groupBy('category');
        
        return Inertia('Informasi/Serta', [
            'informations' => $informations
        ]);
    }

    public function setiapSaat()
    {
        $informations = Information::where('announced', 'setiap saat')->get()->groupBy('category');
        
        return Inertia('Informasi/SetiapSaat', [
            'informations' => $informations
        ]);
    }

    public function kecuali()
    {
        $informations = Information::where('announced', 'dikecualikan')->get()->groupBy('category');
        
        return Inertia('Informasi/Kecuali', [
            'informations' => $informations
        ]);
    }
}
