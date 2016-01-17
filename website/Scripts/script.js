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

});

$(document).ready( function(){

	$(".remove_product").hide();

});


$(document).ready( function(){

	$( ".add_product" ).click( function(){ 

		$(".product_selection:first").clone(true).appendTo("#product_selection_container").slideDown();
		
		$(".product_selection:last .remove_product").show();
	
	});

});

$(document).ready( function(){

	$( ".remove_product" ).click( function(){ 

		$(this).parent().slideUp();
	
	});

});




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






$(document).ready( function(){

	$( "#product_selection_container > p" ).click( function(){ 
	
		alert("cats are great");
	
	});

});



$(document).ready(function() {
	

	alert("FDSF");
	
});