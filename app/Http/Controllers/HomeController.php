<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use App\Models\User;

class HomeController extends Controller
{
    public function index(): Response
    {
        $user = new User();
        $user->name = "testvalueだよん";
        return Inertia::render(
            'Home',
            ['user' => $user,]
        );
    }
}
