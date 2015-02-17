angular.module('lufke')
		.controller('PostController', function ($scope, $stateParams, $ionicPopup, $ionicActionSheet, PostsService) {
			console.log('Inicia ... PostController');

			$scope.post = PostsService.getPost($stateParams.postId);
			$scope.data = {};

			$scope.updatePost = function () {
				$scope.$broadcast('scroll.refreshComplete');
				$scope.post = PostsService.getPost($stateParams.postId);
				//TODO: agregar comentarios nuevos o algo asi
			};

			$scope.addComment = function () {
				alert($scope.data.commentText);
				PostsService.addComment($stateParams.postId, $scope.data.commentText);
				
				$scope.data.commentText = "";
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

			$scope.showDeleteComment = function (commentId) {
				var confirmPopup = $ionicPopup.confirm({
					title: 'Borrar comentario',
					template: '¿Está seguro que desea borrar este comentario?',
					cancelText: 'No',
					okText: 'Sí',
				});
				confirmPopup.then(function (res) {
					console.log('res: ' + res);

					if (res) {
						PostsService.deleteComment($stateParams.postId, commentId);
						$scope.updatePost();
					}
				});
			};
		});