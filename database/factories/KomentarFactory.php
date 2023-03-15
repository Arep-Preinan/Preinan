<?php

namespace Database\Factories;
use App\Models\Booking;
use App\Models\Komentar;
use App\Models\TempatWisata;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Komentar>
 */
class KomentarFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $tempatWisata = TempatWisata::all();
        $user = User::all();
        $booking = Booking::all();

        return [
            'user_id' => $user->random()->id,
            'booking_id' => $booking->random()->id,
            'tempat_wisata_id' => $tempatWisata->random()->uuid,
            'isi' => fake()->text(20),
            'rating' => fake()->numberBetween(1, 5),
        ];
    }
}
