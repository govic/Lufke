angular.module('lufke')
	.config(function ($stateProvider) {
		$stateProvider
			.state('registro', {
				url: '/registro',
				templateUrl: 'app/templates/registro.html',
				controller: 'RegistroCtrl'
			});
	});