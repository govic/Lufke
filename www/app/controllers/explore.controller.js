angular.module('lufke').controller('ExploreController', function ($scope) {
	console.log('Inicia...ExploreController ');
	$scope.model = {
		topUsers: [
			{
				backgoundImgUrl: "http://goo.gl/LQQ0mn",
				profileImgUrl: "http://goo.gl/PXFWyj",
				profileId: "1",
				profileFirstName: "Elsa",
				profileLastName: "Popeludo",
				profileBackgroundImgUrl: "http://goo.gl/virQ16",
				lastPosts: [
					{
						postType: "FOTO",
						postImgUrl: "http://goo.gl/RlE1ZP"
					}, {
						postType: "VIDEO",
						postImgUrl: "http://goo.gl/RlE1ZP"
					}
				]
			}, {
				backgoundImgUrl: "http://goo.gl/LQQ0mn",
				profileImgUrl: "http://goo.gl/T4xQbr",
				profileId: "2",
				profileFirstName: "Bear",
				profileLastName: "Grylls",
				profileBackgroundImgUrl: "http://goo.gl/virQ16",
				lastPosts: [
					{
						postType: "FOTO",
						postImgUrl: "http://goo.gl/T4xQbr"
					}, {
						postType: "VIDEO",
						postImgUrl: "http://goo.gl/T4xQbr"
					}
				]
			}, {
				backgoundImgUrl: "http://goo.gl/LQQ0mn",
				profileImgUrl: "http://goo.gl/bSTTK8",
				profileId: "3",
				profileFirstName: "Felipe",
				profileLastName: "Toledo",
				profileBackgroundImgUrl: "http://goo.gl/virQ16",
				lastPosts: [
					{
						postType: "FOTO",
						postImgUrl: "http://goo.gl/bSTTK8"
					}, {
						postType: "VIDEO",
						postImgUrl: "http://goo.gl/bSTTK8"
					}
				]
			}
		],
		topCategories: [
			[
				{
					categoryName: "Skiing",
					categoryImgUrl: "http://goo.gl/dwmkfM"
				}, {
					categoryName: "Hiking",
					categoryImgUrl: "http://goo.gl/dwmkfM"
				}, {
					categoryName: "Surfing",
					categoryImgUrl: "http://goo.gl/dwmkfM"
				}
			], [
				{
					categoryName: "Skiing",
					categoryImgUrl: "http://goo.gl/dwmkfM"
				}, {
					categoryName: "Hiking",
					categoryImgUrl: "http://goo.gl/dwmkfM"
				}, {
					categoryName: "Surfing",
					categoryImgUrl: "http://goo.gl/dwmkfM"
				}
			], [
				{
					categoryName: "Skiing",
					categoryImgUrl: "http://goo.gl/dwmkfM"
				}, {
					categoryName: "Hiking",
					categoryImgUrl: "http://goo.gl/dwmkfM"
				}, {
					categoryName: "Surfing",
					categoryImgUrl: "http://goo.gl/dwmkfM"
				}
			], [
				{
					categoryName: "Skiing",
					categoryImgUrl: "http://goo.gl/dwmkfM"
				}, {
					categoryName: "Hiking",
					categoryImgUrl: "http://goo.gl/dwmkfM"
				}, {
					categoryName: "Surfing",
					categoryImgUrl: "http://goo.gl/dwmkfM"
				}
			], [
				{
					categoryName: "Skiing",
					categoryImgUrl: "http://goo.gl/dwmkfM"
				}, {
					categoryName: "Hiking",
					categoryImgUrl: "http://goo.gl/dwmkfM"
				}, {
					categoryName: "Surfing",
					categoryImgUrl: "http://goo.gl/dwmkfM"
				}
			], [
				{
					categoryName: "Skiing",
					categoryImgUrl: "http://goo.gl/dwmkfM"
				}, {
					categoryName: "Hiking",
					categoryImgUrl: "http://goo.gl/dwmkfM"
				}, {
					categoryName: "Surfing",
					categoryImgUrl: "http://goo.gl/dwmkfM"
				}
			]
		]
	};

	$scope.allCategories = function () {
		alert('All Categories');
	};
	
	$scope.follow = function (profileId) {
		alert('Follow: ' + profileId);
	};
	
	$scope.goToProfile = function (profileId) {
		alert('Go to: ' + profileId);
	};

	$scope.allTopUsers = function () {
		alert('All Top Users');
	};

});