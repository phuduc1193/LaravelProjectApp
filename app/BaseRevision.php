<?php

namespace App;

use Venturecraft\Revisionable\Revision;

class BaseRevision extends Revision
{
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
