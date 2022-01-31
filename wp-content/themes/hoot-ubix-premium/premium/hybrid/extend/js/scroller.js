jQuery(document).ready(function($) {
	"use strict";

	/*** Top Button ***/
	if( 'undefined' == typeof hybridExtendData || 'undefined' == typeof hybridExtendData.topButton || 'enable' == hybridExtendData.topButton ) {
		// Scrollpoints
		if (typeof $.fn.hybridExtendScroller != 'undefined')
			$('.fixed-goto-top').hybridExtendScroller({padding:0});
		// Waypoints
		var $top_btn = $('.waypoints-goto-top');
		if ( $top_btn.length ) {
			if (typeof Waypoint === "function") {
				$top_btn.hide();
				var waypoints = $('#page-wrapper').waypoint(function(direction) {
					if(direction=='down')
						$top_btn.fadeIn('fast');
					if(direction=='up')
						$top_btn.fadeOut('fast');
					},{offset: '-80%'});
			} else {
				$top_btn.show();
			}
		}
	}

	/*** Watch all links within .scrollpoints container and links with .scrollpoint ***/
	/*** Used for implementing Menu Scroll ***/
	if( 'undefined' == typeof hybridExtendData || 'undefined' == typeof hybridExtendData.scrollpointsContainer || 'enable' == hybridExtendData.scrollpointsContainer ) {
		// Scrollpoints
		if (typeof $.fn.hybridExtendScroller != 'undefined')
			$('.scrollpointscontainer a, a.scrollpoint').hybridExtendScroller();
	}

	/*** Scroll on URL Load ***/
	// Scroll on url load has a few inherent issues. Complying with standard url hash structure, we
	// cant override browser behavior. Adopting additional methods (prepend hash tag with unique id,
	// or using query args instead of hash) leads to non standard url (what if when user changes
	// themes).
	// Hence possible solution for now: Pepend hash tag with unique id using scroller js only..
	if( 'undefined' == typeof hybridExtendData || 'undefined' == typeof hybridExtendData.urlScroller || 'enable' == hybridExtendData.urlScroller ) {
		if (typeof $.fn.hybridExtendScroller != 'undefined')
			$('#page-wrapper').hybridExtendScroller({urlLoad:true, speed:1500});
	}

	/*** Sticky Header ***/
	if( 'undefined' == typeof hybridExtendData || 'undefined' == typeof hybridExtendData.stickyHeader || 'enable' == hybridExtendData.stickyHeader ) {
		if (typeof Waypoint === "function" && $('#header.hybridextend-sticky-header').length) {
			var stickyHeader = new Waypoint.Sticky({
				element: $('#header.hybridextend-sticky-header')[0],
				// offset: -10 // fixes bug: header gets stuck when no topbar i.e. header is at top 0 at page load
				offset: -300
			});
		}
	}

});