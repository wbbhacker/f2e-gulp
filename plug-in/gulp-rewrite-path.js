var through = require('through2');

var reWritePath = (options) => {

	
	let transform =  through.obj(function (chunk, enc, callback) {

		let str,regex,strs;

		str = chunk.contents.toString();

		regex = /(\"|\'|'\(){1}(css|js|img|music){1}\/{1}/g;

		strs = str.replace(regex,function(word){

			let regex = /[a-zA-Z]+/g,
				regexA = /\"|\'|\(/g,
				punctuation;

			punctuation = word.match(regexA)[0];

			return punctuation + options.destPath + '/' + word.match(regex)[0]+'/';

		});


		chunk.contents = new Buffer(strs);

	    this.push(chunk);

	    callback();


	});


	return transform;
}


module.exports = reWritePath;