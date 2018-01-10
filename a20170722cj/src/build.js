var fs = require('fs');
var path = require('path');

var dir = './images';
var destFile = './scripts/elements.js';

function createString(file){

	var string = '';

	var data = fs.readFileSync(file,{encoding:'utf8'});

	function readCallback(data){

		var animations = JSON.parse(data).animations;

		var basename = path.basename(file,'.json');

		string = '//'+basename+' START\r';

		for ( var key in animations ){
			string += '(lib.'+key+' = function() {this.spriteSheet = ss["'+basename+'"];this.gotoAndStop("'+key+'");}).prototype = p = new cjs.Sprite();\r'
		}

		string += '//'+basename+' END\r';	

		return string;
	}

	return string = readCallback(data);
}

function build(dir,toFile){

	var fileString = '';

	fs.readdir(dir,function(err,files){
		if (err)throw err;

		files.forEach(function (v,i){

			if ( '.json'===path.extname(v) ){

				var fileName = path.join(dir,v);
				var string = createString(fileName);

				fileString += string;
			}

		})
		fileString = '(function (lib, img, cjs, ss) {\rvar p;'+
									fileString+
									'})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});\rvar lib, images, createjs, ss;'
		
		fs.writeFile(toFile,fileString,'utf8',function (err){
			if (err)throw err;
			console.log('saved');
		})
	})

}

build(dir,destFile);