angular.module('lufke')
		.controller('PostCtrl', function ($scope, $stateParams, $ionicPopup, $ionicActionSheet, PostsService) {
			console.log('Inicia ... PostCtrl');

			$scope.post = PostsService.getPost($stateParams.postId);

			$scope.updatePost = function () {
				$scope.$broadcast('scroll.refreshComplete');
				$scope.post = PostsService.getPost($stateParams.postId);
				//TODO: agregar comentarios nuevos o algo asi
			};

			$scope.showMore = function () {
				var options = $ionicActionSheet.show({
					buttons: [
						{text: '<i class="ion-share"></i> <span>Compartir</span>'}, //Index = 0
						{text: '<i class="ion-flag"></i> <span>Reportar</span>'} //Index = 1
					],
					destructiveText: '<i class="ion-trash-b"></i> <span>Borrar</span>',
					cancelText: 'Cancelar',
					cancel: function () {
						alert("cancelar");
					},
					destructiveButtonClicked: function () {
						alert("borrar");
						return true; //Close the model?
					},
					buttonClicked: function (index) {
						alert("presionado botón nro: " + index);
						return true;
					}
				});
			};

			$scope.showCommentOptions = function () {
				var confirmPopup = $ionicPopup.confirm({
					title: 'Borrar comentario',
					template: '¿Está seguro que desea borrar este comentario?',
					buttons: [{
							text: 'No',
							type: 'button-default',
							onTap: function (e) {
								// e.preventDefault() will stop the popup from closing when tapped.
							}
						}, {
							text: 'Sí',
							type: 'button-positive',
							onTap: function (e) {
								// Returning a value will cause the promise to resolve with the given value.
								//return scope.data.response;
							}
						}]
				});
				confirmPopup.then(function (res) {
					if (res) {
						console.log('You are sure');
					} else {
						console.log('You are not sure');
					}
				});
			};
		});