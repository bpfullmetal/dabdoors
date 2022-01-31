<?php
/**
 * Template to display single post content on archive pages
 * Archive Post Style: Mosaic 3 column
 */
?>

<article <?php hybridextend_attr( 'post', '', 'archive-mosaic archive-mosaic3 hgrid-span-4' ); ?>>

	<div class="entry-grid hgrid">

		<?php if ( has_post_thumbnail() ) : ?>
			<?php $img_size = apply_filters( 'hoot_post_image_archive_mosaic3', 'hoot-medium-thumb' );
			hoot_post_thumbnail( 'entry-content-featured-img entry-grid-featured-img', $img_size, true, get_permalink() ); ?>
		<?php endif; ?>

		<div class="entry-grid-content">

			<header class="entry-header">
				<?php the_title( '<h2 ' . hybridextend_get_attr( 'entry-title' ) . '><a href="' . esc_url( get_permalink() ) . '" rel="bookmark" itemprop="url">', '</a></h2>' ); ?>
			</header><!-- .entry-header -->

			<?php
			if ( 'full-content' == hoot_get_mod('archive_post_content') ) {
				?><div <?php hybridextend_attr( 'entry-summary', 'content' ); ?>><?php
					the_content();
				?></div><?php
				wp_link_pages();
			} else {
				?><div <?php hybridextend_attr( 'entry-summary', 'excerpt' ); ?>><?php
					the_excerpt();
				?></div><?php
			}
			?>

			<?php
			$metarray = hoot_get_mod('archive_post_meta');
			if ( hoot_meta_info_display( $metarray, 'archive-mosaic3', true ) ) :
			?>
			<div class="mosaic-sub">
				<?php if ( is_sticky() ) : ?>
					<div class="entry-sticky-tag invert-typo"><?php _e( 'Sticky', 'hoot-ubix-premium' ) ?></div>
				<?php endif; ?>
				<div class="screen-reader-text" itemprop="datePublished" itemtype="https://schema.org/Date"><?php echo get_the_date('Y-m-d'); ?></div>
				<?php hoot_meta_info_blocks( $metarray, 'archive-mosaic3' ); ?>
			</div><!-- .mosaic-sub -->
			<?php
			endif;
			?>

		</div><!-- .entry-grid-content -->

	</div><!-- .entry-grid -->

</article><!-- .entry -->