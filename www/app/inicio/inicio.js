angular.module('lufke').config(function($stateProvider) {
    $stateProvider.state('inicio', {
        url: '/inicio',
        templateUrl: 'app/inicio/inicio.html',
        controller: 'InicioCtrl'
    });
});