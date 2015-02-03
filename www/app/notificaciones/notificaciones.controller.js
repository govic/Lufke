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
                    id_solicitud: "1",
                    nombre_perfil: "Abigail Lee",
                    usuario_perfil: "abbielee"
                }, {
                    url_img_perfil: "http://goo.gl/T4xQbr",
                    id_solicitud: "2",
                    nombre_perfil: "James H. Gildemeister",
                    usuario_perfil: "gildemeister89"
                }, {
                    url_img_perfil: "http://goo.gl/T4xQbr",
                    id_solicitud: "3",
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
                    id_notificacion: "4",
                    usuario_perfil: "bgomez",
                    texto_notificacion: "te está siguiendo",
                    texto_tiempo: "hace 20 segundos"
                }, {
                    url_img_perfil: "http://goo.gl/T4xQbr",
                    id_notificacion: "5",
                    usuario_perfil: "bgomez",
                    texto_notificacion: "marcó tu post como favorito",
                    texto_tiempo: "hace 1 minuto"
                }, {
                    url_img_perfil: "http://goo.gl/T4xQbr",
                    id_notificacion: "6",
                    usuario_perfil: "bgomez",
                    texto_notificacion: "comentó tu post",
                    texto_tiempo: "hace 2 minutos"
                }, {
                    url_img_perfil: "http://goo.gl/T4xQbr",
                    id_notificacion: "7",
                    usuario_perfil: "bgomez",
                    texto_notificacion: "te está siguiendo",
                    texto_tiempo: "hace 5 minutos"
                }
            ]
        }
    };
                
    $scope.solicitudes = datos.solicitudes;
    $scope.notificaciones = datos.notificaciones;
    
    /* Metodo para control de solicitudes */
    
    //metodo que realiza la logica para ignorar una solicitud
    $scope.ignorarSolicitud = function(solicitud) {
        alert("Solicitud ingnorada id = " + solicitud.id_solicitud);
    };
    
    //metodo que realiza la logica para aceptar una solicitud
    $scope.aceptarSolicitud = function(solicitud) {
        alert("Solicitud aceptada id = " + solicitud.id_solicitud);
    };
    
    //metodo cargar todas las solicitudes
    $scope.verSolicitudes = function() {
        alert("Ver más solicitudes!");
    };
    
    
    /* Metodos para control de notificaciones */
    
    //metodo cargar todas las notificaciones
    $scope.verNotificaciones = function() {
        alert("Ver más notificaciones!");
    };
    
    //metodo para redirigir haca notificacion
    $scope.verNotificacion = function(notificacion) {
        alert("Ver notificacion id = " + notificacion.id_notificacion);
    };
});