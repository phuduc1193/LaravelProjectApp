<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Venturecraft\Revisionable\RevisionableTrait;

class Project extends Model
{
    use SoftDeletes, RevisionableTrait;

    protected $revisionCreationsEnabled = true;

    protected $dates = ['deleted_at'];

    protected $fillable = ['name', 'description', 'duration', 'started_at', 'ended_at', 'percentage'];

    public static function boot()
    {
        parent::boot();
    }

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
        return $this->belongsToMany('App\Tag')->withTimestamps();
    }

    public function revisionHistoryWithUser()
    {
        return $this->morphMany('App\BaseRevision', 'revisionable')->with('user');
    }

    public function setStartedAtAttribute($data)
    {
        $this->attributes['started_at'] = (new Carbon($data))->format("Y-m-d H:i:s");
    }

    public function getStartedAtAttribute()
    {
        return (new Carbon($this->attributes['started_at']))->toIso8601String();
    }

    public function setEndedAtAttribute($data)
    {
        $this->attributes['ended_at'] = (new Carbon($data))->format("Y-m-d H:i:s");
    }

    public function getEndedAtAttribute()
    {
        return (new Carbon($this->attributes['ended_at']))->toIso8601String();
    }
}
