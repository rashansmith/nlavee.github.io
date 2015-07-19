$(document).ready(function (){
	
	$("#choose-section").change(function() {
		var value_chosen = $("#choose-section").val();
		console.log(value_chosen);
		if(value_chosen == "6math") {
			document.location.href = 'http://nlavee.github.io/main/6math.html';
		} else if(value_chosen == "7math") {
			document.location.href = 'http://nlavee.github.io/main/7math.html';
		} else if(value_chosen == "8math") {
			document.location.href = 'http://nlavee.github.io/main/8math.html';
		} else if(value_chosen == "6science") {
			document.location.href = 'http://nlavee.github.io/main/6science.html';
		}  else if(value_chosen == "7science") {
			document.location.href = 'http://nlavee.github.io/main/7science.html';
		}  else if(value_chosen == "8science") {
			document.location.href = 'http://nlavee.github.io/main/8science.html';
		}  else if(value_chosen == "language") {
			document.location.href = 'http://nlavee.github.io/main/678language.html';
		}
	});
	
	$("#login").change(function() {
		document.location.href = 'http://nlavee.github.io/login_page/login.html';
	});

	$("#back").click(function() {
		document.location.href = 'http://nlavee.github.io/Ketchup/index.html';
	});

	$(".block1").mouseenter (function(){
		$(this).css({
			"background-image": "url(media/block1.gif)"
		});
	}).mouseleave(function() {
		$(this).css({
			"background-image": "url(media/black.jpg)"
		});
	});
    
    $(".block2").mouseenter (function(){
		$(this).css({
			"background-image": "url(media/block1.gif)"
		});
	}).mouseleave(function() {
		$(this).css({
			"background-image": "url(media/black.jpg)"
		});
	});
    
    $(".block3").mouseenter (function(){
		$(this).css({
			"background-image": "url(media/block1.gif)"
		});
	}).mouseleave(function() {
		$(this).css({
			"background-image": "url(media/black.jpg)"
		});
	});
    
    $(".block4").mouseenter (function(){
		$(this).css({
			"background-image": "url(media/block1.gif)"
		});
	}).mouseleave(function() {
		$(this).css({
			"background-image": "url(media/black.jpg)"
		});
	});
    
    $(".block5").mouseenter (function(){
		$(this).css({
			"background-image": "url(media/block1.gif)"
		});
	}).mouseleave(function() {
		$(this).css({
			"background-image": "url(media/black.jpg)"
		});
	});
    
    $(".block6").mouseenter (function(){
		$(this).css({
			"background-image": "url(media/block1.gif)"
		});
	}).mouseleave(function() {
		$(this).css({
			"background-image": "url(media/black.jpg)"
		});
	});
    
    $(".areas").mouseenter (function(){
    	$(this).css({
    		"color": "#FF0000",
    		"background": "rgba(76,76,76,1)"
    	/* Chrome 10+, Saf5.1+ */
    	});
    }).mouseleave(function() {
    	    	$(this).css({
    		"color": "white",
    		"background-image": "url(media/black.jpg)"	
    	});
    });
    
});
