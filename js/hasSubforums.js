/*
	jQuery plugin

*/
(function($) {
	$.hasSubforums = {};
	$.fn.extend({
		hasSubforums: function() {
			$(this).find('.forabg li.row .newStyleSubforums').each(function() {
				$(this).parents('li.row').addClass('specialRow');
			});
		}
	});
})(jQuery)