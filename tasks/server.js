// 服务器
var server = ($,config) => {

	return ()=>{	
		$.browserSync.init({
	        server: {
	            baseDir: config.serverPath,
	            data: 'index.html',
	        },
	        port:config.port,
	        open: 'external',
	        notify:false
	    });
	}
}

module.exports = server;


