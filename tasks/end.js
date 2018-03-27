var end = ($,config)=>{

	const gulp = $.gulp;

	return ()=>{
		console.log($.chalk.red('打包完成'));
	}
}


module.exports = end;