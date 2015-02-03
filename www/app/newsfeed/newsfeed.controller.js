angular.module('lufke')
        .controller('NewsfeedCtrl', function ($scope) {
            console.log('Inicia ... NewsfeedCtrl');
            $scope.dato_prueba = 'DATOS DE PRUEBA CONTROLADOR NEWSFEED';

            var dummy =
                    [{
                            background: 'http://goo.gl/56Q265',
                            profile: {
                                img: 'http://goo.gl/qBdA7s',
                                name: 'Elber Galarga'
                            },
                            location: 'Pichilemu',
                            time: '4h',
                            text: 'Hola mundo',
                            stars: 2,
                            comments: 5,
                            link: ''
                        },
                        {
                            background: 'http://goo.gl/56Q265',
                            profile: {
                                img: 'http://goo.gl/qBdA7s',
                                name: 'Elber Galarga'
                            },
                            location: 'Pichilemu',
                            time: '4h',
                            text: 'Hola mundo',
                            stars: 2,
                            comments: 5,
                            link: ''
                        },
                        {
                            background: 'http://goo.gl/56Q265',
                            profile: {
                                img: 'http://goo.gl/qBdA7s',
                                name: 'Elber Galarga'
                            },
                            location: 'Pichilemu',
                            time: '4h',
                            text: 'Hola mundo',
                            stars: 2,
                            comments: 5,
                            link: ''
                        },
                        {
                            background: 'http://goo.gl/56Q265',
                            profile: {
                                img: 'http://goo.gl/qBdA7s',
                                name: 'Elber Galarga'
                            },
                            location: 'Pichilemu',
                            time: '4h',
                            text: 'Hola mundo',
                            stars: 2,
                            comments: 5,
                            link: ''
                        }];

            $scope.datos = dummy;
        });