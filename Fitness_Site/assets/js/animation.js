$(document).ready(function(){
	$('.block').click(function(){
		if($(this).css("display") === "block"){
				$(this).css({"display": "inline-block","width": "22%", "background-color": "#000", "position":"relative","height":"auto"});
				$(this).siblings().fadeIn().css("display", "inline-block");
				$("img").css({"display": "none"})
		}
		else{
			$(this).siblings().fadeOut(500);
			$(this).delay(1000).animate({"width": "100%","height": "400px"});
			$(this).promise().done(function(){
				$(this).delay(2000).css({"display":"block", "background-color": "red"});
				$("img").css({"display":"block"})
			});
			
		}
	});
});