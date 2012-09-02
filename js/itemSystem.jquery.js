/* 

	jQuery PLUGIN
	
	jquery.objectField
	__________________
	
	Sirve para convertir un campo de texto "objectField" en una lista de objetos
	interactuable
	
*/
(function($) {
	$.objectField = {
		defaults: {
			items: new ItemList()
		}
	};
	$.fn.extend({
		objectField:function() {
			if ($(this).val()) {
				this.items = ItemList.fromString($(this).val());
			} else {
				this.items = ItemList.fromString($(this).text());
			}
			
			// Crear el UL
			var myUL = $('<ul class="itemList"></ul>');
			
			// Sustituir el field por el UL
			$(this).parent().append(myUL);
			$(this).hide();
			
			// Ir metiendo los li necesarios
			var lastItem = false;
			for (var i=0; i<this.items.length; i++) {
				var currentItem = this.items[i];
						
				if (currentItem!=lastItem) {
					var newLI = $('<li></li>')
						.append( $('<span class="amount"></span>').text(1) )
						.append( $('<span>x </span>') )
						.append( $('<span class="name"></span>').text(currentItem.name) );
					myUL.append(newLI);
				} else {
					var myLI = myUL.children(':last-child');
					var newValue = parseInt(myLI.find('.amount').text(), 10)+1;
					myLI.find('.amount').text(newValue);
				}
				
				lastItem = currentItem;
			}
			
			return this;
		}
		
		
	})
	
})(jQuery);