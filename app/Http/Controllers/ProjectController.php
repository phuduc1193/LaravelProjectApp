<?php

namespace App\Http\Controllers;

use App\Project;
use App\ProjectStatus;
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
        if ($data) {
            $project = Project::firstOrNew($data);

            $status = ProjectStatus::where('name', 'New')->first();
            $project->status()->associate($status);
            $project->save();

            $project->users()->sync([Auth::user()->id => ['relation' => 'Creator']]);

            return $this->response(201, 'Resource created successfully', $project);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $project = Project::find($id);
        return new ProjectResource($project);
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
        //
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
            'name' => 'required|string|max:100|unique:projects',
            'description' => 'required|string|max:255',
            'duration' => 'numeric|min:0',
            'started_at' => 'date',
            'ended_at' => 'date',
            'percentage' => 'numeric|min:0|max:100',
        ];
    }

    /**
     * Response
     */
    private function response($code, $message, $data)
    {
        return response()->json([
            'code' => $code,
            'message' => $message,
            'data' => $data,
        ], $code);
    }
}
