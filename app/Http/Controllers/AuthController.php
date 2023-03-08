<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

use function Pest\Laravel\get;

class AuthController extends Controller
{
    
    public function login(Request $request){
        $user = User::where('email', $request->email)->first();
        
        if($user && Hash::check($request->password, $user->password)){
            Auth::login($user);
            return redirect()->intended("/");
        }else{
            return redirect()->route('login')->withErrors([
                'status' => 'Email atau password salah.',
            ]);             
        }
    }

    public function register(Request $request){
        // $request->validate([
        //     'name' => 'required',
        //     'email' => 'required|email|unique:users',
        //     'password' => 'required|min:8',
        //     'password_confirmation' => 'required|same:password'
        // ]);
        $name = explode(' ', $request->fullname)[0];
        $user = new User();
        $user->name = $name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->fullname = $request->fullname;
        $user->nik = $request->nik;
        $user->nomor_telepon = $request->nomor_telepon;
        $user->save();
        Auth::login($user); 
        return redirect()->route("home");
    }

    public function logout(){
        Auth::logout();
        return Redirect::route('login')->with('success', 'Berhasil logout');
    }
}
