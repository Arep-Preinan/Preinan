<?php

namespace App\Http\Controllers;

use App\Models\TempatWisata;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TempatWisataController extends Controller
{

    public function home(){
        $gunung = TempatWisata::where('kategori', 'gunung')->limit(5)->get();
        $danau = TempatWisata::where('kategori', 'danau')->limit(4)->get();

        return Inertia::render('Home', [
            'title' => 'Beranda',
            'gunung' => $gunung,
            'danau' => $danau
        ]);
    
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $gunung = TempatWisata::where('kategori', 'gunung')->get();
        $air_terjun = TempatWisata::where('kategori', 'air terjun')->get();
        $danau = TempatWisata::where('kategori', 'danau')->get();
        $all = TempatWisata::all();
        return Inertia::render('Destinasi', [
            'title' => 'Destinasi',
            'gunung' => $gunung,
            'air_terjun' => $air_terjun,
            'danau' => $danau,
            'all' => $all
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
