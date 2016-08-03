<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

use App\Http\Requests;

class UserController extends Controller
{

    public function index()
    {
        $user = new User();

//        return view('welcome');
        return view('master');
    }

    public function details()
    {
        $user = new User();

        return response()->json($user->all());
    }
    public function store(Request $request)
    {

        $user = new User();
        
        $user->username = $request['username'];
        $user->email = $request['email'];
        $user->password =$request['password'];

        $user->save();
        echo true;
    }
}
