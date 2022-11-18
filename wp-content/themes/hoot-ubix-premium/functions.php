<?php
/**
 *                  _   _             _
 *  __      ___ __ | | | | ___   ___ | |_
 *  \ \ /\ / / '_ \| |_| |/ _ \ / _ \| __|
 *   \ V  V /| |_) |  _  | (_) | (_) | |_
 *    \_/\_/ | .__/|_| |_|\___/ \___/ \__|
 *           |_|
 * -------------------------------------------
 * -- HOOT THEME BUILT ON HYBRID FRAMEWORK ---
 * -------------------------------------------
 * - incorporate code from Hybrid Base Theme -
 * -- Underscores Theme, Customizer Library --
 * -- (see readme file for copyright info.) --
 * -------------------------------------------
 *
 * :: Theme's main functions file :::::::::::::::::::::::::::::::::::::::::::::
 * :: Initialize and setup the theme framework, helper functions and objects ::
 *
 * To modify this theme, its a good idea to create a child theme. This way you can easily update
 * the main theme without loosing your changes. To know more about how to create child themes
 * @see http://codex.wordpress.org/Theme_Development
 * @see http://codex.wordpress.org/Child_Themes
 *
 * Hooks, Actions and Filters are used throughout this theme. You should be able to do most of your
 * customizations without touching the main code. For more information on hooks, actions, and filters
 * @see http://codex.wordpress.org/Plugin_API
 *
 * @package    Hoot
 * @subpackage Hoot Ubix
 */

/**
 * Uncomment the line below to load unminified CSS and JS, and add other developer data to code.
 * - You can set this to true (default) for loading unminified files (useful for development/debugging)
 * - Or set it to false for loading minified files (for production i.e. live site)
 *
 * NOTE: If you uncomment this line, HYBRIDEXTEND_DEBUG value will override any option for minifying
 * files (if available) set via the theme options (customizer) in WordPress Admin
 */
// define( 'HYBRIDEXTEND_DEBUG', true );

/* Get the template directory and make sure it has a trailing slash. */
$hoot_base_dir = trailingslashit( get_template_directory() );

/* Load the Core framework and theme files */
require_once( $hoot_base_dir . 'hybrid/hybrid.php' );
require_once( $hoot_base_dir . 'hybrid/extend/extend.php' );
require_once( $hoot_base_dir . 'include/hoot-theme.php' );

/* Framework and Theme Setup files loaded */
do_action( 'hoot_loaded' );

/* Launch the Hybrid framework. */
$hybridextend = new Hybrid_Extend();

/* Framework Setup complete */
do_action( 'hybrid_after_setup' );

/* Launch the Theme */
$hoot_theme = new Hoot_Theme();


/* Hoot Theme Setup complete */
do_action( 'hoot_theme_after_setup' );

$customProductMeta = null;

function add_order_item_meta($item_id, $values) {
  if ( $values['new_sku'] ) {
    woocommerce_add_order_item_meta($item_id, 'model', $values['new_sku']);
  }
}
add_action('woocommerce_add_order_item_meta', 'add_order_item_meta', 10, 2);

