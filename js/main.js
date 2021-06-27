$(document).ready(function() {
	var $hamburger = $(".hamburger");
		$hamburger.on("click", function(e){
			$hamburger.ToggleClass("is-active");
			$('#nav').ToggleClass('active');
		});
});