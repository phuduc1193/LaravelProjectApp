<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Tag;

class TagController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Tag::withCount('projects')->orderBy('projects_count', 'desc')->paginate(10);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
     * Search resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function search(Request  $request)
    {
        $data = $request->validate([
            'size' => 'nullable|numeric',
            'name' => 'nullable|string',
        ]);

        if (isset($data['name']))
            $tags = Tag::where('name', 'like', '%'.$data['name'].'%');
        else
            $tags = Tag::withCount('projects')->orderBy('projects_count', 'desc');

        if (isset($data['size']))
            return $tags->take($data['size'])->get();
            
        return $tags;
    }
}
