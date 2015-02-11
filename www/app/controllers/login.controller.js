angular.module('lufke').controller('LoginCtrl', function ($scope, $state) {
	console.log('Inicia ... LoginCtrl');

	//precarga datos
	$scope.user = {
		email: "",
		password: ""
	};

	$scope.loginError = false;

	$scope.validateUser = function () {

		console.log('LoginCtrl ... validateUser');

		if ($scope.user.email != "" && $scope.user.password != "") {
			$scope.loginError = false;
			console.log('LoginCtrl ... validateUser ... OK');
			console.log('LoginCtrl ... validateUser ... redirect');
			$state.go('tab.news'); //redirige hacia news
			return;

			//OJO! despues de hacer el redirect la ejecucion del metodo continua,
			//es necesario agregar return .. sin embargo, el controller queda cargado

		} else {
			$scope.loginError = true;
		}
	};

});