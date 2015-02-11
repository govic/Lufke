angular.module('lufke', ['ionic', 'ngStorage', 'ngLodash'])
		.config(function ($urlRouterProvider, $ionicConfigProvider) {
			$urlRouterProvider.otherwise('/start');
			$ionicConfigProvider.tabs.position('bottom');
			$ionicConfigProvider.navBar.alignTitle('center');
		})
		.run(function ($ionicPlatform) {
			$ionicPlatform.ready(function () {
				// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
				// for form inputs)
				if (window.cordova && window.cordova.plugins.Keyboard) {
					cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				}
				if (window.StatusBar) {
					StatusBar.styleDefault();
				}
			});
		});