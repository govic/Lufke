angular.module('lufke')
		.directive('lufkePost', function () {
			return {
				restrict: 'E',
				templateUrl: 'app/templates/post-summary.html'
			};
		});