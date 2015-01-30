angular.module('lufke').controller('LoginCtrl', function ($scope) {
    console.log('Inicia ... LoginCtrl');

    //precarga datos
    $scope.usuario = {
        correo: "",
        password: ""
    };
    
    $scope.loginError = false;

    $scope.validaUsuario = function () {

        console.log('LoginCtrl ... validaUsuario');

        if ($scope.usuario.correo == "asd@asd.cl" && $scope.usuario.password == "asd") {
            $scope.loginError = false;
            console.log('LoginCtrl ... validaUsuario ... OK');
        } else {
            $scope.loginError = true;
        }
    };

});