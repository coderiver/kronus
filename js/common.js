head.ready(function() {

	$(".js-menu-mobile").click(function(){
		$(".main-menu").addClass("active");
		$(".menu-button").addClass("active");
		$(".js-menu-mobile>p").css("display", "none");
		$(".js-menu-close").css("display", "block");
		return false;
	});
	$(".js-menu-close").click(function(){
		$(".main-menu").removeClass("active");
		$(".menu-button").removeClass("active");
		$(".js-menu-mobile>p").css("display", "block");
		$(".js-menu-close").css("display", "none");
		return false;
	});

});