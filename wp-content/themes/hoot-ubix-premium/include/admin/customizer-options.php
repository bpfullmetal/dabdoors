<?php
/**
 * Defines customizer options
 *
 * This file is loaded at 'after_setup_theme' hook with 10 priority.
 *
 * @package    Hoot
 * @subpackage Hoot Ubix
 */

/**
 * Build the Customizer options (panels, sections, settings)
 *
 * Always remember to mention specific priority for non-static options like:
 *     - options being added based on a condition (eg: if woocommerce is active)
 *     - options which may get removed (eg: logo_size, headings_fontface)
 *     - options which may get rearranged (eg: logo_background_type)
 *     This will allow other options inserted with priority to be inserted at
 *     their intended place.
 *
 * @since 1.0
 * @access public
 * @return array
 */
if ( !function_exists( 'hoot_theme_customizer_options' ) ) :
function hoot_theme_customizer_options() {

	// Stores all the settings to be added
	$settings = array();

	// Stores all the sections to be added
	$sections = array();

	// Stores all the panels to be added
	$panels = array();

	// Theme default colors and fonts
	extract( apply_filters( 'hoot_theme_options_defaults', array(
		'accent_color'         => '#db1010',
		'accent_font'          => '#ffffff',
		'box_background'       => '#ffffff',
		'site_background'      => '#ffffff',
		// 'site_background_patt' => 'hybrid/extend/images/patterns/4.png',
	) ) );

	// Directory path for radioimage buttons
	$imagepath =  HYBRIDEXTEND_INCURI . 'admin/images/';

	// Logo Sizes (different range than standard typography range)
	$logosizes = array();
	$logosizerange = range( 14, 110 );
	foreach ( $logosizerange as $isr )
		$logosizes[ $isr . 'px' ] = $isr . 'px';
	$logosizes = apply_filters( 'hoot_theme_options_logosizes', $logosizes);

	// Logo Font Options for Lite version
	$logofont = apply_filters( 'hoot_theme_options_logofont', array(
					'heading' => __("Logo Font (set in 'Typography' section)", 'hoot-ubix-premium'),
					'standard' => __('Standard Body Font', 'hoot-ubix-premium'),
					) );

	/*** Add Options (Panels, Sections, Settings) ***/

	/** Section **/

	$section = 'links';

	$sections[ $section ] = array(
		'title'       => __( 'Demo / Support', 'hoot-ubix-premium' ),
		'priority'    => '2',
	);

	$lcontent = '';
	$lcontent .= '<a class="hoot-cust-link" href="' .
				 'https://demo.wphoot.com/hoot-ubix/' .
				 '" target="_blank"><span class="hoot-cust-link-head">' .
				 '<i class="fa fa-eye"></i> ' .
				 __( "Demo", 'hoot-ubix-premium') . 
				 '</span><span class="hoot-cust-link-desc">' .
				 __( "Demo the theme features and options with sample content.", 'hoot-ubix-premium') .
				 '</span></a>';
	$lcontent .= '<a class="hoot-cust-link" href="' .
				 'https://wphoot.com/support/' .
				 '" target="_blank"><span class="hoot-cust-link-head">' .
				 '<i class="fa fa-support"></i> ' .
				 __( "Documentation / Support", 'hoot-ubix-premium') . 
				 '</span><span class="hoot-cust-link-desc">' .
				 __( "Get theme related support for both free and premium users.", 'hoot-ubix-premium') .
				 '</span></a>';
	$lcontent .= '<a class="hoot-cust-link" href="' .
				 'https://wordpress.org/support/view/theme-reviews/hoot-ubix#postform' .
				 '" target="_blank"><span class="hoot-cust-link-head">' .
				 '5 <i class="fa fa-star"></i> ' .
				 __( "Rate Us", 'hoot-ubix-premium') . 
				 '</span><span class="hoot-cust-link-desc">' .
				 __( "If you are happy with the theme, give us a 5 star rating on wordpress.org", 'hoot-ubix-premium') .
				 '</span></a>';

	$settings['linksection'] = array(
		// 'label'       => __( 'Misc Links', 'hoot-ubix-premium' ),
		'section'     => $section,
		'type'        => 'content',
		'priority'    => '8', // Non static options must have a priority
		'content'     => $lcontent,
	);

	/** Section **/

	$section = 'title_tagline';

	$sections[ $section ] = array(
		'title'       => __( 'Setup &amp; Layout', 'hoot-ubix-premium' ),
	);

	$settings['site_layout'] = array(
		'label'       => __( 'Site Layout - Boxed vs Stretched', 'hoot-ubix-premium' ),
		'section'     => $section,
		'type'        => 'radio',
		'choices'     => array(
			'boxed'   => __('Boxed layout', 'hoot-ubix-premium'),
			'stretch' => __('Stretched layout (full width)', 'hoot-ubix-premium'),
		),
		'default'     => 'stretch',
		'description' => __("For boxed layouts, both backgrounds (site and content box) can be set in the Backgrounds' section.<br />For Stretched Layout, only site background is available.", 'hoot-ubix-premium'),
	);

	$settings['site_width'] = array(
		'label'       => __( 'Max. Site Width (pixels)', 'hoot-ubix-premium' ),
		'section'     => $section,
		'type'        => 'radio',
		'choices'     => array(
			'1260' => __('1260px (wide)', 'hoot-ubix-premium'),
			'1080' => __('1080px (standard)', 'hoot-ubix-premium'),
		),
		'default'     => '1260',
	);

	$settings['load_minified'] = array(
		'label'       => __( 'Load Minified Styles and Scripts (when available)', 'hoot-ubix-premium' ),
		'sublabel'    => __( 'Checking this option reduces data size, hence increasing page load speed.', 'hoot-ubix-premium' ),
		'section'     => $section,
		'type'        => 'checkbox',
		// 'default'     => 1,
	);

	$settings['sidebar_desc'] = array(
		'label'       => __( 'Multiple Sidebars', 'hoot-ubix-premium' ),
		'section'     => $section,
		'type'        => 'content',
		'content'     => sprintf( __( 'This theme can display different sidebar content on different pages of your site with the %1$1sCustom Sidebars%2$2s plugin. Simply install and activate the plugin to use it with this theme. Or if you are using %3$3sJetpack%4$4s, you can use the %5$5s"Widget Visibility"%6$6s module.', 'hoot-ubix-premium' ), '<a href="https://wordpress.org/plugins/custom-sidebars/screenshots/" target="_blank">', '</a>', '<a href="https://wordpress.org/plugins/jetpack/" target="_blank">', '</a>', '<a href="https://jetpack.com/support/widget-visibility/" target="_blank">', '</a>' ),
	);

	$settings['sidebar'] = array(
		'label'       => __( 'Sidebar Layout (Site-wide)', 'hoot-ubix-premium' ),
		'section'     => $section,
		'type'        => 'radioimage',
		'choices'     => array(
			'wide-right'         => $imagepath . 'sidebar-wide-right.png',
			'narrow-right'       => $imagepath . 'sidebar-narrow-right.png',
			'wide-left'          => $imagepath . 'sidebar-wide-left.png',
			'narrow-left'        => $imagepath . 'sidebar-narrow-left.png',
			'narrow-left-right'  => $imagepath . 'sidebar-narrow-left-right.png',
			'narrow-left-left'   => $imagepath . 'sidebar-narrow-left-left.png',
			'narrow-right-right' => $imagepath . 'sidebar-narrow-right-right.png',
			'full-width'         => $imagepath . 'sidebar-full.png',
			'none'               => $imagepath . 'sidebar-none.png',
		),
		'default'     => 'wide-right',
		'description' => __("Set the default sidebar width and position for your site.", 'hoot-ubix-premium'),
	);

	$settings['sidebar_pages'] = array(
		'label'       => __( 'Sidebar Layout (for Pages)', 'hoot-ubix-premium' ),
		'section'     => $section,
		'type'        => 'radioimage',
		'choices'     => array(
			'wide-right'         => $imagepath . 'sidebar-wide-right.png',
			'narrow-right'       => $imagepath . 'sidebar-narrow-right.png',
			'wide-left'          => $imagepath . 'sidebar-wide-left.png',
			'narrow-left'        => $imagepath . 'sidebar-narrow-left.png',
			'narrow-left-right'  => $imagepath . 'sidebar-narrow-left-right.png',
			'narrow-left-left'   => $imagepath . 'sidebar-narrow-left-left.png',
			'narrow-right-right' => $imagepath . 'sidebar-narrow-right-right.png',
			'full-width'         => $imagepath . 'sidebar-full.png',
			'none'               => $imagepath . 'sidebar-none.png',
		),
		'default'     => 'wide-right',
	);

	$settings['sidebar_posts'] = array(
		'label'       => __( 'Sidebar Layout (for single Posts)', 'hoot-ubix-premium' ),
		'section'     => $section,
		'type'        => 'radioimage',
		'choices'     => array(
			'wide-right'         => $imagepath . 'sidebar-wide-right.png',
			'narrow-right'       => $imagepath . 'sidebar-narrow-right.png',
			'wide-left'          => $imagepath . 'sidebar-wide-left.png',
			'narrow-left'        => $imagepath . 'sidebar-narrow-left.png',
			'narrow-left-right'  => $imagepath . 'sidebar-narrow-left-right.png',
			'narrow-left-left'   => $imagepath . 'sidebar-narrow-left-left.png',
			'narrow-right-right' => $imagepath . 'sidebar-narrow-right-right.png',
			'full-width'         => $imagepath . 'sidebar-full.png',
			'none'               => $imagepath . 'sidebar-none.png',
		),
		'default'     => 'wide-right',
	);

	/** Section **/

	$section = 'header';

	$sections[ $section ] = array(
		'title'       => __( 'Header', 'hoot-ubix-premium' ),
	);

	$settings['primary_menuarea'] = array(
		'label'       => __( 'Header Area (right of logo)', 'hoot-ubix-premium' ),
		'section'     => $section,
		'type'        => 'radio',
		'choices'     => array(
			'menu'        => __('Display Menu', 'hoot-ubix-premium'),
			'search'      => __('Display Search', 'hoot-ubix-premium'),
			'custom'      => __('Custom Text', 'hoot-ubix-premium'),
			'widget-area' => __("'Header Side' widget area", 'hoot-ubix-premium'),
			'none'        => __('None (Logo will get centre aligned)', 'hoot-ubix-premium'),
		),
		'default'     => 'menu',
	);

	$settings['primary_menuarea_custom'] = array(
		'label'             => __( 'Custom Text instead of Menu', 'hoot-ubix-premium' ),
		'section'           => $section,
		'type'              => 'textarea',
		'description'       => __( 'You can use this area to display ads or custom text.', 'hoot-ubix-premium' ),
		'active_callback'   => 'hoot_callback_show_primary_menuarea_custom',
	);
	// Allow users to add javascript in case they need to use this area to insert code for ads
	// etc. To enable this, add the following code in your child theme's functions.php file (without
	// the '//'). This code is already included in premium version.
	//     add_filter( 'hoot_primary_menuarea_custom_allowscript', 'hoot_child_textarea_allowscript' );
	//     function hoot_child_textarea_allowscript(){ return true; }
	if ( apply_filters( 'hoot_primary_menuarea_custom_allowscript', true ) )
		$settings['primary_menuarea_custom']['sanitize_callback'] = 'hoot_custom_sanitize_textarea_allowscript';

	$settings['secondary_menu_location'] = array(
		'label'       => __( 'Full Width Menu Area (location)', 'hoot-ubix-premium' ),
		'section'     => $section,
		'type'        => 'radio',
		'choices'     => array(
			'top'        => __('Top (above logo)', 'hoot-ubix-premium'),
			'bottom'     => __('Bottom (below logo)', 'hoot-ubix-premium'),
			'none'       => __("Do not display full width menu (useful if you already have 'menu' selected in 'Header Area' above')", 'hoot-ubix-premium'),
		),
		'default'     => 'bottom',
	);

	$settings['secondary_menu_align'] = array(
		'label'       => __( 'Full Width Menu Area (alignment)', 'hoot-ubix-premium' ),
		'section'     => $section,
		'type'        => 'radio',
		'choices'     => array(
			'left'      => __('Left', 'hoot-ubix-premium'),
			'right'     => __('Right', 'hoot-ubix-premium'),
			'center'    => __('Center', 'hoot-ubix-premium'),
		),
		'default'     => 'center',
	);

	$settings['disable_table_menu'] = array(
		'label'       => __( 'Disable Table Menu', 'hoot-ubix-premium' ),
		'section'     => $section,
		'type'        => 'checkbox',
		// 'default'     => 1,
		'description' => "<img src='{$imagepath}menu-table.png'><br/>" . __( 'Disable Table Menu if you have a lot of Top Level menu items, <strong>and dont have menu item descriptions.</strong>', 'hoot-ubix-premium' ),
	);

	$settings['mobile_menu'] = array(
		'label'       => __( 'Mobile Menu', 'hoot-ubix-premium' ),
		'section'     => $section,
		'type'        => 'radio',
		'choices'     => array(
			'inline' => __('Inline - Menu Slide Downs to open', 'hoot-ubix-premium'),
			'fixed'  => __('Fixed - Menu opens on the left', 'hoot-ubix-premium'),
		),
		'default'     => 'fixed',
	);

	$settings['mobile_submenu_click'] = array(
		'label'       => __( "[Mobile Menu] Submenu opens on 'Click'", 'hoot-ubix-premium' ),
		'section'     => $section,
		'type'        => 'checkbox',
		'default'     => 1,
		'description' => __( "Uncheck this option to make all Submenus appear in 'Open' state. By default, submenus open on clicking (i.e. single tap on mobile).", 'hoot-ubix-premium' ),
	);

	/** Section **/

	$section = 'logo';

	$sections[ $section ] = array(
		'title'       => __( 'Logo', 'hoot-ubix-premium' ),
	);

	$settings['logo_background_type'] = array(
		'label'       => __( 'Logo Background', 'hoot-ubix-premium' ),
		'section'     => $section,
		'type'        => 'radio',
		'priority'    => '145', // Non static options must have a priority
		'choices'     => array(
			'transparent' => __('None', 'hoot-ubix-premium'),
			'accent'      => __('Accent Color', 'hoot-ubix-premium'),
		),
		'default'     => 'transparent',
	);

	$settings['logo'] = array(
		'label'       => __( 'Site Logo', 'hoot-ubix-premium' ),
		'section'     => $section,
		'type'        => 'radio',
		'choices'     => array(
			'text'        => __('Default Text (Site Title)', 'hoot-ubix-premium'),
			'custom'      => __('Custom Text', 'hoot-ubix-premium'),
			'image'       => __('Image Logo', 'hoot-ubix-premium'),
			'mixed'       => __('Image &amp; Default Text (Site Title)', 'hoot-ubix-premium'),
			'mixedcustom' => __('Image &amp; Custom Text', 'hoot-ubix-premium'),
		),
		'default'     => 'text',
		'description' => sprintf( __('Use %1$sSite Title%2$s as default text logo', 'hoot-ubix-premium'), '<a href="' . esc_url( admin_url('options-general.php') ) . '" target="_blank">', '</a>' ),
	);

	$settings['logo_size'] = array(
		'label'       => __( 'Logo Text Size', 'hoot-ubix-premium' ),
		'section'     => $section,
		'type'        => 'select',
		'priority'    => '155', // Non static options must have a priority
		'choices'     => array(
			'tiny'   => __( 'Tiny', 'hoot-ubix-premium'),
			'small'  => __( 'Small', 'hoot-ubix-premium'),
			'medium' => __( 'Medium', 'hoot-ubix-premium'),
			'large'  => __( 'Large', 'hoot-ubix-premium'),
			'huge'   => __( 'Huge', 'hoot-ubix-premium'),
		),
		'default'     => 'medium',
		'active_callback' => 'hoot_callback_logo_size',
	);

	$settings['site_title_icon'] = array(
		'label'           => __( 'Site Title Icon (Optional)', 'hoot-ubix-premium' ),
		'section'         => $section,
		'type'            => 'icon',
		// 'default'         => 'fa-anchor',
		'description'     => __( 'Leave empty to hide icon.', 'hoot-ubix-premium' ),
		'active_callback' => 'hoot_callback_site_title_icon',
	);

	$settings['site_title_icon_size'] = array(
		'label'           => __( 'Site Title Icon Size', 'hoot-ubix-premium' ),
		'section'         => $section,
		'type'            => 'select',
		'choices'         => $logosizes,
		'default'         => '50px',
		'active_callback' => 'hoot_callback_site_title_icon',
	);

	if ( ! function_exists( 'the_custom_logo' ) )
	$settings['logo_image'] = array(
		'label'           => __( 'Upload Logo', 'hoot-ubix-premium' ),
		'section'         => $section,
		'type'            => 'image',
		'priority'        => '175', // Replaced by WP's custom_logo if available // Update in premium if needed
		'active_callback' => 'hoot_callback_logo_image',
	);

	$settings['logo_image_width'] = array(
		'label'           => __( 'Maximum Logo Width', 'hoot-ubix-premium' ),
		'section'         => $section,
		'type'            => 'text',
		'priority'        => '176', // Keep it with image logo // Update in premium if needed
		'default'         => 200,
		'description'     => __( '(in pixels)<hr>The logo width may be automatically adjusted by the browser depending on title length and space available.', 'hoot-ubix-premium' ),
		'input_attrs'     => array(
			'min'         => 0,
			'max'         => 3,
			'placeholder' => __( '(in pixels)', 'hoot-ubix-premium' ),
		),
		'active_callback' => 'hoot_callback_logo_image_width',
	);

	$logo_custom_line_options = array(
		'text' => array(
			'label'       => __( 'Line Text', 'hoot-ubix-premium' ),
			'type'        => 'text',
		),
		'size' => array(
			'label'       => __( 'Line Size', 'hoot-ubix-premium' ),
			'type'        => 'select',
			'choices'     => $logosizes,
			'default'     => '24px',
		),
		'font' => array(
			'label'       => __( 'Line Font', 'hoot-ubix-premium' ),
			'type'        => 'select',
			'choices'     => $logofont,
			'default'     => 'heading',
		),
	);

	$settings['logo_custom'] = array(
		'label'           => __( 'Custom Logo Text', 'hoot-ubix-premium' ),
		'section'         => $section,
		'type'            => 'sortlist',
		'choices'         => array(
			'line1' => __('Line 1', 'hoot-ubix-premium'),
			'line2' => __('Line 2', 'hoot-ubix-premium'),
			'line3' => __('Line 3', 'hoot-ubix-premium'),
			'line4' => __('Line 4', 'hoot-ubix-premium'),
		),
		'options'         => array(
			'line1' => $logo_custom_line_options,
			'line2' => $logo_custom_line_options,
			'line3' => $logo_custom_line_options,
			'line4' => $logo_custom_line_options,
		),
		'attributes'      => array(
			'inactive' => array( 'line3', 'line4' ),
			'hideable' => true,
			'sortable' => false,
		),
		'active_callback' => 'hoot_callback_logo_custom',
	);

	$settings['show_tagline'] = array(
		'label'           => __( 'Show Tagline', 'hoot-ubix-premium' ),
		'sublabel'        => __( 'Display site description as tagline below logo.', 'hoot-ubix-premium' ),
		'section'         => $section,
		'type'            => 'checkbox',
		'default'         => 1,
		'active_callback' => 'hoot_callback_show_tagline',
	);

	/** Section **/

	$section = 'colors';

	// Redundant as 'colors' section is added by WP. But we still add it for brevity
	$sections[ $section ] = array(
		'title'       => __( 'Colors', 'hoot-ubix-premium' ),
		'description' => __('Control various color options in the premium version for fonts, backgrounds, contrast, highlight, accent etc.', 'hoot-ubix-premium'),
	);

	$settings['accent_color'] = array(
		'label'       => __( 'Accent Color', 'hoot-ubix-premium' ),
		'section'     => $section,
		'type'        => 'color',
		'default'     => $accent_color,
	);

	$settings['accent_font'] = array(
		'label'       => __( 'Font Color on Accent Color', 'hoot-ubix-premium' ),
		'section'     => $section,
		'type'        => 'color',
		'default'     => $accent_font,
	);

	if ( current_theme_supports( 'woocommerce' ) ) :
		$settings['woocommerce-colors-plugin'] = array(
			'label'       => __( 'Woocommerce Styling', 'hoot-ubix-premium' ),
			'section'     => $section,
			'type'        => 'content',
			'priority'    => '215', // Non static options must have a priority
			'content'     => sprintf( __('Looks like you are using Woocommerce. Install %1$sthis plugin%2$s to change colors and styles for WooCommerce elements like buttons etc.', 'hoot-ubix-premium'), '<a href="https://wordpress.org/plugins/woocommerce-colors/" target="_blank">', '</a>' ),
		);
	endif;

	/** Section **/

	$section = 'backgrounds';

	$sections[ $section ] = array(
		'title'       => __( 'Backgrounds', 'hoot-ubix-premium' ),
		'description' => __('The premium version comes with background options for different sections of your site like header, menu dropdown, content area, logo background, footer etc.', 'hoot-ubix-premium'),
	);

	$settings['background'] = array(
		'label'       => __( 'Site Background', 'hoot-ubix-premium' ),
		'section'     => $section,
		'type'        => 'betterbackground',
		'default'     => array(
			'color'      => $site_background,
			// 'pattern'    => $site_background_patt,
		),
	);

	$settings['box_background_color'] = array(
		'label'       => __( 'Content Box Background', 'hoot-ubix-premium' ),
		'section'     => $section,
		'type'        => 'color',
		'default'     => $box_background,
		'description' => __("This background is available only when <strong>Site Layout</strong> option is set to <strong>'Boxed'</strong> in the <strong>'Setup &amp; Layout'</strong> section.", 'hoot-ubix-premium'),
		// 'active_callback' => 'hoot_callback_box_background_color',
	);

	/** Section **/

	$section = 'typography';

	$sections[ $section ] = array(
		'title'       => __( 'Typography', 'hoot-ubix-premium' ),
		'description' => __('The premium version offers complete typography control (color, style, size) for various headings, header, menu, footer, widgets, content sections etc (over 600 Google Fonts to chose from)', 'hoot-ubix-premium'),
	);

	$settings['logo_fontface'] = array(
		'label'       => __( 'Logo Font (Free Version)', 'hoot-ubix-premium' ),
		'section'     => $section,
		'type'        => 'select',
		'priority'    => 335, // Non static options must have a priority
		'choices'     => array(
			'standard' => __( 'Standard Font (Lato)', 'hoot-ubix-premium'),
			'display'  => __( 'Display Font (Graduate)', 'hoot-ubix-premium'),
		),
		'default'     => 'display',
	);

	/** Section **/

	$section = 'frontpage';

	$sections[ $section ] = array(
		'title'       => __( 'Frontpage - Modules', 'hoot-ubix-premium' ),
	);

	$widget_area_options = array(
		'columns' => array(
			'label'   => __( 'Columns', 'hoot-ubix-premium' ),
			'type'    => 'select',
			'choices' => array(
				'100'         => __('One Column [100]', 'hoot-ubix-premium'),
				'50-50'       => __('Two Columns [50 50]', 'hoot-ubix-premium'),
				'33-66'       => __('Two Columns [33 66]', 'hoot-ubix-premium'),
				'66-33'       => __('Two Columns [66 33]', 'hoot-ubix-premium'),
				'25-75'       => __('Two Columns [25 75]', 'hoot-ubix-premium'),
				'75-25'       => __('Two Columns [75 25]', 'hoot-ubix-premium'),
				'33-33-33'    => __('Three Columns [33 33 33]', 'hoot-ubix-premium'),
				'25-25-50'    => __('Three Columns [25 25 50]', 'hoot-ubix-premium'),
				'25-50-25'    => __('Three Columns [25 50 25]', 'hoot-ubix-premium'),
				'50-25-25'    => __('Three Columns [50 25 25]', 'hoot-ubix-premium'),
				'25-25-25-25' => __('Four Columns [25 25 25 25]', 'hoot-ubix-premium'),
			),
		),
		'modulebg' => array(
			'label'       => '',
			'type'        => 'content',
			'content'     => '<div class="button">' . __( 'Module Background', 'hoot-ubix-premium' ) . '</div>',
		),
	);

	$settings['frontpage_sections'] = array(
		'label'       => __( 'Frontpage Widget Areas', 'hoot-ubix-premium' ),
		'sublabel'    => sprintf( __("<p></p><ul><li>Sort different sections of the Frontpage in the order you want them to appear.</li><li>You can add content to widget areas from the %1$1sWidgets Management screen%2$2s.</li><li>You can disable areas by clicking the 'eye' icon. (This will hide them on the Widgets screen as well)</li></ul>", 'hoot-ubix-premium'), '<a href="' . esc_url( admin_url('widgets.php') ) . '" target="_blank">', '</a>' ),
		'section'     => $section,
		'type'        => 'sortlist',
		'choices'     => array(
			'slider_html' => __('HTML Slider', 'hoot-ubix-premium'),
			'slider_img'  => __('Image Slider', 'hoot-ubix-premium'),
			'area_a'      => __('Widget Area A', 'hoot-ubix-premium'),
			'area_b'      => __('Widget Area B', 'hoot-ubix-premium'),
			'area_c'      => __('Widget Area C', 'hoot-ubix-premium'),
			'area_d'      => __('Widget Area D', 'hoot-ubix-premium'),
			'area_e'      => __('Widget Area E', 'hoot-ubix-premium'),
			'content'     => __('Frontpage Content', 'hoot-ubix-premium'),
		),
		'default'     => array(
			// 'content' => array( 'sortitem_hide' => 1, ),
			'area_b'  => array( 'columns' => '50-50' ),
		),
		'options'     => array(
			'slider_html' => array(
				'modulebg' => array(
					'label'       => '',
					'type'        => 'content',
					'content'     => '<div class="button">' . __( 'Module Background', 'hoot-ubix-premium' ) . '</div>',
				),
			),
			'slider_img'  => array(
				'modulebg' => array(
					'label'       => '',
					'type'        => 'content',
					'content'     => '<div class="button">' . __( 'Module Background', 'hoot-ubix-premium' ) . '</div>',
				),
			),
			'area_a'      => $widget_area_options,
			'area_b'      => $widget_area_options,
			'area_c'      => $widget_area_options,
			'area_d'      => $widget_area_options,
			'area_e'      => $widget_area_options,
			'content'     => array(
							'title' => array(
								'label'       => __( 'Title (optional)', 'hoot-ubix-premium' ),
								'type'        => 'text',
							),
							'modulebg' => array(
								'label'       => '',
								'type'        => 'content',
								'content'     => '<div class="button">' . __( 'Module Background', 'hoot-ubix-premium' ) . '</div>',
							), ),
		),
		'attributes'  => array(
			'hideable'      => true,
			'sortable'      => true,
		),
		// 'description' => sprintf( __('You must first save the changes you make here and refresh this screen for widget areas to appear in the Widgets panel (in customizer). Once you save the settings, you can add content to these widget areas using the %sWidgets Management screen%s.', 'hoot-ubix-premium'), '<a href="' . esc_url( admin_url('widgets.php') ) . '" target="_blank">', '</a>' ),
	);

	$settings['frontpage_content_desc'] = array(
		'label'       => __( "Frontpage Content", 'hoot-ubix-premium' ),
		'section'     => $section,
		'type'        => 'content',
		'content'     => sprintf( __( "The 'Frontpage Content' module in above list will show<ul style='list-style:disc;margin:1em 0 0 2em;'><li>the <strong>'Blog'</strong> if you have <strong>Your Latest Posts</strong> selectd in %1$1sReading Settings%2$2s</li><li>the <strong>Page Content</strong> of the page set as Front page if you have <strong>A static page</strong> selected in %3$3sReading Settings%4$4s</li></ul>", 'hoot-ubix-premium' ), '<a href="' . esc_url( admin_url('options-reading.php') ) . '" target="_blank">', '</a>', '<a href="' . esc_url( admin_url('options-reading.php') ) . '" target="_blank">', '</a>' ),
	);

	$settings["frontpage_sectionbg_slider_html"] =
	$settings["frontpage_sectionbg_slider_img"] = array(
		'label'       => '',
		'section'     => $section,
		'type'        => 'group',
		'button'      => __( 'Module Background', 'hoot-ubix-premium' ),
		'options'     => array(
			'description' => array(
				'label'       => '',
				'type'        => 'content',
				'content'     => '<span class="hoot-module-bg-title">' . __('Slider Background', 'hoot-ubix-premium') . '</span>',
			),
			'type' => array(
				'label'   => __( 'Background Type', 'hoot-ubix-premium' ),
				'type'    => 'radio',
				'choices' => array(
					'none'        => __('None', 'hoot-ubix-premium'),
					'highlight'   => __('Highlight Color', 'hoot-ubix-premium'),
					'accent'      => __('Accent Color', 'hoot-ubix-premium'),
				),
				'default' => 'none',
			),
		),
	);

	$frontpagemodule_bg = array(
		'area_a'      => __('Widget Area A', 'hoot-ubix-premium'),
		'area_b'      => __('Widget Area B', 'hoot-ubix-premium'),
		'area_c'      => __('Widget Area C', 'hoot-ubix-premium'),
		'area_d'      => __('Widget Area D', 'hoot-ubix-premium'),
		'area_e'      => __('Widget Area E', 'hoot-ubix-premium'),
		'content'     => __('Frontpage Content', 'hoot-ubix-premium'),
		);

	foreach ( $frontpagemodule_bg as $fpgmodid => $fpgmodname ) {

		$settings["frontpage_sectionbg_{$fpgmodid}"] = array(
			'label'       => '',
			'section'     => $section,
			'type'        => 'group',
			'button'      => __( 'Module Background', 'hoot-ubix-premium' ),
			'options'     => array(
				'description' => array(
					'label'       => '',
					'type'        => 'content',
					'content'     => '<span class="hoot-module-bg-title">' . $fpgmodname . '</span>',
				),
				'type' => array(
					'label'   => __( 'Background Type', 'hoot-ubix-premium' ),
					'type'    => 'radio',
					'choices' => array(
						'none'        => __('None', 'hoot-ubix-premium'),
						'highlight'   => __('Highlight Color', 'hoot-ubix-premium'),
						'image'       => __('Background Image', 'hoot-ubix-premium'),
					),
					// 'default' => ( ( $fpgmodid == 'area_b' ) ? 'image' :
					// 											( ( $fpgmodid == 'area_d' ) ? 'highlight' : 'none' )
					// 			 ),
					'default' => ( ( $fpgmodid == 'area_b' ) ? 'image' : 'none' ),
				),
				'image' => array(
					'label'       => __( "Background Image (Select 'Image' above)", 'hoot-ubix-premium' ),
					'type'        => 'image',
					'default' => ( ( $fpgmodid == 'area_b' ) ? HYBRID_PARENT_URI . 'images/modulebg.jpg' : '' ),
				),
				'parallax' => array(
					'label'   => __( 'Apply Parallax Effect to Background Image', 'hoot-ubix-premium' ),
					'type'    => 'checkbox',
					'default' => ( ( $fpgmodid == 'area_b' ) ? 1 : 0 ),
				),
			),
		);

	} // end for

	/** Section **/

	$section = 'slider_html';

	$sections[ $section ] = array(
		'title'       => __( 'Frontpage - HTML Slider', 'hoot-ubix-premium' ),
	);

	$settings['wt_html_slider_width'] = array(
		'label'       => __( 'Slider Width', 'hoot-ubix-premium' ),
		'sublabel'    => __( "Note: This option is useful only if the <strong>Site Layout</strong> option is set to <strong>Stretched</strong> in 'Setup &amp; Layout' section.", 'hoot-ubix-premium' ),
		'section'     => $section,
		'type'        => 'radioimage',
		'choices'     => array(
			'boxed'   => $imagepath . 'slider-width-boxed.png',
			'stretch' => $imagepath . 'slider-width-stretch.png',
		),
		'default'     => 'stretch',
	);

	$settings['wt_html_slider_min_height'] = array(
		'label'       => __( 'Minimum Slider Height (in pixels)', 'hoot-ubix-premium' ),
		'section'     => $section,
		'type'        => 'text',
		'priority'    => 805, // Non static options must have a priority
		'default'     => 375,
		'description' => __('<strong>(in pixels)</strong><hr>Leave empty to let the slider height adjust automatically.', 'hoot-ubix-premium'),
		'input_attrs' => array(
			'min' => 0,
			'max' => 3,
			'placeholder' => __( '(in pixels)', 'hoot-ubix-premium' ),
		),
	);

	$settings['wt_html_slider'] = array(
		'label'       => __( 'Slides', 'hoot-ubix-premium' ),
		'section'     => $section,
		'type'        => 'content',
		'priority'    => 805, // Non static options must have a priority
		'content'     => __( 'Premium version of this theme comes with capability to create <strong>Unlimited slides</strong>.', 'hoot-ubix-premium' ),
	);

	for ( $slide = 1; $slide <= 4; $slide++ ) {

		$settings["wt_html_slide_{$slide}"] = array(
			'label'       => sprintf( __( 'Slide %s Content', 'hoot-ubix-premium' ), $slide),
			'section'     => $section,
			'type'        => 'group',
			'priority'    => 805, // Non static options must have a priority
			'button'      => sprintf( __( 'Edit Slide %s', 'hoot-ubix-premium' ), $slide),
			'options'     => array(
				'description' => array(
					'label'       => '',
					'type'        => 'content',
					'content'     => '<span class="hoot-module-bg-title">' . sprintf( __( 'Slide %s Content', 'hoot-ubix-premium' ), $slide) . '</span>',
				),
				'image' => array(
					'label'       => __( 'Showcase Image (Right Column)', 'hoot-ubix-premium' ),
					'type'        => 'content',
					'description' => __( 'If the page below has a featured image, it will be used as the Showcase Image (image in right column)', 'hoot-ubix-premium' ),
				),
				'content' => array(
					'label'       => __( 'Content (Left Column)', 'hoot-ubix-premium' ),
					'type'        => 'select',
					'choices'     => array( __( 'Select Page', 'hoot-ubix-premium' ) ) + HybridExtend_Options_Helper::pages(),
				),
				// 'image' => array(
				// 	'label'       => __( 'Featured Image (Right Column)', 'hoot-ubix-premium' ),
				// 	'type'        => 'image',
				// 	'description' => __( 'Content below will be center aligned if no image is present.', 'hoot-ubix-premium' ),
				// ),
				// 'content' => array(
				// 	'label'       => __( 'Content (Left Column)', 'hoot-ubix-premium' ),
				// 	'type'        => 'textarea',
				// 	'default'     => '<h3>Lorem Ipsum Dolor</h3>' . "\n" . __('<p>This is a sample description text for the slide.</p>', 'hoot-ubix-premium'),
				// 	'description' => __('You can use the <code>&lt;h3&gt;Lorem Ipsum Dolor&lt;/h3&gt;</code> tag to create styled heading.', 'hoot-ubix-premium'),
				// ),
				'content_bg' => array(
					'label'   => __( 'Content Styling', 'hoot-ubix-premium' ),
					'type'    => 'select',
					'default' => 'light-on-dark',
					'choices' => array(
						'dark'          => __('Dark Font', 'hoot-ubix-premium'),
						'light'         => __('Light Font', 'hoot-ubix-premium'),
						'dark-on-light' => __('Dark Font / Light Background', 'hoot-ubix-premium'),
						'light-on-dark' => __('Light Font / Dark Background', 'hoot-ubix-premium'),
					),
				),
				'button' => array(
					'label'       => __( 'Button Text', 'hoot-ubix-premium' ),
					'type'        => 'text',
				),
				'url' => array(
					'label'       => __( 'Button URL', 'hoot-ubix-premium' ),
					'type'        => 'url',
					'description' => __( 'Leave empty if you do not want to show the button.', 'hoot-ubix-premium' ),
					'input_attrs' => array(
						'placeholder' => 'http://',
					),
				),
			),
		);

		$settings["wt_html_slide_{$slide}-background"] = array(
			'label'       => sprintf( __( 'Slide %s Background', 'hoot-ubix-premium' ), $slide),
			'section'     => $section,
			'type'        => 'betterbackground',
			'priority'    => 805, // Non static options must have a priority
			'default'     => array(
				'color'      => '#dddddd',
			),
			'options'     => array( 'color', 'image', 'pattern' ),
		);

	} // end for

	/** Section **/

	$section = 'slider_img';

	$sections[ $section ] = array(
		'title'       => __( 'Frontpage - Image Slider', 'hoot-ubix-premium' ),
	);

	$settings['wt_img_slider_width'] = array(
		'label'       => __( 'Slider Width', 'hoot-ubix-premium' ),
		'sublabel'    => __("Note: This option is useful only if the <strong>Site Layout</strong> option is set to <strong>Stretched</strong> in 'Setup &amp; Layout' section.", 'hoot-ubix-premium'),
		'section'     => $section,
		'type'        => 'radioimage',
		'choices'     => array(
			'boxed'   => $imagepath . 'slider-width-boxed.png',
			'stretch' => $imagepath . 'slider-width-stretch.png',
		),
		'default'     => 'stretch',
	);

	$settings['wt_img_slider'] = array(
		'label'       => __( 'Slides', 'hoot-ubix-premium' ),
		'section'     => $section,
		'type'        => 'content',
		'priority'    => 815, // Non static options must have a priority
		'content'     => __( 'Premium version of this theme comes with capability to create <strong>Unlimited slides</strong>.', 'hoot-ubix-premium' ),
	);

	for ( $slide = 1; $slide <= 4; $slide++ ) { 

		$settings["wt_img_slide_{$slide}"] = array(
			'label'       => '',//sprintf( __( 'Slide %s Content', 'hoot-ubix-premium' ), $slide),
			'section'     => $section,
			'type'        => 'group',
			'priority'    => 815, // Non static options must have a priority
			'button'      => sprintf( __( 'Edit Slide %s', 'hoot-ubix-premium' ), $slide),
			'options'     => array(
				'description' => array(
					'label'       => '',
					'type'        => 'content',
					'content'     => '<span class="hoot-module-bg-title">' . sprintf( __( 'Slide %s Content', 'hoot-ubix-premium' ), $slide) . '</span>' . __( '<em>To hide this slide, simply leave the Image empty.</em>', 'hoot-ubix-premium' ),
				),
				'image' => array(
					'label'       => __( 'Slide Image', 'hoot-ubix-premium' ),
					'type'        => 'image',
					'description' => __( 'The main showcase image.', 'hoot-ubix-premium' ),
				),
				'caption' => array(
					'label'       => __( 'Slide Caption (optional)', 'hoot-ubix-premium' ),
					'type'        => 'textarea',
					'default'     => '<h3>Lorem Ipsum Dolor</h3>' . "\n" . __('<p>This is a sample description text for the slide.</p>', 'hoot-ubix-premium'),
					'description' => __('You can use the <code>&lt;h3&gt;Lorem Ipsum Dolor&lt;/h3&gt;</code> tag to create styled heading.', 'hoot-ubix-premium'),
				),
				'caption_bg' => array(
					'label'   => __( 'Caption Styling', 'hoot-ubix-premium' ),
					'type'    => 'select',
					'default' => 'light-on-dark',
					'choices' => array(
						'dark'          => __('Dark Font', 'hoot-ubix-premium'),
						'light'         => __('Light Font', 'hoot-ubix-premium'),
						'dark-on-light' => __('Dark Font / Light Background', 'hoot-ubix-premium'),
						'light-on-dark' => __('Light Font / Dark Background', 'hoot-ubix-premium'),
					),
				),
				'url' => array(
					'label'       => __( 'Slide Link', 'hoot-ubix-premium' ),
					'type'        => 'url',
					'description' => __( 'Leave empty if you do not want to link the slide.', 'hoot-ubix-premium' ),
					'input_attrs' => array(
						'placeholder' => 'http://',
					),
				),
				'button' => array(
					'label'       => __( 'Button Text (Optional)', 'hoot-ubix-premium' ),
					'type'        => 'text',
					'description' => __( 'Leave empty if you do not want to show the button and instead link the slide image (if you have a url set in the above field)', 'hoot-ubix-premium' ),
				),
			),
		);

	} // end for

	/** Section **/

	$section = 'archives';

	$sections[ $section ] = array(
		'title'       => __( 'Archives (Blog, Cats, Tags)', 'hoot-ubix-premium' ),
	);

	$settings['archive_post_content'] = array(
		'label'       => __( 'Post Items Content', 'hoot-ubix-premium' ),
		'section'     => $section,
		'type'        => 'radio',
		'choices'     => array(
			'excerpt' => __('Post Excerpt', 'hoot-ubix-premium'),
			'full-content' => __('Full Post Content', 'hoot-ubix-premium'),
		),
		'default'     => 'excerpt',
		'description' => __( 'Content to display for each post in the list', 'hoot-ubix-premium' ),
	);

	$settings['archive_post_meta'] = array(
		'label'       => __( 'Meta Information for Post List Items', 'hoot-ubix-premium' ),
		'sublabel'    => __( 'Check which meta information to display for each post item in the archive list.', 'hoot-ubix-premium' ),
		'section'     => $section,
		'type'        => 'checkbox',
		'choices'     => array(
			'author'   => __('Author', 'hoot-ubix-premium'),
			'date'     => __('Date', 'hoot-ubix-premium'),
			'cats'     => __('Categories', 'hoot-ubix-premium'),
			'tags'     => __('Tags', 'hoot-ubix-premium'),
			'comments' => __('No. of comments', 'hoot-ubix-premium')
		),
		'default'     => 'author, date, cats, comments',
	);

	$settings['excerpt_length'] = array(
		'label'       => __( 'Excerpt Length', 'hoot-ubix-premium' ),
		'section'     => $section,
		'type'        => 'text',
		'description' => __( 'Number of words in excerpt. Default is 105. Leave empty if you dont want to change it.', 'hoot-ubix-premium' ),
		'input_attrs' => array(
			'min' => 0,
			'max' => 3,
			'placeholder' => __( 'default: 105', 'hoot-ubix-premium' ),
		),
	);

	$settings['read_more'] = array(
		'label'       => __( "'Read More' Text", 'hoot-ubix-premium' ),
		'section'     => $section,
		'type'        => 'text',
		'description' => __( "Replace the default 'Read More' text. Leave empty if you dont want to change it.", 'hoot-ubix-premium' ),
		'input_attrs' => array(
			'placeholder' => __( 'default: READ MORE &rarr;', 'hoot-ubix-premium' ),
		),
	);

	/** Section **/

	$section = 'singular';

	$sections[ $section ] = array(
		'title'       => __( 'Single (Posts, Pages)', 'hoot-ubix-premium' ),
	);

	$settings['page_header_full'] = array(
		'label'       => __( 'Stretch Page Header to Full Width', 'hoot-ubix-premium' ),
		'sublabel'    => '<img src="' . $imagepath . 'page-header.png">',
		'section'     => $section,
		'type'        => 'checkbox',
		'choices'     => array(
			'default'    => __('Default (Archives, Blog, Woocommerce etc.)', 'hoot-ubix-premium'),
			'posts'      => __('For All Posts', 'hoot-ubix-premium'),
			'pages'      => __('For All Pages', 'hoot-ubix-premium'),
			'no-sidebar' => __('Always override for full width pages (any page which has no sidebar)', 'hoot-ubix-premium'),
		),
		'default'     => 'default, pages, no-sidebar',
		'description' => __('This is the Page Header area containing Page/Post Title and Meta details like author, categories etc.', 'hoot-ubix-premium'),
	);

	$settings['post_featured_image'] = array(
		'label'       => __( 'Display Featured Image', 'hoot-ubix-premium' ),
		'sublabel'    => __( 'Display featured image at the beginning of post/page content.', 'hoot-ubix-premium' ),
		'section'     => $section,
		'type'        => 'checkbox',
		'default'     => 1,
	);

	$settings['post_meta'] = array(
		'label'       => __( 'Meta Information on Posts', 'hoot-ubix-premium' ),
		'sublabel'    => __( "Check which meta information to display on an individual 'Post' page", 'hoot-ubix-premium' ),
		'section'     => $section,
		'type'        => 'checkbox',
		'choices'     => array(
			'author'   => __('Author', 'hoot-ubix-premium'),
			'date'     => __('Date', 'hoot-ubix-premium'),
			'cats'     => __('Categories', 'hoot-ubix-premium'),
			'tags'     => __('Tags', 'hoot-ubix-premium'),
			'comments' => __('No. of comments', 'hoot-ubix-premium')
		),
		'default'     => 'author, date, cats, tags, comments',
	);

	$settings['page_meta'] = array(
		'label'       => __( 'Meta Information on Page', 'hoot-ubix-premium' ),
		'sublabel'    => __( "Check which meta information to display on an individual 'Page' page", 'hoot-ubix-premium' ),
		'section'     => $section,
		'type'        => 'checkbox',
		'choices'     => array(
			'author'   => __('Author', 'hoot-ubix-premium'),
			'date'     => __('Date', 'hoot-ubix-premium'),
			'comments' => __('No. of comments', 'hoot-ubix-premium')
		),
		'default'     => 'author, date, comments',
	);

	$settings['post_meta_location'] = array(
		'label'       => __( 'Meta Information location', 'hoot-ubix-premium' ),
		'section'     => $section,
		'type'        => 'radio',
		'choices'     => array(
			'top'    => __('Top (below title)', 'hoot-ubix-premium'),
			'bottom' => __('Bottom (after content)', 'hoot-ubix-premium'),
		),
		'default'     => 'top',
	);

	$settings['post_prev_next_links'] = array(
		'label'       => __( 'Previous/Next Posts', 'hoot-ubix-premium' ),
		'sublabel'    => __( 'Display links to Prev/Next Post links at the end of post content.', 'hoot-ubix-premium' ),
		'section'     => $section,
		'type'        => 'checkbox',
		'default'     => 1,
	);

	$settings['contact-form'] = array(
		'label'       => __( 'Contact Form', 'hoot-ubix-premium' ),
		'section'     => $section,
		'type'        => 'content',
		'content'     => sprintf( __('This theme comes bundled with CSS required to style %1$sContact-Form-7%2$s forms. Simply install and activate the plugin to add Contact Forms to your pages.', 'hoot-ubix-premium'), '<a href="https://wordpress.org/plugins/contact-form-7/" target="_blank">', '</a>'), // @todo update link to docs
	);

	if ( current_theme_supports( 'woocommerce' ) ) :

		/** Section **/

		$section = 'woocommerce';

		$sections[ $section ] = array(
			'title'       => __( 'WooCommerce', 'hoot-ubix-premium' ),
			'priority'    => '58', // Non static options must have a priority
		);

		$wooproducts = range( 0, 99 );
		for ( $wpr=0; $wpr < 4; $wpr++ )
			unset( $wooproducts[$wpr] );
		$settings['wooshop_products'] = array(
			'label'       => __( 'Total Products per page', 'hoot-ubix-premium' ),
			'section'     => $section,
			'type'        => 'select',
			'priority'    => '925', // Non static options must have a priority
			'choices'     => $wooproducts,
			'default'     => '12',
			'description' => __( 'Total number of products to show on the Shop page', 'hoot-ubix-premium' ),
		);

		$settings['wooshop_product_columns'] = array(
			'label'       => __( 'Product Columns', 'hoot-ubix-premium' ),
			'section'     => $section,
			'type'        => 'select',
			'priority'    => '925', // Non static options must have a priority
			'choices'     => array(
				'2' => '2',
				'3' => '3',
				'4' => '4',
				'5' => '5',
			),
			'default'     => '3',
			'description' => __( 'Number of products to show in 1 row on the Shop page', 'hoot-ubix-premium' ),
		);

		$settings['sidebar_wooshop'] = array(
			'label'       => __( 'Sidebar Layout (Woocommerce Shop/Archives)', 'hoot-ubix-premium' ),
			'section'     => $section,
			'type'        => 'radioimage',
			'priority'    => '925', // Non static options must have a priority
			'choices'     => array(
				'wide-right'         => $imagepath . 'sidebar-wide-right.png',
				'narrow-right'       => $imagepath . 'sidebar-narrow-right.png',
				'wide-left'          => $imagepath . 'sidebar-wide-left.png',
				'narrow-left'        => $imagepath . 'sidebar-narrow-left.png',
				'narrow-left-right'  => $imagepath . 'sidebar-narrow-left-right.png',
				'narrow-left-left'   => $imagepath . 'sidebar-narrow-left-left.png',
				'narrow-right-right' => $imagepath . 'sidebar-narrow-right-right.png',
				'full-width'         => $imagepath . 'sidebar-full.png',
				'none'               => $imagepath . 'sidebar-none.png',
			),
			'default'     => 'wide-right',
			'description' => __("Set the default sidebar width and position for WooCommerce Shop and Archives pages like product categories etc.", 'hoot-ubix-premium'),
		);

		$settings['sidebar_wooproduct'] = array(
			'label'       => __( 'Sidebar Layout (Woocommerce Single Product Page)', 'hoot-ubix-premium' ),
			'section'     => $section,
			'type'        => 'radioimage',
			'priority'    => '925', // Non static options must have a priority
			'choices'     => array(
				'wide-right'         => $imagepath . 'sidebar-wide-right.png',
				'narrow-right'       => $imagepath . 'sidebar-narrow-right.png',
				'wide-left'          => $imagepath . 'sidebar-wide-left.png',
				'narrow-left'        => $imagepath . 'sidebar-narrow-left.png',
				'narrow-left-right'  => $imagepath . 'sidebar-narrow-left-right.png',
				'narrow-left-left'   => $imagepath . 'sidebar-narrow-left-left.png',
				'narrow-right-right' => $imagepath . 'sidebar-narrow-right-right.png',
				'full-width'         => $imagepath . 'sidebar-full.png',
				'none'               => $imagepath . 'sidebar-none.png',
			),
			'default'     => 'wide-right',
			'description' => __("Set the default sidebar width and position for WooCommerce product page", 'hoot-ubix-premium'),
		);

	endif;

	/** Section **/

	$section = 'footer';

	$sections[ $section ] = array(
		'title'       => __( 'Footer', 'hoot-ubix-premium' ),
	);

	$settings['footer'] = array(
		'label'       => __( 'Footer Layout', 'hoot-ubix-premium' ),
		'section'     => $section,
		'type'        => 'radioimage',
		'choices'     => array(
			'1-1' => $imagepath . '1-1.png',
			'2-1' => $imagepath . '2-1.png',
			'2-2' => $imagepath . '2-2.png',
			'2-3' => $imagepath . '2-3.png',
			'3-1' => $imagepath . '3-1.png',
			'3-2' => $imagepath . '3-2.png',
			'3-3' => $imagepath . '3-3.png',
			'3-4' => $imagepath . '3-4.png',
			'4-1' => $imagepath . '4-1.png',
		),
		'default'     => '3-1',
		'description' => sprintf( __('You must first save the changes you make here and refresh this screen for footer columns to appear in the Widgets panel (in customizer).<hr> Once you save the settings here, you can add content to footer columns using the %1$sWidgets Management screen%2$s.', 'hoot-ubix-premium'), '<a href="' . esc_url( admin_url('widgets.php') ) . '" target="_blank">', '</a>' ),
	);

	$settings['site_info'] = array(
		'label'       => __( 'Site Info Text (footer)', 'hoot-ubix-premium' ),
		'section'     => $section,
		'type'        => 'textarea',
		'default'     => __( '<!--default-->', 'hoot-ubix-premium'),
		'description' => sprintf( __('Text shown in footer. Useful for showing copyright info etc.<hr>Use the <code>&lt;!--default--&gt;</code> tag to show the default Info Text.<hr>Use the <code>&lt;!--year--&gt;</code> tag to insert the current year.<hr>Always use %1$sHTML codes%2$s for symbols. For example, the HTML for &copy; is <code>&amp;copy;</code>', 'hoot-ubix-premium'), '<a href="http://ascii.cl/htmlcodes.htm" target="_blank">', '</a>' ),
	);

	/** Premium Section **/

	$premium_features_file = HYBRIDEXTEND_INC . 'admin/premium.php';
	$hoot_customizer_load_premiumsection = apply_filters( 'hoot_customize_load_premiumsection', file_exists( $premium_features_file ) );
	if ( $hoot_customizer_load_premiumsection ) :

		$section = 'premium';

		$sections[ $section ] = array(
			'title'       => __( 'Premium Options', 'hoot-ubix-premium' ),
			'priority'    => 46,
		);

		include( HYBRIDEXTEND_INC . 'admin/premium.php' );
		$pcontent = '';
		$plink = ( !empty( $hoot_cta_url ) ) ? $hoot_cta_url : '';
		$pdemo = ( !empty( $hoot_cta_demo_url ) ) ? $hoot_cta_demo_url : '';
		$hoot_intro = ( !empty( $hoot_intro ) && is_array( $hoot_intro ) ) ? $hoot_intro : array();
		$hoot_intro = wp_parse_args( $hoot_intro, array(
			'name' => __('Upgrade to Premium', 'hoot-ubix-premium'),
			'desc' => '',
			) );

		if ( !empty( $hoot_options_premium ) && is_array( $hoot_options_premium ) ):
			$pcontent .= '<div id="hoot-psection" class="hoot-psection">';
				$pcontent .= '<h1 class="centered">' . $hoot_intro['name'] . '</h1>';
				$pcontent .= '<p class="hoot-upsell-intro centered">' . $hoot_intro['desc'] . '</p>';
				$pcontent .= '<p class="hoot-upsell-cta centered pcontent-actions pcontent-top">';
					if ( !empty( $plink ) ) $pcontent .= '<a class="button button-primary" href="' . esc_url( $plink ) . '" target="_blank"><i class="fa fa-star"></i> ' . __( 'Buy Now', 'hoot-ubix-premium' ) . '</a>';
					if ( !empty( $pdemo ) ) $pcontent .= '<a class="button button-secondary" href="' . esc_url( $pdemo ) . '" target="_blank"><i class="fa fa-eye"></i> ' . __( 'Theme Demo', 'hoot-ubix-premium' ) . '</a>';
				$pcontent .= '</p>';
				$pcontent .= '<div class="hoot-psection-content">';
					foreach ( $hoot_options_premium as $pofeature ) :
						$looparray = ( !empty( $pofeature['style'] ) && $pofeature['style'] == 'aside' ) ? $pofeature['blocks'] : array( $pofeature );
						foreach ( $looparray as $pfeature ) :
						$pcontent .= '<div class="section-premium premium-info">';
							if ( !empty( $pfeature['img'] ) )
								$pcontent .= '<div class="premium-info-img"><img src="' . esc_url( $pfeature['img'] ) . '" /></div>';
							$pcontent .= '<div class="premium-info-textblock">';
								if ( !empty( $pfeature['name'] ) )
									$pcontent .= '<div class="premium-info-heading"><h4 class="heading">' . $pfeature['name'] . '</h4></div>';
								if ( !empty( $pfeature['desc'] ) )
									$pcontent .= '<div class="premium-info-text">' . $pfeature['desc'] . '</div>';
								$pcontent .= '<div class="clear"></div>';
							$pcontent .= '</div>';
						$pcontent .= '</div>';
						endforeach;
					endforeach;
				$pcontent .= '</div>';
				$pcontent .= '<p class="hoot-upsell-cta centered pcontent-actions pcontent-bottom">';
					if ( !empty( $plink ) ) $pcontent .= '<a class="button button-primary" href="' . esc_url( $plink ) . '" target="_blank"><i class="fa fa-star"></i> ' . __( 'Buy Now', 'hoot-ubix-premium' ) . '</a>';
					if ( !empty( $pdemo ) ) $pcontent .= '<a class="button button-secondary" href="' . esc_url( $pdemo ) . '" target="_blank"><i class="fa fa-eye"></i> ' . __( 'Theme Demo', 'hoot-ubix-premium' ) . '</a>';
				$pcontent .= '</p>';
			$pcontent .= '</div>';
		endif;

		if ( !empty( $pcontent ) )
			$settings['premium-use'] = array(
				// 'label'       => __( 'Premium Options', 'hoot-ubix-premium' ),
				'section'     => $section,
				'type'        => 'content',
				'priority'    => '495', // Non static options must have a priority
				'content'     => $pcontent,
			);

	endif;


	/*** Return Options Array ***/
	return apply_filters( 'hoot_theme_customizer_options', array(
		'settings' => $settings,
		'sections' => $sections,
		'panels'   => $panels,
	) );

}
endif;

