//var url_base = 'http://localhost:3000'; //server local con explorador
//var url_base = 'http://lufke-server-44936.onmodulus.net'; //server modulus
var url_base = 'http://10.0.2.2:3000'; //server local dentro del emulador

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
        uploadTest: url_base + '/post/uploadImage',
    	comment: {
    		create: url_base + '/post/newComment'
    	}
    }
};