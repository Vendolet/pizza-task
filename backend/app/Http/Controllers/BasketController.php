<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use App\Models\Order;
use Illuminate\Http\Request;

class BasketController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PostRequest $request)
    {
        $query = $request->input('dataCustomer');

        $order = new Order();

        $order->name = $query['name'];
        $order->phone = $query['phone'];
        $order->address = $query['address'];
        $order->save();

        return response()->json(['code'=>200, 'message'=>"Successful", 'data'=>'Заказ успешно оформлен'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }
}
