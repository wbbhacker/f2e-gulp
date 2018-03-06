var through = require('through2');


var addRandomRe = (options) => {

	
	let timestamp = new  Date().getTime();

	let transform =  through.obj(function (chunk, enc, callback) {

		let str,regex,strs;

		str = chunk.contents.toString();
		
		regex = /\.(png|jpg|gif|js|css|mp3)(\?v=[0-9]*)*(\"|\'|\)){1}/g;

		strs = str.replace(regex,function(wrod){

			let regex = /\.[a-zA-Z]+[3]?/g,
				regexA = /\"|\'|\)/g,
				punctuation;

			punctuation = wrod.match(regexA)[0];
			
			return wrod.match(regex)[0] + '?v=' + options.timestamp + punctuation;

		});

		chunk.contents = new Buffer(strs);

	    this.push(chunk);

	    callback();


	});


	return transform;
}


module.exports = addRandomRe;