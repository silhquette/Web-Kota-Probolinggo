<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StatisticSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('statistics')->insert([
            'name' => 'Data Statistik Kota Probolinggo 2017',
            'link' => 'https://online.fliphtml5.com/flsrx/obmc/',
        ]);
        DB::table('statistics')->insert([
            'name' => 'Data Statistik Kota Probolinggo 2018',
            'link' => 'https://online.fliphtml5.com/flsrx/mann/#p=1',
        ]);
        DB::table('statistics')->insert([
            'name' => 'Data Statistik Kota Probolinggo 2019',
            'link' => 'https://online.fliphtml5.com/flsrx/mann/#p=1',
        ]);
        DB::table('statistics')->insert([
            'name' => 'Data Statistik Sektoral Kota Probolinggo 2020',
            'link' => 'https://online.fliphtml5.com/flsrx/rzyp/#p=1',
        ]);
        DB::table('statistics')->insert([
            'name' => 'Data Statistik Sektoral Kota Probolinggo 2021',
            'link' => 'https://online.fliphtml5.com/flsrx/iree/#p=1',
        ]);
        DB::table('statistics')->insert([
            'name' => 'Data Statistik Sektoral Kota Probolinggo 2022',
            'link' => 'https://online.fliphtml5.com/flsrx/lthp/#p=1',
        ]);
        DB::table('statistics')->insert([
            'name' => 'Data Statistik Sektoral Kota Probolinggo 2023',
            'link' => 'https://docs.google.com/spreadsheets/d/1LypPjodkOMh4evnwgDDyB-xiXoLiDosX/edit?usp=drive_link&ouid=109726149956659463056&rtpof=true&sd=true',
        ]);
        DB::table('statistics')->insert([
            'name' => 'Data Statistik Sektoral Kota Probolinggo 2024',
            'link' => 'https://docs.google.com/spreadsheets/d/11IbacrdNMInb9ifYe_NI3UXI7ZAt0V_W/edit?usp=drive_link',
        ]);
    }
}
