angular.module('lufke')
	.config(function ($stateProvider) {
		$stateProvider
			.state('filtros', {
				url: '/filtros',
				templateUrl: 'app/templates/filtros.html',
				controller: 'FiltrosCtrl'
			});
	});