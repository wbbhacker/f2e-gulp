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

	    var arrPath = [
	    		config.htmlDest+'*.html',
	    		config.cssDest+'**/*.css',
	    		config.jsDest+'**/*.js'
	    		];

	    		

	    var stream = gulp.src(config.imgPath)

	        .pipe($.if(condition, noCache,cache))
	 		
	        .pipe(gulp.dest(config.imgDest))
	    	
	    return stream;

	}

}


module.exports = img;