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

    public function permohonanInformasi() 
    {
        return Inertia('Layanan/PermohonanInformasi');
    }

    public function keberatanInformasi() 
    {
        return Inertia('Layanan/KeberatanInformasi');
    }

    public function sengketaInformasi() 
    {
        return Inertia('Layanan/SengketaInformasi');
    }

    public function alasanKeberatan() 
    {
        return Inertia('Layanan/AlasanKeberatan');
    }
    
    public function formKeberatan() 
    {
        return Inertia('Layanan/FormKeberatanPermohonan');
    }

    public function pemohon() 
    {
        return Inertia('Layanan/JumlahPemohon');
    }

    public function laporanTahunan() 
    {
        return Inertia('Layanan/LaporanTahunan');
    }

    public function laporanAkuntabilitas() 
    {
        return Inertia('Layanan/LaporanAkuntabilitas');
    }

    public function aspirasi() 
    {
        return Inertia('Layanan/AspirasiPengaduan');
    }
}
