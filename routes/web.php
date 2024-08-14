<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PublicInformationController;
use App\Http\Controllers\PublicServiceController;
use App\Http\Controllers\StatisticController;
use App\Http\Controllers\TransparencyController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', [LandingController::class, 'index'])->name('landing');

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/pengaduan-resmi', function () {
    return Inertia('Layanan/PengaduanResmi');
})->name('layanan.pengaduan');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::resource('/article', ArticleController::class);
Route::get('/statistic/data-statistik', [StatisticController::class, 'dataStatistik'])->name('statistic.data-statistik');
Route::get('/statistic/daftar-kota', [StatisticController::class, 'daftarKota'])->name('statistic.daftar-kota');

Route::prefix('/profile')->group(function () {
    Route::get('/sejarah-kota', [AboutController::class, 'sejarahKota'])->name('profile.sejarah');
    Route::get('/lambang-daerah', [AboutController::class, 'lambangDaerah'])->name('profile.lambang');
    Route::get('/visi-misi', [AboutController::class, 'visiMisi'])->name('profile.visimisi');
    Route::get('/gambaran-umum', [AboutController::class, 'gambaranUmum'])->name('profile.gambaran');
    Route::get('/tupoksi-pemerintah', [AboutController::class, 'tupoksi'])->name('profile.tupoksi');
    Route::get('/maskot-kota', [AboutController::class, 'maskot'])->name('profile.maskot');
    Route::get('/struktur-pemerintahan', [AboutController::class, 'struktur'])->name('profile.struktur');
    Route::get('/lhkpn', [AboutController::class, 'lhkpn'])->name('profile.lhkpn');
    Route::get('/penghargaan', [AboutController::class, 'penghargaan'])->name('profile.penghargaan');
});

Route::prefix('/ppid')->group(function () {
    Route::get('/visi-misi', [AboutController::class, 'visiMisiPPID'])->name('ppid.visimisi');
    Route::get('/tupoksi', [AboutController::class, 'tupoksiPPID'])->name('ppid.tupoksi');
    Route::get('/struktur', [AboutController::class, 'strukturPPID'])->name('ppid.struktur');
    Route::get('/sk-sop', [AboutController::class, 'suratKeterangan'])->name('ppid.suratKeterangan');
    Route::get('/maklumat', [AboutController::class, 'maklumatPPID'])->name('ppid.maklumat');
});

Route::prefix('/layanan')->group(function () {
    Route::get('/alur-tatacara', [PublicServiceController::class, 'tataCara'])->name('layanan.tatacara');
    Route::get('/form-permohonan', [PublicServiceController::class, 'formPermohonan'])->name('layanan.form');
    Route::get('/tata-cara-pengajuan', [PublicServiceController::class, 'caraPengajuan'])->name('layanan.pengajuan');
    Route::get('/tata-cara-permohonan-informasi', [PublicServiceController::class, 'permohonanInformasi'])->name('layanan.permohonan');
    Route::get('/tata-cara-keberatan-informasi', [PublicServiceController::class, 'keberatanInformasi'])->name('layanan.keberatan');
    Route::get('/tata-cara-sengketa-informasi', [PublicServiceController::class, 'sengketaInformasi'])->name('layanan.sengketa');
    Route::get('/alasan-pengajuan-keberatan', [PublicServiceController::class, 'alasanKeberatan'])->name('layanan.alasan');
    Route::get('/form-keberatan-permohonan', [PublicServiceController::class, 'formKeberatan'])->name('layanan.formKeberatan');
    Route::get('/jumlah-pemohon', [PublicServiceController::class, 'pemohon'])->name('layanan.pemohon');
    Route::get('/laporan-tahunan', [PublicServiceController::class, 'laporanTahunan'])->name('layanan.tahunan');
    Route::get('/laporan-akuntabilitas', [PublicServiceController::class, 'laporanAkuntabilitas'])->name('layanan.akuntabilitas');
    Route::get('/aspirasi-pengaduan', [PublicServiceController::class, 'aspirasi'])->name('layanan.aspirasi');
});

Route::prefix('/transparansi')->group(function () {
    Route::get('/', [TransparencyController::class, 'index'])->name('transparansi.index');
    Route::get('/aset-investasi', [TransparencyController::class, 'aset'])->name('transparansi.aset');
    Route::get('/neraca', [TransparencyController::class, 'neraca'])->name('transparansi.neraca');
    Route::get('/calk', [TransparencyController::class, 'calk'])->name('transparansi.calk');
    Route::get('/lra', [TransparencyController::class, 'lra'])->name('transparansi.lra');
    Route::get('/rkpd', [TransparencyController::class, 'rkpd'])->name('transparansi.rkpd');
    Route::get('/kua-ppas', [TransparencyController::class, 'ppas'])->name('transparansi.ppas');
    Route::get('/dpa', [TransparencyController::class, 'dpa'])->name('transparansi.dpa');
    Route::get('/rka', [TransparencyController::class, 'rka'])->name('transparansi.rka');
    Route::get('/opini-bpk', [TransparencyController::class, 'obpk'])->name('transparansi.obpk');
});

Route::prefix('/informasi')->group(function () {
    Route::get('/', [PublicInformationController::class, 'publik'])->name('informasi.publik');
    Route::get('/informasi-secara-berkala', [PublicInformationController::class, 'berkala'])->name('informasi.berkala');
    Route::get('/informasi-serta-merta', [PublicInformationController::class, 'serta'])->name('informasi.serta');
    Route::get('/informasi-setiap-saat', [PublicInformationController::class, 'setiapSaat'])->name('informasi.setiapSaat');
    Route::get('/informasi-dikecualikan', [PublicInformationController::class, 'kecuali'])->name('informasi.kecuali');
});

require __DIR__.'/auth.php';
