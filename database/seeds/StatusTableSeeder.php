<?php

use App\ProjectStatus;
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
        ProjectStatus::firstOrCreate([
            'name' => 'New',
        ]);

        ProjectStatus::firstOrCreate([
            'name' => 'Scheduled',
        ]);

        ProjectStatus::firstOrCreate([
            'name' => 'In Progress',
        ]);

        ProjectStatus::firstOrCreate([
            'name' => 'Done',
        ]);
    }
}
