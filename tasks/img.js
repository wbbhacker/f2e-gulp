// img:压缩、添加版本号
var img = ($,config,condition) => {
	
	const gulp = $.gulp;

	return ()=>{
		
	    console.log($.chalk.greenBright('**********************************^-^开始打包***********************************'))
	    console.log($.chalk.greenBright('***************	图片压缩    ***************************************'))
	    
	    var cache = $.cache($.imagemin([
	                $.imagemin.gifsicle(), 
	                $.imagemin.jpegtran(), 
	                $.imagemin.optipng(), 
	                $.imagemin.svgo(), 
	                $.pngquant({quality:'80'}),
	                $.mozjpeg({quality:'60'})
	                ],{verbose:true})),

	    	noCache = $.imagemin([
	                $.imagemin.gifsicle(), 
	                $.imagemin.jpegtran(), 
	                $.imagemin.optipng(), 
	                $.imagemin.svgo(), 
	                $.pngquant({quality:'80'}),
	                $.mozjpeg({quality:'60'})
	                ],{verbose:true});


	    var stream = gulp.src(config.imgPath)

	        .pipe($.if(condition, noCache,cache))
	 		.pipe($.rev())
	       	.pipe(gulp.dest(config.imgDest))
	       	.pipe($.rev.manifest())
	       	.pipe(gulp.dest(config.revImg));
	    	
	    return stream;

	}

}


module.exports = img;