/**
 * Add Options (settings, sections and panels) to HybridExtend_Customize class options object
 *
 * @since 1.0
 * @access public
 * @return void
 */
if ( !function_exists( 'hoot_theme_add_customizer_options' ) ) :
function hoot_theme_add_customizer_options() {

	$hybridextend_customize = HybridExtend_Customize::get_instance();

	// Add Options
	$options = hoot_theme_customizer_options();
	$hybridextend_customize->add_options( array(
		'settings' => $options['settings'],
		'sections' => $options['sections'],
		'panels' => $options['panels'],
		) );

}
endif;
add_action( 'init', 'hoot_theme_add_customizer_options', 0 ); // cannot hook into 'after_setup_theme' as this hook is already being executed (this file is loaded at after_setup_theme @priority 10) (hooking into same hook from within while hook is being executed leads to undesirable effects as $GLOBALS[$wp_filter]['after_setup_theme'] has already been ksorted)
// Hence, we hook into 'init' @priority 0, so that settings array gets populated before 'widgets_init' action ( which itself is hooked to 'init' at priority 1 ) for creating widget areas ( settings array is needed for creating defaults when user value has not been stored )

/**
 * Enqueue custom scripts to customizer screen
 *
 * @since 1.0
 * @return void
 */
function hoot_theme_customizer_enqueue_scripts() {
	// Enqueue Styles
	wp_enqueue_style( 'hoot-theme-customize-styles', HYBRIDEXTEND_INCURI . 'admin/css/customize.css', array(),  HYBRIDEXTEND_VERSION );
	// Enqueue Scripts
	wp_enqueue_script( 'hoot-theme-customize-script', HYBRIDEXTEND_INCURI . 'admin/js/customize.js', array( 'jquery', 'wp-color-picker', 'customize-controls', 'hybridextend-customize-script' ), HYBRIDEXTEND_VERSION, true );
}
// Load scripts at priority 12 so that Hoot Customizer Interface (11) / Custom Controls (10) have loaded their scripts
add_action( 'customize_controls_enqueue_scripts', 'hoot_theme_customizer_enqueue_scripts', 12 );

