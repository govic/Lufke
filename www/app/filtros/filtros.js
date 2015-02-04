angular.module('lufke')
	.config(function ($stateProvider) {
		$stateProvider
			.state('filtros', {
				url: '/filtros',
				templateUrl: 'app/filtros/filtros.html',
				controller: 'FiltrosCtrl'
			});
	});