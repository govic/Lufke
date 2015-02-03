angular.module('lufke')
	.config(function ($stateProvider) {
		$stateProvider
			.state('explorar', {
				url: '/explorar',
				templateUrl: 'app/explorar/explorar.html',
				controller: 'ExplorarCtrl'
			});
	});