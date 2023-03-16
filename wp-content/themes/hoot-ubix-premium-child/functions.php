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

function register_custom_taxonomies() {

	$labels = [
		'name'                       => _x( 'Series', 'taxonomy general name', 'dab' ),
		'singular_name'              => _x( 'Series', 'taxonomy singular name', 'dab' ),
		'search_items'               => __( 'Search Series', 'dab' ),
		'popular_items'              => __( 'Popular Series', 'dab' ),
		'all_items'                  => __( 'All Series', 'dab' ),
		'parent_item'                => null,
		'parent_item_colon'          => null,
		'edit_item'                  => __( 'Edit Series', 'dab' ),
		'update_item'                => __( 'Update Series', 'dab' ),
		'add_new_item'               => __( 'Add New Series', 'dab' ),
		'new_item_name'              => __( 'New Series Name', 'dab' ),
		'separate_items_with_commas' => __( 'Separate Series with commas', 'dab' ),
		'add_or_remove_items'        => __( 'Add or remove Series', 'dab' ),
		'choose_from_most_used'      => __( 'Choose from the most used Series', 'dab' ),
		'not_found'                  => __( 'No Series found.', 'dab' ),
		'menu_name'                  => __( 'Series', 'dab' ),
	];

	$args = [
        'show_tagcloud'         => true,
		'hierarchical'          => true,
		'has_archive'			=> false,
		'labels'                => $labels,
		'show_ui'               => true,
		'show_admin_column'     => true,
		'show_in_nav_menus'     => true,
		'show_in_rest'		    => true,
		'public'				=> true,
		'update_count_callback' => '_update_post_term_count',
		'query_var'             => true,
		'rewrite'               => false,
	];

	register_taxonomy( 'series', ['product'], $args );

}

add_action('init', 'register_custom_taxonomies', 0);