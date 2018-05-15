<?php

namespace App;

use App\Status;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Project extends Model
{
    use SoftDeletes;

    protected $dates = ['deleted_at'];

    protected $fillable = ['name', 'description', 'duration', 'started_at', 'ended_at', 'percentage'];

    public function status()
    {
        return $this->hasOne('App\Status');
    }

    public function users()
    {
        return $this->belongsToMany('App\User');
    }

    public function tags()
    {
        return $this->belongsToMany('App\Tag');
    }
}
