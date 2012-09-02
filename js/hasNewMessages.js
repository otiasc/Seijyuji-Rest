/*
	jQuery plugin

*/
(function($) {
	$.hasNewMessages = {
		defaults: {
			percent:30,
			time:1000
		}
	};
	$.fn.extend({
		hasNewMessages: function(options) {
			var config = $.extend({}, $.hasNewMessages.defaults, options);
			$(this).find('.icon').each(function(index, element) {
				if ($(this).css('background-image')=='url(http://i48.servimg.com/u/f48/17/38/25/48/icons_11.png)') {
					$(this).parents('li.row').addClass('forum-newmessages');
					setInterval(loop, config.time*2, config, $(this).find('.newStyleDesc'));
				}
				$(this).css('background-image','none');
			});
		}
	});
	
	function loop(config, object) {
		object.fadeTo(config.time, config.percent/100).fadeTo(config.time,1)
	}
})(jQuery)