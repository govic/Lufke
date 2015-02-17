angular.module('lufke').controller('LoginController', function ($scope, $state, $ionicPopup) {
	console.log('Inicia ... LoginController');

	//precarga datos
	$scope.user = {
		email: "",
		password: ""
	};

	$scope.loginError = false;

	$scope.showRememberPassword = function () {
		$scope.rememberData = {};
		$scope.emailError = false;

		var popupRemember = $ionicPopup.show({
			template: '	<input ng-model="rememberData.email" placeholder="correo@ejemplo.com" required>\n\
						<div class="padding assertive" ng-show="emailError">\n\
						<i class="icon ion-alert-circled"></i>\n\
						Ingrese un correo electrónico correcto\n\
						</div>',
			title: 'Ingrese su correo electrónico',
			scope: $scope,
			buttons: [
				{text: 'Cancel'},
				{
					text: '<b>Enviar</b>',
					type: 'button-positive',
					attr: 'data-ng-disabled="!rememberData.email"',
					onTap: function (e) {
						var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

						if (!$scope.rememberData.email || !emailRegex.test($scope.rememberData.email))
						{
							$scope.emailError = true;
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

		console.log('LoginController ... validateUser');

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