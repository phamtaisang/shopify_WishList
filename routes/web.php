<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
// */
// Route::get('user/{name?}', function ($name = 'John') {
//     return $name;
// });
// Route::get('posts/{post}/comments/{comment}', function ($postId, $commentId) {
// 	echo $postId;
// 	echo $commentId;
// });
// Route::get('users/{id}/{name}', function ($id, $name) {
// 	return $id;
// })->where(['id' => '[0-9]+', 'name' => '[a-z]+']);

// Route::any('/wishlist/addProduct','wishlistController@index');
// Route::get('/wishlist/getProduct','wishlistController@DS_wishlist');
// Route::get('/wishlist','wishlistController@getAll');
// Route::get('/wishlist/product_best','wishlistController@product_best');
// Route::get('/wishlist/detail/{id}','wishlistController@detail');
Route::any('test_API', 'testController@test');
Route::any('PUT_Button', 'testController@button');
Route::any('PUT_DS', 'testController@List');
Route::any('themes', 'themesController@index');
Route::any('products', 'themesController@product');
Route::group(['prefix'=>'/wishlist'],function(){
	Route::get('/getCustomer','wishlistController@getAll');
	Route::any('/addProduct','wishlistController@index');
	Route::get('/getProduct','wishlistController@DS_wishlist');
	Route::get('/merge','wishlistController@merge');
	Route::get('/DelProduct','wishlistController@DelProduct');
	Route::get('/DelProduct_serve/{id}','wishlistController@DelProduct_serve');
	Route::get('/product_best','wishlistController@product_best');
	Route::get('/Recently_Added','wishlistController@RecentlyAdded');
	Route::get('/detailCus/{id}','wishlistController@detail');
	Route::get('/detailPro/{id}','wishlistController@detailPro');
});

// Route::controller('/wishlist','wishlistController',
// [
// 	'getAll'=>'',
// 	'index'=>'addProduct',
// 	'product_max'=>'product_max',
// 	'detail'=>'detail/{id}',
// ]);
Route::resource('test','testRestfulController');
Route::get('/', function () {
    return view('welcome');
});
	Route::get('product',function(){
		Schema::create('product_list',function($table){
			$table->increments('id');
			$table->integer('id_shop')->unsigned();
			$table->foreign('id_shop')->references('id')->on('shop');
			$table->integer('id_product');
			$table->integer('id_user');
			$table->timestamps();
		});
		echo "vừa tạo bảng product xog nè";
	});
	Route::get('shop',function(){
		Schema::create('shop',function($table){
			$table->increments('id');
			$table->string('url',200);
			$table->timestamps();
		});
		echo "vừa tạo bảng xog nè";
	});
//Route::post('mucluc/them','Api\MucLucController@them');

