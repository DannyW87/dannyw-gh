$(document).ready(function(){


	$('.menu-item:not(.rsvp) a').click(function(e) {
		e.preventDefault();

		if( !$(this).hasClass('active') ) {
			$('.menu-item a').removeClass('active');
			$(this).addClass('active');
		} else {

			return;
		
		}

		if($('#main').hasClass('flipped')) {
			$('#main').removeClass('flipped');
			$('.offcanvas-menu').removeClass('flipped2');
			// $('header').removeClass('content-flipped');
			$('#main').addClass('unflipped');
			$('.offcanvas-menu').addClass('unflipped2');
			// $('header').addClass('content-unflipped');
			// $('header').delay(500)
			// 	.queue( function(next){ 
			// 			$('header').css( "transform", "rotateY(0deg)" );
			// 		next(); 
			// 	});
		} else {
			$('#main').removeClass('unflipped');
			$('.offcanvas-menu').removeClass('unflipped2');
			$('#main').addClass('flipped');
			$('.offcanvas-menu').addClass('flipped2');
			// $('header').removeClass('content-unflipped');
			// $('header').addClass('content-flipped');
			// $('header').delay(500)
			// 	.queue( function(next){ 
			// 			$('header').css( "transform", "rotateY(180deg)" );
			// 		next(); 
			// 	});
		}

		if( $(this).hasClass('the-day') ) {
			$('.content').delay(500)
				.queue( function(next){ 
					$(this).hide();
					if($('#main').hasClass('flipped')) {
						$(this).css( "transform", "rotateY(180deg)" );
						$('header').css( "transform", "rotateY(180deg)" );
						$('.offcanvas-menu').css( "transform", "rotateY(180deg)" );
					} else {
						$(this).css( "transform", "rotateY(0deg)" );
						$('header').css( "transform", "rotateY(0deg)" );
						$('.offcanvas-menu').css( "transform", "rotateY(0deg)" );
					}
					$('.content.the-day').show();
					next(); 
				});
		} else if( $(this).hasClass('food') ) {
			$('.content').delay(500)
				.queue( function(next){ 
					$(this).hide();
					if($('#main').hasClass('flipped')) {
						$(this).css( "transform", "rotateY(180deg)" );
						$('header').css( "transform", "rotateY(180deg)" );
						$('.offcanvas-menu').css( "transform", "rotateY(180deg)" );
					} else {
						$(this).css( "transform", "rotateY(0deg)" );
						$('header').css( "transform", "rotateY(0deg)" );
						$('.offcanvas-menu').css( "transform", "rotateY(0deg)" );
					}
					$('.content.food').show();
					next(); 
				});
		}

	});

	$('.offcanvas-menu .menu-item:not(.rsvp) a').click(function(e) { // Close off canvas once menu item has been clicked
		e.preventDefault();
		$('#offcanvas').css( "left", "-250px" );

		// if( $(this).hasClass('the-day') ) {
		// 	$('.content').delay(500)
		// 		.queue( function(next){ 
		// 			$(this).hide();
		// 			if($('#main').hasClass('flipped')) {
		// 				$(this).css( "transform", "rotateY(180deg)" );
		// 			} else {
		// 				$(this).css( "transform", "rotateY(0deg)" );
		// 			}
		// 			$('.content.the-day').show();
		// 			next(); 
		// 		});
		// } else if( $(this).hasClass('food') ) {
		// 	$('.content').delay(500)
		// 		.queue( function(next){ 
		// 			$(this).hide();
		// 			if($('#main').hasClass('flipped')) {
		// 				$(this).css( "transform", "rotateY(180deg)" );
		// 			} else {
		// 				$(this).css( "transform", "rotateY(0deg)" );
		// 			}
		// 			$('.content.food').show();
		// 			next(); 
		// 		});
		// }
	});

	$('.item.offcanvas').click(function(e) { // Fix flipped offcanvas menu
		e.preventDefault();
		if( $('.offcanvas-menu').hasClass('flipped2') ) {
			$('#offcanvas').css( "left", "" );
			$('#offcanvas').css( "right", "0" );
		} else {
			$('#offcanvas').css( "right", "" );
			$('#offcanvas').css( "left", "0" );
		}
	});

	$('.closebtn').click(function(e) {
		e.preventDefault();
		if( $('.offcanvas-menu').hasClass('flipped2') ) {
			$('#offcanvas').css( "right", "-250px" );
		} else {
			$('#offcanvas').css( "left", "-250px" );
		}
	});




});

// function openNav() {
//     document.getElementById("offcanvas").style.left = "0";
// }

//  Set the width of the side navigation to 0 and the left margin of the page content to 0 
// function closeNav() {
//     document.getElementById("offcanvas").style.left = "-250px";
// }