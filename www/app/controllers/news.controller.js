angular.module('lufke').controller('NewsController', function(lodash, $http, $scope, $localStorage, $ionicPopup, PostsService /*, Camera, FileTransfer*/ ) {
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
    $scope.updateNews = function() {
        //TODO: hay que sacar el uso de localstorage, es solo para el dummy
        $localStorage.newsUpdateNumber++;
        $scope.$broadcast('scroll.refreshComplete');
        $http.get(api.post.getAll).success(function(posts) {
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
        /*var post = {
            user_id: $localStorage.session,
            post_text: $scope.model.experienceText,
            image_file: $scope.model.mediaSelected
        };
        $http.post(api.post.create, post).success(function(user) {
            //borra contenido de la image/jpeg
            $scope.model.experienceText = "";
            $scope.model.mediaSelected = "";
            //recupera los post realizados para mostrarlos
            $http.get(api.post.getAll).success(function(posts) {
                $scope.model.posts = posts;
            });
        });*/
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
        console.log('getPhoto() ..');
        var options = {
            quality: 50,
            correctOrientation: true,
            destinationType: navigator.camera.DestinationType.DATA_URL, //DATA_URL,FILE_URI
            encodingType: navigator.camera.EncodingType.PNG,//PNG,JPEG
            sourceType: navigator.camera.PictureSourceType.CAMARA //CAMARA,PHOTOLIBRARY
        };
        navigator.camera.getPicture(function(imageURI) {
            console.log('getPhoto() .. success .. upload');
            $http.post(api.post.uploadTest, {
                user_id: $localStorage.session,
                post_text: $scope.model.isExperienceTextFocus,
                image: imageURI
            }).success(function(data) {
                console.log('getPhoto() .. success .. upload .. success');
                //console.dir(data);
            }).error(function(err) {
                console.log('getPhoto() .. success .. upload .. error');
                //console.dir(err);
            });
        }, function(err) {
            console.log('getPhoto() .. error');
            $scope.model.mediaSelected = '';
        }, options);
        return false;
    };
});