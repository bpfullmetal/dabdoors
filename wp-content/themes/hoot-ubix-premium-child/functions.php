<?php

add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles_child' );

function my_theme_enqueue_styles_child() {
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

if ( class_exists( 'WooCommerce' ) ) {
	include_once( get_stylesheet_directory() . '/woocommerce/functions.php' );
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