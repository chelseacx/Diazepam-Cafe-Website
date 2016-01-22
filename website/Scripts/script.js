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
			
			over: function(){$(this).children("ul").slideDown(60)},
			out: function(){$(this).children("ul").slideUp(100)},
			timeout: 500
		
		})
	}
	
);



//The following validates the question form's input fields before the user can submit it

$(document).ready(

	$('#question_form').validate()

);


// This is for the product page flavour carousel

$(document).ready(function() {  


	$("#thumbnails_list li:last").insertBefore($("#thumbnails_list li:first"));
	
		  
	$("#right_scroll img").click(function(){  
	
		var thumbnail_width = $("#thumbnails_list li").outerWidth();  
			  
		var left_indent = parseInt($("#thumbnails_list").css("left")) - thumbnail_width;  
			  
		$("#thumbnails_list").animate({
			left: left_indent
			},
			{
				queue: false, 
				duration:100,
				complete: function(){  
			  
					$("#thumbnails_list li:last").after($("#thumbnails_list li:first"));  
			  
					$("#thumbnails_list").css({"left" : "-100px"});  
				}
				
			});  
		
		
	});  
      

	$("#left_scroll img").click(function(){

		  
		var thumbnail_width = $("#thumbnails_list li").outerWidth();  
			  
		var left_indent = parseInt($("#thumbnails_list").css("left")) + thumbnail_width;  
		
		$("#thumbnails_list").animate({
			left: left_indent
			},
			{
				queue: false, 
				duration:100,
				complete: function(){  
			  
					$("#thumbnails_list li:first").before($("#thumbnails_list li:last")); 
			  
					$("#thumbnails_list").css({"left" : "-100px"});  
				}
				
			});		 
		  
	});  
	
	
	$("#flavour_main").show();

	$("#banana_split_thumb").click( function(){
    
    	$("#flavour_details_container img").hide();
        $("#banana_split").show();
    
    });

	$("#brownie_bear_thumb").click( function(){
    
    	$("#flavour_details_container img").hide();
        $("#brownie_bear").show();
    
    });

	$("#cheesecake_boutique_thumb").click( function(){
    
    	$("#flavour_details_container img").hide();
        $("#cheesecake_boutique").show();
    
    });

	$("#chocolate_sensation_thumb").click( function(){
    
    	$("#flavour_details_container img").hide();
        $("#chocolate_sensation").show();
    
    });    

	$("#coffee_dynamite_thumb").click( function(){
    
    	$("#flavour_details_container img").hide();
        $("#coffee_dynamite").show();
    
    });  

	$("#green_tea_spa_thumb").click( function(){
    
    	$("#flavour_details_container img").hide();
        $("#green_tea_spa").show();
    
    });

	$("#mint_chocopower_thumb").click( function(){
    
    	$("#flavour_details_container img").hide();
        $("#mint_chocopower").show();
    
    });

	$("#pistachio_almond_thumb").click( function(){
    
    	$("#flavour_details_container img").hide();
        $("#pistachio_almond").show();
    
    });

	$("#strawberry_candy_thumb").click( function(){
    
    	$("#flavour_details_container img").hide();
        $("#strawberry_candy").show();
    
    });    

	$("#vanilla_blossom_thumb").click( function(){
    
    	$("#flavour_details_container img").hide();
        $("#vanilla_blossom").show();
    
    }); 
	
});  


// This is for the product page menu carousel

