<?php
/**
 * Woocommerce functions
 * This file is loaded at 'after_setup_theme' action @priority 10 ONLY IF woocommerce plugin is active
 *
 * @package    Hoot
 * @subpackage Hoot Ubix
 */

/**
 * Woocommerce Template Setup
 *
 * @since 1.4
 * @access public
 * @return void
 */
function hoot_woo_setup() {
	// Remove default woocommerce opening divs for the content
	remove_action( 'woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10 );

	// Remove woocommerce breadcrumbs
	// if ( !is_product() )
	remove_action( 'woocommerce_before_main_content', 'woocommerce_breadcrumb', 20 );

	// Remove default woocommerce closing divs for the content
	remove_action( 'woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10 );

	/* Add theme support for WC Product Gallery slider and zoom */
	// Since this file is loaded using 'after_setup_theme' hook at priority 10, theme support can be added directly.
	add_theme_support( 'wc-product-gallery-zoom' );
	add_theme_support( 'wc-product-gallery-lightbox' );
	add_theme_support( 'wc-product-gallery-slider' );
}
add_action( 'wp', 'hoot_woo_setup' );

/**
 * Registers woocommerce sidebars.
 *
 * @since 1.0
 * @access public
 * @return void
 */
function hoot_woo_register_sidebars() {
	hybrid_register_sidebar(
		array(
			'id'          => 'hoot-woocommerce-sidebar',
			'name'        => _x( 'Woocommerce Primary Sidebar', 'sidebar', 'hoot-ubix-premium' ),
			'description' => __( 'The primary sidebar for woocommerce pages.', 'hoot-ubix-premium' )
		)
	);
	hybrid_register_sidebar(
		array(
			'id'          => 'hoot-woocommerce-sidebar-secondary',
			'name'        => _x( 'Woocommerce Secondary Sidebar', 'sidebar', 'hoot-ubix-premium' ),
			'description' => __( 'The secondary sidebar for woocommerce pages (if you are using a 3 column layout with 2 sidebars).', 'hoot-ubix-premium' )
		)
	);
}
add_action( 'widgets_init', 'hoot_woo_register_sidebars' );

/**
 * Add woocommerce sidebar class.
 *
 * @since 1.0
 * @access public
 * @param array $attr
 * @param string $context
 * @return array
 */
function hoot_theme_woo_attr_sidebar( $attr, $context ) {
	if ( !empty( $context ) && ( $context == 'primary' || $context == 'secondary' ) ) {
		if ( is_woocommerce() || is_cart() || is_checkout() || is_account_page() ) {
			$attr['class'] = ( empty( $attr['class'] ) ) ? '' : $attr['class'];
			$attr['class'] .= " woocommerce-sidebar woocommerce-sidebar-{$context}";
		}
	}
	return $attr;
}
add_filter( 'hybrid_attr_sidebar', 'hoot_theme_woo_attr_sidebar', 11, 2 );

/**
 * Apply sidebar layout for woocommerce pages
 *
 * @since 1.0
 * @access public
 * @param string $sidebar
 * @return array
 */
function hoot_woo_main_layout( $sidebar ) {

	// Check for pages which use WooCommerce templates (cart and checkout are standard 'Pages' with shortcodes and thus are not included)
	if ( is_woocommerce() ){
		if ( is_product() ) { // single product page. Wrapper for is_singular
			$sidebar = hoot_get_mod( 'sidebar_wooproduct' );
		} else { // shop, category, tag archives etc
			$sidebar = hoot_get_mod( 'sidebar_wooshop' );
		}
	}

	// Let developers edit default layout for Cart and Checkout which are standard 'Pages' with shortcodes
	$forcenosidebar = apply_filters( 'hoot_woo_pages_force_nosidebar', true );
	if ( $forcenosidebar && ( is_cart() || is_checkout() || is_account_page() ) ) {
		$sidebar = 'none';
	}

	return $sidebar;
}
add_filter( 'hoot_main_layout', 'hoot_woo_main_layout' );


/**
 * Do not show meta info for Products or WooPages (Account, Cart, Checkout)
 *
 * @since 1.0
 * @access public
 * @param array $display
 * @param string $context
 */
if ( !function_exists('hoot_woo_meta_info_blocks_display') ) {
function hoot_woo_meta_info_blocks_display( $display, $context ) {
	if ( is_woocommerce() || is_cart() || is_checkout() || is_account_page() )
		$display = array();
	return $display;
}
}
add_filter( 'hoot_meta_info_blocks_display', 'hoot_woo_meta_info_blocks_display', 10, 2 );


/**
 * Change product # displayed on shop page
 *
 * @since 1.0
 * @access public
 * @param int $value
 * @return int
 */
if ( !function_exists('hoot_woo_loop_per_page') ) {
function hoot_woo_loop_per_page( $value ) {
	return intval( hoot_get_mod( 'wooshop_products' ) );
}
}
add_filter( 'loop_shop_per_page', 'hoot_woo_loop_per_page', 20 );

/**
 * Override theme default specification for product # per row
 *
 * @since 1.0
 * @access public
 * @param int $value
 * @return int
 */
if ( !function_exists('hoot_woo_loop_columns') ) {
function hoot_woo_loop_columns( $value ) {
	return intval( hoot_get_mod( 'wooshop_product_columns' ) );
}
}
add_filter( 'loop_shop_columns', 'hoot_woo_loop_columns', 999 );

/**
 * Add inline style if product # per row is different
 *
 * @since 1.0
 * @access public
 * @return void
 */
if ( !function_exists('hoot_woo_custom_loop_columns_css') ) {
function hoot_woo_custom_loop_columns_css() {
	$columns = hoot_get_mod( 'wooshop_product_columns' );

	if ( $columns == 4 )
		return;

	switch ( $columns ) {
		case '2':
			$css = '.woocommerce.archive ul.products li.product, .woocommerce-page.archive ul.products li.product { width: 48.1%; }'; // only on shop page
			break;
		case '3':
			$css = '.woocommerce.archive ul.products li.product, .woocommerce-page.archive ul.products li.product { width: 30.8%; }'; // only on shop page
			break;
		case '5':
			$css = '.woocommerce.archive ul.products li.product, .woocommerce-page.archive ul.products li.product { width: 16.96%; }'; // only on shop page
			break;
	}

	if ( !empty( $css ) ) {
		$handle = ( is_child_theme() ) ? 'hybridextend-template-style' : 'hybridextend-style';
		wp_add_inline_style( $handle, $css );
	}
}
}
add_action( 'wp_enqueue_scripts', 'hoot_woo_custom_loop_columns_css', 99 );

/**
 * Bug fix for Woocommerce in some installations (on posts/products singular)
 * WC_Query hooks into pre_get_posts (@priority 10) and checks for `isset( $q->queried_object->ID )`
 *   in woocommerce\includes\class=wc-query.php at line#215. This gives suppressed error
 *   "Notice: Undefined property: WP_Query::$queried_object in \wp-includes\query.php on line 3960"
 * Note that class WP_Query (\includes\query.php) does unset($this->queried_object); in WP_Query::init()
 * 
 * The proper way to chck queried object is `get_queried_object()` and not $q->queried_object
 * So we set $q->queried_object by running get_queried_object() at pre_get_posts @priority 9
 *
 * @since 1.0
 * @access public
 * @return void
 */
function hoot_woo_set_queried_object( $q ){
	if ( $q->is_main_query() )
		$r = get_queried_object();
}
add_action( 'pre_get_posts', 'hoot_woo_set_queried_object', 9 );

/**
 * Hide title area on single product page
 *
 * @since 1.0
 * @access public
 * @return void
 */
if ( !function_exists( 'hoot_hide_loop_meta_woo_product' ) ) :
function hoot_hide_loop_meta_woo_product() {
	return ''; // return 'hide' to hide the title on single product pages
}
endif;

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
    $series = get_field('dab_series', $product_id);
	$new_sku = $new_sku . $series->name;
  
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
  $minimum_area_for_additional_fees = get_field('minimum_area_for_additional_fees', get_the_ID());
  $panels = get_field('panels', get_the_ID());
  $headroom = get_field('headroom', get_the_ID());
  $window_group = get_field('window', get_the_ID());
  $vents_group = get_field('vents', get_the_ID());
  $insulation_group = get_field('insulation', get_the_ID());
  $roller_type_group = get_field('roller_type', get_the_ID());
  $lock_placement_group = get_field('lock_placement', get_the_ID());
  $track_radius_group = get_field('track_radius', get_the_ID());
  $standard_colors_group = get_field('standard_colors', get_the_ID());
  $premium_colors_group = get_field('premium_colors', get_the_ID());
  $pressure_group = get_field('design_pressure_settings', get_the_ID());
  $window_layouts = get_field('custom_window_layouts', get_the_ID()) ? get_field('custom_window_layouts', get_the_ID()) : [];
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
    'window_layouts' => $window_layouts_obj
  );
  return $adminProperties;
  wp_die();
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