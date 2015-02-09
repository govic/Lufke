angular.module('lufke').config(function ($stateProvider) {
	$stateProvider.state('inicio', {
		url: '/inicio',
		templateUrl: 'app/templates/inicio.html',
		controller: 'InicioCtrl'
	});
});