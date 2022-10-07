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
    $cart_item_data['new_price'] = floatval($option['price']) + 15;
    
    if (!empty($option)) {

      if ($option['insulation']['hasInsulation'] == true) {
        $metaData[] = array(
          'insulation' => true
        );
      }
      $insulation_code = $option['insulation']['hasInsulation'] == true ? 'I' : 'P';
      $new_sku = $new_sku . $insulation_code;
      $metaData[] = array(
        'size' => $option['size']['width'].'*'.$option['size']['height']
      );
      $width_feet = strval(floor($option['size']['width'] / 12));
      $width_feet = strlen($width_feet) == 1 ? "0{$width_feet}" : "{$width_feet}";
      $width_inches = strval(floor($option['size']['width'] % 12));
      $width_inches = strlen($width_inches) == 1 ? "0{$width_inches}" : "{$width_inches}";
      $height_feet = strval(floor($option['size']['height'] / 12));
      $height_feet = strlen($height_feet) == 1 ? "0{$height_feet}" : "{$height_feet}";
      $height_inches = strval(floor($option['size']['height'] % 12));
      $height_inches = strlen($height_inches) == 1 ? "0{$height_inches}" : "{$height_inches}";
      $new_sku = $new_sku . $width_feet . "" . $width_inches . "X" . $height_feet . "" . $height_inches;
      if ( isset($option['windows']) && $option['windows']['hasWindow'] == true) {
        if ( isset($option['windows']['position']) ) {
          $metaData[] = array(
            'window_placement' => implode(",", $option['windows']['position'])
          );
        }
      }
      if ( isset($option['customWindowLayout'])) {
        $metaData[] = array(
          'custom_layout' => $option['customWindowLayout']['name']. ' ('.$option['customWindowLayout']['cols'].') Columns'
        );
      }
      if (isset($option['headroom']) && $option['headroom']['type']) {
        $metaData[] = array(
          'headroom' => $option['headroom']['type']
        );
      }
      $metaData['thumbnail'] = isset($_SESSION['product_thumbimage']) ? $_SESSION['product_thumbimage'] : null;
      $metaData['trackRadius'] = $option['trackRadius']['radius'];
      $metaData['rollerType'] = $option['rollerType']['type'];
      $metaData['standardColor'] = $option['standardColor']['color'];
      if ( isset( $option['standardColor']['sku'] ) ) {
        $new_sku = $new_sku . $option['standardColor']['sku'];
      }
      $metaData['premiumColor'] = $option['premiumColor']['color'];
      if ( isset( $option['premiumColor']['sku'] ) ) {
        $new_sku = $new_sku . $option['premiumColor']['sku'];
      }

      if ($option['ubarSettings']['count'] > 0) {
        $metaData[] = array(
          'ubarSettings' => array(
            'count' => $option['ubarSettings']['count'],
            'pressure' => $option['ubarSettings']['pressure_option'],
          )
        );
      }
      $new_sku = $new_sku . str_replace('-', '', $option['ubarSettings']['pressure_option']);

      if (isset($option['panelType']) && $option['panelType']['type']) {
        $metaData[] = array(
          'panelType' => $option['panelType']['type']
        );
      }
      $panel_code = isset($option['panelType']) ? $option['panelType']['type'][0] : 'F';
      $new_sku = $new_sku . $panel_code; 
      
      if ($option['vents']['hasVents'] == true) {
        $metaData[] = array(
          'vents' => true
        );
        $new_sku = $new_sku . 'V';
      } else {
        $new_sku = $new_sku . 'S';
      }

      if ($option['lock_placement']['hasLock'] == true) {
        if ( isset($option['lock_placement']['placement']) ) {
          $metaData[] = array(
            'lock_placement' => $option['lock_placement']['placement']
          );
          $lock_code = $option['lock_placement']['placement'] == 'inside' ? '2' : '3';
          $new_sku = $new_sku . $lock_code;
        } 
      } else {
        $new_sku = $new_sku . '1';
      }

      $new_value = array(
        'meta_data' => $metaData,
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
    get_stylesheet_directory_uri() . '/js/htmlcanvas.lib.js',
    ['wp-element'],
    time(), //For production use wp_get_theme()->get('Version'),
    true
  );
  wp_enqueue_style(
    'product-builder',
    get_template_directory_uri() . '/build/style-index.css'
  );
  wp_enqueue_script(
    'dab-frontend',
    get_stylesheet_directory_uri() . '/build/index.js',
    ['wp-element'],
    time(), //For production use wp_get_theme()->get('Version'),
    true
  );
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
  $window_layouts = get_field('custom_window_layouts', 'option');
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
  log_it($window_layouts_obj);

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
  echo json_encode($adminProperties);
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
          $metaData = $values['meta_data'];
          $metaDataString = '';
          foreach($metaData as $metaItem) {

            if (isset($metaItem['size'])) {
              $metaDataString .= '<span class="meta-item"><b>Size: </b>'.$metaItem['size'].'</span>';
            } else if (isset($metaItem['custom_layout']) && $metaItem['custom_layout']) {
              $metaDataString .= ',&nbsp;<span class="meta-item"><b>Custom Window: </b>'.$metaItem['custom_layout'].'</span>';
            } else if (isset($metaItem['window_placement']) && $metaItem['window_placement']) {
              $metaDataString .= ',&nbsp;<span class="meta-item"><b>Window placement: </b>'.$metaItem['window_placement'].'</span>';
            } else if (isset($metaItem['lock_placement']) && $metaItem['lock_placement']) {
              $metaDataString .= ',&nbsp;<span class="meta-item"><b>Lock placement: </b>'.$metaItem['lock_placement'].'</span>';
            } else if (isset($metaItem['insulation']) && $metaItem['insulation']) {
              $metaDataString .= ',&nbsp;<span class="meta-item"><b>Insulation: </b>Yes</span>';
            } else if (isset($metaItem['vents']) && $metaItem['vents']) {
              $metaDataString .= ',&nbsp;<span class="meta-item"><b>Vents: </b>Yes</span>';
            } else if (isset($metaItem['panelType']) && $metaItem['panelType']) {
              $metaDataString .= ',&nbsp;<span class="meta-item"><b>Panel: </b>'. $metaItem['panelType'] .'</span>';
            } else if (isset($metaItem['headroom']) && $metaItem['headroom']) {
              $metaDataString .= ',&nbsp;<span class="meta-item"><b>HeadRoom: </b>'. $metaItem['headroom'] .'</span>';
            } else if (isset($metaItem['ubarSettings'])) {
              $metaDataString .= ',&nbsp;<span class="meta-item"><b>Ubar Count: </b>'. $metaItem['ubarSettings']['count'] .', <b>Pressure Option: </b>'. $metaItem['ubarSettings']['pressure'] .'</span>';
            }
          }
          // if ($metaData['window_placement'])
            $return_string = $product_name . "</a><br /><br />";
            // "<dl class='variation'>";
            // $return_string .= "<table class='wdm_options_table' id='" . $values['product_id'] . "'>";
            // $return_string .= "<tr><td>$" . $values['new_price'] . "</td></tr>";
            // $return_string .= "</table></dl>"; 
            $return_string .= '<b><u>Door Spec:</u></b><br/>'.$metaDataString;
            return $return_string;
        }
        else
        {
            return $product_name;
        }
    }
}

function filter_woocommerce_cart_item_thumbnail( $product_image, $cart_item, $cart_item_key ) {
  $metaData = isset($cart_item['meta_data']) ? $cart_item['meta_data'] : [];
  $thumbnail_url = null;
  if (isset($metaData['thumbnail'])) {
    $thumbnail_url = $metaData['thumbnail'];
  }

  if ($thumbnail_url) {
    $product_image = '<span class="product_image"><img src="'.$thumbnail_url.'" style="width: 100px; height: auto;" /></span>';
  } else {
    $product_image = '<span class="product_image">' . $product_image . '</span>';
  }
  
  return $product_image;
}
add_filter( 'woocommerce_cart_item_thumbnail', 'filter_woocommerce_cart_item_thumbnail', 10, 3 );
