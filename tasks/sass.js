// sass编译 跟 css后缀补全

var sass = ($,config) => {

	const gulp = $.gulp;

	return function(){

	var stream = gulp.src(config.scssPath)
			
			.pipe($.cached('sass'))
	        .pipe($.sourcemaps.init())
	        .pipe($.sass({outputStyle: 'expanded'}).on('error', $.sass.logError))
	        .pipe($.sourcemaps.write())
	        .pipe($.autoprefixer({
	              browsers: ['>5%'],
	              cascade: true,
	              remove:true
	        }))

	        .pipe(gulp.dest(config.scssDest))
	        .pipe($.reload({stream: true}));
	        
	    return stream;
	    
	}

}


module.exports = sass;
