<?php

namespace App\Http\Controllers;

use App\Models\Komentar;
use App\Models\TempatWisata;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TempatWisataController extends Controller
{

    public function home(){
        $gunung = TempatWisata::where('kategori', 'gunung')->limit(6)->get();
        $danau = TempatWisata::where('kategori', 'danau')->limit(6)->get();
        $air_terjun = TempatWisata::where('kategori', 'air terjun')->limit(6)->get();



        $semua = TempatWisata::get();

        return Inertia::render('Home', [
            'title' => 'Beranda',
            'gunung' => $gunung,
            'danau' => $danau,
            'air_terjun' => $air_terjun,
            'semua' => $semua
        ]);
    
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $gunung = array_chunk(TempatWisata::where('kategori', 'gunung')->inRandomOrder()->get()->toArray(), 4);
        $air_terjun = array_chunk(TempatWisata::where('kategori', 'air terjun')->inRandomOrder()->get()->toArray(), 4);
        $danau = array_chunk(TempatWisata::where('kategori', 'danau')->inRandomOrder()->get()->toArray(), 4);
        $all = array_chunk(TempatWisata::inRandomOrder()->get()->toArray(), 8);
        return Inertia::render('Destinasi', [
            'title' => 'Destinasi',
            'gunung' => $gunung,
            'air_terjun' => $air_terjun,
            'danau' => $danau,
            'all' => $all
        ]);
    }

    public function detailWisata($slug){
        $slug = str_replace('-', ' ', $slug);
        $tempat_wisata = TempatWisata::where('nama', $slug)->first();
        $rekomendasi = TempatWisata::where('kategori', $tempat_wisata->kategori)->inRandomOrder()->limit(3)->get();
        $komentar = Komentar::where('tempat_wisata_id', $tempat_wisata->uuid)->get();

        foreach ($komentar as $k) {
            $k->user = User::where('id', $k->user_id)->first();
        }

        return Inertia::render('DetailWisata', [
            'tempat_wisata' => $tempat_wisata,
            'rekomendasi' => $rekomendasi,
            'komentar' => $komentar
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(TempatWisata $tempatWisata)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TempatWisata $tempatWisata)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, TempatWisata $tempatWisata)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TempatWisata $tempatWisata)
    {
        //
    }
}
