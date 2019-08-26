<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App;
class themesController extends Controller
{
    public function index(){
        $sh = App::make('ShopifyAPI',
            ['API_KEY' => 'b5b91e61be60c0b5018b10d460a5d857',
            'API_SECRET' => '74c644e803122f880766abe75b4377be', 
            'SHOP_DOMAIN' => 'tipo-sang.myshopify.com', 
            'ACCESS_TOKEN' => '8a11a4feb55039f5bb2c4c1dc8bf367d']);
            $themes = $sh->call([
                'URL' => '/admin/themes.json',
                'METHOD' => 'GET',
              ]);
                return response()->json($themes);
          
    }
    public function product(){
        $sh = App::make('ShopifyAPI',
        ['API_KEY' => 'b5b91e61be60c0b5018b10d460a5d857',
        'API_SECRET' => '74c644e803122f880766abe75b4377be', 
        'SHOP_DOMAIN' => 'tipo-sang.myshopify.com', 
        'ACCESS_TOKEN' => '8a11a4feb55039f5bb2c4c1dc8bf367d']);
        $themes = $sh->call([
            'URL' => '/admin/products.json',
            'METHOD' => 'GET',
          ]);
         
            return response()->json($themes);
    }
}