/**
 * Modify default WordPress Settings Sections and Panels
 *
 * @since 1.0
 * @param object $wp_customize
 * @return void
 */
function hoot_customizer_modify_default_options( $wp_customize ) {

	if ( function_exists( 'the_custom_logo' ) ) {
		$wp_customize->get_control( 'custom_logo' )->section = 'logo';
		$wp_customize->get_control( 'custom_logo' )->priority = 175; // Replaces theme's logo_image // Update in premium if needed
		$wp_customize->get_control( 'custom_logo' )->width = 250;
		$wp_customize->get_control( 'custom_logo' )->height = 90;
		// $wp_customize->get_control( 'custom_logo' )->type = 'image'; // Stored value becomes url instead of image ID (fns like the_custom_logo() dont work)
		// Defaults: [type] => cropped_image, [width] => 150, [height] => 150, [flex_width] => 1, [flex_height] => 1, [button_labels] => array(...), [label] => Logo
		$wp_customize->get_control( 'custom_logo' )->active_callback = 'hoot_callback_logo_image';
	}

	if ( function_exists( 'get_site_icon_url' ) )
		$wp_customize->get_control( 'site_icon' )->priority = 10;

	$wp_customize->get_section( 'static_front_page' )->priority = 3;

	// $wp_customize->get_section( 'title_tagline' )->panel = 'general';
	// $wp_customize->get_section( 'title_tagline' )->priority = 1;
	// $wp_customize->get_section( 'colors' )->panel = 'styling';

	// global $wp_version;
	// if ( version_compare( $wp_version, '4.3', '>=' ) ) // 'Creating Default Object from Empty Value' error before 4.3 since 'nav_menus' panel did not exist ( we did have 'nav' section till 4.1.9 i.e. before 4.2 )
	// 	$wp_customize->get_panel( 'nav_menus' )->priority = 999;
	// This will set the priority, however will give a 'Creating Default Object from Empty Value' error first.
	// $wp_customize->get_panel( 'widgets' )->priority = 999;

}
add_action( 'customize_register', 'hoot_customizer_modify_default_options', 100 );

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @since 1.0
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 * @return void
 */
