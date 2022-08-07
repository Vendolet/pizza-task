<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Support\Facades\DB;

class MainController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $products = Product::paginate(8);
        // return response()->json($products, 200);
        $products = DB::table('products')
                        ->select('id', 'note', 'price', 'img', 'article')
                        ->paginate(8);
        return response()->json($products, 200);
    }
}
