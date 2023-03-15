<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i <= 15; $i++) {
            $user = new User;
            $user->name = fake()->name;
            $user->email = fake()->email;
            $user->profile = "/images/profiles/$i.jpg";
            $user->password = bcrypt('aaa');
            $user->fullname = fake()->name;
            $user->nik = fake()->numberBetween(1000000000, 9999999999);
            $user->nomor_telepon = fake()->numberBetween(1000000000, 9999999999);
            $user->save();
        }    
    
    }
}
