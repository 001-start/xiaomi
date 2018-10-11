$("#myTab li").mouseenter(function(){
	
	$(this).children("div:even").animate({
		"width":"100%",
	},500).css("background","rgb(255,255,255)");
	$(this).children("div:odd").animate({
		"height":"100%",
	},500).css("background","rgb(255,255,255)");
});

$("#myTab li").mouseleave(function(){
	
	$(this).children("div:even").animate({
		"width":"0%",
	},500).css("background","rgb(255,255,255)");
	$(this).children("div:odd").animate({
		"height":"0%",
	},500).css("background","rgb(255,255,255)");

});