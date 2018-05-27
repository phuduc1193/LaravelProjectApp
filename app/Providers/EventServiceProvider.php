<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        'App\Events\UpdateUser' => [
            'App\Listeners\UpdateUserListener',
        ],
        'App\Events\ProjectCreated' => [
            'App\Listeners\AssociateNewProjectStatus',
            'App\Listeners\AssociateProjectCreator',
        ],
        'App\Events\ProjectCreatedWithTags' => [
            'App\Listeners\AssociateProjectTags',
        ],
        'App\Events\ProjectUpdatedWithTags' => [
            'App\Listeners\AssociateProjectTags',
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        //
    }
}
