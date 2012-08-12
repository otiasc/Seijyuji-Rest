$(document).ready(function(e) {
	$('.post .postprofile').each(function(index, element) {
		var id = $(this).find('dt a').attr('href').slice(2);
		var t = $(this).find('dd:eq(2)').html();
		t = t.replace(/<.+?>/gi, '');
		t = t.replace(/\D/gi, '');
		t = t.slice(0,8);
		var re = /\s+/gi;
		
		var me = new Object({
			F:t.charAt(0),
			V:t.charAt(1),
			I:t.charAt(2),
			D:t.charAt(3),
			PUN:t.charAt(4),
			ESG:t.charAt(5),
			FAM:t.charAt(6),
			MEM:t.charAt(7),
			MED:t.charAt(8)
		});
		$(this).css('border-right-color', '#1A1B20');
		for (var i=0; i<statistics.length; i++) {
			var cs = new Object({
				id:statistics[i].id,
				F:statistics[i].F.charAt(0),
				V:statistics[i].F.charAt(1),
				I:statistics[i].F.charAt(2),
				D:statistics[i].F.charAt(3),
				PUN:statistics[i].F.charAt(4),
				ESG:statistics[i].F.charAt(5),
				FAM:statistics[i].F.charAt(6),
				MEM:statistics[i].F.charAt(7),
				MED:statistics[i].F.charAt(8)
			});
			
			if (cs.id==id) {
				// check
				if (cs.F<me.F || cs.V<me.V || cs.I<me.I || cs.D<me.D || cs.PUN<me.PUN || cs.ESG<me.ESG || cs.FAM<me.FAM || cs.MEM<me.MEM || cs.MED<me.MED) {
					// not valid
					$(this).css('border-right-color', '#F00');
				} else {
					$(this).css('border-right-color', '#393E55');
				}
			}
		}
    });
});
