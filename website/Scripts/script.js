// JavaScript Document


$(document).ready(

	function(){
		$("#nav_bar > ul > li > ul").hide();
	}
	
);

$(document).ready(

	function(){
		
		$("#nav_bar > ul > li").hoverIntent({
			
			over: function(){$(this).children("ul").slideDown(200)},
			out: function(){$(this).children("ul").slideUp(200)},
			timeout: 500
		
		})
	}
	
);