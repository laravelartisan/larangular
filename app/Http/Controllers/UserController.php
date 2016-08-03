<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

use App\Http\Requests;

class UserController extends Controller
{
    private $user;
    public function __construct(User $user)
    {
        $this->user = $user;
    }
    public function index()
    {
        return response()->json($this->user->all());
    }

    public function create()
    {

    }
    public function store(Request $request)
    {

        $this->user->username = $request->get('username');
        $this->user->email = $request->get('email');
        $this->user->password = bcrypt($request->get('password'));
//        dd($this->user->save());
        if($this->user->save()){

            return response($this->user);
        }
    }

    public function edit($id)
    {
        return $this->user->where('id',$id)->first();
    }



    public function update(Request $request,$id)
    {
//        dd($id);
        $userToEdit = $this->user->findOrFail($id);

        $userToEdit->update([
            'username'=>$request->get('username'),
            'email'=>$request->get('email'),
            'password'=>bcrypt($request->get('password')),
        ]);
        return $userToEdit;

    }

    public function show($id)
    {
        
    }

    public function destroy($id)
    {
        $this->user->findOrFail($id)->delete();

        return $this->user;
    }
}
