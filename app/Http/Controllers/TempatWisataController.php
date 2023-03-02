<?php

namespace App\Http\Controllers;

use App\Models\TempatWisata;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TempatWisataController extends Controller
{

    public function home(){
        $tempatWisata = TempatWisata::all();

        return Inertia::render('Home', [
            'tempatWisata' => $tempatWisata
        ]);
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
