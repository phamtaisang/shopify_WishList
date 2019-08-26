<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
//Route::resource('sanpham','SanPhamController');

//Route::get('sanpham/delete/{id}','SanPhamController@delete');

// Route::any('wishlist/addProduct','wishlistController@index');
// Route::get('wishlist/getProduct','wishlistController@DS_wishlist');
// Route::get('wishlist','wishlistController@getAll');
// Route::get('/wishlist/detail/{id}','wishlistController@detail');
// Route::get('/wishlist/detail','wishlistController@detail');
// Route::get('/wishlist/product_max','wishlistController@product_max');