<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Nanigans\SingleTableInheritance\SingleTableInheritanceTrait;

class Status extends Model
{
    use SingleTableInheritanceTrait;

    protected $table = 'status';

    protected static $singleTableTypeField = 'resource';

    protected static $singleTableSubclasses = [ProjectStatus::class];

    public $timestamps = false;

    protected $fillable = ['name', 'resource'];

    public function projects()
    {
        return $this->hasMany('App\Project');
    }
}

class ProjectStatus extends Status
{
    protected static $singleTableType = 'Project';
}
