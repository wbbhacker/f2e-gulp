var init = ($,config) => {
	
	const gulp = $.gulp;
	
	return ()=>{
  		$.cache.clearAll();
	}

}


module.exports = init;