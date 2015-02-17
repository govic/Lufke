angular.module('lufke').controller('ProfileController', function ($scope) {
	console.log('Inicia ... ProfileController');

	var data = {
		backgroundImgUrl: "http://goo.gl/WgH5Ju",
		profileImgUrl: "http://goo.gl/T4xQbr",
		profileFirstName: "RYAN",
		profileLastName: "SHECKLER",
		profileId: 1,
		postsNumber: 2093,
		postsUnit: "",
		followersNumber: 5.4,
		followersUnit: "M",
		followingNumber: 204,
		followingUnit: "",
		interests: [
			{
				interestText: "SURFING",
				interestId: 1
			}, {
				interestText: "HIKING",
				interestId: 2
			}, {
				interestText: "SKATEBOARD",
				interestId: 3
			}
		],
		summaryText: "I skateboard and I'm from San Clemente",
		tags: [
			{
				tagText :"@Red-Bull",
				tagId: 1
			}, {
				tagText: "Plan B",
				tagId: 2
			}, {
				tagText: "@Etnies",
				tagId: 3
			}
		],
		socialLinkText: "www.socialink.me/ryansheckler",
		socialLinkUrl: "http://www.socialink.me/ryansheckler?origin=lufkeapp"
	};

	$scope.profile = data;

	$scope.editProfile = function (profile) {
		alert("Editar profile id = " + profile.profileId);
	}
	$scope.viewTag = function (tag) {
		alert("Ver detalle tag id = " + tag.tagId);
	}
	$scope.socialLink = function (link) {
		window.open(link, '_system', 'location=yes');
	};
});