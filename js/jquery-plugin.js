(function($) {
	"use strict";
	$.Confirm = function(arg){
		var object = this;
		var settings = $.extend({
			title: "Uyarı",
			content: "Bu işleme devam etmek istiyor musunuz?",
			yes: false,
			no: false,
			close: false,
			onYesClick: function(){},
			onNoClick: function(){}
		}, arg);
		var evet = (settings.yes)?'<div class="confirm_true">'+settings.yes+'</div>':'';
		var hayir = (settings.no)?'<div class="confirm_false">'+settings.no+'</div>':'';
		var close = (settings.close)?'<div class="confirm_close">x</div>':'';
		var footer = '<div class="footer">'+evet+hayir+'</div>';
		var header = '<div class="header"><div>'+settings.title+'</div><div>'+close+'</div></div>';
		var content = '<div class="content">'+settings.content+'</div>';
		var mask = document.createElement("div");
		mask.id = "mask";
		mask.innerHTML = '<div class="confirm">'+header+content+footer+'</div>';
		$("#mask").remove("#mask");
		$("body").append(mask);
		$("div.confirm .confirm_true").click(function(){
			settings.onYesClick.call();
		});
		$("div.confirm .confirm_false").click(function(){
			settings.onNoClick.call();
		});
		$("div.confirm .confirm_close").click(function(){
			$("#mask").fadeOut("fast");
		});
	}
})(jQuery);
