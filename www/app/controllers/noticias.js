angular.module('lufke')
        .controller('NoticiasCtrl', function ($scope, $localStorage, PublicacionesService) {
            console.log('Inicia ... NoticiasCtrl');
            $localStorage.$default({
                    'numeroRefrescos': 0
            });
            
            $scope.publicaciones = PublicacionesService.actualizar();
            
            console.log("Numero refrescos:" + $localStorage.numeroRefrescos);

            $scope.refrescarNoticias = function () {
                $localStorage.numeroRefrescos++;
                $scope.publicaciones = PublicacionesService.actualizar();
                $scope.$broadcast('scroll.refreshComplete');

            };
        });