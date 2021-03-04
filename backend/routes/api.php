<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Constants;
use Illuminate\Support\Facades\DB;
use Laravel\Passport\Passport;
use \Laravel\Passport\Http\Controllers\AccessTokenController;
 
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*//*
Passport::routes(function ($router) {
    $router->forAuthorization();
    $router->forTransientTokens();
},
 
);*/

//Not Authenticated Users
Route::group(['middleware' => ['api']], function ($api) {
    //ORMA 2020
 
    $api->get('people/dirs', 'PeopleController@dirs');
    $api->get('people/colabs', 'PeopleController@colabs');

    //deben ir ien auth
    $api->get('/users/byrole', 'UserController@getUsersByRoles');
    $api->get('/users/{id}', 'UserController@show');
    

 
    $api->post('oauth/token/refresh', [
        'uses' => '\Laravel\Passport\Http\Controllers\AccessTokenController@issueToken',
        'as' => 'passport.refresh',
    ]);
    //TODO: make custom checks on token
    $api->post('oauth/token', 'Auth\CustomAccessTokenController@auth');

    //General User Registration
    $api->post('/register', 'Auth\AuthController@register');

    //reset Password
    $api->post('/request-pass', 'Auth\AuthController@sendResetLinkEmail');
    $api->put('/reset-pass', 'Auth\AuthController@reset');
    $api->get('user/verify/{verificationCode}', ['uses' => 'Auth\AuthController@verifyUserEmail']);

    //Get user Files TODO: limit to logged in users
    $api->get('uploads/{path}/{email}/{filename}', 'Auth\AuthController@usersAuthFilesGuard');
    //Logout
    $api->post('/token/revoke', 'Auth\AuthController@logout');
});

//Authenticated users, no permissions needed
Route::group(['middleware' => ['auth:api']], function ($api) {

    $api->resource('people', 'PeopleController', ['except'=> ['index']]);

    //Get Auth User
    $api->get('/auth/user', 'Auth\AuthController@index');

    
 });


//Staff
Route::group(['middleware' => ['permission:manage user']], function ($api) {
    //users
    $api->get('users', 'UserController@index');
});


//Admins
//permission:manage roles
Route::group(['middleware' => ['api']], function ($api) {
    //Roles And Permissions
    $api->resource('roles', 'SpatieRoleController');
    $api->get('permissions', 'SpatieRoleController@permissions');

    //Users Management
    $api->resource('users', 'UserController');
});