function add_cart_item_data( $cart_item_data, $product_id, $variation_id ) {
  $product = wc_get_product( $product_id );
  // $price = $product->get_price();
  session_start();
  $original_sku = $product->get_sku();
  $new_sku = $original_sku && $original_sku[0] === 'C' ? 'C' : 'R';
  $new_sku = '';
  $new_sku = $new_sku . get_field('dab_residential_commercial', $product_id);
  $new_sku = $new_sku . get_field('dab_series', $product_id);

  if (isset($_SESSION['meta_data'])) {
    $option = $_SESSION['meta_data'];
    $cart_item_data['new_price'] = floatval($option['total']);
    
    if (!empty($option)) {

      $insulation_code = $option['insulation']['enabled'] == true ? 'I' : 'P';
      $new_sku = $new_sku . $insulation_code;
      $width_feet = strval(floor($option['doorSize']['width'] / 12));
      $width_feet_0 = strlen($width_feet) == 1 ? "0{$width_feet}" : "{$width_feet}";
      $width_inches = strval(floor($option['doorSize']['width'] % 12));
      $width_inches_0 = strlen($width_inches) == 1 ? "0{$width_inches}" : "{$width_inches}";
      $height_feet = strval(floor($option['doorSize']['height'] / 12));
      $height_feet_0 = strlen($height_feet) == 1 ? "0{$height_feet}" : "{$height_feet}";
      $height_inches = strval(floor($option['doorSize']['height'] % 12));
      $height_inches_0 = strlen($height_inches) == 1 ? "0{$height_inches}" : "{$height_inches}";
      $new_sku = $new_sku . $width_feet_0 . "" . $width_inches_0 . "X" . $height_feet_0 . "" . $height_inches_0;
      $meta_data[] = array(
        'doorSize' => $width_feet . '\'' . $width_inches . '" x ' . $height_feet . '\'' . $height_inches . '"'
      );

      if ( isset($option['color'])) {
        $meta_data[] = array(
          'color' => $option['color']['color']
        );
      }

      if ( isset($option['windows']) && $option['windows']['enabled'] == true) {
        if ( isset($option['windows']['position']) ) {
          $meta_data[] = array(
            'window_placement' => implode(",", $option['windows']['position'])
          );
        }
      }

      if ( isset($option['windows'])) {
        $meta_data[] = array(
          'custom_layout' => $option['windows']['layout'] == 'Custom' ? null : $option['windows']['layout']
        );
      }

      if ( $option['insulation']['enabled'] == true ) {
        $meta_data[] = array(
          'insulation' => true
        );
      }

      if ( isset($option['roller']) ) {
        $meta_data[] = array(
          'roller' => $option['roller']['value']
        );
      }

      if ( isset($option['trackRadius']) ) {
        $meta_data[] = array(
          'trackRadius' => $option['trackRadius']['value']
        );
      }

      if ( isset($option['headroom']) && $option['headroom']['value'] ) {
        $meta_data[] = array(
          'headroom' => $option['headroom']['value']
        );
      }
      $image_url = isset($_SESSION['product_thumbimage']) ? $_SESSION['product_thumbimage'] : null;
      $upload_dir  = wp_upload_dir();
      $upload_path = str_replace( '/', DIRECTORY_SEPARATOR, $upload_dir['path'] ) . DIRECTORY_SEPARATOR;

      $img             = str_replace( 'data:image/png;base64,', '', $image_url );
      $img             = str_replace( ' ', '+', $img );
      $decoded         = base64_decode( $img );
      $filename        = 'test' . '.jpeg';
      $file_type       = 'image/jpeg';
      $hashed_filename = md5( $filename . microtime() ) . '_' . $filename;

      // Save the image in the uploads directory.
      $upload_file = file_put_contents( $upload_path . $hashed_filename, $decoded );

      $attachment = array(
        'post_mime_type' => $file_type,
        'post_title'     => preg_replace( '/\.[^.]+$/', '', basename( $hashed_filename ) ),
        'post_content'   => '',
        'post_status'    => 'inherit',
        'guid'           => $upload_dir['url'] . '/' . basename( $hashed_filename )
      );

      $attach_id = wp_insert_attachment( $attachment, $upload_dir['path'] . '/' . $hashed_filename );
      // log_it('attachment: ' . $attach_id);
      $meta_data['thumbnail'] = $attach_id;

      $new_sku = $new_sku . $option['color']['value'];

      if ( isset($option['uBar']) ) {
        $meta_data[] = array(
          'uBar' => array(
            'count' => $option['uBar']['count'],
            'pressure' => $option['uBar']['pressure'],
          )
        );
      }

      $new_sku = $new_sku . str_replace('-', '', $option['uBar']['pressure']);

      if ( isset($option['panel']) && $option['panel']['value'] ) {
        $meta_data[] = array(
          'panel' => $option['panel']['value']
        );
      }
      $panel_code = isset($option['panel']) ? $option['panel']['value'] : 'Flush';
      $panel_code = $panel_code == 'Flush' ? 'F' : 'R';
      $new_sku = $new_sku . $panel_code; 
      
      if ( $option['vents']['enabled'] == true ) {
        $meta_data[] = array(
          'vents' => true
        );
        $new_sku = $new_sku . 'V';
      } else {
        $new_sku = $new_sku . 'S';
      }

      if ( isset($option['lock']['value']) ) {
        $meta_data[] = array(
          'lock' => $option['lock']['value']
        );
        $lock_code = $option['lock']['value'] == 'inside' ? '2' : '3';
        $new_sku = $new_sku . $lock_code;
      } 

      $new_value = array(
        'meta_data' => $meta_data,
      );

      $cart_item_data['new_sku'] = $new_sku;
    }

  }
  if(empty($option))
      return $cart_item_data;
  else
  {    
      if(empty($cart_item_data))
          return $new_value;
      else
          return array_merge($cart_item_data,$new_value);
  }
  unset($_SESSION['meta_data']); 
  unset($_SESSION['product_thumbimage']);
  return $cart_item_data;
}

add_filter( 'woocommerce_add_cart_item_data', 'add_cart_item_data', 10, 3 );

