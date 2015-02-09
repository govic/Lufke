angular.module('lufke')
		.factory('PostsService', function ($localStorage) {
			return {
				actualizar: function () {

					var name, backgroundImgUrl, profile;
					console.log("localStorage.newsUpdateNumber % 2 = " + $localStorage.newsUpdateNumber % 2);

					if ($localStorage.newsUpdateNumber % 2 === 0) {
						name = 'Soila Cuevas';
						backgroundImgUrl = 'http://goo.gl/56Q265';
						profile = 'http://goo.gl/PXFWyj';
					}
					else {
						name = 'Elsa Popeludo';
						backgroundImgUrl = 'http://i.imgur.com/xxyIUPy.jpg';
						profile = 'http://goo.gl/B6Nqk7';
					}

					var dummy =
							[{
									backgroundImgUrl: backgroundImgUrl,
									profile: {
										image: profile,
										name: name
									},
									location: 'Pichilemu',
									timestamp: '4h',
									text: 'Hola mundo',
									stars: 2,
									comments: 5,
									link: ''
								},
								{
									backgroundImgUrl: backgroundImgUrl,
									profile: {
										image: profile,
										name: name
									},
									location: 'Pichilemu',
									timestamp: '4h',
									text: 'Hola mundo',
									stars: 2,
									comments: 5,
									link: ''
								},
								{
									backgroundImgUrl: backgroundImgUrl,
									profile: {
										image: profile,
										name: name
									},
									location: 'Pichilemu',
									timestamp: '4h',
									text: 'Hola mundo',
									stars: 2,
									comments: 5,
									link: ''
								},
								{
									backgroundImgUrl: backgroundImgUrl,
									profile: {
										image: profile,
										name: name
									},
									location: 'Pichilemu',
									timestamp: '4h',
									text: 'Hola mundo',
									stars: 2,
									comments: 5,
									link: ''
								}];

					return dummy;

				}
			};
		});