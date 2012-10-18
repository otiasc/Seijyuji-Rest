/*
	jQuery plugin
	HAS NEW MESSAGES
*/
(function($) {
	$.hasNewMessages = {
		defaults: {
			percent:30,
			time:1000,
			where:''
		}
	};
	$.fn.extend({
		hasNewMessages: function(options) {
			var config = $.extend({}, $.hasNewMessages.defaults, options);
			
			// Separar "elemento afectado por parpadeo" y "elemento comprobante de nuevo mensaje"
			
			// Elemento comprobante de nuevo mensaje
			var check = $(this).find('.icon');
			
			// Elemento afectado por parpadeo
			var highlight = '';
			if (config.where=='') {
				highlight = $(this);
			} else {
				highlight = config.where;
			}
			
			
			
			check.each(function(index, element) {
				if ($(this).css('background-image')=='url(http://i48.servimg.com/u/f48/17/38/25/48/icons_11.png)') {
					highlight.addClass('forum-newmessages');
					setInterval(loop, config.time*2, config, highlight.find('.newStyleDesc'));
					
					$(this).css('background-position','right top');
				} else {
					$(this).css('background-image','none');
				}
			});
		}
	});
	
	function loop(config, object) {
		object.fadeTo(config.time, config.percent/100).fadeTo(config.time,1)
	}
})(jQuery);