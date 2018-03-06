
var clean = ($,config)=>{

	const gulp = $.gulp;

	return ()=>{
		
		
		var a = gulp.src(config.basePath+'build')
					.pipe($.clean({force: true}));

		var b = gulp.src(config.basePath+'*.html')
					.pipe($.clean({force: true}));


	}
}


module.exports = clean;