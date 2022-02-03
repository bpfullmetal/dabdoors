<?php
/**
 * The Template for displaying all single products.
 * @version 1.6.4
 */
?>

<?php get_header( 'shop' ); ?>

<?php
// Dispay Loop Meta at top
hoot_display_loop_title_content( 'pre', 'single-product.php' );
if ( hoot_page_header_attop() ) {
	get_template_part( 'template-parts/loop-meta', 'shop' ); // Loads the template-parts/loop-meta-shop.php template to display Title Area with Meta Info (of the loop)
	hoot_display_loop_title_content( 'post', 'single-product.php' );
}

// Template modification Hook
do_action( 'hoot_template_before_content_grid', 'single-product.php' );
?>

<div class="hgrid main-content-grid">

	<?php
	// Template modification Hook
	do_action( 'hoot_template_before_main', 'single-product.php' );
	?>

	<main <?php //hybridextend_attr( 'content' ); ?>>
		<div id="contact-shop-section">
			<div class="image-wrapper">
				<img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/img_contact-image.png" />
			</div>
			<div class="contact-wrapper">
				<label>Where to find us</label>
				<h2>Hurricane Master Garage Doors</h2>
				<div class="contact-info">
					<span class="contact-address">
						<i class="fa fa-map-marker"></i>
						12195 NW 98th Ave, Hialeah, FL 33018
					</span>
					<span class="contact-phone">
						<i class="fa fa-phone"></i>
						800 257 2016
					</span>
					<span class="contact-email">
						<i class="fa fa-envelope"></i>
						<a href="mailto:info@dabdoor.com">info@dabdoor.com</a>
					</span>
					<span class="contact-email">
						<i class="fa fa-envelope"></i>
						<a href="mailto:service@dabdoor.com">service@dabdoor.com</a>
					</span>
					<span class="contact-social facebook">
						<i class="fa fa-facebook"></i>
						<a href="https://www.facebook.com/DabDoor/">https://www.facebook.com/DabDoor/</a>
					</span>
					<span class="contact-open-time">
						<i class="fa fa-clock"></i>
						<span>Open <br/> Monday to Friday: 7:30 am - 5:00 pm</span>
					</span>
					<span class="contact-comment">
						<i class="fa fa-comments"></i>
						<span>"Se Habla Espanol"</span>
					</span>
					
				</div>
			</div>
		</div>
		<div id="contact-shop-section" class="intro-section">
			<div class="image-wrapper">
				<img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/img_intro-image.png" />
			</div>
			<div class="contact-wrapper">
				<div class="map-section">
					<label>Location</label>
					<div id="map" class="su-gmap">
						<iframe width="360" height="250" src="//maps.google.com/maps?q=Hurricane%20Master%20Garage%20Doors%20%2012195%20NW%2098th%20Ave%20%20Hialeah%2C%20FL%2033018&amp;output=embed" title=""></iframe>
					</div>
				</div>
				<div class="post-section">
					<label>Like Us on Facebook</label>
					<div id="facebook-posts" class="su-gmap">
						<iframe src="//docs.google.com/viewer?embedded=true&amp;url=http://dabnew.jbgaragedoors.com/wp-content/uploads/2018/01/DAB-Brochure-Complete-1.pdf" width="300" height="300" class="su-document" title=""></iframe>
					</div>
				</div>
			</div>
		</div>
		<?php
		// Template modification Hook
		do_action( 'hoot_template_main_start', 'single-product.php' );

		/**
		 * woocommerce_before_main_content hook
		 *
		 * removed @hooked woocommerce_output_content_wrapper - 10 (outputs opening divs for the content)
		 * @hooked woocommerce_breadcrumb - 20
		 */
		do_action( 'woocommerce_before_main_content' );
		?>

		<?php if ( have_posts() ) : ?>

			<?php
			// Dispay Loop Meta in content wrap
			if ( ! hoot_page_header_attop() ) {
				hoot_display_loop_title_content( 'post', 'single-product.php' );
				get_template_part( 'template-parts/loop-meta', 'shop' ); // Loads the template-parts/loop-meta-shop.php template to display Title Area with Meta Info (of the loop)
			}
			?>

			<div id="content-wrap">

				<?php
				// Template modification Hook
				do_action( 'hoot_loop_start', 'single-product.php' );
				?>

				<?php while ( have_posts() ) : the_post(); ?>

					<?php wc_get_template_part( 'content', 'single-product' ); ?>

				<?php endwhile; ?>

				<?php
				// Template modification Hook
				do_action( 'hoot_loop_end', 'single-product.php' );
				?>

			</div><!-- #content-wrap -->

			<?php
			// Template modification Hook
			do_action( 'hoot_template_after_content_wrap', 'single-product.php' );
			?>

		<?php else : ?>

			<?php
			// Loads the template-parts/error.php template.
			get_template_part( 'template-parts/error' );
			?>

		<?php endif; ?>

		<?php
		/**
		 * woocommerce_after_main_content hook
		 *
		 * removed @hooked woocommerce_output_content_wrapper_end - 10 (outputs closing divs for the content)
		 */
		do_action( 'woocommerce_after_main_content' );

		// Template modification Hook
		do_action( 'hoot_template_main_end', 'single-product.php' );
		?>

	</main><!-- #content -->

	<?php
	// Template modification Hook
	do_action( 'hoot_template_after_main', 'single-product.php' );
	?>

	<?php
	/**
	 * woocommerce_sidebar hook
	 *
	 * @hooked woocommerce_get_sidebar - 10
	 */
	// do_action( 'woocommerce_sidebar' );
	?>

</div><!-- .hgrid -->

<?php get_footer( 'shop' ); ?>