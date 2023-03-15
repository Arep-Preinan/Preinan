<?php

namespace Database\Seeders;

use App\Models\Booking;
use App\Models\Komentar;
use App\Models\TempatWisata;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class KomentarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
          //
          $tempatWisata = TempatWisata::all();
          $user = User::all();
          $booking = Booking::all();
          
          for ($i = 0; $i < 25; $i++) {
              $komentar = new Komentar;
              $komentar->user_id = $user->random()->id;
          
              // Mengambil id booking yang belum digunakan
              $bookingIds = $booking->pluck('id')->toArray();
              $usedBookingIds = $komentar->pluck('booking_id')->toArray();
              $availableBookingIds = array_diff($bookingIds, $usedBookingIds);
          
              if (empty($availableBookingIds)) {
                  break; // keluar dari loop jika sudah tidak ada booking_id yang tersedia
              }
          
              $bookingId = \Illuminate\Support\Arr::random($availableBookingIds);
              $komentar->booking_id = $bookingId;
          
              $komentar->tempat_wisata_id = $tempatWisata->random()->uuid;
              $komentar->isi = fake()->text(20);
              $komentar->rating = fake()->numberBetween(1, 5);
          
              $komentar->save();
          }
          
         
    }
}
