var html = ($,config)=>{
	const gulp = $.gulp;

	return ()=>{
		console.log(config.revImg,config.revImg,config.revCss)
		var a = gulp.src([config.revImg+'*.json',config.revjs+'*.json',config.revCss+'*.json',config.htmlPath])
				.pipe($.changed(config.htmlDest))
				.pipe($.revCollector({
		            replaceReved: true,
		            dirReplacements: {
		                'css':'build/css',
		                'js':'build/js',
		                'img': 'build/img',
		                '../img': '../build/img'
		            }
		        }))
				.pipe($.htmlmin({collapseWhitespace: true}))
				.pipe($.debug({title: 'html文件处理:'}))
				.pipe(gulp.dest(config.htmlDest))
			return a;
	}
}

module.exports = html;