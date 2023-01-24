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
