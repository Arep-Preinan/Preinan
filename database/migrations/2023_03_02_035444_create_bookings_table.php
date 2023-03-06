<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid')->unique();
            $table->integer("kode");
            $table->foreignId("user_id")->constrained();
            $table->uuid('tempat_wisata_id');
            $table->integer("jumlah_tiket");
            $table->date("tanggal");
            $table->integer("total_harga");
            $table->boolean("valid");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};
