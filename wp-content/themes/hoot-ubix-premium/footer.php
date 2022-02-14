		<?php
		// Template modification Hook
		do_action( 'hoot_template_main_wrapper_end' );
		?>
		</div><!-- #main -->

		<?php get_template_part( 'template-parts/footer', 'subfooter' ); // Loads the template-parts/footer-subfooter.php template. ?>

		<?php get_template_part( 'template-parts/footer', 'footer' ); // Loads the template-parts/footer-footer.php template. ?>

		<?php get_template_part( 'template-parts/footer', 'postfooter' ); // Loads the template-parts/footer-postfooter.php template. ?>

	</div><!-- #page-wrapper -->
		<script>

			let baseUrl = "<?=get_site_url();?>";
			console.log('BaseUrl => ', baseUrl);
		</script>
	<?php wp_footer(); // WordPress hook for loading JavaScript, toolbar, and other things in the footer. ?>
	<!-- <script type='text/javascript' src='http://localhost/garage/wp-content/themes/hoot-ubix-premium/build/index.js' id='my-theme-frontend-js'></script> -->

	<!-- <script type='text/javascript' src='http://localhost/garage/wp-includes/js/dist/element.min.js' id='wp-element-js'></script> -->
</body>
</html>