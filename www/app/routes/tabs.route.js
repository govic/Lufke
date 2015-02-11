angular.module('lufke')
		.config(function ($stateProvider) {
			$stateProvider
					.state('tab', {
						url: '/tab',
						abstract: true,
						templateUrl: 'app/templates/tabs.html'
					})
					.state('tab.explore', {
						url: '/explore',
						views: {
							'tab-explore': {
								templateUrl: 'app/templates/explore.html',
								controller: 'ExploreCtrl'
							}
						}
					})
					.state('tab.news', {
						url: '/news',
						views: {
							'tab-news': {
								templateUrl: 'app/templates/news.html',
								controller: 'NewsCtrl'
							}
						}
					})
					.state('tab.notifications', {
						url: '/notifications',
						views: {
							'tab-notifications': {
								templateUrl: 'app/templates/notifications.html',
								controller: 'NotificationsCtrl'
							}
						}
					})
					.state('tab.profile', {
						url: '/profile',
						views: {
							'tab-profile': {
								templateUrl: 'app/templates/profile.html',
								controller: 'ProfileCtrl'
							}
						}
					})
					;
		});