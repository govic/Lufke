angular.module('lufke').controller('PerfilCtrl', function ($scope) {
	console.log('Inicia ... PerfilCtrl');

	var datos = {
		url_img_fondo: "http://goo.gl/WgH5Ju",
		url_img_perfil: "http://goo.gl/T4xQbr",
		nombre_perfil_1: "RYAN",
		nombre_perfil_2: "SHECKLER",
		id_perfil: 1,
		cant_posts: 2093,
		uni_posts: "",
		cant_seguidores: 5.4,
		uni_seguidores: "M",
		cant_siguiendo: 204,
		uni_siguiendo: "",
		intereses: [
			{
				texto_interes: "SURFING",
				id_interes: 1
			}, {
				texto_interes: "HIKING",
				id_interes: 2
			}, {
				texto_interes: "SKATEBOARD",
				id_interes: 3
			}
		],
		texto_abstract: "I skateboard and I'm from San Clemente",
		tags: [
			{
				texto_tag: "@Red-Bull",
				id_tag: 1
			}, {
				texto_tag: "Plan B",
				id_tag: 2
			}, {
				texto_tag: "@Etnies",
				id_tag: 3
			}
		],
		texto_social_link: "www.socialink.me/ryansheckler",
		url_social_link: "http://www.socialink.me/ryansheckler?origin=lufkeapp"
	};

	$scope.perfil = datos;

	$scope.editarPerfil = function (perfil) {
		alert("Editar perfil id = " + perfil.id_perfil);
	}
	$scope.verTag = function (tag) {
		alert("Ver detalle tag id = " + tag.id_tag);
	}
	$scope.socialLink = function (link) {
		window.open(link, '_system', 'location=yes');
	};
});