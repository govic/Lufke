angular.module('lufke')
		.factory('PostsService', function ($localStorage, $http, lodash) {
			return {
				getPosts: function () {
					var postsList;
					console.log("localStorage.newsUpdateNumber % 2 = " + $localStorage.newsUpdateNumber % 2);

					if ($localStorage.newsUpdateNumber % 2 === 0) {
						postsList = lodash.filter(dummyPostList, function(item){
							return item.postId <= 3;
						});
					}
					else {
						postsList = lodash.filter(dummyPostList, function(item){
							return item.postId > 3;
						});
					}
					
					return postsList;

				},
				getPost: function (id){
					return lodash.find(dummyPostDetail, function(item){
						return item.postId == id;
					});
				}
			};
		});