if ( !function_exists('log_it') ) {
	function log_it( $message ) {
	 if( WP_DEBUG === true ){
	   if( is_array( $message ) || is_object( $message ) ){
	     error_log( print_r( $message, true ) );
	   } else {
	     error_log( $message );
	   }
	 }
	}
}

function before_calculate_totals( $cart_obj ) {
  if ( is_admin() && ! defined( 'DOING_AJAX' ) ) {
    return;
  }
  // Iterate through each cart item
  foreach( $cart_obj->get_cart() as $key=>$value ) {
    if( isset( $value['new_price'] ) ) {
      $price = $value['new_price'];
      $value['data']->set_price( ( $price ) );
      $value['data']->update_meta_data( 'model', '123345' );
    }
  }
}

add_action( 'woocommerce_before_calculate_totals', 'before_calculate_totals', 10, 1 );

// function display_sku_after_item_name( $item_name, $cart_item, $cart_item_key ) {
//     $product = $cart_item['data'];
//     if( is_cart() && $product->get_meta('model') ) {
//         $item_name .= '<br><span class="item-sku">'. $cart_item_key . '</span>';
//     }
//     return $item_name;
// }

// add_filter( 'woocommerce_cart_item_name', 'display_sku_after_item_name', 5, 3 );

add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );
function my_theme_enqueue_styles() {
  wp_enqueue_script(
    'my-theme-frontend-htmlcanvas',
    get_template_directory_uri() . '/js/htmlcanvas.lib.js',
    ['wp-element'],
    time(), //For production use wp_get_theme()->get('Version'),
    true
  );
  if ( is_singular('product') ) {
    wp_enqueue_style(
      'product-builder',
      get_stylesheet_directory_uri() . '/build/style-index.css'
    );
    wp_enqueue_script(
      'dab-frontend',
      get_stylesheet_directory_uri() . '/build/index.js',
      ['wp-element'],
      time(), //For production use wp_get_theme()->get('Version'),
      true
    );
  }
}


if( function_exists('acf_add_options_page') ) {

	acf_add_options_page(array(
		'page_title' 	=> 'Product Builder Options',
		'menu_title'	=> 'Product Builder Options',
		'menu_slug' 	=> 'product-builder-settings',
		'capability'	=> 'edit_posts',
		'redirect'		=> false
	));
}

function getAdminProperties() {
  $minimum_area_for_additional_fees = get_field('minimum_area_for_additional_fees', 'option');
  $panels = get_field('panels', 'option');
  $headroom = get_field('headroom', 'option');
  $window_group = get_field('window', 'option');
  $vents_group = get_field('vents', 'option');
  $insulation_group = get_field('insulation', 'option');
  $roller_type_group = get_field('roller_type', 'option');
  $lock_placement_group = get_field('lock_placement', 'option');
  $track_radius_group = get_field('track_radius', 'option');
  $standard_colors_group = get_field('standard_colors', 'option');
  $premium_colors_group = get_field('premium_colors', 'option');
  $pressure_group = get_field('design_pressure_settings', 'option');
  $custom_window_williamburge_405 = get_field('williamburgs_405', 'option');
  $custom_window_williamburge_305 = get_field('williamburgs_305', 'option');
  $custom_window_winston_392 = get_field('winston_392', 'option');
  $custom_window_stockton_397 = get_field('stockton_397', 'option');
  $custom_window_sherwood_306 = get_field('sherwood_306', 'option');

  $hide_panel_settings = get_field('hide_panel_settings', 'option');
  $hide_windows_settings = get_field('hide_windows_settings', 'option');
  $hide_vents_settings = get_field('hide_vents_settings', 'option');
  $hide_insulation_settings = get_field('hide_insulation_settings', 'option');
  $hide_roller_type_settings = get_field('hide_roller_type_settings', 'option');
  $hide_lock_placement_settings = get_field('hide_lock_placement_settings', 'option');
  $hide_track_radius_settings = get_field('hide_track_radius_settings', 'option');
  $hide_standard_colors = get_field('hide_standard_colors', 'option');
  $hide_premium_colors_settings = get_field('hide_premium_colors_settings', 'option');
  $window_layouts = get_field('custom_window_layouts', 'option') ? get_field('custom_window_layouts', 'option') : [];
  $window_layouts_obj = [];
  foreach( $window_layouts as $window_layout ) {
    foreach( $window_layout['packs'] as $pack ) {
      $pack_obj = [
        'name' => $window_layout['name'],
        'slug' => sanitize_title($window_layout['name']),
        'repeating' => $pack['repeating'] ? true : false,
        'cost_per_window' => 10,
        'images' => $pack['repeating'] ? [$pack['repeating_image']] : $pack['images']
      ];
      if ( array_key_exists('columns-' . $pack['count'], $window_layout) ) {
        array_push($window_layouts_obj['columns-' . $pack['count']], $pack_obj);
      } else {
        $window_layouts_obj['columns-' . $pack['count']] = [$pack_obj];
      }
    }
  }

  $adminProperties = array(
    'minimum_area_for_additional_fees' => $minimum_area_for_additional_fees,
    'panels' => $panels,
    'headroom' => $headroom,
    'window_group' => $window_group,
    'vents_group' => $vents_group,
    'insulation_group' => $insulation_group,
    'roller_type_group' => $roller_type_group,
    'lock_placement_group' => $lock_placement_group,
    'track_radius_group' => $track_radius_group,
    'standard_colors_group' => $standard_colors_group,
    'premium_colors_group' => $premium_colors_group,
    'pressure_group' => $pressure_group,
    'custom_window' => [
      'custom_window_williamburge_405' => $custom_window_williamburge_405,
      'custom_window_williamburge_305' => $custom_window_williamburge_305,
      'custom_window_winston_392' => $custom_window_winston_392,
      'custom_window_stockton_397' => $custom_window_stockton_397,
      'custom_window_sherwood_306' => $custom_window_sherwood_306
    ],
    'window_layouts' => $window_layouts_obj,
    'hide_settings' => [
      'hide_panel_settings' => $hide_panel_settings,
      'hide_windows_settings' => $hide_windows_settings,
      'hide_vents_settings' => $hide_vents_settings,
      'hide_insulation_settings' => $hide_insulation_settings,
      'hide_roller_type_settings' => $hide_roller_type_settings,
      'hide_lock_placement_settings' => $hide_lock_placement_settings,
      'hide_track_radius_settings' => $hide_track_radius_settings,
      'hide_standard_colors' => $hide_standard_colors,
      'hide_premium_colors_settings' => $hide_premium_colors_settings
    ]
  );
  return $adminProperties;
  wp_die();
}

