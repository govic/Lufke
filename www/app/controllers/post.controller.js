angular.module('lufke')
		.controller('PostCtrl', function ($scope, $stateParams, PostsService) {
			console.log('Inicia ... PostCtrl');

			$scope.post = PostsService.getPost($stateParams.postId);
		});