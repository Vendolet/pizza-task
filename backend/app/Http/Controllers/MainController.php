<?php

namespace App\Http\Controllers;

use App\Models\Product;

class MainController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::paginate(8);
        return response()->json($products, 200);
    }
}
