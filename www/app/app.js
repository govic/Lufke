angular.module('lufke', ['ionic', 'ngStorage'])
        .config(function ($urlRouterProvider, $ionicConfigProvider) {
            $urlRouterProvider.otherwise('/inicio');
            $ionicConfigProvider.tabs.position('bottom');
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