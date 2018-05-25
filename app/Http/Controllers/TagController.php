<?php

namespace App\Http\Controllers;

use App\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class TagController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cache = Cache::get('popular-tags');
        if ($cache != null && $cache->count() == 0) {
            Cache::forget('popular-tags');
        }

        return Cache::remember('popular-tags', 15, function () {
            return Tag::withCount('projects')->orderBy('projects_count', 'desc')->paginate(10);
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
    public function search(Request $request)
    {
        $data = $request->validate([
            'size' => 'numeric',
            'name' => 'string',
        ]);

        $cacheKey = 'searched-tags-' . $data['name'];
        if (Cache::has($cacheKey)) {
            return Cache::get($cacheKey);
        }

        $results = Tag::where('name', 'like', '%' . $data['name'] . '%')->paginate($data['size']);
        if ($results->count() > 0) {
            Cache::put($cacheKey, $results, 15);
        }

        return $results;
    }
}
