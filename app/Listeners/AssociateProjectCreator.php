<?php

namespace App\Listeners;

use App\Events\ProjectCreated;
use Illuminate\Support\Facades\Cache;

class AssociateProjectCreator
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
        $project = $event->project;
        $user = $event->user;
        $project->users()->sync([$user->id => ['relation' => 'Creator']]);

        // Clear projects user cache
        $cacheKey = 'list-projects-by-user-id-' . $user->id;
        Cache::forget($cacheKey);
    }
}
