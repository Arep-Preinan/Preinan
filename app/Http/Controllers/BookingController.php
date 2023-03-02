<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class BookingController extends Controller
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
    public function create(Request $request)
    {
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Booking $booking)
    {
        $booking->id = \Illuminate\Support\Str::uuid();
        $booking->kode = rand(100000, 999999);
        $booking->user_id = $request->user_id;
        $booking->tempat_wisata_id = $request->id_wisata;
        $booking->jumlah_tiket = $request->jumlahTiket;
        $booking->total_harga = $request->totalHarga;
        $booking->tanggal = $request->tanggal;
        $booking->valid = true;
        // tunggu 3 detik
        // sleep(3);
        $booking->save();
        return Redirect::route('home');
    }

    /**
     * Display the specified resource.
     */
    public function show(Booking $booking)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Booking $booking)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Booking $booking)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Booking $booking)
    {
        //
    }
}
