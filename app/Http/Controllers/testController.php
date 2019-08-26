<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App;
class testController extends Controller
{
    public function test(){
           $sh = App::make('ShopifyAPI',
            ['API_KEY' => 'b5b91e61be60c0b5018b10d460a5d857',
            'API_SECRET' => '74c644e803122f880766abe75b4377be', 
            'SHOP_DOMAIN' => 'tipo-sang.myshopify.com', 
            'ACCESS_TOKEN' => '8a11a4feb55039f5bb2c4c1dc8bf367d']);
            $themes = $sh->call([
                'URL' => '/admin/themes/42215931953/assets.json?asset[key]=layout/theme.liquid',
                'METHOD' => 'GET',
              ]);
              //dd($themes);
             $script = "
             <script src=\"{{ 'wishlist.js' | asset_url }}\"></script>
             <script  type=\"text/javascript\">
               window.shop = '{{shop.domain}}';
               window.customerId = '{% if customer %}{{customer.id}}{% else %}guest{% endif %}';
             </script>";
             //check xem code da dc chen vao truoc do chua strpos
             $pos = strpos($themes->asset->value, $script);
             if ($pos == false)
             {
                    $str3 = str_replace(['{{ content_for_header }}',
                     '{{content_for_header }}',
                      '{{content_for_header}}',
                       '{{ content_for_header}}',
                        '{{  content_for_header  }}'],
                         "{{ content_for_header }}\r\n$script",
                          $themes->asset->value);
                    // die($str3);
                    $result = $sh->call([
                      'URL' => '/admin/themes/42215931953/assets.json',
                      'METHOD' => 'PUT',
                      'DATA'  => ['asset' =>
                        [
                          'key' => 'layout/theme.liquid',
                          'value' => $str3
                        ]
                      ]
                    ]);
                    //dd($result);
                    return response()->json(" da Put thanh cong ^^ ");
             }   
             else
                    return response()->json("chuoi da ton tai ! ");
             
            //$str3 = substr_replace($a,$script,1888,0);         
    }
    public function button(){
            $sh = App::make('ShopifyAPI',
            ['API_KEY' => 'b5b91e61be60c0b5018b10d460a5d857',
            'API_SECRET' => '74c644e803122f880766abe75b4377be', 
            'SHOP_DOMAIN' => 'tipo-sang.myshopify.com', 
            'ACCESS_TOKEN' => '8a11a4feb55039f5bb2c4c1dc8bf367d']);
            $themes = $sh->call([
                'URL' => '/admin/themes/42215931953/assets.json?asset[key]=snippets/product-card-grid.liquid',
                'METHOD' => 'GET',
              ]);
            //dd($themes);
            $button = "<button type=\"button\" id=\"btn_wishlist\" class=\"wishlist-btn\" data-shop=\"{{shop.domain}}\"data-product=\"{{product.id}}\" data-customer=\"{% if customer %}{{customer.id}}{% else %}guest{% endif %}\" onclick=\"\">
            <span id=\"add_wishlish\" data-product=\"{{product.id}}\">Add To wishlist </span></button>";
            $pos = strpos($themes->asset->value, $button);
            if ($pos == false)
            {
                $str3 = str_replace(['{{ product.title }}</div>'],
                    "{{ product.title }}</div>\r\n$button",
                    $themes->asset->value);
              // die($str3);
              $result = $sh->call([
                'URL' => '/admin/themes/42215931953/assets.json',
                'METHOD' => 'PUT',
                'DATA'  => ['asset' =>
                  [
                    'key' => 'snippets/product-card-grid.liquid',
                    'value' => $str3
                  ]
                ]
              ]);
              return response()->json("da Put thanh cong ! ");
            }
            else
            return response()->json("chuoi da ton tai ! ");
      }
      public function List(){
        $sh = App::make('ShopifyAPI',
        ['API_KEY' => 'b5b91e61be60c0b5018b10d460a5d857',
        'API_SECRET' => '74c644e803122f880766abe75b4377be', 
        'SHOP_DOMAIN' => 'tipo-sang.myshopify.com', 
        'ACCESS_TOKEN' => '8a11a4feb55039f5bb2c4c1dc8bf367d']);
        $themes = $sh->call([
            'URL' => '/admin/themes/42215931953/assets.json?asset[key]=sections/header.liquid',
            'METHOD' => 'GET',
          ]);
          //dd($themes);
          $string = "<div id=\"list\"></div>";
          $pos = strpos($themes->asset->value, $string);
          if ($pos == false)
          {
              $str3 = str_replace(['</header>'],
                  "</header>\r\n$string",
                  $themes->asset->value);
            // die($str3);
            $result = $sh->call([
              'URL' => '/admin/themes/42215931953/assets.json',
              'METHOD' => 'PUT',
              'DATA'  => ['asset' =>
                [
                  'key' => 'sections/header.liquid',
                  'value' => $str3
                ]
              ]
            ]);
            return response()->json("da Put thanh cong ! ");
          }
          else
          return response()->json("chuoi da ton tai ! ");
      }
}
