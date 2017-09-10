$( document ).ready(function() {
	$(document).scroll(function(){
		$("#nvb").hide(500);
		clearTimeout($.data(this, 'scrollTimer'));
		$.data(this, 'scrollTimer', setTimeout(function() {
			$("#nvb").show(500);
		}, 800));
		});
		
});
