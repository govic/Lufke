angular.module('lufke')
	.config(function ($stateProvider) {
		$stateProvider
			.state('newsfeed', {
				url: '/newsfeed',
				templateUrl: 'app/newsfeed/newsfeed.html',
				controller: 'NewsfeedCtrl'
			});
	});