
var rev = ($,config)=>{

	const gulp = $.gulp;
	
	return ()=>{
		
		console.log($.chalk.red('js,css：替换图片、添加版本号、压缩中......'));

		var b = gulp.src([config.revImg+'*.json',config.cssPath])
			.pipe($.changed(config.cssDest))
			
			.pipe($.revCollector({
	            replaceReved: true,
	            dirReplacements: {                
	                'img': 'img',
	                '../img': '../img'
	            }
	        }))
	        .pipe($.rev())
			.pipe($.cleanCss())
			.pipe($.debug({title: 'css文件处理:'}))
			.pipe(gulp.dest(config.cssDest))
			.pipe($.rev.manifest())
        	.pipe(gulp.dest(config.revCss));
        	
        console.log(config.revImg)

		var c = gulp.src([config.revImg+'*.json',config.jsPath])
			.pipe($.changed(config.jsDest))
			.pipe($.revCollector({
	            replaceReved: true,
	            dirReplacements: {
	                'img': 'build/img',
	                '../img': '../build/img'
	            }
	        }))
	        .pipe($.rev())
			.pipe($.uglify())
			.pipe($.debug({title: 'js文件处理:'}))
			.pipe(gulp.dest(config.jsDest))
			.pipe($.rev.manifest())
			.pipe(gulp.dest(config.revjs))

			
		// var d = gulp.src(config.mp3Path)
		// 	.pipe($.changed(config.mp3Dest))
		// 	.pipe($.debug({title: 'mp3文件处理:'}))
		// 	.pipe(gulp.dest(config.mp3Dest))

		
		return $.merge(b,c);

	}
}


module.exports = rev;