
var init = ($,config) => {
	
	const gulp = $.gulp;
	
	return ()=>{

  		$.makeDir(config.basePath+'static');
  		$.makeDir(config.basePath+'static/css');
  		$.makeDir(config.basePath+'static/img');
  		$.makeDir(config.basePath+'static/js');
  		$.makeDir(config.basePath+'static/music');
  		
	}

}


module.exports = init;