/*
	SEIJYUJI GAKUEN JAVA-SCRIPT
	
	>	VARIABLES DEL FORO
	Posts, tiempo diario y cielo
	
	Creado el día 04+/06/2012

---------------------------------------------*/
//
//
// variable clocks
// diferencia horaria entre el mundo real y el foro
var clocks = new Array();
clocks.push({forum:'2011-02-28T21:00:00Z', real:'2012-06-09T21:00:00Z'});
clocks.push({forum:'2011-03-01T09:30:00Z', real:'2012-06-15T20:00:00Z'});
clocks.push({forum:'2011-03-02T06:00:00Z', real:'2012-06-22T16:00:00Z'});
clocks.push({forum:'2011-03-03T06:00:00Z', real:'2012-06-29T16:00:00Z'});
clocks.push({forum:'2011-03-04T06:00:00Z', real:'2012-07-06T16:00:00Z'});

//
//
// variable sky
// estado del cielo (tiempo atmosférico, hora de amanecer y anochecer)
var sky = new Array();
//       fecha  aaaa-mm-dd   tiempo   00h 04h 08h 12h 16h 20h    ºC min, max  amanecer      anochecer
sky.push({date:'2011-02-28', weather:'DES-DES-DES-DES-DES-DES', temps:'2,14', dawn:'05:00', fall:'17:00'});

sky.push({date:'2011-03-01', weather:'NU2-NU1-DES-NU1-NU1-NU1', temps:'1,13', dawn:'05:17', fall:'17:30'});
sky.push({date:'2011-03-02', weather:'NU2-NU1-NU1-NU1-NU1-NU1', temps:'5,10', dawn:'06:11', fall:'17:36'});
sky.push({date:'2011-03-03', weather:'NU1-NU1-DES-DES-DES-DES', temps:'2,8', dawn:'06:09', fall:'17:37'});
sky.push({date:'2011-03-04', weather:'NU1-NU1-DES-DES-NU1-DES', temps:'2,8', dawn:'06:08', fall:'17:38'});
sky.push({date:'2011-03-05', weather:'NU1-NU1-DES-DES-NU1-NU1', temps:'2,12', dawn:'06:07', fall:'17:39'});

sky.push({date:'2011-03-06', weather:'DES-DES-DES-NU1-DES-DES', temps:'3,14', dawn:'06:05', fall:'17:40'});
sky.push({date:'2011-03-07', weather:'DES-NU1-DES-NU1-NU1-NU1', temps:'2,9', dawn:'06:14', fall:'17:41'});
sky.push({date:'2011-03-08', weather:'DES-DES-DES-NU1-DES-NU1', temps:'3,10', dawn:'06:03', fall:'17:42'});
sky.push({date:'2011-03-09', weather:'NU1-NU1-DES-DES-NU1-NU1', temps:'3,10', dawn:'06:01', fall:'17:43'});
sky.push({date:'2011-03-10', weather:'NU1-DES-DES-DES-DES-DES', temps:'3,10', dawn:'06:59', fall:'17:43'});

sky.push({date:'2011-03-11', weather:'NU1-NU1-DES-NU1-DES-DES', temps:'3,11', dawn:'05:58', fall:'17:44'});
sky.push({date:'2011-03-12', weather:'NU1-DES-NU1-NU1-NU1-NU1', temps:'2,13', dawn:'05:56', fall:'17:45'});
sky.push({date:'2011-03-13', weather:'DES-DES-DES-DES-DES-DES', temps:'5,16', dawn:'05:55', fall:'17:46'});
sky.push({date:'2011-03-14', weather:'DES-NU1-NU1-NU1-DES-NU1', temps:'7,20', dawn:'05:54', fall:'17:47'});
sky.push({date:'2011-03-15', weather:'NU1-NU2-NU3-NU3-NU2-NU2', temps:'10,14', dawn:'05:53', fall:'17:48'});

sky.push({date:'2011-03-16', weather:'NU1-NU1-NU1-DES-DES-DES', temps:'7,13', dawn:'05:52', fall:'17:48'});
sky.push({date:'2011-03-17', weather:'DES-DES-DES-NU1-NU1-NU1', temps:'2,9', dawn:'05:51', fall:'17:49'});
sky.push({date:'2011-03-18', weather:'NU1-NU2-NU1-NU1-DES-DES', temps:'1,10', dawn:'05:49', fall:'17:50'});
sky.push({date:'2011-03-19', weather:'NU1-NU1-DES-DES-DES-DES', temps:'7,18', dawn:'05:47', fall:'17:51'});
sky.push({date:'2011-03-20', weather:'DES-DES-DES-DES-DES-DES', temps:'9,17', dawn:'05:46', fall:'17:52'});

//
//
// variable agenda
// citas de la agenda
var agenda = new Array();
//           inicio aaaa-mm-dd hh:mm:ss   final aaaa-mm-dd hh:mm:ss
agenda.push({start:'2011-03-01T09:00:00Z', end:'2011-03-01T11:30:00Z',
	title:'Presentación curso',
	title2:'Ceremonia de inauguración del curso 2011-2012',
	desc: '<p>Acto de bienvenida a los alumnos de primero. Bienvenida a los profesores nuevos. Incluye el discurso del representante de alumnos nuevos.</p><img src="http://i48.servimg.com/u/f48/17/38/25/48/d110.jpg" />',
	info: new Array(
		'Apertura de puertas|TIME|2011-03-01T07:45:00Z',
		'Inicio|TIME|2011-03-01T08:30:00Z',
		'Fin|TIME|2011-03-01T12:00:00Z',
		'Lugar|<a href="/f16-salon-de-actos">Seijyuji Gakuen - Salón de Actos</a>'
	)
});
agenda.push({start:'2011-03-02T16:30:00Z', end:'2011-03-02T17:30:00Z',
	title:'Farmac. Demoníaca',
	title2:'Clase 1 de Farmacología Demoníaca para estudiantes de Primero de Exorcismo',
	desc: '<p><img src="http://i48.servimg.com/u/f48/17/38/25/48/0_farm10.jpg" /></p>',
	info: new Array(
		'Inicio|TIME|2011-03-02T16:30:00Z',
		'Fin|TIME|2011-03-02T17:30:00Z',
		'Lugar|<a href="/f20-aula-1106">Seijyuji Gakuen - Escuela de Exorcistas - Aula 1106</a>'
	)
});
agenda.push({start:'2011-03-03T16:30:00Z', end:'2011-03-03T17:30:00Z',
	title:'Educación Física',
	title2:'Clase 1 de Educación física para estudiantes de Primero de Exorcismo',
	desc: '<p><img src="http://i48.servimg.com/u/f48/17/38/25/48/0_educ10.jpg" /></p>',
	info: new Array(
		'Inicio|TIME|2011-03-03T16:30:00Z',
		'Fin|TIME|2011-03-03T17:30:00Z',
		'Lugar|<a href="/f29-gimnasio">Seijyuji Gakuen - Escuela de Exorcistas - Gimnasio</a>'
	)
});
agenda.push({start:'2011-03-09T16:30:00Z', end:'2011-03-09T17:30:00Z',
	title:'Farmac. Demoníaca',
	title2:'Clase 2 de Farmacología Demoníaca para estudiantes de Primero de Exorcismo',
	desc: '<p></p>',
	info: new Array(
		'Inicio|TIME|2011-03-09T16:30:00Z',
		'Fin|TIME|2011-03-09T17:30:00Z',
		'Lugar|<a href="/f20-aula-1106">Seijyuji Gakuen - Escuela de Exorcistas - Aula 1106</a>'
	)
});