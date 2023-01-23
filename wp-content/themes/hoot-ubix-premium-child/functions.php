<?php

add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );

function my_theme_enqueue_styles() {
  if ( is_singular('product') ) {
    wp_enqueue_style(
      'product-builder',
      get_template_directory_uri() . '/build/style-index.css'
    );
    wp_enqueue_script(
      'dab-frontend',
      get_template_directory_uri() . '/build/index.js',
      ['wp-element'],
      time(), //For production use wp_get_theme()->get('Version'),
      true
    );
  }
}