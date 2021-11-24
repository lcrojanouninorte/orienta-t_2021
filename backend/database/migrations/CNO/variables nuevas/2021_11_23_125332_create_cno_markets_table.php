<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCnoMarketsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cno_markets', function (Blueprint $table) {
           
            $table->bigIncrements('id');
            $table->string('code');
            $table->string('men');
            $table->string('women');
            $table->string('urban');
            $table->string('rural');
            $table->string('youth');
            $table->string('education');
            $table->string('superior');
            $table->string('average_salary');
    
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
        Schema::dropIfExists('markets');
    }
}
