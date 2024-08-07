<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StatisticController;

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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

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

require __DIR__.'/auth.php';
