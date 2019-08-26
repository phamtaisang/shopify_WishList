<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\wishlist;
use App\shop;
use Redirect;
use Cookie;
use Illuminate\Support\Facades\DB;
class wishlistController extends Controller
{
    //add data from frondEnd
    public function index(Request $rq){
        // dd($rq->All());
        $status=wishlist::where('id_user',$rq->customer)->where('id_product',$rq->product)->first();
        $shop = shop::where('url', $rq->input('shop'))->first();
        if(!$shop){
            return response()->json([
                'error' => true,
                'message'=> 'shop does not exist ! '
            ]);
        }
        if(isset($status->id_user) and isset($rq->product))  
            return response()->json(['message' => 'The product has been added earlier !']);
        else
        {
            $wishlist = new wishlist();
            $wishlist->id_product = $rq->product;
            $wishlist->nameProduct = $rq->nameProduct;
            $wishlist->imageProduct = $rq->imageProduct;
            $wishlist->id_shop = $shop->id;
            if($rq->customer=='guest')
            {
                $customer = time();//1234567
                $wishlist->id_user = $customer;
                $wishlist->customerName = $rq->customerEmail;
                $wishlist->customerEmail = $rq->customerEmail;
                $wishlist->save();
                return response()->json(['success' => ' Add success ^^ ', 'customer' => $customer]);
            }else{
                $wishlist->id_user = $rq->customer;
                $wishlist->customerEmail = $rq->customerEmail;
                $wishlist->customerName = $rq->customerName;
                $wishlist->save();
                return response()->json(['success' => ' Add success ^^ ']);
            }
        } 
            // $shop = new shop();
            // $this->validate($rq,['shop'=>'unique:shop,url',]);
            // $shop->url = $rq->shop;
            // $shop->save();
    }
    public function DS_wishlist(Request $rq){ 
        $shop = shop::where('url', $rq->input('shop'))->first(); 
        if(!$shop){
            return response()->json([
                'error' => true,
                'message'=> 'shop does not exist ! '
            ]);
        }
            $products = wishlist::where('id_user',$rq->customer)->where('id_shop',$shop->id)->get();
        return response()->json($products);
    }
    
    public function merge(Request $rq){
        // $wishlistCookie = wishlist::where('id_user',$rq->customerCookie)->get('id_product');
        //  if(isset($wishlistCookie)){
        //      return response()->json(['message' => 'The product has been added earlier !']);
        //  }
        //  else{
            $wishlist = wishlist::where('id_user',$rq->customerCookie)
            ->update(['id_user' => $rq->customer,'customerName' => $rq->customerName,'customerEmail'=>$rq->customerEmail]);
            return response()->json($wishlist);
        //}
       
    }
    public function DelProduct(Request $rq){
        $shop = shop::where('url', $rq->input('shop'))->first(); 
        if(!$shop)
        return response()->json([
            'error' => true,
            'message'=> 'shop does not exist'
        ]);
        $del = wishlist::where('id_product',$rq->product)
            ->where('id_user',$rq->customer)
            ->where('id_shop',$shop->id)->delete();
        return response()->json(['success' => ' deleted  '], 200);
    }
    public function DelProduct_serve($id){
        $del = wishlist::where('id_product',$id)->delete();
        return response()->json(['success' => ' deleted  '], 200);
    }
    public function getAll(){
        $wishlist = DB::table('wishlist_product')
        ->select('id_user','customerEmail','customerName',DB::raw("count(id_product) as soluong"))
        ->groupBy('id_user','customerEmail','customerName')
        ->orderBy('soluong','DESC')->get(); 
        //dd($wishlist);
       // $wishlist = wishlist::distinct()->get(['id_user']);  
        return response()->json($wishlist);
    }

    public function detail($id){
        $wishlist = wishlist::where('id_user',$id)->get();
        return response()->json($wishlist);
    }
    public function detailPro($id){
        $wishlist = wishlist::where('id_product',$id)->get();
        return response()->json($wishlist);
    }
    
    public function product_best(){
        $wishlist = DB::table('wishlist_product')
        ->select('id_product','nameProduct','imageProduct', DB::raw('count(id_user) as soluong'))
        ->groupBy('id_product','nameProduct','imageProduct')
        ->orderBy('soluong','DESC')
        ->get();
       return response()->json($wishlist);
    }
    public function RecentlyAdded(){
        $wishlist = wishlist::orderBy('id','DESC')->get();
        return response()->json($wishlist);
    }
}
