angular.module('lufke')
	.config(function ($stateProvider) {
		$stateProvider
			.state('noticias', {
				url: '/noticias',
				templateUrl: 'app/noticias/noticias.html',
				controller: 'NoticiasCtrl'
			});
	});