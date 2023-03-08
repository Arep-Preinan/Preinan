<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\KomentarController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TempatWisataController;
use App\Http\Controllers\TiketController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', [TempatWisataController::class, "home"])->name('home');

Route::get('/destinasi' , [TempatWisataController::class, "index"])->name('destinasi');

Route::get('/destinasi/{slug}' , [TempatWisataController::class, "detailWisata"])->name('destinasi.detail');
Route::post('/destinasi/{kategori}' , [TempatWisataController::class, "data"])->name('destinasi.kategori');

Route::get('/login', function () {
    return Inertia::render('Login');
})->name('login');

Route::post('/login', [AuthController::class, "login"])->name('login.auth');
Route::get('/logout', [AuthController::class, "logout"])->name('logout');

Route::get('/register', function () {
    return Inertia::render('Register');
})->name('register');

Route::get('/hubung-kami', function () {
    return Inertia::render('HubungKami');
})->name('hubung-kami');

Route::post('/register', [AuthController::class, "register"])->name('register.auth');

Route::middleware('auth')->group(function () {
    
    Route::get('/booking', [BookingController::class, 'create'])->name('booking.create')->middleware('auth');
    Route::post('/booking', [BookingController::class, 'store'])->name('booking.store');
    
    Route::get('/tiket-ku', [TiketController::class, "index"])->name('tiket');
    Route::get('/sukses/{kode}', [BookingController::class, "success"])->name('sukses');

    Route::get('/e-tiket/{uuid}', [TiketController::class, "show"])->name('tiket.show');

    Route::post('/komentar', [KomentarController::class, "store"])->name('komentar.store');
});



// slug
Route::get('/{kode}/{uuid}', [TiketController::class, "scan"])->name('tiket.scan');


require __DIR__.'/auth.php';
