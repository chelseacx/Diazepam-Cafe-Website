// JavaScript Document



// The sub-menu is hidden initially
$(document).ready(

	function(){
		$("#nav_bar > ul > li > ul").hide();
	}
	
);



// The submenu will slide down upon hovering on its parent element. There will be a 5s delay before the submenu slides back up when the mouse moves away from the parent element
$(document).ready(

	function(){
		
		$("#nav_bar > ul > li").hoverIntent({
			
			over: function(){$(this).children("ul").slideDown(200)},
			out: function(){$(this).children("ul").slideUp(200)},
			timeout: 500
		
		})
	}
	
);



//The following validates the question form's input fields before the user can submit it

$(document).ready(

	$('#question_form').validate()

);



//The following is for the product selection section of the online order form

$(document).ready( function(){

	$(".product_selection").hide().clone(true).appendTo("#product_selection_container").show();
	$(".remove_product").hide();


});



//This adds and removes the product selection line

$(document).ready( function(){

	$( ".add_product" ).click( function(){ 

		$(".product_selection:first").clone(true).appendTo("#product_selection_container").slideDown();
		
		$(".product_selection:last .remove_product").show();
	
	});
	
	
	$( ".remove_product" ).click( function(){ 

		$(this).parent().slideUp();
	
	});

});



// This is for calculating the total order cost

/*

$(document).ready( function(){
	

	var productType = $(".product_type").val;
	var productPrice; 
	
	if (productType = "single_scoop") {
		
		productPrice = 3.5;	
	}

	else if (productType = "double_scoop") {
	
		productPrice = 5;
		
	}
	
	else if (productType = "ice_cream_cake") {
	
		productPrice = 11;
		
	}	

	else if (productType = "waffle_ice_cream") {
	
		productPrice = 4;
		
	}

	else if (productType = "ice_cream_cookies") {
	
		productPrice = 3;
		
	}
	
	else if (productType = "fried_ice_cream") {
	
		productPrice = 4;
		
	}

	else {
	
		productPrice = 0;
		
	}
	
	$('<p>').html(productPrice).insertAfter('.quantity');

});

*/



//The following is for the slideshow on the index page


$(document).ready(

	function(){	
	$('.cycle-slideshow').cycle({
		fx: 'fade',
		speed: '8000',
		timeout: '2500',
		easing: 'linear'
		
	});
	}

);



