<?php

use Illuminate\Support\Facades\DB;
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
        Schema::create('tempat_wisatas', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid')->default(DB::raw('uuid()'));
            $table->string("nama");
            $table->string("alamat");
            $table->longText("gmaps");
            $table->longText("deskripsi");
            $table->string("kategori");
            $table->float("rating");
            $table->integer("harga");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tempat_wisatas');
    }
};
