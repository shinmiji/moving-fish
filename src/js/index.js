;(function(global, $, undefined){
	'use strict';
	var $fish = $('.fish');
	var $panel = $('.panel')

	var width= parseInt($panel.css('width'));
	var height= parseInt($('.panel').css('height'));

	width = width - parseInt($fish.css("width"));
	height = height - parseInt($fish.css("height"));
	
	$('.move').on('click', function(){
		var top_num = Math.random()*height;
		var left_num = Math.random()*width;

 		$fish.css('top', top_num);
		$fish.css('left', left_num);
	})
})(window, window.jQuery);