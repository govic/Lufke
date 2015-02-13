angular.module('lufke')
		.controller('PostCtrl', function ($scope, $stateParams, $ionicPopup, PostsService) {
			console.log('Inicia ... PostCtrl');

			$scope.post = PostsService.getPost($stateParams.postId);

			$scope.updatePost = function () {
				$scope.$broadcast('scroll.refreshComplete');
				$scope.post = PostsService.getPost($stateParams.postId);
				//TODO: agregar comentarios nuevos o algo asi
			};

			var optionsPopup;

			$scope.showMore = function () {
				optionsPopup = $ionicPopup.show({
					templateUrl: 'app/templates/post-more.html',
					title: 'Acciones',
					scope: $scope,
					buttons: [
						{
							text: 'Cancelar'
						}
					]
				});

				optionsPopup.then(function (res) {
					console.log('Tapped!', res);
				});
			};

			$scope.share = function () {
				optionsPopup.close();
				alert("share");

			};

			$scope.report = function () {
				optionsPopup.close();
				alert("report");
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