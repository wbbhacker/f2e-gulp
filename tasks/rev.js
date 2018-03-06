
var rev = ($,config)=>{

	const gulp = $.gulp;

	return ()=>{

		console.log($.chalk.greenBright('***************	html,js,css压缩、丑化	***************************'));

		let timestamp = new  Date().getTime();
		
		
		console.log($.chalk.red('本次添加版本号为：'+timestamp));


		var a = gulp.src(config.htmlPath)

			.pipe($.changed(config.htmlDest))

			.pipe($.rePath({
				destPath:'build'
			}))
			.pipe($.myRev({timestamp:timestamp}))
			.pipe($.htmlmin({collapseWhitespace: true}))
			
			.pipe($.debug({title: 'html文件处理:'}))
			.pipe(gulp.dest(config.htmlDest))
			

		var b = gulp.src(config.cssPath)
			.pipe($.changed(config.cssDest))
			.pipe($.myRev({timestamp:timestamp}))
			.pipe($.cleanCss())
			.pipe($.debug({title: 'css文件处理:'}))
			.pipe(gulp.dest(config.cssDest))


		var c = gulp.src(config.jsPath)
			.pipe($.changed(config.jsDest))
			.pipe($.rePath({
				destPath:'build'
			}))
			.pipe($.myRev({timestamp:timestamp}))
			.pipe($.uglify())
			.pipe($.debug({title: 'js文件处理:'}))
			.pipe(gulp.dest(config.jsDest))


		var d = gulp.src(config.mp3Path)
			.pipe($.changed(config.mp3Dest))
			.pipe($.debug({title: 'mp3文件处理:'}))
			.pipe(gulp.dest(config.mp3Dest))


		$.merge(a,b,c,d);

	}
}


module.exports = rev;