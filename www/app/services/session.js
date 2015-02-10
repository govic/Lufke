angular.module('lufke')
		.factory('SesionService', function ($localStorage) {
			return {
				isLoggedIn: function () {
					return false;
				}
			};
		});