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
    //Orientate 2021
    $api->get('pps/{id}', 'CnoOcupationalFieldRankingController@show');
    $api->get('pps/{code}/{onet}', 'CnoOccupationController@show');
    $api->get('occupations/{pps_code}/{onet_title}', 'CnoOccupationController@showBy');
    $api->get('occupation/{occupation_title}', 'CnoOccupationController@show');

    $api->get('levels', 'CnoClassificationLevelController@index');
    $api->get('surveyeds', 'CnoClassificationLevelController@index');
    $api->get('occupations', 'CnoOccupationController@index');
    $api->get('occupations/knowledges', 'CnoOccupationController@knowledges');
    $api->get('occupations/skills', 'CnoOccupationController@skills');
    $api->get('onets/outputs', 'CnoOnetController@outputs');
    $api->get('onets', 'CnoOnetController@index');

    $api->post('import_excel', 'AdminController@excel_import');

    //survey 2021
    $api->resource('questions', 'QuestionsController');
    $api->resource('surveys', 'SurveyController', ['except'=> ['index']]);

    $api->post('surveys/gateway', 'SurveyController@create');
    $api->get('surveys/uuid/{uuid}', 'SurveyController@byUuid');
    $api->get('surveys/rank/{uuid}', 'SurveyController@rank');
    $api->get('surveys', 'SurveyController@index');
    $api->resource('surveyeds', 'SurveyedController');

    $api->post('populations', 'PopulationController@store');
    $api->get('populations', 'PopulationController@index');
    $api->resource('populations', 'PopulationController');

    $api->get('populations/{id}', 'PopulationController@show');
    $api->post('populations/activate/{id}', 'PopulationController@activate');

    $api->get('sections', 'SectionsController@index');
    $api->get('sections/{id}/{uuid}', 'SectionsController@show');

    $api->resource('options', 'OptionsController');


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
