<?php

namespace Database\Seeders;

use App\Models\Booking;
use App\Models\TempatWisata;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BookingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        
        // buatkan 25 data booking
        for ($i = 0; $i < 25; $i++) {
            $booking = new Booking;
            $booking->uuid = fake()->uuid;
            $booking->kode = fake()->numberBetween(1000, 9999);
            $booking->user_id = User::all()->random()->id;
            $booking->tempat_wisata_id = TempatWisata::all()->random()->uuid;
            $booking->jumlah_tiket = fake()->numberBetween(1, 5);
            $booking->tanggal = fake()->date();
            $booking->total_harga = fake()->numberBetween(100000, 500000);
            $booking->valid = fake()->boolean();
            $booking->save();
        }

    }
}
