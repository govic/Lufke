angular.module('lufke').controller('NewsController', function(lodash, $http, $scope, $localStorage, $ionicPopup, PostsService, Camera) {
    console.log('Inicia ... NewsController');
    $localStorage.$default({
        'newsUpdateNumber': 0
    });
    $http.get(api.post.getAll).success(function(posts) {
        $scope.model = {
            posts: posts,
            isExperienceTextFocus: false,
            mediaSelected: "",
            experienceText: ""
        };
    });
    console.log("Numero refrescos:" + $localStorage.newsUpdateNumber);
    $scope.updateNews = function() {
        //TODO: hay que sacar el uso de localstorage, es solo para el dummy
        $localStorage.newsUpdateNumber++;
        $scope.$broadcast('scroll.refreshComplete');
        $http.get(api.post.getAll).success(function(posts) {
            console.dir(posts);
            $scope.model = {
                posts: posts,
                isExperienceTextFocus: false,
                mediaSelected: "",
                experienceText: ""
            };
        });
    };
    $scope.toggleLike = function(postId) {
        $http.post(api.post.toggleLike, {
            post_id: postId,
            user_id: $localStorage.session
        }).success(function(data) {
            var post = lodash.find($scope.model.posts, {
                _id: postId
            });
            post.totalStars = data.likes;
            post.isLiked = data.is_liked;
        });
    };
    $scope.shareExperience = function() {
        //ingresa post en el usuario
        var post = {
            user_id: $localStorage.session,
            post_text: $scope.model.experienceText,
            image_file: $scope.model.mediaSelected
        };
        $http.post(api.post.create, post).success(function(user) {
            //borra contenido de la image/jpeg
            console.dir(user);
            $scope.model.experienceText = "";
            $scope.model.mediaSelected = "";
            //recupera los post realizados para mostrarlos
            $http.get(api.post.getAll).success(function(posts) {
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
    $scope.getPhoto = function() {
        Camera.getPicture().then(function(imageData) {
            $scope.model.mediaSelected = imageData;
        }, function(err) {
            $scope.model.mediaSelected = '';
        }, {
            destinationType: Camera.DestinationType.FILE_URI
            
        });
    };
});