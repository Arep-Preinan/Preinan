<?php

namespace App\Http\Controllers;

use App\Models\Komentar;
use Illuminate\Http\Request;

class KomentarController extends Controller
{
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
    public function store(Request $request, Komentar $komentar)
    {
        // save komentar
        $komentar->user_id = $request->user_id;
        $komentar->booking_id = $request->booking_id;
        $komentar->tempat_wisata_id = $request->tempat_wisata_id;
        $komentar->isi = $request->komentar;
        $komentar->rating = $request->rating;
        $komentar->save();

        return redirect()->back()->with('success', 'Komentar berhasil ditambahkan');
    }

    /**
     * Display the specified resource.
     */
    public function show(Komentar $komentar)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Komentar $komentar)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Komentar $komentar)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Komentar $komentar)
    {
        //
    }
}
