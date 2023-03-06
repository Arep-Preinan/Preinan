<?php

namespace Database\Seeders;

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
         // Ambil semua tempat wisata dan user yang ada
         $tempatWisata = TempatWisata::all();
         $user = User::all();
 
         // Loop sebanyak 100 kali untuk menambahkan 100 komentar
         for ($i = 0; $i < 100; $i++) {
             // Buat instance Komentar dan isikan dengan data acak
             $komentar = new Komentar;
             $komentar->user_id = $user->random()->id;
             $komentar->tempat_wisata_id = $tempatWisata->random()->id;
             $komentar->isi = fake()->text(20);
             $komentar->rating = fake()->numberBetween(1, 5);
 
             $komentar->save();
         }
    }
}
