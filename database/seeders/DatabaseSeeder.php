<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\TempatWisata;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Test',
            'email' => 'tes@gmail.com',
            'password' => bcrypt('aaa'),
            "fullname" => "Test User",
            "nik" => 1234567890,
            "nomor_telepon" => 1234567890
        ]);

        User::factory(5)->create();

        // 
        // panggil seeder tempat wisara
        $this->call(TempatWisataSeeder::class);

        $this->call(BookingSeeder::class);

        // panggil seeder komentar
        $this->call(KomentarSeeder::class);

    }
}
