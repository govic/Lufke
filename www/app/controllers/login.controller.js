angular.module('lufke').controller('LoginCtrl', function ($scope, $state, $ionicPopup) {
	console.log('Inicia ... LoginCtrl');

	//precarga datos
	$scope.user = {
		email: "",
		password: ""
	};

	$scope.loginError = false;

	$scope.showRememberPassword = function () {
		$scope.rememberData = {};

		var popupRemember = $ionicPopup.show({
			template: '<input ng-model="rememberData.email" placeholder="correo@ejemplo.com">',
			title: 'Ingrese su correo electrónico',
			scope: $scope,
			buttons: [
				{text: 'Cancel'},
				{
					text: '<b>Enviar</b>',
					type: 'button-positive',
					onTap: function (e) {
						var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

						if (!$scope.rememberData.email || !emailRegex.test($scope.rememberData.email))
						{
							e.preventDefault();
						}
						else {
							$ionicPopup.alert({
								title: 'Correo enviado',
								template: 'Se ha enviado un correo con su contraseña',
								buttons: [{text: 'Aceptar'}]
							});
						}

					}
				}
			]
		});
		popupRemember.then(function (res) {
			console.log('Tapped!', res);
		});
	};

	$scope.validateUser = function () {

		console.log('LoginCtrl ... validateUser');

		if ($scope.user.email !== "" && $scope.user.password !== "") {
			$scope.loginError = false;
			$state.go('tab.news'); //redirige hacia news
			return;

			//OJO! despues de hacer el redirect la ejecucion del metodo continua,
			//es necesario agregar return .. sin embargo, el controller queda cargado

		} else {
			$scope.loginError = true;
		}
	};

});