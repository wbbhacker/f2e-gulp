// sass编译 跟 css后缀补全

var less = ($,config) => {

	const gulp = $.gulp;

	return function(){

	var stream = gulp.src(config.lessPath)
			
			.pipe($.cached('less'))
	        .pipe($.sourcemaps.init())

	        .pipe($.less())
	        
	        .pipe($.sourcemaps.write())

	        .pipe($.autoprefixer({
	              browsers: ['>5%'],
	              cascade: true,
	              remove:true
	        }))

	        .pipe(gulp.dest(config.lessDest))
	        .pipe($.reload({stream: true}));
	    return stream;
	    
	}

}


module.exports = less;
