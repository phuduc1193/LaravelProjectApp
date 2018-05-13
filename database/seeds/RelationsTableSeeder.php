<?php

use App\Relation;
use Illuminate\Database\Seeder;

class RelationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Relation::firstOrCreate([
            'name' => 'Author',
        ]);

        Relation::firstOrCreate([
            'name' => 'Assignee',
        ]);
    }
}
