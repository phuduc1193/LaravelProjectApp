<?php

namespace App\Http\Controllers;

use App\ProjectStatus;

class StatusController extends Controller
{
    public function project()
    {
        return ProjectStatus::all();
    }
}
