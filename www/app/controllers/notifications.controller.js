angular.module('lufke').controller('NotificationsController', function ($scope) {
	console.log('Inicia ... NotificationsController');
	var datos = {
		requests: {
			totalRequests: 21,
			titleText: "solicitudes de seguimiento",
			totalMore: 18,
			requestsList: [
				{
					profileImgUrl: "http://goo.gl/T4xQbr",
					requestId: "1",
					profileName: "Abigail Lee",
					profileUser: "abbielee"
				}, {
					profileImgUrl: "http://goo.gl/T4xQbr",
					requestId: "2",
					profileName: "James H. Gildemeister",
					profileUser: "gildemeister89"
				}, {
					profileImgUrl: "http://goo.gl/T4xQbr",
					requestId: "3",
					profileName: "Benjamin Fricks",
					profileUser: "ben_fricks7"
				}
			]
		},
		notifications: {
			totalMore: 5,
			notificationsList: [
				{
					profileImgUrl: "http://goo.gl/T4xQbr",
					notificationId: "4",
					profileUser: "bgomez",
					notificationText: "te está siguiendo",
					timestampText: "hace 20 segundos"
				}, {
					profileImgUrl: "http://goo.gl/T4xQbr",
					notificationId: "5",
					profileUser: "bgomez",
					notificationText: "marcó tu post como favorito",
					timestampText: "hace 1 minuto"
				}, {
					profileImgUrl: "http://goo.gl/T4xQbr",
					notificationId: "6",
					profileUser: "bgomez",
					notificationText: "comentó tu post",
					timestampText: "hace 2 minutos"
				}, {
					profileImgUrl: "http://goo.gl/T4xQbr",
					notificationId: "7",
					profileUser: "bgomez",
					notificationText: "te está siguiendo",
					timestampText: "hace 5 minutos"
				}
			]
		}
	};

	$scope.requests = datos.requests;
	$scope.notifications = datos.notifications;

	/* Metodo para control de requests */

	//metodo que realiza la logica para ignorar una solicitud
	$scope.ignoreRequest = function (request) {
		alert("Solicitud ingnorada id = " + request.requestId);
	};

	//metodo que realiza la logica para aceptar una solicitud
	$scope.acceptRequest = function (request) {
		alert("Solicitud aceptada id = " + request.requestId);
	};

	//metodo cargar todas las requests
	$scope.viewRequests = function () {
		alert("Ver más requests!");
	};


	/* Metodos para control de notifications */

	//metodo cargar todas las notificaciones
	$scope.viewNotifications = function () {
		alert("Ver más notifications!");
	};

	//metodo para redirigir haca notificacion
	$scope.viewNotification = function (notification) {
		alert("Ver notificacion id = " + notification.notificationId);
	};
});