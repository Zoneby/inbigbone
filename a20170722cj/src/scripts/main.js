
var app = app || {};
app.resPath = './';
app.clueIndex = 0;// 初始化支线索引
app.clueFoundNum = 0;// 初始化被找到线索的数目
app.tipbox = $('.tipbox');
document.addEventListener("WeixinJSBridgeReady",function (){document.querySelector('audio').play()}, false)

//初始化页面适配缩放
app.initPageAdapt = function (){
	var zoom = document.body.clientWidth/750;
	document.querySelector('.container').style.zoom = zoom;
}
//初始化头像画布
app.initPhotoCanvas = function (){
	var canvas, stage;
	var drawingCanvas;
	var oldPt;
	var oldMidPt;
	var title;
	var color;
	var stroke;
	var index;

	function init() {
		canvas = document.getElementById("photoCanvas");
		index = 0;
		color = '#000000';

		stage = new createjs.Stage(canvas);
		stage.autoClear = false;
		stage.enableDOMEvents(true);

		app.photoCanvas = canvas;
		app.photoStage = stage;

		createjs.Touch.enable(stage);
		createjs.Ticker.setFPS(24);

		drawingCanvas = new createjs.Shape();

		stage.addEventListener("stagemousedown", handleMouseDown);
		stage.addEventListener("stagemouseup", handleMouseUp);

		stage.addChild(drawingCanvas);
		stage.update();
	}

	function handleMouseDown(event) {
		if (!event.primary) { return; }
		stroke = 20;
		oldPt = new createjs.Point(event.stageX, event.stageY);
		oldMidPt = oldPt.clone();
		stage.addEventListener("stagemousemove", handleMouseMove);
	}

	function handleMouseMove(event) {
		if (!event.primary) { return; }
		var midPt = new createjs.Point(oldPt.x + event.stageX >> 1, oldPt.y + event.stageY >> 1);

		drawingCanvas.graphics.clear().setStrokeStyle(stroke, 'round', 'round').beginStroke(color).moveTo(midPt.x, midPt.y).curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y);

		oldPt.x = event.stageX;
		oldPt.y = event.stageY;

		oldMidPt.x = midPt.x;
		oldMidPt.y = midPt.y;
		stage.update();
		app.isDrew = !0;
	}

	function handleMouseUp(event) {
		if (!event.primary) { return; }
		stage.removeEventListener("stagemousemove", handleMouseMove);
	}
	init();
}
//线索数据
app.clueData = [
	[
		{tip_text:'震惊！两个球类斗殴竟<br>想吃掉对方',found_text:'大球还能吃小球，好怕怕哦~',isFound:!1},
		{tip_text:'寻找华夏国度虐人无数大boss',found_text:'你打败了大boss——海煞，<br>但也并没有公主给你',isFound:!1},
		{tip_text:'注意那本修炼成精的漫画书',found_text:'人丑就要多看漫画书',isFound:!1},
		{tip_text:'福利领取区有人抽中了一个妹纸',found_text:'你成功换走别人“女朋友”，<br>自信值加成10000%',isFound:!1},
		{tip_text:'唱歌的小伙子和乐队竟有点眼熟？',found_text:'你的灵魂歌声打动了歌手JJ，<br>萌萌玩偶是他肯定的奖励%',isFound:!1},
		{tip_text:'哔！CJ现场活捉奇葩导师MM马',found_text:'MM马十分欣赏你，声称<br>饭局狼人杀下一次可能有你！',isFound:!1},
		{tip_text:'卡片怪兽区竟有<br>传说中的逆袭卡？',found_text:'有了逆袭卡，你成了女神都<br>仰慕万分的游戏策划',isFound:!1},
		{tip_text:'它是走失在迷宫中最<br>神秘的伙伴',found_text:'劝你配眼镜的验光师肯定是瞎了眼',isFound:!1}
	],
	[
		{tip_text:'卖漫画的小姐姐居然喉结<br>比我还大？',found_text:'恭喜你练就了火眼金睛，<br>这位“小姐姐”偷偷瞪了你一眼',isFound:!1},
		{tip_text:'福利区宅男聚集，肯定有猫腻',found_text:'BINGO！路人coser小姐姐的1厘米<br>都逃不过你的法眼！',isFound:!1},
		{tip_text:'警报！发现石器时代牙齿过<br>长的小花猫！',found_text:'警报解除！石器时代片区的<br>coser可以安心工作了！',isFound:!1},
		{tip_text:'消除者联盟的疯狂粉丝',found_text:'你简直是人类之光，消除者联盟<br>向你发出组队邀请',isFound:!1},
		{tip_text:'CJ现场竟有如此正经的法官！',found_text:'在CJ你“只手遮天”，<br>成功提高男模们的清爽度！',isFound:!1},
		{tip_text:'迷宫旁的花裤男带着不明生物',found_text:'可爱是可爱，但你得跟我们走一趟',isFound:!1},
		{tip_text:'热血格斗区有人随地撒狗粮',found_text:'你成功阻止“虐狗”行为，<br>围观的群众为你鼓掌',isFound:!1},
		{tip_text:'舞台再耀眼，也不及卖葱赚钱',found_text:'你将没收的大葱上交国家，<br>得到五元奖金',isFound:!1}
	],
	[
		{tip_text:'入口旁连续自拍30张的<br>是不是你的女友？',found_text:'拿着女友的自拍照找她<br>真是天真',isFound:!1},
		{tip_text:'华夏区闪亮的海煞旁<br>有人在哭泣？',found_text:'溜了溜了，这么暴力肯定是<br>我女朋友！',isFound:!1},
		{tip_text:'女友好像跟冯宝宝在那儿！',found_text:'不知道冯宝宝招收<br>男小弟吗？',isFound:!1},
		{tip_text:'福利领取区有好几个妹纸！',found_text:'“呼~总算知道女友去哪了！”',isFound:!1},
		{tip_text:'人海茫茫，去MT区看看吧',found_text:'银鳞胸甲，买一送一，<br>你不如去休息区看看',isFound:!1},
		{tip_text:'收到情报，魔法阵里的篮球<br>boys见过你女友',found_text:'叫阿姨的熊孩子别给他糖吃',isFound:!1},
		{tip_text:'极光体验区的工作人员似乎知情',found_text:'这个无心回复信息量巨大',isFound:!1},
		{tip_text:'初音区出现疑似目标！<br>是双马尾还是黑长直？',found_text:'什么？女朋友？<br>tan90°~不存在的~:-) ',isFound:!1}
	]
]

