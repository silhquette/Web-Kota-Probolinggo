<?php

namespace App\Http\Controllers;

use App\Models\Award;
use App\Models\Officer;
use Illuminate\Http\Request;

class AboutController extends Controller
{
    public function sejarahKota() {
        return inertia('About/Probolinggo/Sejarah');
    }

    public function lambangDaerah() {
        return inertia('About/Probolinggo/Lambang');
    }

    public function visiMisi() {
        return inertia('About/Probolinggo/VisiMisi');
    }

    public function gambaranUmum() {
        return inertia('About/Probolinggo/GambaranUmum');
    }

    public function tupoksi() {
        return inertia('About/Probolinggo/Tupoksi');
    }

    public function maskot() {
        return inertia('About/Probolinggo/Maskot');
    }

    public function struktur() {
        return inertia('About/Probolinggo/Struktur');
    }

    public function lhkpn() {
        return inertia('About/Probolinggo/LHKPN');
    }

    public function penghargaan() {
        $awards = Award::all()->groupBy('year');

        return inertia('About/Probolinggo/Penghargaan',[
            'awards' => $awards
        ]);
    }

    public function visiMisiPPID() {
        return inertia('About/PPID/VisiMisi');
    }

    public function tupoksiPPID() {
        return inertia('About/PPID/Tupoksi');
    }

    public function strukturPPID() {
        return inertia('About/PPID/Struktur');
    }

    public function maklumatPPID() {
        return inertia('About/PPID/Maklumat');
    }

    public function pembantu() {
        $officers = Officer::all();

        return inertia('About/PPID/Pembantu', [
            'officers' => $officers
        ]);
    }

    public function pejabat() {
        $officers = Officer::all();

        return inertia('About/Probolinggo/Pejabat', [
            'officers' => $officers
        ]);
    }
}
