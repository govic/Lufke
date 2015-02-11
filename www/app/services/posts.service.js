angular.module('lufke')
		.factory('PostsService', function ($localStorage, lodash) {
			var exampleData =
					[{
							postId: 1,
							backgroundImgUrl: 'http://goo.gl/56Q265',
							profile: {
								image: 'http://goo.gl/PXFWyj',
								name: 'Soila Cuevas'
							},
							location: 'Pichilemu',
							timestamp: '4h',
							text: 'Tengo lindos ojos vieron?',
							stars: 42,
							comments: 3,
							link: ''
						},
						{
							postId: 2,
							backgroundImgUrl: 'http://i.imgur.com/xxyIUPy.jpg',
							profile: {
								image: 'http://goo.gl/9kbu0C',
								name: 'Elsa Popeludo'
							},
							location: 'Viña del Mar',
							timestamp: '6h',
							text: 'Hola mundo',
							stars: 2,
							comments: 5,
							link: ''
						},
						{
							postId: 6,
							backgroundImgUrl: 'http://goo.gl/jMSO58',
							profile: {
								image: 'http://i.imgur.com/WDFrSmC.png',
								name: 'Cuño Chileno'
							},
							location: 'Chillán',
							timestamp: '8h',
							text: 'En el trekking para a la cabaña 25!',
							stars: 0,
							comments: 2,
							link: ''
						},
						{
							postId: 3,
							backgroundImgUrl: 'http://goo.gl/wgyCuG',
							profile: {
								image: 'http://i.imgur.com/dC0xDm4.png',
								name: 'Coneja Dientuda'
							},
							location: 'Lago Todos los Santos',
							timestamp: '30m',
							text: 'Hola mundo',
							stars: 2,
							comments: 5,
							link: ''
						},
						{
							postId: 4,
							backgroundImgUrl: 'http://goo.gl/oLqDKT',
							profile: {
								image: 'http://goo.gl/syLmKX',
								name: 'Johnny Sins'
							},
							location: 'Pichilemu',
							timestamp: '4h',
							text: 'Respeto por la amistad y la pureza!',
							stars: 2,
							comments: 5,
							link: ''
						},
						{
							postId: 5,
							backgroundImgUrl: 'http://goo.gl/6G0uaG',
							profile: {
								image: 'http://goo.gl/gZQkgx',
								name: 'Feastancia Pérez'
							},
							location: 'Arica',
							timestamp: '8h',
							text: 'Ahí con las chiquillas bailando en el agüita jijiji',
							stars: 0,
							comments: 2,
							link: ''
						}];

			return {
				getPosts: function () {
					var postsList;
					console.log("localStorage.newsUpdateNumber % 2 = " + $localStorage.newsUpdateNumber % 2);

					if ($localStorage.newsUpdateNumber % 2 === 0) {
						postsList = lodash.filter(exampleData, function(item){
							return item.postId <= 3;
						});
					}
					else {
						postsList = lodash.filter(exampleData, function(item){
							return item.postId > 3;
						});
					}
					
					return postsList;

				},
				getPost: function (id){
					return lodash.find(exampleData, function(item){
						return item.postId == id;
					});
				}
			};
		});