$(document).ready(function() {  


	$("#menu_thumbnails_list li:last").insertBefore($("#menu_thumbnails_list li:first"));
	
		  
	$("#menu_right_scroll img").click(function(){  
	
		var thumbnail_width = $("#menu_thumbnails_list li").outerWidth();  
			  
		var left_indent = parseInt($("#menu_thumbnails_list").css("left")) - thumbnail_width;  
			  
		$("#menu_thumbnails_list").animate({
			left: left_indent
			},
			{
				queue: false, 
				duration:100,
				complete: function(){  
			  
					$("#menu_thumbnails_list li:last").after($("#menu_thumbnails_list li:first"));  
			  
					$("#menu_thumbnails_list").css({"left" : "-100px"});  
				}
				
			});  
		
		
	});  
      

	$("#menu_left_scroll img").click(function(){

		  
		var thumbnail_width = $("#menu_thumbnails_list li").outerWidth();  
			  
		var left_indent = parseInt($("#menu_thumbnails_list").css("left")) + thumbnail_width;  
		
		$("#menu_thumbnails_list").animate({
			left: left_indent
			},
			{
				queue: false, 
				duration:100,
				complete: function(){  
			  
					$("#menu_thumbnails_list li:first").before($("#thumbnails_list li:last")); 
			  
					$("#menu_thumbnails_list").css({"left" : "-100px"});  
				}
				
			});		 
		  
	});  
	
	
	$("#menu").show();

	$(".single_scoop_thumb").click( function(){
    
    	$("#menu_details_container img").hide();
        $("#single_scoop").show();
    
    });

	$(".double_scoop_thumb").click( function(){
    
    	$("#menu_details_container img").hide();
        $("#double_scoop").show();
    
    });

	$(".ice_cream_cake_thumb").click( function(){
    
    	$("#menu_details_container img").hide();
        $("#ice_cream_cake").show();
    
    });

	$(".waffle_ice_cream_thumb").click( function(){
    
    	$("#menu_details_container img").hide();
        $("#waffle_ice_cream").show();
    
    });    

	$(".ice_cream_cookies_thumb").click( function(){
    
    	$("#menu_details_container img").hide();
        $("#ice_cream_cookies").show();
    
    });  

	$(".fried_ice_cream_thumb").click( function(){
    
    	$("#menu_details_container img").hide();
        $("#fried_ice_cream").show();
    
    });

	
});  




//The following is for adding or removing products on the online order form


$(document).ready( function(){


	function updatePrice() {

		
		var productCost; 
		var productQuantity;
		var productTotal = 0;
		var calcTotal;
		
		$('span.product_cost:not(:first)').each( function(){
			
				productCost = $(this).text();
				productQuantity = $(this).nextAll('span.product_quantity').text();
				calcTotal = parseFloat(productCost) * parseInt(productQuantity);
				$(this).nextAll('span.product_total').html(calcTotal);
				
				productTotal = productTotal + parseFloat(calcTotal);

		});

		$('#total_cost').html(productTotal);
	
	}


	function updateHeight() {
		
	var formHeight = $('#order_form').height();
	formHeight = formHeight + 400;
	$('#order_form_container').css({
		'min-height': formHeight,
		'height': formHeight
	});	
		
		
	}



	$('.product_selection_0').hide().clone(true).attr('class', "product_selection_1").appendTo('#product_selection_container').show();
	
	$('.remove_product').hide();


	$('p.add_product').click( function(){
	
		var divClassName = $('#product_selection_container div:last-child').attr('class');
		var classNumber = divClassName.substr(18, 1);

		
		classNumber = parseInt(classNumber) + 1;
		divClassName = 'product_selection_' + classNumber;
		
		
		$('.product_selection_0').clone(true).attr('class', divClassName).appendTo('#product_selection_container').slideDown();
		
		$('#product_selection_container div:last-child .remove_product').show();
		
		updatePrice();
		updateHeight();
	
	});


	$('.remove_product').click( function(){
	
		$(this).parent().remove();
		
		updatePrice();
		updateHeight();
	
	});
	
	
	$('select.product_type').change( function() {

		var productType = $(this).val();
		var productCost;
		
		
		if (productType == "Single Scoop") 
			{productCost = 3.5;}
		else if (productType == "Double Scoop") 
			{productCost = 5;} 
		else if (productType == "Ice-Cream Cake") 
			{productCost = 11;}
		else if (productType == "Waffle Ice-Cream") 
			{productCost = 4;}  
		else if (productType == "Ice-Cream Cookies") 
			{productCost = 3;} 
		else if (productType == "Fried Ice-Cream") 
			{productCost = 4;}
		else 
			{productCost = 0;}  
		
		
		$(this).nextAll('.product_cost').html(productCost);
	
	});


	$('input.quantity').change( function() {	
		
		var productQuantity = $(this).val();
		$(this).nextAll('.product_quantity').html(productQuantity);

	});

	$('#product_selection_container').change(updatePrice);

});


$(document).ready( function(){
		
	var formHeight = $('#order_form').height();
	$('#order_form_container').atr('min-height', formHeight);


});




//The following is for the slideshow on the index page


$(document).ready( function(){
		
	$('.cycle-slideshow').cycle({
		fx: 'fade',
		speed: '8000',
		timeout: '2500',
		easing: 'linear'
		
	});
	
});


