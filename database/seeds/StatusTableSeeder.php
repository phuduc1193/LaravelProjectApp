<?php

use App\Status;
use Illuminate\Database\Seeder;

class StatusTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Status::firstOrCreate([
            'name' => 'New',
            'resource' => 'Project',
        ]);

        Status::firstOrCreate([
            'name' => 'Scheduled',
            'resource' => 'Project',
        ]);

        Status::firstOrCreate([
            'name' => 'In Progress',
            'resource' => 'Project',
        ]);

        Status::firstOrCreate([
            'name' => 'Done',
            'resource' => 'Project',
        ]);
    }
}
