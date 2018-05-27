<?php

namespace App\Listeners;

use App\Events\ProjectCreated;
use App\ProjectStatus;

class AssociateNewProjectStatus
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  ProjectCreated  $event
     * @return void
     */
    public function handle(ProjectCreated $event)
    {
        $status = ProjectStatus::where('name', 'New')->first();
        $event->project->status()->associate($status);
        $event->project->save();
    }
}
