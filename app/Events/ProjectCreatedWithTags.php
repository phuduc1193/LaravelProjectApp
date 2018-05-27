<?php

namespace App\Events;

use App\Project;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class ProjectCreatedWithTags
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $project;
    public $tags;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(Project $project, array $tags)
    {
        $this->project = $project;
        $this->tags = $tags;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('project-created');
    }
}
