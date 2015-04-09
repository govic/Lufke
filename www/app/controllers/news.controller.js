angular.module('lufke').controller('NewsController', function(lodash, $http, $scope, $localStorage, $ionicPopup, PostsService /*, Camera, FileTransfer*/ ) {
    console.log('Inicia ... NewsController');
    $localStorage.$default({
        'newsUpdateNumber': 0
    });
    $http.get(api.post.getAll).success(function(posts) {
        lodash.each(posts, function(item) {
            item.backgroundImgUrl = getPostBackgroundUlr(item);
        });
        $scope.model = {
            posts: posts,
            isExperienceTextFocus: false,
            mediaSelected: false,
            imageBase64: "",
            experienceText: ""
        };
    });
    $scope.updateNews = function() {
        //TODO: hay que sacar el uso de localstorage, es solo para el dummy
        $localStorage.newsUpdateNumber++;
        $scope.$broadcast('scroll.refreshComplete');
        $http.get(api.post.getAll).success(function(posts) {
            lodash.each(posts, function(item) {
                item.backgroundImgUrl = getPostBackgroundUlr(item);
            });
            $scope.model = {
                posts: posts,
                isExperienceTextFocus: false,
                mediaSelected: false,
                imageBase64: "",
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
        if ($scope.model.mediaSelected || $scope.model.experienceText.length) {
            var post = {
                user_id: $localStorage.session,
                post_text: $scope.model.experienceText,
                image_base64: $scope.model.mediaSelected ? $scope.model.imageBase64 : ""
            };
            $http.post(api.post.create, post).success(function(user) {
                $scope.model.experienceText = "";
                $scope.model.mediaSelected = false;
                $scope.model.imageBase64 = "";
                $http.get(api.post.getAll).success(function(posts) {
                    $scope.model.posts = posts;
                });
            });
        }
    };
    /*$scope.addMedia = function() {
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
    };*/
    $scope.getPhoto = function() {
        var options = {
            quality: 75,
            correctOrientation: true,
            destinationType: navigator.camera.DestinationType.DATA_URL, //DATA_URL,FILE_URI
            encodingType: navigator.camera.EncodingType.PNG, //PNG,JPEG
            sourceType: navigator.camera.PictureSourceType.CAMARA, //CAMARA,PHOTOLIBRARY
            allowEdit: true,
            targetWidth: 420,
            targetHeight: 420
        };
        navigator.camera.getPicture(function(imageBase64) {
            $scope.model.mediaSelected = true;
            $scope.model.imageBase64 = imageBase64;
        }, function(err) {
            alert("Ha ocurrido un error al intentar cargar la imagen.");
            $scope.model.mediaSelected = false;
            $scope.model.imageBase64 = "";
        }, options);
        return false;
    };
});