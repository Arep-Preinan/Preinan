<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\TempatWisata;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TiketController extends Controller
{
    
    public function index()
    {
        $tiket = Booking::where('user_id', Auth::user()->id)->get();    

        foreach ($tiket as $t) {
            $t->tempat_wisata = TempatWisata::where('id', $t->tempat_wisata_id)->first();
            $t->user = User::where('id', $t->user_id)->first();
        }

        return Inertia::render('Tiket', [
            'tiket' => $tiket
        ]);
    }

    public function scan(){
        // get slug
        $tiket = Booking::where('kode', request()->kode)->where('id', request()->uuid)->first();
        $valid = false;

        if($tiket->valid == 1){
            // update booking valid to 0
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
