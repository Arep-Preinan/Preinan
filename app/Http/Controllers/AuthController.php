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

    public function logout(){
        Auth::logout();
        return Redirect::route('login')->with('success', 'Berhasil logout');
    }
}
