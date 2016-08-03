<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

//Route::get('/', 'UserController@index');
//Route::get('/details', 'UserController@details');

//Route::post('insert',['as'=>'insert','uses'=>'UserController@store']);

Route::get('/',function(){
    
    return view('master');
});

Route::resource('user','UserController');
//Route::post('user/create','UserController@store');