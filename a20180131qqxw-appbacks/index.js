const express = require('express');
const router = express.Router();
const path = require('path');
const FaceMerge = require('./merge.js');

const fs = require('fs');

// function sucLog(str){
// 	fs.appendFile(__dirname+'/log-', str);
// }
// function createDate(date){
// 	var year = date.getFullYear();
// 	var month = date.getMonth()+1;
// 	var day = date.getDate();

// 	var str = year+''+ (month<10?month:''+0+month) + '' + (day<10?day:''+0+day);
// 	return str;
// }

const fm1 = new FaceMerge(1106650691,'ERCyICaTwsF5PKno');//QQ炫舞1
const fm2 = new FaceMerge(1106727100,'wntTYFSWNDGCoZAG');//QQ炫舞2

function requestHandler(req,res){

	res.set({
		// "Access-Control-Allow-Origin": "http://x5m.qq.com",
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "POST",
		"Access-Control-Allow-Headers": "X-Requested-With,Content-type"
	})

	// var date = new Date().getDate();
	// console.log()
	// var dateStr = date.getFullYear()+''

	let models = [6055,6056,6057,6058,6059,6060,6068,6069,6070,6071,6072,6073];
	// let models = [3098];
	let index = parseInt(Math.random()*12);
	let model = models[index];

	var fm = index<6 ? fm1 : fm2;
	let image = req.body.image;
	// console.log(image);
	fm.request(model,image,function (err,data,result){
		if (err){
			let obj = {
				"ret": -1,
				"msg": "request error",
				"data": err
			}
			res.json(obj);
			// fs.appendFile(__dirname+'/logs/log-'+date+'.log', obj.ret+',');
		}else {
			data.model = model;
			res.json(data);
			// fs.appendFile(__dirname+'/logs/log-'+date+'.log', data.ret+',');
		}

	});

}

router.post('/appsback/a20180131qqxw',requestHandler);
module.exports = router;