app.cd = app.clueData[app.clueIndex];// 短变量当前支线数据

//线索文案切换
app.changeClueTip = function (text){
	app.tipbox.removeClass('line2').html(text).show();
	if (text.indexOf('<br>')>0){
		app.tipbox.addClass('line2');
	}
}

//初始化底部线索栏
app.initClueSlider = function (){
	app.mySwiper = new Swiper('.swiper-container', {
		direction:"horizontal",
		loop:!1,
		slidesPerView:"auto",
		centeredSlides:!0,
		initialSlide:1,
		onSlideChangeEnd:function(e){
			var idx = e.activeIndex;
			if (idx==0){
				app.mySwiper.slideNext();
			}else {
				var curData = app.cd[idx-1]
				var text = curData.isFound ? curData.found_text : curData.tip_text;
				app.changeClueTip(text);
			}
		},
		onTap:function(e){
			var idx = e.clickedIndex;
			if (!idx)return;
			app.mySwiper.slideTo(idx, 240, false);
			var curData = app.cd[idx-1]
			var text = curData.isFound ? curData.found_text : curData.tip_text;
			app.changeClueTip(text);
		}
	})
}
//线索被找到的提示
app.clueFound = function (idx){
	app.mySwiper.slideTo(idx+1, 240, false);
	var curData = app.cd[idx];
	var text = curData.isFound ? curData.found_text : curData.tip_text;
	app.changeClueTip(text);
	$('.swiper-slide-active').addClass('found');

	app.clueFoundNum++;
	if (app.clueFoundNum==8){
		setTimeout(function (){
			$('.pagemain').hide();
			$('.pagesuc').show();
		},2000)
	}
}
//开始按钮
app.btnStart = function (){
	if (!app.isDrew)return;
	app.clueIndex = parseInt(Math.random()*3);
	var zxClassName = app.clueIndex==0 ? 'zx1' : app.clueIndex==1 ? 'zx2' : 'zx3';
	app.cd = app.clueData[app.clueIndex];
	$('.container').addClass(zxClassName);
	$('.xsbox').html($('#tmpl_'+zxClassName).html());
	app.customImgURI = app.photoStage.toDataURL(null,'image/png')
	$('#photoImg').attr('src',app.customImgURI);
	mc.initZxLayer();
	$('.pagestart').hide();
	$('.pagezx').show();
}
app.sceneStartMove = function (){
	var maCurX = ma.x;
	var rightX = -ma.getBounds().width+mc.sceneCanvas.width;
	createjs.Tween.get(ma).to({x:0},2000,createjs.Ease.quintOut).to({x:rightX},1000,createjs.Ease.quintOut).to({x:maCurX},3000,createjs.Ease.quintOut).call(function (){
		$('.swiper-wrapper').addClass('ani');
		// app.initClueSlider();
	}.bind(this));
}
//重画按钮
app.btnRedraw = function (){
	app.photoStage.clear();
	app.isDrew = !1;
}
//再玩一次重玩逻辑
app.gameRestart = function (){
	app.clueFoundNum = 0;
	app.btnRedraw();
	app.cd.forEach(function (i,v){
		v.isFound = !1;
	})
	$('.pagekv').hide();
	$('.pagestart').show();
}
$(function (){
	// app.initPageAdapt();
	app.initPhotoCanvas();
	$('.btn_start').on('click',app.btnStart);
	$('.btn_redraw').on('click',app.btnRedraw);
	$('.pagezx').on('click',function (){
		$(this).hide();
		$('.pagemain').show();
		// app.initClueSlider();
		setTimeout(function (){
			app.sceneStartMove();
		},1000)
	});
	$('.xsbox').on('webkitAnimationEnd','.swiper-wrapper',function (){
		$('.swiper-wrapper').removeClass('ani');
		app.initClueSlider();
	})
	$('#sceneCanvas').on('touchstart',function (){app.tipbox.hide();mc.hideXs()})
	$('.suc_btn').on('click',function (){
		$('.pagesuc').hide();
		$('.pagekv').show();
	})
	$('.kv_btn1').on('click',function (){
		window.location.reload();
	})
	mc.init();
})