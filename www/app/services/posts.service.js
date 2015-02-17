angular.module('lufke')
		.factory('PostsService', function ($localStorage, lodash) {
			return {
				getPosts: function () {
					var postsList;
					console.log("localStorage.newsUpdateNumber % 2 = " + $localStorage.newsUpdateNumber % 2);

					if ($localStorage.newsUpdateNumber % 2 === 0) {
						postsList = lodash.filter(dummyPostList, function (item) {
							return item.postId <= 3;
						});
					}
					else {
						postsList = lodash.filter(dummyPostList, function (item) {
							return item.postId > 3;
						});
					}

					return postsList;

				},
				getPost: function (id) {
					return lodash.find(dummyPostDetail, function (item) {
						return item.postId == id;
					});
				},
				deleteComment: function (postId, commentId) {
					var post = lodash.find(dummyPostDetail, function (item) {
						return item.postId == postId;
					});

					return lodash.remove(post.comments, function (comment) {
						return comment.commentId == commentId;
					});
				},
				addComment: function (postId, commentText) {
					var post = lodash.find(dummyPostDetail, function (item) {
						return item.postId == postId;
					});

					return post.comments.push(
							{
								"commentId": Date.now(),
								"profile": {
									"name": "CURRENT USER",
									"image": "http://placehold.it/48x48"
								},
								"timestamp": "0m",
								"text": commentText
							}
					);
				}
			};
		});