if ( !function_exists('log_it') ) {
	function log_it( $message ) {
	 if( WP_DEBUG === true ){
	   if( is_array( $message ) || is_object( $message ) ){
	     error_log( print_r( $message, true ) );
	   } else {
	     error_log( $message );
	   }
	 }
	}
}

add_action( 'wp_ajax_nopriv_getAdminProperties', 'getAdminProperties' );
add_action( 'wp_ajax_getAdminProperties', 'getAdminProperties' );


function addProductToCart() {
  session_start();    
  $_SESSION['meta_data'] = $_POST['meta_data'];
  $_SESSION['product_thumbimage'] = $_POST['thumb_img'];
  ob_start();
  $product_id        = $_POST['item_id'];
  $quantity          = 1;
  $passed_validation = apply_filters( 'woocommerce_add_to_cart_validation', true, $product_id, $quantity );
  $product_status    = get_post_status( $product_id );

  if ( $passed_validation && WC()->cart->add_to_cart( $product_id, $quantity ) && 'publish' === $product_status ) {

      do_action( 'woocommerce_ajax_added_to_cart', $product_id );

      wc_add_to_cart_message( $product_id );
      wp_send_json(array(
        'error' => false,
        'product_url' => apply_filters( 'woocommerce_cart_redirect_after_error', get_permalink( $product_id ), $product_id )
      ));
  } else {

      // If there was an error adding to the cart, redirect to the product page to show any errors
      $data = array(
          'error'       => true,
          'product_url' => apply_filters( 'woocommerce_cart_redirect_after_error', get_permalink( $product_id ), $product_id )
      );

      wp_send_json( $data );

  }
  // echo json_encode($cart_obj);
  wp_die();
}
add_action( 'wp_ajax_nopriv_addProductToCart', 'addProductToCart' );
add_action( 'wp_ajax_addProductToCart', 'addProductToCart' );

add_filter('woocommerce_get_cart_item_from_session', 'wdm_get_cart_items_from_session', 1, 3 );
if(!function_exists('wdm_get_cart_items_from_session'))
{
    function wdm_get_cart_items_from_session($item,$values,$key)
    {
        if (array_key_exists( 'meta_data', $values ) )
        {
          $item['meta_data'] = $values['meta_data'];
        }       
        return $item;
    }
}

