angular.module('lufke')
	.config(function ($stateProvider) {
		$stateProvider
			.state('perfil', {
				url: '/perfil',
				templateUrl: 'app/perfil/perfil.html',
				controller: 'PerfilCtrl'
			});
	});