<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class TransparencyController extends Controller
{
    public function index()
    {
        return Inertia('Anggaran');
    }

    public function aset()
    {
        return Inertia('Transparansi/AsetInvestasi');
    }

    public function neraca()
    {
        return Inertia('Transparansi/Neraca');
    }

    public function calk()
    {
        return Inertia('Transparansi/CALK');
    }

    public function lra()
    {
        return Inertia('Transparansi/LRA');
    }

    public function rkpd()
    {
        return Inertia('Transparansi/RKPD');
    }

    public function ppas()
    {
        return Inertia('Transparansi/PPAS');
    }

    public function dpa()
    {
        return Inertia('Transparansi/DPA');
    }

    public function rka()
    {
        return Inertia('Transparansi/RKA');
    }

    public function obpk()
    {
        return Inertia('Transparansi/OBPK');
    }
}
