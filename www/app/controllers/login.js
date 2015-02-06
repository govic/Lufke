angular.module('lufke').controller('LoginCtrl', function ($scope, $state) {
    console.log('Inicia ... LoginCtrl');

    //precarga datos
    $scope.usuario = {
        correo: "",
        password: ""
    };
    
    $scope.loginError = false;

    $scope.validaUsuario = function () {

        console.log('LoginCtrl ... validaUsuario');

        if ($scope.usuario.correo != "" && $scope.usuario.password != "") {
            $scope.loginError = false;
            console.log('LoginCtrl ... validaUsuario ... OK');
            console.log('LoginCtrl ... validaUsuario ... redirect');
            $state.go('tab.noticias'); //redirige hacia noticias
            return;
            
            //OJO! despues de hacer el redirect la ejecucion del metodo continua,
            //es necesario agregar return .. sin embargo, el controller queda cargado
            
        } else {
            $scope.loginError = true;
        }
    };

});