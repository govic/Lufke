angular.module('lufke').controller('ExploreCtrl', function ($scope) {
	console.log('Inicia...ExploreCtrl ');
	var datos = {
		topUsers: [
			{
				backgoundImgUrl: "http://goo.gl/LQQ0mn",
				profileImgUrl: "http://goo.gl/VAA8eI",
				profileId: "1",
				profileFirstName: "RYAN",
				profileLastName: "SHECKLER",
				lastPosts: [
					{
						postType: "FOTO",
						postImgUrl: "http://goo.gl/VAA8eI"
					}, {
						postType: "VIDEO",
						postImgUrl: "http://goo.gl/VAA8eI"
					}, {
						postType: "FOTO",
						postImgUrl: "http://goo.gl/VAA8eI"
					}
				]
			}, {
				backgoundImgUrl: "http://goo.gl/LQQ0mn",
				profileImgUrl: "http://goo.gl/T4xQbr",
				profileId: "2",
				profileFirstName: "BEAR",
				name_profile_2: "GRYLLS",
				lastPosts: [
					{
						postType: "FOTO",
						postImgUrl: "http://goo.gl/T4xQbr"
					}, {
						postType: "VIDEO",
						postImgUrl: "http://goo.gl/T4xQbr"
					}, {
						postType: "FOTO",
						postImgUrl: "http://goo.gl/T4xQbr"
					}
				]
			}, {
				backgoundImgUrl: "http://goo.gl/LQQ0mn",
				profileImgUrl: "http://goo.gl/bSTTK8",
				profileId: "3",
				profileFirstName: "FELIPE",
				name_profile_2: "TOLEDO",
				lastPosts: [
					{
						postType: "FOTO",
						postImgUrl: "http://goo.gl/bSTTK8"
					}, {
						postType: "VIDEO",
						postImgUrl: "http://goo.gl/bSTTK8"
					}, {
						postType: "FOTO",
						postImgUrl: "http://goo.gl/bSTTK8"
					}
				]
			}
		],
		topCategories: [
			[
				{
					categoryName: "SKIING",
					categoryImgUrl: "http://goo.gl/dwmkfM"
				}, {
					categoryName: "HIKING",
					categoryImgUrl: "http://goo.gl/dwmkfM"
				}, {
					categoryName: "SURFING",
					categoryImgUrl: "http://goo.gl/dwmkfM"
				}
			], [
				{
					categoryName: "SKIING",
					categoryImgUrl: "http://goo.gl/dwmkfM"
				}, {
					categoryName: "HIKING",
					categoryImgUrl: "http://goo.gl/dwmkfM"
				}, {
					categoryName: "SURFING",
					categoryImgUrl: "http://goo.gl/dwmkfM"
				}
			], [
				{
					categoryName: "SKIING",
					categoryImgUrl: "http://goo.gl/dwmkfM"
				}, {
					categoryName: "HIKING",
					categoryImgUrl: "http://goo.gl/dwmkfM"
				}, {
					categoryName: "SURFING",
					categoryImgUrl: "http://goo.gl/dwmkfM"
				}
			], [
				{
					categoryName: "SKIING",
					categoryImgUrl: "http://goo.gl/dwmkfM"
				}, {
					categoryName: "HIKING",
					categoryImgUrl: "http://goo.gl/dwmkfM"
				}, {
					categoryName: "SURFING",
					categoryImgUrl: "http://goo.gl/dwmkfM"
				}
			], [
				{
					categoryName: "SKIING",
					categoryImgUrl: "http://goo.gl/dwmkfM"
				}, {
					categoryName: "HIKING",
					categoryImgUrl: "http://goo.gl/dwmkfM"
				}, {
					categoryName: "SURFING",
					categoryImgUrl: "http://goo.gl/dwmkfM"
				}
			], [
				{
					categoryName: "SKIING",
					categoryImgUrl: "http://goo.gl/dwmkfM"
				}, {
					categoryName: "HIKING",
					categoryImgUrl: "http://goo.gl/dwmkfM"
				}, {
					categoryName: "SURFING",
					categoryImgUrl: "http://goo.gl/dwmkfM"
				}
			]
		]
	};


	$scope.topUsers = datos.topUsers;
	$scope.topCategories = datos.topCategories;

});