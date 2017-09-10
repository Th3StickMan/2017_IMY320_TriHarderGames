$( document ).ready(function() {
	//SVG
	var s = Snap("#test");
	var x = $("#test").width();
	var y = $("#test").height();
	//var black = s.rect(0,0,x,y);
	var bigCircle = s.circle(0, 0, 1050);
	bigCircle.attr({
		fill: "#fff",
		"fill-opacity": 0,
		stroke: "#000",
		"stroke-opacity":0.95,
		strokeWidth:1800
	});

	//END SVG
	$.data(this, 'burnbrighter', setTimeout(function() {
			bigCircle.animate({r: 1300}, 2000);
		}, 2000));
	$(document).scroll(function(){
		bigCircle.animate({r: 1050}, 200);
		clearTimeout($.data(this, 'burnbrighter'));
		$.data(this, 'burnbrighter', setTimeout(function() {
			bigCircle.animate({r: 1300}, 2000);
		}, 1000));
	});0
	$(document).mousemove(function( event ) {
		bigCircle.attr({"transform":"t"+(event.pageX)+" "+(event.pageY - $(document).scrollTop())})
		
	});
});
