$(document).ready(function(e) {
	$('.post .postprofile').each(function(index, element) {
		var id = $(this).find('dt a').attr('href').slice(2);
		var stats1 = $(this).find('dd:eq(2)').text().split('\n')[0]
		var stats2 = $(this).find('dd:eq(2)').text().split('\n')[1]
		var re = /\s+/gi;
		stats1 = stats1.replace(re, ',');
		stats2 = stats2.replace(re, ',');
		
		var s1 = new Array(); var s2 = new Array();
		var s1 = stats1.split(',');
		s1.shift();
		
		var s2 = stats2.split(',');
		s2.shift();
		var obj = new Object({
			F:s1[0],
			V:s1[1],
			I:s1[2],
			D:s1[3],
			PUN:s2[0],
			ESG:s2[1],
			FAM:s2[2],
			MEM:s2[3],
			MED:s2[4]
		});
		post_check(obj);
    });
});
function post_check(me) {
	for (var i=0; i<statistics.length; i++) {
		var cs = new Object({
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
			}
		}
	}
}
