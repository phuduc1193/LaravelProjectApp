<?php

namespace App\Http\Controllers;

use App\Project;
use App\ProjectStatus;
use App\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProjectController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        return $user->projects()->with(['status', 'tags'])->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->validate($this->rules());

        $project = Project::firstOrNew($data);

        $status = ProjectStatus::where('name', 'New')->first();
        $project->status()->associate($status);

        $project->save();

        if ($request->has('tags')) {
            $tags = $this->getTagsOrNew($request['tags']);
            $project->tags()->createMany($tags);
        }

        $project->users()->sync([Auth::user()->id => ['relation' => 'Creator']]);

        return $project;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Project::with(['status', 'tags', 'users', 'revisionHistory'])->find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->validate($this->rules());
        $project = Project::find($id);
        $project->name = $data['name'];
        $project->description = $data['description'];
        $project->percentage = $data['percentage'];
        $project->started_at = $data['started_at'];
        $project->ended_at = $data['ended_at'];

        $status = ProjectStatus::find($request['status_id']);
        $project->status()->associate($status);
        $project->save();

        return $this->show($project->id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    /**
     * Project validator
     */
    public function rules()
    {
        return [
            'name' => 'required|string|max:100',
            'description' => 'required|string',
            'duration' => 'numeric|min:0',
            'started_at' => 'date',
            'ended_at' => 'date',
            'percentage' => 'numeric|min:0|max:100',
        ];
    }

    public function getTagsOrNew(array $data)
    {
        $existedTags = Tag::whereIn('name', $data)->get();
        $collection = collect($data);
        $shouldAddKeywords = $collection->diff($existedTags->pluck('name'));

        $tags = collect([]);
        foreach ($shouldAddKeywords as $keyword) {
            $newTag = new Tag(['name' => $keyword]);
            $tags->push($newTag);
        }

        $tags->concat($existedTags);
        return $tags->toArray();
    }
}
