var canvas,stage;
var app = app || {};
app.resPath = './';
var isIOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
// app.getQueryString = function (name){

//    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");

//    var r = window.location.search.substr(1).match(reg);

//    if (r!=null) return unescape(r[2]); return null;

// }
app.getRequest = function (){

   var url = location.search; //获取url中含"?"符后的字串

   var theRequest = new Object();

   if (url.indexOf("?") != -1) {

      // var str = url.substr(1);
      var str = decodeURI(url.substr(1));

      strs = str.split("&");

      for(var i = 0; i < strs.length; i ++) {

         theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);

      }

   }

   return theRequest;

}
lib.ssMetadata = [
	{

		"name": "atlas_result_",

		"frames": [
		    [2, 2, 506, 84, 0, -18, -2],
		    [512, 2, 500, 40, 0, -22, -8],
		    [512, 46, 486, 46, 0, -16, -16],
		    [1002, 46, 18, 84, 0, 0, 0],
		    [2, 90, 482, 134, 0, -16, -10],
		    [488, 96, 478, 68, 0, -16, -10],
		    [970, 96, 28, 28, 0, 0, 0],
		    [488, 168, 474, 68, 0, -16, -10],
		    [2, 228, 474, 68, 0, -16, -10],
		    [480, 240, 474, 60, 0, -16, -10],
		    [2, 300, 468, 84, 0, -18, -2],
		    [474, 304, 466, 84, 0, -18, -2],
		    [944, 304, 74, 364, 0, 0, 0],
		    [2, 388, 464, 84, 0, -18, -2],
		    [470, 392, 464, 68, 0, -16, -10],
		    [470, 464, 462, 40, 0, -22, -8],
		    [2, 476, 460, 56, 0, -16, -10],
		    [466, 508, 440, 74, 0, -16, -10],
		    [2, 536, 424, 40, 0, -22, -10],
		    [2, 580, 424, 40, 0, -22, -10],
		    [430, 586, 412, 76, 0, -18, -10],
		    [846, 586, 74, 364, 0, 0, 0],
		    [2, 624, 404, 84, 0, 0, -8],
		    [924, 672, 74, 364, 0, 0, 0],
		    [410, 666, 402, 76, 0, -18, -10],
		    [2, 712, 402, 76, 0, -18, -10],
		    [408, 746, 392, 76, 0, -18, -10],
		    [2, 792, 384, 40, 0, -22, -8],
		    [390, 826, 384, 40, 0, -22, -8],
		    [2, 836, 360, 134, 0, -16, -10],
		    [366, 870, 358, 138, 0, -16, -10],
		    [2, 974, 358, 78, 0, -18, -8],
		    [728, 954, 190, 92, 0, 0, -4],
		    [364, 1012, 352, 76, 0, -18, -10],
		    [720, 1050, 296, 76, 0, -18, -10],
		    [728, 870, 102, 44, 0, 0, 0],
		    [2, 1056, 344, 40, 0, -22, -8],
		    [350, 1092, 344, 40, 0, -22, -8],
		    [2, 1100, 344, 38, 0, -22, -10],
		    [698, 1130, 306, 40, 0, -22, -10],
		    [350, 1136, 306, 40, 0, -22, -8],
		    [2, 1142, 306, 40, 0, -22, -8],
		    [660, 1174, 306, 40, 0, -22, -8],
		    [312, 1180, 292, 78, 0, -18, -8],
		    [2, 1262, 74, 364, 0, 0, 0],
		    [80, 1262, 74, 364, 0, 0, 0],
		    [158, 1262, 74, 364, 0, 0, 0],
		    [236, 1262, 74, 364, 0, 0, 0],
		    [314, 1262, 74, 364, 0, 0, 0],
		    [392, 1262, 74, 364, 0, 0, 0],
		    [470, 1262, 74, 364, 0, 0, 0],
		    [548, 1262, 74, 364, 0, 0, 0],
		    [608, 1218, 264, 38, 0, -18, -12],
		    [876, 1218, 140, 198, 0, 0, 0],
		    [2, 1186, 156, 38, 0, -18, -12],
		    [162, 1186, 120, 38, 0, -18, -12],
		    [626, 1260, 190, 92, 0, 0, -4],
		    [626, 1420, 290, 78, 0, -18, -8],
		    [626, 1356, 118, 38, 0, -18, -12],
		    [626, 1502, 252, 88, 0, 0, -6]
		]

	}

];
app.init = function (){

	var loader = new createjs.LoadQueue(false,app.resPath,'Anonymous');
	loader.addEventListener("fileload", app.handleFileLoad);
	loader.addEventListener("complete", app.handleLoadingComplete);
	loader.loadManifest([
		{src:"images/r_bg.jpg", id:"r_bg"},
		{src:"images/r_pic01.jpg", id:"r_pic01"},
		{src:"images/r_pic02.jpg", id:"r_pic02"},
		{src:"images/r_pic03.jpg", id:"r_pic03"},
		{src:"images/r_pic04.jpg", id:"r_pic04"},
		{src:"images/qrcode.png", id:"qrcode"},
		{src:"images/atlas_result_.png", id:"atlas_result_"}
	])
}

