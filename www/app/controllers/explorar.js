angular.module('lufke').controller('ExplorarCtrl', function ($scope) {
    console.log('Inicia...ExplorarCtrl ');
    var datos = {
        usuarios_populares: [
            {
                url_img_fondo: "http://goo.gl/LQQ0mn",
                url_img_perfil: "http://goo.gl/VAA8eI",
                id_perfil: "1",
                nombre_perfil_1: "RYAN",
                nombre_perfil_2: "SHECKLER",
                ultimas_publicaciones: [
                    {
                        tipo: "FOTO",
                        url_imagen_publicacion: "http://goo.gl/VAA8eI"
                    },{
                        tipo: "VIDEO",
                        url_imagen_publicacion: "http://goo.gl/VAA8eI"
                    },{
                        tipo: "FOTO",
                        url_imagen_publicacion: "http://goo.gl/VAA8eI"
                    }
                ]
            },{
                url_img_fondo: "http://goo.gl/LQQ0mn",
                url_img_perfil: "http://goo.gl/T4xQbr",
                id_perfil: "2",
                nombre_perfil_1: "BEAR",
                nombre_perfil_2: "GRYLLS",
                ultimas_publicaciones: [
                    {
                        tipo: "FOTO",
                        url_imagen_publicacion: "http://goo.gl/T4xQbr"
                    },{
                        tipo: "VIDEO",
                        url_imagen_publicacion: "http://goo.gl/T4xQbr"
                    },{
                        tipo: "FOTO",
                        url_imagen_publicacion: "http://goo.gl/T4xQbr"
                    }
                ]
            },{
                url_img_fondo: "http://goo.gl/LQQ0mn",
                url_img_perfil: "http://goo.gl/bSTTK8",
                id_perfil: "3",
                nombre_perfil_1: "FELIPE",
                nombre_perfil_2: "TOLEDO",
                ultimas_publicaciones: [
                    {
                        tipo: "FOTO",
                        url_imagen_publicacion: "http://goo.gl/bSTTK8"
                    },{
                        tipo: "VIDEO",
                        url_imagen_publicacion: "http://goo.gl/bSTTK8"
                    },{
                        tipo: "FOTO",
                        url_imagen_publicacion: "http://goo.gl/bSTTK8"
                    }
                ]
            }
        ],
        categorias_populares: [
            [
                {
                    nombre_cat: "SKIING",
                    url_img_cat: "http://goo.gl/dwmkfM"
                },{
                    nombre_cat: "HIKING",
                    url_img_cat: "http://goo.gl/dwmkfM"
                },{
                    nombre_cat: "SURFING",
                    url_img_cat: "http://goo.gl/dwmkfM"
                }
            ],[
                {
                    nombre_cat: "SKIING",
                    url_img_cat: "http://goo.gl/dwmkfM"
                },{
                    nombre_cat: "HIKING",
                    url_img_cat: "http://goo.gl/dwmkfM"
                },{
                    nombre_cat: "SURFING",
                    url_img_cat: "http://goo.gl/dwmkfM"
                }
            ],[
                {
                    nombre_cat: "SKIING",
                    url_img_cat: "http://goo.gl/dwmkfM"
                },{
                    nombre_cat: "HIKING",
                    url_img_cat: "http://goo.gl/dwmkfM"
                },{
                    nombre_cat: "SURFING",
                    url_img_cat: "http://goo.gl/dwmkfM"
                }
            ],[
                {
                    nombre_cat: "SKIING",
                    url_img_cat: "http://goo.gl/dwmkfM"
                },{
                    nombre_cat: "HIKING",
                    url_img_cat: "http://goo.gl/dwmkfM"
                },{
                    nombre_cat: "SURFING",
                    url_img_cat: "http://goo.gl/dwmkfM"
                }
            ],[
                {
                    nombre_cat: "SKIING",
                    url_img_cat: "http://goo.gl/dwmkfM"
                },{
                    nombre_cat: "HIKING",
                    url_img_cat: "http://goo.gl/dwmkfM"
                },{
                    nombre_cat: "SURFING",
                    url_img_cat: "http://goo.gl/dwmkfM"
                }
            ],[
                {
                    nombre_cat: "SKIING",
                    url_img_cat: "http://goo.gl/dwmkfM"
                },{
                    nombre_cat: "HIKING",
                    url_img_cat: "http://goo.gl/dwmkfM"
                },{
                    nombre_cat: "SURFING",
                    url_img_cat: "http://goo.gl/dwmkfM"
                }
            ]
        ]
    };
            
        
    $scope.usuarios_populares = datos.usuarios_populares;
    $scope.categorias_populares = datos.categorias_populares;

});