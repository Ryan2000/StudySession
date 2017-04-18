


// When the boxGrow button is clicked... 
$("#boxGrow").on("click", function() {
	// Increase the size of the box.
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})


$("#boxBlue").on("click", function() {
	// turn box blue
	$("#box").css("background-color", "blue")
})


$("#boxReset").on("click", function() {
	// reset box size.
	$("#box").animate({height:"150px", width:"150px"}, "fast");
	// reset box color
	$("#box").css("background-color", "orange")
	// reset opacity to 100
	$("#box").css({opacity:"100"});

})


$("#boxFade").on("click", function() {
	// Increase the size of the box.
	$("#box").css({opacity:"0.5", filter:"alpha(opacity=50)"}, "fast");
})