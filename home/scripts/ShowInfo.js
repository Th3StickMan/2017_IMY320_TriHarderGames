$( document ).ready(function() {
	$("#BuildingInfo").hide(1);
	$("#BuildingCastle").click(function(){
		$("#BuildingInfo").hide(1);
		$("#BuildingInfo").css("float", "right"); 
		$("#BuildingInfo").show(500);
		$("#BuildingInfo").html(
		"<h3  align='center'>Castle</h3>"
		+"<p>The bigger the castle the bigger the city can grow. This building is key to your success.</p>"
	);});
	$("#BuildingTemple").click(function(){
		$("#BuildingInfo").hide(1);
		$("#BuildingInfo").css("float", "left"); 
		$("#BuildingInfo").show(500);
		$("#BuildingInfo").html(
		"<h3  align='center'>Temple</h3>"
		+"<p>This building is where you can heal your heros.</p>"
	);});
	$("#BuildingTavern").click(function(){
		$("#BuildingInfo").hide(1);
		$("#BuildingInfo").css("float", "right"); 
		$("#BuildingInfo").show(500);
		$("#BuildingInfo").html(
		"<h3  align='center'>Tavern</h3>"
		+"<p>Heros are attracted to the Tavern. Hire new ones and view your current heros here.</p>"
	);});
	$("#BuildingShop").click(function(){
		$("#BuildingInfo").hide(1);
		$("#BuildingInfo").css("float", "left"); 
		$("#BuildingInfo").show(500);
		$("#BuildingInfo").html(
		"<h3  align='center'>Shop</h3>"
		+"<p>The place to buy new gear and consumables. Shop or you will drop.</p>"
	);});
	$("#BuildingSmith").click(function(){
		$("#BuildingInfo").hide(1);
		$("#BuildingInfo").css("float", "right"); 
		$("#BuildingInfo").show(500);
		$("#BuildingInfo").html(
		"<h3  align='center'>Smith</h3>"
		+"<p>The place to get a new weapon or upgrade an old one.</p>"
	);});
});
