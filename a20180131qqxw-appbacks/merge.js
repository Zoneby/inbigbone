const crypto = require('crypto');
const urllib = require('urllib');

const FaceMerge = function (app_id,app_key){
	this.app_id = app_id;
	this.app_key = app_key;
}
FaceMerge.prototype = {
	constructor: FaceMerge,
	init: function (){
		// this.nonce_str = this.createNonceStr();
		// this.timeStamp = this.createTimeStamp();
	},
	createNonceStr: function (){
		return Math.random().toString(36).substr(2, 15);
	},
	createTimeStamp: function (){
		return parseInt(new Date().getTime() / 1000);
	},
	_createSign: function(model,image){
		this.nonce_str = this.createNonceStr();
		this.time_stamp = this.createTimeStamp();
		let str = `app_id=${this.app_id}&image=`+encodeURIComponent(image)+`&model=${model}&nonce_str=${this.nonce_str}&time_stamp=${this.time_stamp}&app_key=${this.app_key}`;
		let md5 = crypto.createHash('md5');
		md5.update(str);
		let sign = md5.digest('hex');
		return sign.toUpperCase();
	},
	request: function(model,image,cb){

		let sign = this._createSign(model,image);
		let queryStr = `app_id=${this.app_id}&nonce_str=${this.nonce_str}&time_stamp=${this.time_stamp}&sign=${sign}&model=${model}&image=`+encodeURIComponent(image);

		urllib.request(
			'https://api.ai.qq.com/fcgi-bin/ptu/ptu_facemerge',
			{
				method:'POST',
				headers: {
			    'Content-type': 'application/x-www-form-urlencoded',
			    'Accept': 'application/json'
			  },
				data: queryStr,
				dataType: 'json',
				timeout: [20000,20000]
			},
			(err,data,result)=>{
				cb&&cb(err,data,result);
			})
		}
}

module.exports = FaceMerge;