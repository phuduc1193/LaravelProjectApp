<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('project_user', function (Blueprint $table) {
            $table->increments('id');

            $table->unsignedInteger('project_id');
            $table->unsignedInteger('relation_id')->nullable();
            $table->unsignedInteger('user_id');

            $table->foreign('project_id')->references('id')->on('projects');
            $table->foreign('relation_id')->references('id')->on('relations');
            $table->foreign('user_id')->references('id')->on('users');

            $table->timestamps();
            $table->index(['project_id', 'user_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('project_user');
    }
}