function hoot_customizer_customize_register( $wp_customize ) {
	// $wp_customize->get_setting( 'blogname' )->transport = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport = 'postMessage';
}
add_action( 'customize_register', 'hoot_customizer_customize_register' );

/**
 * Callback Functions for customizer settings
 */

function hoot_callback_logo_size( $control ) {
	$selector = $control->manager->get_setting('logo')->value();
	return ( $selector == 'text' || $selector == 'mixed' ) ? true : false;
}
function hoot_callback_site_title_icon( $control ) {
	$selector = $control->manager->get_setting('logo')->value();
	return ( $selector == 'text' || $selector == 'custom' ) ? true : false;
}
function hoot_callback_logo_image( $control ) {
	$selector = $control->manager->get_setting('logo')->value();
	return ( $selector == 'image' || $selector == 'mixed' || $selector == 'mixedcustom' ) ? true : false;
}
function hoot_callback_logo_image_width( $control ) {
	$selector = $control->manager->get_setting('logo')->value();
	return ( $selector == 'mixed' || $selector == 'mixedcustom' ) ? true : false;
}
function hoot_callback_logo_custom( $control ) {
	$selector = $control->manager->get_setting('logo')->value();
	return ( $selector == 'custom' || $selector == 'mixedcustom' ) ? true : false;
}
function hoot_callback_show_tagline( $control ) {
	$selector = $control->manager->get_setting('logo')->value();
	return ( $selector == 'text' || $selector == 'custom' || $selector == 'mixed' || $selector == 'mixedcustom' ) ? true : false;
}
function hoot_callback_show_primary_menuarea_custom( $control ) {
	$selector = $control->manager->get_setting('primary_menuarea')->value();
	return ( $selector == 'custom' ) ? true : false;
}

