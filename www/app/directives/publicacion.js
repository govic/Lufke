angular.module('lufke')
		.directive('lufkePublicacion', function () {
			return {
				restrict: 'E',
				templateUrl: 'app/directives/publicacion.html'
			};
		});