//var url_base = 'http://localhost:3000';
var url_base = 'http://lufke-server-44936.onmodulus.net';

var api = {
    user: {
        getById: url_base + '/user/',
        verifyLogin: url_base + '/user/login/'
    },
    post: {
    	getById: url_base + '/post/getPost',
    	getAll: url_base + '/post/getAll',
    	create: url_base + '/post/newPost',
        toggleLike: url_base + '/post/like',
    	comment: {
    		create: url_base + '/post/newComment'
    	}
    }
};