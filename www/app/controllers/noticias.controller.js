angular.module('lufke')
        .controller('NoticiasCtrl', function ($scope) {
            console.log('Inicia ... NoticiasCtrl');

            var dummy =
                    [{
                            fondo: 'http://goo.gl/56Q265',
                            perfil: {
                                imagen: 'http://goo.gl/qBdA7s',
                                nombre: 'Elber Galarga'
                            },
                            localizacion: 'Pichilemu',
                            hora: '4h',
                            texto: 'Hola mundo',
                            estrellas: 2,
                            comentarios: 5,
                            enlace: ''
                        },
                        {
                            fondo: 'http://goo.gl/56Q265',
                            perfil: {
                                imagen: 'http://goo.gl/qBdA7s',
                                nombre: 'Elber Galarga'
                            },
                            localizacion: 'Pichilemu',
                            hora: '4h',
                            texto: 'Hola mundo',
                            estrellas: 2,
                            comentarios: 5,
                            enlace: ''
                        },
                        {
                            fondo: 'http://goo.gl/56Q265',
                            perfil: {
                                imagen: 'http://goo.gl/qBdA7s',
                                nombre: 'Elber Galarga'
                            },
                            localizacion: 'Pichilemu',
                            hora: '4h',
                            texto: 'Hola mundo',
                            estrellas: 2,
                            comentarios: 5,
                            enlace: ''
                        },
                        {
                            fondo: 'http://goo.gl/56Q265',
                            perfil: {
                                imagen: 'http://goo.gl/qBdA7s',
                                nombre: 'Elber Galarga'
                            },
                            localizacion: 'Pichilemu',
                            hora: '4h',
                            texto: 'Hola mundo',
                            estrellas: 2,
                            comentarios: 5,
                            enlace: ''
                        }];

            $scope.publicaciones = dummy;
        });