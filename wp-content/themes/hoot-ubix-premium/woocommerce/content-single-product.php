<?php
/**
 * The template for displaying product content in the single-product.php template
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-single-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.6.0
 */

defined( 'ABSPATH' ) || exit;

global $product;

/**
 * Hook: woocommerce_before_single_product.
 *
 * @hooked woocommerce_output_all_notices - 10
 */
do_action( 'woocommerce_before_single_product' );

if ( post_password_required() ) {
	echo get_the_password_form(); // WPCS: XSS ok.
	return;
}
?>

<div id="product-<?php the_ID(); ?>" data-id="Test" <?php wc_product_class( '', $product ); ?>>
	<?php $hasBuilder = get_field('show_builder'); ?>
	<?php if ($hasBuilder == true): ?>
	<?php 
		$product_id = get_the_ID();
		$_product = wc_get_product( $product_id );

		$product_description = $_product->short_description; // I used wordpress built-in functions to get the product object 
		if ($_product->attributes) {
			$attributes = $_product->attributes;
			if ($attributes['max-width-height']) {
				$value = $attributes['max-width-height']['options'];
				if ($value) {
					$max_width = $value[0];
					$max_height = $value[1];
					echo '<script>';
					echo 'let productMaxWidth = '.$max_width.';';
					echo 'let productMaxHeight = '.$max_height.';';
					echo '</script>';
				}
			}
			if ($attributes['min-width-height']) {
				$value = $attributes['min-width-height']['options'];
				if ($value) {
					$min_widht = $value[0];
					$min_widht = $value[1];
					echo '<script>';
					echo 'let productMinWidth = '.$min_widht.';';
					echo 'let productMinHeight = '.$min_widht.';';
					echo '</script>';
				}
			}
		}
		$_base_price = $_product->get_price();
		echo '<script>
			let basePrice = '.$_base_price.';
			let productId = '.$product_id.';
			let initWidth = '.$_product->get_width().';
			let initHeight = '.$_product->get_height().';
			let productDescription = "'.$product_description.'";
			console.log(productDescription);
		</script>';
		if (!is_user_logged_in() || isPending()) {
			echo '<script>
					let isNotAvailable = true;
				</script>';
		} else {
			echo '<script>
					let isNotAvailable = false;
				</script>';
		}
	?>
	<div class="hgrid main-content-grid single-product-builder-wrapper <?php if (!is_user_logged_in()) { echo 'not-loggedin'; } else {if (isPending()) { echo 'isPending'; }} ?>">
		<div id="single-product-builder"></div>
		<?php if (!is_user_logged_in()): ?>
			<div class="single-product-not-logged-in-modal">
				<h2>Please create an account or login to purchase.</h2>
				<div class="button-wrapper">
					<a href="<?=wp_registration_url(); ?>" class="button alt">Register</a>
					<a href="<?=wp_login_url(); ?>" class="button alt">LogIn</a>
				</div>
			</div>
		<?php elseif(is_user_logged_in()): ?>
			<?php if (isPending()): ?>
				<div class="single-product-not-logged-in-modal">
					<h2>Your account is pending approval.</h2>
					<Br/><br/>
					<span>Please email us at <a href="mailto:info@dabdoor.com">info@dabdoor.com</a> if you have any questions.</span>
				</div>
			<?php endif; ?>
		<?php endif; ?>
	</div>

	<?php else: ?>
	<?php
	/**
	 * Hook: woocommerce_before_single_product_summary.
	 *
	 * @hooked woocommerce_show_product_sale_flash - 10
	 * @hooked woocommerce_show_product_images - 20
	 */
	do_action( 'woocommerce_before_single_product_summary' );
	?>
	<div class="summary entry-summary">
		<?php
		/**
		 * Hook: woocommerce_single_product_summary.
		 *
		 * @hooked woocommerce_template_single_title - 5
		 * @hooked woocommerce_template_single_rating - 10
		 * @hooked woocommerce_template_single_price - 10
		 * @hooked woocommerce_template_single_excerpt - 20
		 * @hooked woocommerce_template_single_add_to_cart - 30
		 * @hooked woocommerce_template_single_meta - 40
		 * @hooked woocommerce_template_single_sharing - 50
		 * @hooked WC_Structured_Data::generate_product_data() - 60
		 */
		do_action( 'woocommerce_single_product_summary' );
		?>
	</div>
	<?php endif; ?>


	<?php
	/**
	 * Hook: woocommerce_after_single_product_summary.
	 *
	 * @hooked woocommerce_output_product_data_tabs - 10
	 * @hooked woocommerce_upsell_display - 15
	 * @hooked woocommerce_output_related_products - 20
	 */
	do_action( 'woocommerce_after_single_product_summary' );
	?>
</div>

<?php do_action( 'woocommerce_after_single_product' ); ?>