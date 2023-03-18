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
        Schema::create('reactions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_user')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('id_livre')->references('id')->on('livres')->onDelete('cascade')->onUpdate('cascade');
            $table->Integer('reaction');
            $table->Integer('note');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reactions');
    }
};
