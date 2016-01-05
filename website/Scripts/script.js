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