function hoot_callback_box_background_color( $control ) {
	$selector = $control->manager->get_setting('site_layout')->value();
	return ( $selector == 'boxed' ) ? true : false;
}

/**
 * Specific Sanitization Functions for customizer settings
 * This is disabled by default. Users need to add filter to enable this.
 * See specific settings above for more details.
 */
function hoot_custom_sanitize_textarea_allowscript( $value ) {
	global $allowedposttags;
	// Allow javascript to let users ad code for ads etc.
	$allow = array_merge( $allowedposttags, array(
		'script' => array( 'type' => true, ),
	) );
	return wp_kses( $value , $allow );
}

/**
 * Helper function to return the theme mod value.
 * If no value has been saved, it returns $default provided by the theme.
 * If no $default provided, it checks the default value specified in the customizer settings..
 * 
 * @since 1.0
 * @access public
 * @param string $name
 * @param mixed $default
 * @return mixed
 */
function hoot_get_mod( $name, $default = NULL ) {

	if ( is_customize_preview() ) {

		// We cannot use "if ( !empty( $mod ) )" as this will become false for empty values, and hence fallback to default. isset() is not an option either as $mod is always set. Hence we calculate the default here, and supply it as second argument to get_theme_mod()
		$default = ( $default !== NULL ) ? $default : hybridextend_customize_get_default( $name );
		$mod = get_theme_mod( $name, $default );

		return apply_filters( 'hoot_get_mod_customize', $mod, $name, $default );

	} else {

		/*** Return value if set ***/

		// Cache
		static $mods = NULL;

		// Get the values from database
		if ( !$mods ) {
			$mods = get_theme_mods();
			$mods = apply_filters( 'hoot_get_mod', $mods );
		}

		if ( isset( $mods[$name] ) ) {
			// Filter applied as in get_theme_mod() core function
			$mods[$name] = apply_filters( "theme_mod_{$name}", $mods[$name] );
			// Add exceptions: If a value has been set but is empty, this gives the option to return default values in such cases. Simply return $override as (bool)true.
			$override = apply_filters( 'hoot_get_mod_override_empty_values', false, $name, $mods[$name] );
			if ( $override !== true )
				return apply_filters( 'hoot_sanitize_get_mod', $mods[$name], $name );
		}

		/*** Return default if provided ***/
		if ( $default !== NULL )
			return apply_filters( "theme_mod_{$name}", $default );

		/*** Return default theme option value specified in customizer settings ***/
		$default = hybridextend_customize_get_default( $name );
		if ( !empty( $default ) )
			return apply_filters( "theme_mod_{$name}", $default );

	}

	/*** We dont have anything! ***/
	return false;
}

