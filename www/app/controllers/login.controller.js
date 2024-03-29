angular.module('lufke').controller('LoginController', function($localStorage, $http, $scope, $state, $ionicHistory, $ionicPopup) {
    $ionicHistory.clearCache();
    console.log('Inicia ... LoginController');
    $localStorage.session = null;
    $scope.model = {
        user: {
            email: "",
            password: ""
        },
        loginError: false,
        recoveryData: {
            emailError: false,
            email: ""
        },
        foto: ""
    };
    $scope.showRememberPassword = function() {
        var popupRemember = $ionicPopup.show({
            template: '	<input ng-model="model.recoveryData.email" placeholder="correo@ejemplo.com" required>\n\
						<div class="padding assertive" ng-show="model.recoveryData.emailError">\n\
						<i class="icon ion-alert-circled"></i>\n\
						Ingrese un correo electrónico correcto\n\
						</div>',
            title: 'Ingrese su correo electrónico',
            scope: $scope,
            buttons: [{
                text: 'Cancel'
            }, {
                text: '<b>Enviar</b>',
                type: 'button-positive',
                attr: 'ng-disabled="!model.recoveryData.email"',
                onTap: function(e) {
                    $scope.recoverPassword(e);
                }
            }]
        });
        popupRemember.then(function(res) {
            console.log('Tapped!', res);
        });
    };
    $scope.recoverPassword = function(e) {
        var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!$scope.model.recoveryData.email || !emailRegex.test($scope.model.recoveryData.email)) {
            $scope.model.recoveryData.emailError = true;
            e.preventDefault();
        } else {
            $ionicPopup.alert({
                title: 'Correo enviado',
                template: 'Se ha enviado un correo con su contraseña',
                buttons: [{
                    text: 'Aceptar'
                }]
            });
        }
    };
    $scope.validateUser = function() {
        console.log('LoginController ... validateUser');
        if ($scope.model.user.email !== "" && $scope.model.user.password !== "") {
            $http.post(api.user.verifyLogin, {
                email: $scope.model.user.email,
                password: $scope.model.user.password
            }).success(function(user) {
                $localStorage.session = user._id; //variable sesion con id usuario
                $scope.model.loginError = false;
                $state.go('tab.news'); //redirige hacia news
                return;
            }).error(function(a,b) {
                $localStorage.session = null;
                $scope.model.loginError = true;
                $scope.model.user.password !== "";
            });
        } else {
            $localStorage.session = null;
            $scope.model.loginError = true;
            $scope.model.user.password !== "";
        }
    };
});