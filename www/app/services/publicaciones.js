angular.module('lufke')
		.factory('PublicacionesService', function ($localStorage) {
			return {
				actualizar: function () {

					var nombre, fondo, perfil;
					console.log("localStorage.numeroRefrescos % 2 = " + $localStorage.numeroRefrescos % 2);

					if ($localStorage.numeroRefrescos % 2 === 0) {
						nombre = 'Soila Cuevas';
						fondo = 'http://goo.gl/56Q265';
						perfil = 'http://goo.gl/PXFWyj';
					}
					else {
						nombre = 'Elsa Popeludo';
						fondo = 'http://i.imgur.com/xxyIUPy.jpg';
						perfil = 'http://goo.gl/B6Nqk7';
					}

					var dummy =
							[{
									fondo: fondo,
									perfil: {
										imagen: perfil,
										nombre: nombre
									},
									localizacion: 'Pichilemu',
									hora: '4h',
									texto: 'Hola mundo',
									estrellas: 2,
									comentarios: 5,
									enlace: ''
								},
								{
									fondo: fondo,
									perfil: {
										imagen: perfil,
										nombre: nombre
									},
									localizacion: 'Pichilemu',
									hora: '4h',
									texto: 'Hola mundo',
									estrellas: 2,
									comentarios: 5,
									enlace: ''
								},
								{
									fondo: fondo,
									perfil: {
										imagen: perfil,
										nombre: nombre
									},
									localizacion: 'Pichilemu',
									hora: '4h',
									texto: 'Hola mundo',
									estrellas: 2,
									comentarios: 5,
									enlace: ''
								},
								{
									fondo: fondo,
									perfil: {
										imagen: perfil,
										nombre: nombre
									},
									localizacion: 'Pichilemu',
									hora: '4h',
									texto: 'Hola mundo',
									estrellas: 2,
									comentarios: 5,
									enlace: ''
								}];

					return dummy;

				}
			};
		});