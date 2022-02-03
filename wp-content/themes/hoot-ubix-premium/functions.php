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

function add_order_item_meta($item_id, $values) {
  if ( $values['new_sku'] ) {
    woocommerce_add_order_item_meta($item_id, 'model', $values['new_sku']);
  }
}
add_action('woocommerce_add_order_item_meta', 'add_order_item_meta', 10, 2);

function add_cart_item_data( $cart_item_data, $product_id, $variation_id ) {
  $product = wc_get_product( $product_id );
  $price = $product->get_price();
  $cart_item_data['new_price'] = $price + 15;
  $cart_item_data['new_sku'] = '98765';
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

function display_sku_after_item_name( $item_name, $cart_item, $cart_item_key ) {
    $product = $cart_item['data']; // The WC_Product Object
    if( is_cart() && $product->get_meta('model') ) {
        $item_name .= '<br><span class="item-sku">'. $product->get_meta('model') . '</span>';
    }
    return $item_name;
}

add_filter( 'woocommerce_cart_item_name', 'display_sku_after_item_name', 5, 3 );

add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );
function my_theme_enqueue_styles() {
  wp_enqueue_script(
    'my-theme-frontend',
    get_stylesheet_directory_uri() . '/build/index.js',
    ['wp-element'],
    time(), //For production use wp_get_theme()->get('Version'),
    true
  ); 
}

function testHook($item_id, $values) {
  echo $item_id.' : '.$values;
}
add_action( 'runTestHook', 'testHook', 10, 2 );

function ajaxHandleForTestHook() {
  $item_id = $_POST['item_id'];
  $values = $_POST['values'];
  do_action('runTestHook', $item_id, $values);
}

add_action( 'wp_ajax_nopriv_ajaxHandleForTestHook', 'ajaxHandleForTestHook' );
add_action( 'wp_ajax_ajaxHandleForTestHook', 'ajaxHandleForTestHook' );
