<?php

namespace App\Http\Controllers;

use App\Events\ProjectCreated;
use App\Events\ProjectCreatedWithTags;
use App\Events\ProjectUpdatedWithTags;
use App\Project;
use App\ProjectStatus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;

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
        $cacheKey = 'list-projects-by-user-id-' . Auth::user()->id;
        return Cache::remember($cacheKey, 15, function () {
            return Auth::user()->projects()->with(['status', 'tags'])->paginate(10);
        });
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
        event(new ProjectCreated($project, Auth::user()));
        if ($request->has('tags')) {
            event(new ProjectCreatedWithTags($project, $request['tags']));
        }

        return $this->show($project->id);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Project::with(['status', 'tags', 'users', 'revisionHistoryWithUser'])->find($id);
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

        if ($request->has('tags')) {
            event(new ProjectUpdatedWithTags($project, $request['tags']));
        }

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
}
