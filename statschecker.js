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