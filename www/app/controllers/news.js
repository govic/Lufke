angular.module('lufke')
		.controller('NewsCtrl', function ($scope, $localStorage, PostsService) {
			console.log('Inicia ... NewsCtrl');
			$localStorage.$default({
				'newsUpdateNumber': 0
			});

			$scope.posts = PostsService.actualizar();

			console.log("Numero refrescos:" + $localStorage.newsUpdateNumber);

			$scope.refrescarNews = function () {
				$localStorage.newsUpdateNumber++;
				$scope.posts = PostsService.actualizar();
				$scope.$broadcast('scroll.refreshComplete');

			};
		});