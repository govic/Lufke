angular.module('lufke').controller('PostController', function($http, $scope, $state, $localStorage, $stateParams, $ionicHistory, $ionicPopup, $ionicActionSheet, PostsService) {
    console.log('Inicia ... PostController');
    $http.post('http://localhost:3000/post/getPost', {
        post_id: $stateParams.postId
    }).success(function(post) {
        $scope.model = {
            post: post,
            commentText: ""
        };
    });
    $scope.updatePost = function() {
        $http.post('http://localhost:3000/post/getPost', {
            post_id: $stateParams.postId
        }).success(function(post) {
            $scope.$broadcast('scroll.refreshComplete');
            $scope.model.post = post;
        });
    };
    $scope.addComment = function() {
        $http.post('http://localhost:3000/post/newComment', {
            post_id: $stateParams.postId,
            user_id: $localStorage.session,
            comment_text: $scope.model.commentText
        }).success(function(post) {
            $scope.model = {
                post: post,
                commentText: ""
            };
        });
    };
    $scope.toggleLike = function() {
        PostsService.toggleLike($stateParams.postId);
        $scope.model.post = PostsService.getPost($stateParams.postId);
    };
    $scope.showMessage = function(title, message) {
        $ionicPopup.alert({
            title: title,
            template: message,
            okText: "Aceptar"
        });
    };
    $scope.showMore = function() {
        var options = $ionicActionSheet.show({
            buttons: [{
                    text: '<i class="ion-share"></i> <span>Compartir</span>'
                }, //Index = 0
                {
                    text: '<i class="ion-flag"></i> <span>Reportar</span>'
                } //Index = 1
            ],
            destructiveText: '<i class="ion-trash-b"></i> <span>Borrar</span>',
            cancelText: 'Cancelar',
            cancel: function() {
                //Hacer nada
            },
            destructiveButtonClicked: function() {
                var confirm = $ionicPopup.confirm({
                    title: 'Confirmación',
                    template: '¿Está seguro que desea borrar esta publicación?',
                    cancelText: 'No',
                    cancelType: 'button-positive',
                    okText: 'Sí',
                    okType: 'button-light'
                });
                confirm.then(function(res) {
                    if (res) {
                        var result = PostsService.deletePost($stateParams.postId);
                        if (result) {
                            //TODO: corregir regreso, no pasa por controladores
                            if ($ionicHistory.backView()) {
                                $ionicHistory.goBack();
                            } else {
                                $state.go("tab.news");
                            }
                        } else {
                            $scope.showMessage("Error", "Ha ocurrido un error al borrar la publicación");
                        }
                    }
                });
                return true; //Close the model?
            },
            buttonClicked: function(index) {
                console.log("presionado botón nro: " + index);
                switch (index) {
                    case 0:
                        PostsService.sharePost($stateParams.postId);
                        break;
                    case 1:
                        var confirm = $ionicPopup.confirm({
                            title: 'Confirmación',
                            template: '¿Está seguro que desea reportar esta publicación?',
                            cancelText: 'No',
                            cancelType: 'button-positive',
                            okText: 'Sí',
                            okType: 'button-light'
                        });
                        confirm.then(function(res) {
                            if (res) {
                                PostsService.reportPost($stateParams.postId);
                                $scope.showMessage("Se ha reportado la publicación");
                            }
                        });
                        break;
                    default:
                        $scope.showMessage("Error", "Un error desconocido ha ocurrido");
                        break;
                }
                return true;
            }
        });
    };
    $scope.showDeleteComment = function(commentId) {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Borrar comentario',
            template: '¿Está seguro que desea borrar este comentario?',
            cancelText: 'No',
            okText: 'Sí',
        });
        confirmPopup.then(function(res) {
            console.log('res: ' + res);
            if (res) {
                PostsService.deleteComment($stateParams.postId, commentId);
            }
        });
    };
});