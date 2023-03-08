<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Komentar;
use App\Models\TempatWisata;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TiketController extends Controller
{
    
    public function index()
    {
        // get tiket berdasarkan tanggal
        $tiket_valid = Booking::where('user_id', Auth::user()->id)
                ->where('valid', 1)
                ->orderBy('tanggal', 'ASC')
                ->get();

        foreach ($tiket_valid as $t) {
            $t->tempat_wisata = TempatWisata::where('uuid', $t->tempat_wisata_id)->first();
            $t->user = User::where('id', $t->user_id)->first();
        }

        $tiket_unvalid = Booking::where('user_id', Auth::user()->id)
                ->where('valid', 0)
                ->orderBy('tanggal', 'ASC')
                ->get();

        foreach ($tiket_unvalid as $t) {
            $t->tempat_wisata = TempatWisata::where('uuid', $t->tempat_wisata_id)->first();
            $t->user = User::where('id', $t->user_id)->first();
            $t->komentar = Komentar::where('booking_id', $t->id)->first();
        }

        return Inertia::render('Tiket', [
            'tiket_valid' => $tiket_valid,
            'tiket_unvalid' => $tiket_unvalid
        ]);
    }

    public function show($uuid){
        // get tiket berdasarkan tanggal
        $tiket = Booking::where('uuid', $uuid)->first();
        $tiket->tempat_wisata = TempatWisata::where('uuid', $tiket->tempat_wisata_id)->first();
        $tiket->user = User::where('id', $tiket->user_id)->first();

        return Inertia::render('E-Tiket', [
            'tiket' => $tiket
        ]);
    }

    public function scan(){
        $tiket = Booking::where('kode', request()->kode)->where('uuid', request()->uuid)->first();
        $valid = false;
        if($tiket->valid == 1){
            $tiket->valid = 0;
            $tiket->save();
            $valid = true;
        }else{
            $valid = false;
        }

        return Inertia::render('Scan', [
            'valid' => $valid
        ]);
    }

}
