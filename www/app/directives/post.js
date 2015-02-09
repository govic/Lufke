angular.module('lufke')
		.directive('lufkePost', function () {
			return {
				restrict: 'E',
				templateUrl: 'app/directives/post.html'
			};
		});