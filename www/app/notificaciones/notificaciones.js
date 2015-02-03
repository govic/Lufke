angular.module('lufke')
	.config(function ($stateProvider) {
		$stateProvider
			.state('notificaciones', {
				url: '/notificaciones',
				templateUrl: 'app/notificaciones/notificaciones.html',
				controller: 'NotificacionesCtrl'
			});
	});