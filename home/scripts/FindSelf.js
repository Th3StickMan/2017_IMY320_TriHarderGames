$( document ).ready(function() {
	$(document).on('click', '.navbar-brand', function(event){
	event.preventDefault();
	$('html, body').animate({
		scrollTop: $( $.attr(this, 'href') ).offset().top+10
	}, 500);
	$("a.smooth").css("color", "rgba(255,255,255,0.5)");
	$(this).css("color", "rgb(244,122,0)!important"); 
});
});
