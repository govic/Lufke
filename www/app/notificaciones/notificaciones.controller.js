angular.module('lufke').controller('NotificacionesCtrl', function ($scope) {
    console.log('Inicia ... NotificacionesCtrl');
    var datos = {
        solicitudes: {
            cantidad_total: 21,
            texto_titulo: "SOLICITUDES DE SEGUIMIENTO",
            cantidad_ver_mas: 18,
            lista: [
                {
                    url_img_perfil: "http://goo.gl/T4xQbr",
                    id_perfil: "1",
                    nombre_perfil: "Abigail Lee",
                    usuario_perfil: "abbielee"
                }, {
                    url_img_perfil: "http://goo.gl/T4xQbr",
                    id_perfil: "2",
                    nombre_perfil: "James H. Gildemeister",
                    usuario_perfil: "gildemeister89"
                }, {
                    url_img_perfil: "http://goo.gl/T4xQbr",
                    id_perfil: "3",
                    nombre_perfil: "Benjamin Fricks",
                    usuario_perfil: "ben_fricks7"
                }
            ]
        },
        notificaciones: {
            cantidad_ver_mas: 5,
            lista: [
                {
                    url_img_perfil: "http://goo.gl/T4xQbr",
                    id_perfil: "4",
                    usuario_perfil: "bgomez",
                    texto_notificacion: "te está siguiendo",
                    texto_tiempo: "hace 20 segundos"
                }, {
                    url_img_perfil: "http://goo.gl/T4xQbr",
                    id_perfil: "5",
                    usuario_perfil: "bgomez",
                    texto_notificacion: "marcó tu post como favorito",
                    texto_tiempo: "hace 1 minuto"
                }, {
                    url_img_perfil: "http://goo.gl/T4xQbr",
                    id_perfil: "6",
                    usuario_perfil: "bgomez",
                    texto_notificacion: "comentó tu post",
                    texto_tiempo: "hace 2 minutos"
                }, {
                    url_img_perfil: "http://goo.gl/T4xQbr",
                    id_perfil: "7",
                    usuario_perfil: "bgomez",
                    texto_notificacion: "te está siguiendo",
                    texto_tiempo: "hace 5 minutos"
                }
            ]
        }
    };
                
    $scope.solicitudes = datos.solicitudes;
    
    //metodo que realiza la logica para ignorar una solicitud
    $scope.ignorarSolicitud = function(solicitud) {
        alert("Solicitud ingnorada!");
    };
    
    //metodo que realiza la logica para aceptar una solicitud
    $scope.aceptarSolicitud = function(solicitud) {
        alert("Solicitud aceptada!");
    };
    
    //metodo que realiza la logica para aceptar una solicitud
    $scope.verSolicitudes = function() {
        alert("Ver más solicitudes!");
    };
});