/**
 * Sanitization function for return value of theme mod
 * jnes No chan-ni applied
 * 
 * @since 1.0
 * @access public
 * @param mixed $value
 * @param string $name
 * @return mixed
 */
function hoot_sanitize_get_mod( $value, $name ) {

	/** Get Setting array from the Customizer Class **/
	$hybridextend_customize = HybridExtend_Customize::get_instance();
	$settings = $hybridextend_customize->get_options('settings');

	if ( isset( $settings[ $name ] ) ) {

		/** Load Sanitization functions if not loaded already (for frontend) **/
		if ( !function_exists( 'hybridextend_sanitize_enum' ) )
			require_once( HYBRIDEXTEND_DIR . 'includes/sanitization.php' );

		/** Sanitize values **/
		if ( isset( $settings[ $name ]['type'] ) ) {
			switch ( $settings[ $name ]['type'] ) {

				// Text Field
				case 'text':
					$value = sanitize_text_field( $value ); // Alternately, can also use "hybridextend_customize_sanitize_text" to use wp_kses() instead
					break;

				// Textarea Field
				case 'textarea':
					$value = hybridextend_sanitize_textarea( $value );
					break;

				// Select, Radio, Image Radio
				case 'select':
				case 'radio':
				case 'radioimage':
					$value = hybridextend_sanitize_enum( $value, $settings[ $name ]['choices'] );
					break;

				// Image / Upload Field
				case 'image':
				case 'upload':
					$value = esc_url( $value );
					break;

				// URL Field
				case 'url':
					$value = esc_url( $value );
					break;

				// Range Field
				case 'range':
					$value = hybridextend_customize_sanitize_range( $value );
					break;

				// Dropdown Pages Field
				case 'dropdown-pages':
					$value = absint( $value );
					break;

				// Color Field
				case 'color':
					$value = sanitize_hex_color( $value );
					break;

				// Checkbox Field
				case 'checkbox':
					$value = hybridextend_sanitize_checkbox( $value );
					break;

				// MultiCheckbox Field
				case 'bettercheckbox':
					if ( !empty( $settings[ $name ]['choices'] ) && is_array( $settings[ $name ]['choices'] ) )
						$value = hybridextend_customize_sanitize_multicheckbox( $value, $name );
					else
						$value = hybridextend_sanitize_checkbox( $value );
					break;

				// Icon Field
				case 'icon':
					$value = hybridextend_sanitize_icon( $value, $name );
					break;

				// Sortlist Field
				case 'sortlist':
					$value = hybridextend_customize_sanitize_sortlist( $value, $name );
					break;

			} // endswitch
		} // endif

	} // endif

	return $value;
}