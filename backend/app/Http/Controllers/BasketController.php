<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use App\Models\Order;
use Illuminate\Support\Facades\DB;

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
        $query_customer = $request->input('dataCustomer');
        $query_basket = $request->input('basket');

        $order = new Order();

        $order->name = $query_customer['name'];
        $order->phone = $query_customer['phone'];
        $order->address = $query_customer['address'];

        DB::beginTransaction();
        try{
            $order->save();

            $order_id = $order->id;

            foreach ($query_basket as $item){
                $product_id = $item['id'];

                DB::table('order_products')
                    ->insert([
                        'order_id' => $order_id,
                        'product_id' => $product_id
                    ]);
            }

            DB::commit();
            return response()->json(['code'=>200, 'message'=>"Successful"], 200);
        }catch (\Exception $e){
            DB::rollBack();
            return response()->json(['code'=>500, 'message'=>$e], 500);
        }
    }
}