add_filter('woocommerce_checkout_cart_item_quantity','wdm_add_user_custom_option_from_session_into_cart',1,3);  
add_filter('woocommerce_cart_item_price','wdm_add_user_custom_option_from_session_into_cart',1,3);
if(!function_exists('wdm_add_user_custom_option_from_session_into_cart'))
{
 function wdm_add_user_custom_option_from_session_into_cart($product_name, $values, $cart_item_key )
    {
        if(isset($values['meta_data']))
        {
          // log_it($values);
          $meta_data = $values['meta_data'];
          $meta_data_string = '<ul>';
          foreach($meta_data as $meta_item) {
            if ( isset($meta_item['doorSize']) ) {
              // log_it($meta_item['doorSize']);
              $meta_data_string .= '<li class="meta-item"><b>Size: </b>'.$meta_item['doorSize'].'</li>';
            }
            if ( isset($meta_item['color']) ) {
              $meta_data_string .= '<li class="meta-item"><b>Color: </b>'. $meta_item['color'] .'</li>';
            }
            if ( isset($meta_item['custom_layout']) && $meta_item['custom_layout'] ) {
              $meta_data_string .= '<li class="meta-item"><b>Window Decals: </b>'.$meta_item['custom_layout'].'</li>';
            }
            if ( isset($meta_item['window_placement']) && $meta_item['window_placement'] ) {
              $meta_data_string .= '<li class="meta-item"><b>Window placement: </b>'.$meta_item['window_placement'].'</li>';
            }
            if ( isset($meta_item['lock']) && $meta_item['lock'] ) {
              $meta_data_string .= '<li class="meta-item"><b>Lock placement: </b>'.$meta_item['lock'].'</li>';
            }
            if ( isset($meta_item['trackRadius']) && $meta_item['trackRadius'] ) {
              $meta_data_string .= '<li class="meta-item"><b>Track Radius: </b>'.$meta_item['trackRadius'].'"</li>';
            }
            if ( isset($meta_item['insulation']) && $meta_item['insulation'] ) {
              $meta_data_string .= '<li class="meta-item"><b>Insulation: </b>Yes</li>';
            }
            if ( isset($meta_item['roller']) ) {
              $meta_data_string .= '<li class="meta-item"><b>Roller: </b>' . $meta_item['roller'] . '</li>';
            }
            if ( isset($meta_item['vents']) && $meta_item['vents'] ) {
              $meta_data_string .= '<li class="meta-item"><b>Vents: </b>Yes</li>';
            }
            if ( isset($meta_item['panel']) && $meta_item['panel'] ) {
              $meta_data_string .= '<li class="meta-item"><b>Panel: </b>'. $meta_item['panel'] .'</li>';
            }
            if ( isset($meta_item['headroom']) && $meta_item['headroom'] ) {
              $meta_data_string .= '<li class="meta-item"><b>Head Room: </b>'. $meta_item['headroom'] .'</li>';
            }
            if ( isset($meta_item['uBar']) ) {
              $meta_data_string .= '<li class="meta-item"><b>Ubar Count: </b>'. $meta_item['uBar']['count'] .'</li><li><b>Pressure: </b>'. $meta_item['uBar']['pressure'] .'</li>';
            }
          }
          $meta_data_string .= '</ul>';
          $meta_data_string .= '<p style="font-size: .85rem;"><b>SKU:</b> ' . $values['new_sku'] . '</p>';
          // if ($meta_data['window_placement'])
            $return_string = $product_name . "</a><br /><br />";
            // "<dl class='variation'>";
            // $return_string .= "<table class='wdm_options_table' id='" . $values['product_id'] . "'>";
            // $return_string .= "<tr><td>$" . $values['new_price'] . "</td></tr>";
            // $return_string .= "</table></dl>"; 
            $return_string .= '<b><u>Door Specs:</u></b><br/>'.$meta_data_string;
            return $return_string;
        }
        else
        {
            return $product_name;
        }
    }
}

function filter_woocommerce_cart_item_thumbnail( $product_image, $cart_item, $cart_item_key ) {
  $meta_data = isset($cart_item['meta_data']) ? $cart_item['meta_data'] : [];
  $thumbnail_url = null;
  if (isset($meta_data['thumbnail'])) {
    $thumbnail_id = $meta_data['thumbnail'];
    $thumbnail_url = wp_get_attachment_image_url($thumbnail_id, 'thumbnail');
  }

  if ($thumbnail_url) {
    $product_image = '<span class="product_image"><img src="'.$thumbnail_url.'" style="width: 100px; height: auto;" /></span>';
  } else {
    $product_image = '<span class="product_image">' . $product_image . '</span>';
  }
  
  return $product_image;
}
add_filter( 'woocommerce_cart_item_thumbnail', 'filter_woocommerce_cart_item_thumbnail', 10, 3 );
