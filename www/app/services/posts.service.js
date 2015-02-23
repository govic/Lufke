angular.module('lufke')
		.factory('PostsService', function ($localStorage, lodash) {
			return {
				getPosts: function () {
					
					//TODO:	debe mergear noticias nuevas, eliminar las no existentes, y mantener las antiguas.
					//		Puede enviar al server los ID de posts en caché y que el servidor mande lo que corresponda.
					var postsList;
					console.log("localStorage.newsUpdateNumber % 2 = " + $localStorage.newsUpdateNumber % 2);

					if ($localStorage.newsUpdateNumber % 2 === 0) {
						postsList = lodash.filter(dummyPosts, function (item) {
							return item.postId <= 3;
						});
					}
					else {
						postsList = lodash.filter(dummyPosts, function (item) {
							return item.postId > 3;
						});
					}

					return postsList;

				},
				getPost: function (id) {
					return lodash.find(dummyPosts, function (item) {
						return item.postId == id;
					});
				},
				deletePost: function (postId) {
					var removed = lodash.remove(dummyPosts, function (post) {
						console.log("post.postId == postId: " + post.postId  + "==" + postId);
						return post.postId == postId;
					});
					
					console.log(removed.length > 0);
					
					return removed.length > 0;
				},
				sharePost: function (postId) {
					//TODO: compartir post
					return true;
				},
				reportPost: function (postId) {
					//TODO: reportar post
					return true;
				},
				deleteComment: function (postId, commentId) {
					var post = lodash.find(dummyPosts, function (item) {
						return item.postId == postId;
					});

					var removed = lodash.remove(post.comments, function (comment) {
						console.log("comment.commentId == commentId: " + comment.commentId  + "==" + commentId);
						return comment.commentId == commentId;
					});
					
					return removed.lenght > 0;
				},
				addComment: function (postId, commentText) {
					var post = lodash.find(dummyPosts, function (item) {
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