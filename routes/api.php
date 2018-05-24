<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */
Route::group([
    'middleware' => 'api',
    'prefix' => 'auth',
], function ($router) {
    Route::post('login', 'AuthController@login');
    Route::post('register', 'AuthController@register');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::get('me', 'AuthController@me');
    Route::post('update', 'AuthController@update');
});

Route::apiResource('projects', 'ProjectController');
Route::apiResource('tags', 'TagController');
Route::group([
    'middleware' => 'api',
    'prefix' => 'tags',
], function ($router) {
    Route::post('search', 'TagController@search');
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'status',
], function ($router) {
    Route::get('project', 'StatusController@project');
});
