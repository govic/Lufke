angular.module('lufke')
		.controller('NewsCtrl', function ($scope, $localStorage, PostsService) {
			console.log('Inicia ... NewsCtrl');
			$localStorage.$default({
				'newsUpdateNumber': 0
			});

			$scope.posts = PostsService.getPosts();

			console.log("Numero refrescos:" + $localStorage.newsUpdateNumber);

			$scope.updateNews = function () {
				$localStorage.newsUpdateNumber++;
				$scope.$broadcast('scroll.refreshComplete');
				var newPosts = PostsService.getPosts();
				$scope.posts = newPosts;
			};
		});