/*
	jQuery plugin
	INDEX HEADER TICKER
*/
(function($) {
	var $logodesc2;
	var $bg;
	var int;
	$.indexHeaderTicker = {
		defaults: {
			delay: 3500,
			fadeOut: {
				delay: 600,
				animation: 'clip',
				options: {direction: 'vertical'},
				speed: 300
			},
			fadeIn: {
				delay: 600,
				animation: 'clip',
				options: {direction: 'vertical'},
				speed: 300
			},
			background: 'http://i38.servimg.com/u/f38/17/38/25/48/00seij10.jpg',
			logo: 'http://i38.servimg.com/u/f38/17/38/25/48/logo10.png',
			title: 'Seijuyji Gakuen',
			subtitle: 'Foro de Rol de Ao no Exorcist'
		}
	};
	$.fn.extend({
		indexHeaderTicker: function(source, options, preloads) {
			var config = $.extend({}, $.indexHeaderTicker.defaults, options);
			var logo = $('<a></a>')
			.attr('id', 'logo')
			.attr('href', '/')
			.append(
				$('<img />').attr('src', config.logo)
			);
			
			$logodesc2 = $('<ul id="logo-desc2"></ul>')
				.append(
					$('<li></li>')
						.append( $('<span class="background"></span>').css('background', 'url("' + config.background + '") no-repeat top center') )
						.append('<h1>' + config.title + '</h1>')
						.append('<div>' + config.subtitle + '</div>')
				);
			
			// 1. Poner el heading con "Seijyuji Gakuen..." independientemente del source
			$bg = $('<div></div>').attr('id', 'background2');
			var $loading = $('<div id="logo-desc-navi" class="loading"></div>');
			$bg.appendTo(document.body);
			$(this).html('');
			
			$(this).append(logo);
			$(this).append($loading);
			$(this).append($logodesc2);
			
			
			// 2. Leer el source
			$source = $(source);
			$logodesc2.append($source.find('ul').html());
			$source.hide();
			
			$logodesc2.append(
				$('<li></li>')
					.append( $('<span class="background"></span>').css('background', 'url("' + config.background + '") no-repeat top center') )
					.append('<h1>' + config.title + '</h1>')
					.append('<div>' + config.subtitle + '</div>')
			);
			
			// 3. Ocultar todo
			$bg.hide();
			$logodesc2.find('li').hide();
			
			// 4. Comenzar animación
			
			$logodesc2.find('li:first-child').show(config.fadeIn.animation, config.fadeIn.options, config.fadeIn.speed);
			$bg.show();
			
			
			// Empezar precarga
			var charge = 0;
			for (var i=0; i<preloads.length; i++) {
				$('<img/>').attr('src', preloads[i]).load(function() {
					charge++;
					if (charge==preloads.length) {
						$loading.removeClass('loading');
						for (var j=1; j<$logodesc2.find('li').length; j++) {
							$loading.append(
								$('<a href="javascript:;" class="button-ui button-ui-circle"></a>')
									.click(function() {goAnimation(config, $(this).index()+2)} )
							);
						}
						start(config);
					}
				});
			}
		}
	});
	var count = 1;
	
	function start(config) {
		int = setInterval(goCount, config.delay, config);	
	}
	
	function goCount(config) {
		count++;
		goAnimation(config, count);
	}
	
	function goAnimation(config, id) {
		// 1. Ocultar todo
		
		$logodesc2.find('li').each(function(index, element) {
			if ($(this).css('display')!='none') {
				$(this).hide(config.fadeOut.animation, config.fadeOut.options, config.fadeOut.speed);
			}
        });
		
		
		
		// 2. Esperar a que se oculte
		var $t = $logodesc2.find('li:nth-child(' + id + ')');
		$bg.attr('style' , $t.find('.background').attr('style')).hide();
		$t.delay(300).show(config.fadeIn.animation, config.fadeIn.options, config.fadeIn.speed);
		
		// 3. Mostrar id
		setTimeout(function() {
			$bg.show('fade',{}, 300);
		}, 500);

		
		if (id>=$logodesc2.find('li').length) {
			clearInterval(int);
		}
	}
})(jQuery);