app.handleFileLoad = function (evt){
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}
//加载进度
app.handleProgress = function (evt) {
	var percent = parseInt(evt.progress*100);
	app.loading.percent.percent.text = percent + '%';
	// document.querySelector('#percent').innerHTML = percent + '%';
}
//loading页面资源加载完毕回调
app.handleLoadingComplete = function (evt) {

	var queue = evt.target;
  // ss["atlas_result_"] = queue.getResult("atlas_result_");
  var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}

	stage = new createjs.Stage(document.querySelector('#canvas'));
	var query = app.getRequest();
	// var userName = app.getQueryString('userName') || "小倩";
	// var combo = app.getQueryString('combo') || "1_1_1_1";
	var userName = query.userName || "小倩";
	var combo = query.combo || "1_1_1_1";
	var type = combo.split('_')[0];
	if (type==1||type==2){$('.btn_qf').css({left:"74px",top:"980px"}) };
	setTimeout(function (){
		// alert(userName);
		app.createImage({userName:decodeURI(userName),combo:combo});
		// app.createImage({userName:userName,combo:combo});
	},500);
	
}
//生成结果图
app.createImage = function (data){

	$('.loadgif').hide();
	var combo = data.combo.split('_');
	var type = Number(combo[0]);
	var location = Number(combo[1])-1;
	var meet = Number(combo[2])-1;
	var keyword = Number(combo[3])-1;
	var len = data.userName.length;

	app.libResult = type==1 ? new lib.z_result1() : type==2 ? new lib.z_result2() : type==3 ? new lib.z_result3() : new lib.z_result4();

	stage.removeAllChildren();
	stage.addChild(app.libResult);
	stage.update();
	app.libResult.namebig.text = data.userName;
	// app.libResult.namebig.textBaseline = "bottom";
	app.libResult.namebig.font = "bold 92px Heiti SC";
	app.libResult.namesmall.text = data.userName;
	app.libResult.namesmall.font = "bold 36px Heiti SC";
	app.libResult.location.gotoAndStop(location);
	app.libResult.meet.gotoAndStop(meet);
	app.libResult.keyword.gotoAndStop(keyword);
	app.libResult.namebig.x = 94;
	app.libResult.namebig.y += isIOS ? -8 : 10;
	app.libResult.namesmall.y += isIOS ? -2 : 6;
	app.libResult.nameborder.x = app.libResult.namebig.getBounds().width + 116;
	// console.log(app.libResult.namebig.getBounds().height);
	stage.update();
	$('.btn_qf').show();
	// document.querySelector('#saveImage').src = stage.toDataURL();

	// setTimeout(function (){
	// 	$('.waitwrap,.inputtpage').hide();
	// 	$('.resultpage').fadeIn(200);
	// 	$('#saveImage').addClass('ani');
	// },1000)
}
app.responsive = function (){
  // if ( window.orientation == 0 || window.orientation == 180 ){
      var zoom = document.body.clientWidth/750;
      document.querySelector('.container').style.zoom = zoom>1?1:zoom;
  // }else if ( window.orientation == 90 || window.orientation == -90 ){
  //     var zoom = document.body.clientWidth/1220;
  //     document.querySelector('.container').style.zoom = zoom;
  // }
}
app.responsive();
window.addEventListener('orientationchange',app.responsive);
$('.btn_qf').on('click',function (){
	var url = location.href.split('?')[0].replace('share.html','');
	location.href = url;
})
app.init();