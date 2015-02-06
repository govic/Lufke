angular.module('lufke')
        .config(function ($stateProvider) {
            $stateProvider
                    .state('tab', {
                        url: '/tab',
                        abstract: true,
                        templateUrl: 'app/templates/tabs.html'
                    })
                    .state('header', {
                        url: '/header',
                        abstract: true,
                        templateUrl: 'app/templates/header.html'
                    })
                    .state('tab.explorar', {
                        url: '/explorar',
                        views: {
                            'tab-explorar': {
                                templateUrl: 'app/templates/explorar.html',
                                controller: 'ExplorarCtrl'
                            }
                        }
                    })
                    .state('tab.noticias', {
                        url: '/noticias',
                        views: {
                            'tab-noticias': {
                                templateUrl: 'app/templates/noticias.html',
                                controller: 'NoticiasCtrl'
                            }
                        }
                    })
                    .state('tab.notificaciones', {
                        url: '/notificaciones',
                        views: {
                            'tab-notificaciones': {
                                templateUrl: 'app/templates/notificaciones.html',
                                controller: 'NotificacionesCtrl'
                            }
                        }
                    })
                    .state('tab.perfil', {
                        url: '/perfil',
                        views: {
                            'tab-perfil': {
                                templateUrl: 'app/templates/perfil.html',
                                controller: 'PerfilCtrl'
                            }
                        }
                    })
                    ;
        });