angular.module('lufke').controller('FiltrosCtrl', function ($scope) {
    console.log('Inicia ... FiltrosCtrl');
    var datos = {
        intereses: [
            {
                id_iteres: 1,
                ranking_interes: 1,
                nombre_interes: "SKATEBOARDING",
                porcentaje_interes: 40
            },{
                id_iteres: 2,
                ranking_interes: 2,
                nombre_interes: "SURFING",
                porcentaje_interes: 30
            },{
                id_iteres: 3,
                ranking_interes: 3,
                nombre_interes: "TRAVELLING",
                porcentaje_interes: 20
            },{
                id_iteres: 4,
                ranking_interes: 4,
                nombre_interes: "FOOTBALL",
                porcentaje_interes: 10
            }
        ],
        proporciones: {
            porcentaje_fotos: 50,
            porcentaje_videos: 25,
            porcentaje_enlaces: 25
        },
        distancia_km: 100
    };
    
    $scope.filtros = datos;
    
    $scope.editarIntereses = function() {
        alert("Editar intereses!")
    };
    /*
    //metodo para hacer que los porcentajes no 
    $scope.porcentajeFotosChange = function() {
        var suma = parseInt($scope.filtros.proporciones.porcentaje_fotos) + parseInt($scope.filtros.proporciones.porcentaje_videos) + parseInt($scope.filtros.proporciones.porcentaje_enlaces);
        if (suma != 100) {
            var restar = suma > 100;
            var repartir = restar ? suma - 100 : 100 - suma;
            var val1 = Math.floor(repartir/2);
            var val2 = val1 + 1;
            var temp = 0;
            if(restar) {
                temp = $scope.filtros.proporciones.porcentaje_videos;
                if (temp - val1 > 0){
                    $scope.filtros.proporciones.porcentaje_videos = temp - val1;
                } else {
                    
                }
                $scope.filtros.proporciones.porcentaje_enlaces -= val2;
            }else{
                $scope.filtros.proporciones.porcentaje_videos += val1;
                $scope.filtros.proporciones.porcentaje_enlaces += val2;
            }
        }
    };*/
});