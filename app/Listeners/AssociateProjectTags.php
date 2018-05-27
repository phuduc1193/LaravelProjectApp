<?php

namespace App\Listeners;

use App\Tag;

class AssociateProjectTags
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
     * @param  $event
     * @return void
     */
    public function handle($event)
    {
        $project = $event->project;
        $tagIds = $this->getTagsOrNew($event->tags);

        $project->tags()->detach();
        $project->tags()->attach($tagIds);
    }

    private function getTagsOrNew(array $data)
    {
        $existedTags = Tag::whereIn('name', $data)->get();

        $collection = collect($data);
        $shouldAddKeywords = $collection->diff($existedTags->pluck('name'));
        if ($shouldAddKeywords->count() == 0) {
            return $existedTags;
        }

        $tags = collect([]);
        foreach ($shouldAddKeywords as $keyword) {
            $newTag = new Tag(['name' => $keyword]);
            $tags->push($newTag);
        }

        Tag::insert($tags->toArray());
        return Tag::whereIn('name', $data)->select('id')->get();
    }
}
