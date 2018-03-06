
var js = ($,config) => {
	
	const gulp = $.gulp;

	return ()=>{
		var stream =  gulp.src(config.jsPath)
			.pipe($.cached('js'))	
        	.pipe($.reload({stream: true}));
        return stream;
	}

}


module.exports = js;