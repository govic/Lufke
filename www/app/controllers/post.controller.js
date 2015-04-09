angular.module('lufke').controller('PostController', function($http, $scope, $state, $localStorage, $stateParams, $ionicHistory, $ionicPopup, $ionicActionSheet, PostsService) {
    console.log('Inicia ... PostController');
    $http.post(api.post.getById, {
        post_id: $stateParams.postId,
        user_id: $localStorage.session
    }).success(function(post) {
        post.backgroundImgUrl = getPostBackgroundUlr(post);
        console.log(post.backgroundImgUrl);
        $scope.model = {
            post: post,
            commentText: ""
        };
    });
    $scope.updatePost = function() {
        $http.post(api.post.getById, {
            post_id: $stateParams.postId,
            user_id: $localStorage.session
        }).success(function(post) {
            post.backgroundImgUrl = getPostBackgroundUlr(post);
            console.log(post.backgroundImgUrl);
            $scope.$broadcast('scroll.refreshComplete');
            $scope.model.post = post;
        });
    };
    $scope.addComment = function() {
        $http.post(api.post.comment.create, {
            post_id: $stateParams.postId,
            user_id: $localStorage.session,
            comment_text: $scope.model.commentText
        }).success(function(post) {
            post.backgroundImgUrl = getPostBackgroundUlr(post);
            $scope.model = {
                post: post,
                commentText: ""
            };
        });
    };
    $scope.toggleLike = function() {
        $http.post(api.post.toggleLike, {
            post_id: $scope.model.post._id,
            user_id: $localStorage.session
        }).success(function(data) {
            $scope.model.post.totalStars = data.likes;
            $scope.model.post.isLiked = data.is_liked;
        });
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