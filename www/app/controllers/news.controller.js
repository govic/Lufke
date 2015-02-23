angular.module('lufke')
		.controller('NewsController', function ($scope, $localStorage, PostsService) {
			console.log('Inicia ... NewsController');

			$localStorage.$default({
				'newsUpdateNumber': 0
			});

			$scope.model = {
				posts: PostsService.getPosts(),
				isExperienceTextFocus: false,
				experienceText: ""
			};

			$scope.$on('$ionicView.afterEnter', function () {
				$scope.model.posts = PostsService.getPosts(); //TODO: el servicio debe encargarse de actualizar cambios en la lista de noticias
			});

			console.log("Numero refrescos:" + $localStorage.newsUpdateNumber);

			$scope.updateNews = function () {
				$localStorage.newsUpdateNumber++;
				$scope.$broadcast('scroll.refreshComplete');
				var newPosts = PostsService.getPosts();
				$scope.model.posts = newPosts;
			};

			$scope.shareExperience = function () {
				alert($scope.model.experienceText);
				$scope.model.experienceText = "";
			};
		});