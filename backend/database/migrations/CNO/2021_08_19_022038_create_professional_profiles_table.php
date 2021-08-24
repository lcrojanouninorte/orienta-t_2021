<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProfessionalProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('cno_professional_profiles')) { return; }

        Schema::create('cno_professional_profiles', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('code');
            $table->string('title');
            $table->longText('desc');
            $table->string('icon');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('professional_profiles');
    }
}
