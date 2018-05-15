<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectTagTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('project_tag', function (Blueprint $table) {
            $table->increments('id');

            $table->unsignedInteger('project_id');
            $table->unsignedInteger('tag_id');

            $table->foreign('project_id')->references('id')->on('projects');
            $table->foreign('tag_id')->references('id')->on('tags');

            $table->timestamps();
            $table->index(['project_id', 'tag_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('project_tag');
    }
}
