angular.module('lufke').controller('NewsController', function($http, $scope, $localStorage, $ionicPopup, PostsService) {
    console.log('Inicia ... NewsController');
    $localStorage.$default({
        'newsUpdateNumber': 0
    });
    $http.post('http://localhost:3000/post/getnews').success(function(posts) {
        $scope.model = {
            posts: posts,
            isExperienceTextFocus: false,
            mediaSelected: "",
            experienceText: ""
        };
    });
    /*$scope.$on('$ionicView.afterEnter', function() {
        //TODO: el servicio debe encargarse de actualizar cambios en la lista de noticias
        $scope.model.posts = PostsService.getPosts();
    });*/
    console.log("Numero refrescos:" + $localStorage.newsUpdateNumber);
    $scope.updateNews = function() {
        //TODO: hay que sacar el uso de localstorage, es solo para el dummy
        $localStorage.newsUpdateNumber++;
        $scope.$broadcast('scroll.refreshComplete');
        $http.post('http://localhost:3000/post/getnews').success(function(posts) {
            $scope.model = {
                posts: posts,
                isExperienceTextFocus: false,
                mediaSelected: "",
                experienceText: ""
            };
        });
    };
    $scope.toggleLike = function(postId) {
        PostsService.toggleLike(postId);
        $scope.model.posts = PostsService.getPosts();
    };
    $scope.shareExperience = function() {
        //ingresa post en el usuario
        var post = {
            id: $localStorage.session,
            experience: $scope.model.experienceText
        };
        $http.post('http://localhost:3000/post', post).success(function(user) {
            //borra contenido de la vista
            console.dir(user);
            $scope.model.experienceText = "";
            $scope.model.mediaSelected = "";
            //recupera los post realizados para mostrarlos
            $http.post('http://localhost:3000/post/getnews').success(function(posts) {
                $scope.model.posts = posts;
            });
        });
    };
    $scope.addMedia = function() {
        //TODO: remover $ionicPopup del controller y elegir archivos con Cordova
        var filePrompt = $ionicPopup.prompt({
            title: 'Agregar media',
            template: 'Escriba la URL de la imagen',
            inputType: 'url',
            inputPlaceholder: 'http://www.example.com/image.jpg'
        });
        filePrompt.then(function(res) {
            if (res) {
                $scope.model.mediaSelected = res;
            }
        });
    };
});