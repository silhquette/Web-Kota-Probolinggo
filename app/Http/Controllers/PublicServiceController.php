<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PublicServiceController extends Controller
{
    public function formPermohonan() 
    {
        return Inertia('Layanan/FormPermohonanInformasi');
    }

    public function caraPengajuan() 
    {
        return Inertia('Layanan/TataCaraPengajuan');
    }
}
