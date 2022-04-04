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
  if (isset($_SESSION['meta_data'])) {
    $option = $_SESSION['meta_data'];
    $cart_item_data['new_price'] = floatval($option['price']) + 15;
    $cart_item_data['new_sku'] = '98765';
      if (!empty($option)) {
        $metaData[] = array(
          'size' => $option['size']['width'].'*'.$option['size']['height']
        );
        if ($option['windows']['hasWindow'] == true) {
          $metaData[] = array(
            'window_placement' => implode(",", $option['windows']['position'])
          );
        }
        if ($option['customWindowLayout']) {
          $metaData[] = array(
            'custom_layout' => $option['customWindowLayout']['name']. ' ('.$option['customWindowLayout']['cols'].') Columns'
          );
        }
        if ($option['lock_placement']['hasLock'] == true) {
          $metaData[] = array(
            'lock_placement' => implode(",", $option['lock_placement']['placement'])
          );
        }
        if ($option['insulation']['hasInsulation'] == true) {
          $metaData[] = array(
            'insulation' => true
          );
        }
        if ($option['vents']['hasVents'] == true) {
          $metaData[] = array(
            'vents' => true
          );
        }
        if ($option['panelType'] == true) {
          $metaData[] = array(
            'panelType' => $option['panelType']['type']
          );
        }
        if ($option['ubarSettings']['count'] > 0) {
          $metaData[] = array(
            'ubarSettings' => array(
              'count' => $option['ubarSettings']['count'],
              'pressure' => $option['ubarSettings']['preesure_option'],
            )
          );
        }
        $metaData['trackRadius'] = $option['trackRadius']['radius'];
        $metaData['rollerType'] = $option['rollerType']['type'];
        $metaData['standardColor'] = $option['standardColor']['color'];
        $metaData['premiumColor'] = $option['premiumColor']['color'];
        $new_value = array(
          'meta_data' => $metaData,
        );
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

  return $cart_item_data;
}

add_filter( 'woocommerce_add_cart_item_data', 'add_cart_item_data', 10, 3 );

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
    'my-theme-frontend',
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
  $panel_group = get_field('panel', 'option');
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

  $adminProperties = array(
    'minimum_area_for_additional_fees' => $minimum_area_for_additional_fees,
    'panel_group' => $panel_group,
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

add_action( 'wp_ajax_nopriv_getAdminProperties', 'getAdminProperties' );
add_action( 'wp_ajax_getAdminProperties', 'getAdminProperties' );


function addProductToCart() {
  session_start();    
  $_SESSION['meta_data'] = $_POST['meta_data'];
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
              $metaDataString .= ',&nbsp;<span class="meta-item"><b>Insulation: </b>Enabled</span>';
            } else if (isset($metaItem['vents']) && $metaItem['vents']) {
              $metaDataString .= ',&nbsp;<span class="meta-item"><b>Vents: </b>Enabled</span>';
            } else if (isset($metaItem['panelType']) && $metaItem['panelType']) {
              $metaDataString .= ',&nbsp;<span class="meta-item"><b>Panel: </b>'. $metaItem['panelType'] .'</span>';
            } else if (isset($metaItem['ubarSettings'])) {
              $metaDataString .= ',&nbsp;<span class="meta-item"><b>Ubar Count: </b>'. $metaItem['ubarSettings']['count'] .', <b>Pressure Option: </b>'. $metaItem['ubarSettings']['pressure'] .'</span>';
            }
          }
          if ($metaData['window_placement'])
            $return_string = $product_name . "</a><dl class='variation'>";
            $return_string .= "<table class='wdm_options_table' id='" . $values['product_id'] . "'>";
            $return_string .= "<tr><td>$" . $values['new_price'] . "</td></tr>";
            $return_string .= "</table></dl>"; 
            $return_string .= '<b><u>Meta Data:</u></b><br/>'.$metaDataString;
            return $return_string;
        }
        else
        {
            return $product_name;
        }
    }
}
