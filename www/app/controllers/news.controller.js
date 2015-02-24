angular.module('lufke')
		.controller('NewsController', function ($scope, $localStorage, $ionicPopup, PostsService) {
			console.log('Inicia ... NewsController');

			$localStorage.$default({
				'newsUpdateNumber': 0
			});

			$scope.model = {
				posts: PostsService.getPosts(),
				isExperienceTextFocus: false,
				mediaSelected: "",
				experienceText: ""
			};

			$scope.$on('$ionicView.afterEnter', function () {
				//TODO: el servicio debe encargarse de actualizar cambios en la lista de noticias
				$scope.model.posts = PostsService.getPosts();
			});

			console.log("Numero refrescos:" + $localStorage.newsUpdateNumber);

			$scope.updateNews = function () {
				//TODO: hay que sacar el uso de localstorage, es solo para el dummy
				$localStorage.newsUpdateNumber++;
				$scope.$broadcast('scroll.refreshComplete');
				var newPosts = PostsService.getPosts();
				$scope.model.posts = newPosts;
			};
			
			$scope.toggleLike = function (postId) {
				PostsService.toggleLike(postId);
				$scope.model.posts = PostsService.getPosts();
			};

			$scope.shareExperience = function () {
				PostsService.newPost($scope.model.experienceText, $scope.model.mediaSelected);
				
				$scope.model.experienceText = "";
				$scope.model.mediaSelected = "";
				$scope.model.posts = PostsService.getPosts();
			};

			$scope.addMedia = function () {
				//TODO: remover $ionicPopup del controller y elegir archivos con Cordova
				var filePrompt = $ionicPopup.prompt({
					title: 'Agregar media',
					template: 'Escriba la URL de la imagen',
					inputType: 'url',
					inputPlaceholder: 'http://www.example.com/image.jpg'
				});

				filePrompt.then(function (res) {
					if (res) {
						$scope.model.mediaSelected = res;
					}
				});
			};
		});