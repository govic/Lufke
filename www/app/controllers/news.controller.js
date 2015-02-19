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

			console.log("Numero refrescos:" + $localStorage.newsUpdateNumber);

			$scope.updateNews = function () {
				$localStorage.newsUpdateNumber++;
				$scope.$broadcast('scroll.refreshComplete');
				var newPosts = PostsService.getPosts();
				$scope.model.posts = newPosts;
			};
			
			$scope.shareExperience = function() {
				alert($scope.model.experienceText);
				$scope.model.experienceText = "";
			};
		});