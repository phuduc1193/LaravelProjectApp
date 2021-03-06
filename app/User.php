<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laratrust\Traits\LaratrustUserTrait;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use LaratrustUserTrait, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'username',
    ];

    protected $appends = [
        'scopes',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    public function getScopesAttribute()
    {
        return ['admin'];
    }

    public function projects()
    {
        return $this->belongsToMany('App\Project')->withPivot('relation');
    }

    public function teams()
    {
        $teams = $this->morphToMany(
            config('laratrust.models.team'),
            'user',
            config('laratrust.tables.role_user'),
            config('laratrust.foreign_keys.user'),
            config('laratrust.foreign_keys.team')
        );

        return $teams;
    }
}
