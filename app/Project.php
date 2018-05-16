<?php

namespace App;

use DateTime;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Project extends Model
{
    use SoftDeletes;

    protected $dates = ['deleted_at'];

    protected $fillable = ['name', 'description', 'duration', 'started_at', 'ended_at', 'percentage'];

    public function status()
    {
        return $this->belongsTo('App\Status', 'status_id');
    }

    public function users()
    {
        return $this->belongsToMany('App\User')->withPivot('relation');
    }

    public function tags()
    {
        return $this->belongsToMany('App\Tag');
    }

    public function setStartedAtAttribute($data)
    {
        $this->attributes['started_at'] = (new DateTime($data))->format("Y-m-d H:i:s");
    }

    public function getStartedAtAttribute()
    {
        return (new DateTime($this->attributes['started_at']))->format("m.d.Y");
    }

    public function setEndedAtAttribute($data)
    {
        $this->attributes['ended_at'] = (new DateTime($data))->format("Y-m-d H:i:s");
    }

    public function getEndedAtAttribute()
    {
        return (new DateTime($this->attributes['ended_at']))->format("m.d.Y");
    }
}
