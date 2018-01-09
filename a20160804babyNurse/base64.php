<?php
	header("Access-Control-Allow-Headers:x-requested-with,content-type");
	header("Access-Control-Allow-Methods:OPTIONS,POST,GET");
	header("Access-Control-Allow-Origin:*");
	// requires php5
	define('UPLOAD_DIR', 'temp/');
    $tmpName=$_POST['type'];
     // $tmpName="siye";
	$img = imagecreatefrompng('images/'.$tmpName.'K.png');
	$imgconver=imagecreatefrompng('images/'.$tmpName.'K.png');
	$blackborder=imagecreatefrompng('images/blackBorder.png');
	$customImg = $_POST['imageData'];

	$customImg = str_replace('data:image/png;base64,', '', $customImg);
	$customImg = str_replace(' ', '+', $customImg);
	$data = base64_decode($customImg);
	$img2 = imagecreatefromstring($data);
	$img3 = imagecreatefrompng('images/'.$tmpName.'FT.png');
	// $img4 = imagecreatefrompng('images/tongji.png');
	// $text = $_POST['number'];

	// $font = 'font/impact.ttf';
	// $color = imagecolorallocate($img, 238, 224, 208);
	// $img5Src = "images/job_".$_POST['type'].".png";
	// $img5 = imagecreatefrompng($img5Src);
   
	

	imagecopy($img,$img2,54,336,-10,-15,534,452);//偏-20px
	
	imagecopy($img,$imgconver,0,0,0,0,750,1206);

    // imagecopy($img,$blackborder,0,0,0,0,640,1136);
	if('siye'==$tmpName){
	 imagecopy($img,$img3,54,26,0,0,552,372);
	 
	}
	else if('wumei'==$tmpName){
		imagecopy($img,$img3,54,26,0,0,549,364);
		
	}
	else if('lvju'==$tmpName){
		imagecopy($img,$img3,54,26,0,0,567,368);
		 
	}
	else if('dufu'==$tmpName){
		imagecopy($img,$img3,54,26,0,0,548,375);
		
	}
	else if('natasha'==$tmpName){
		imagecopy($img,$img3,54,26,0,0,560,371);
		
	}
	else if('super'==$tmpName){
		imagecopy($img,$img3,54,26,0,0,575,365);
		
	}
	// list($width4, $height4) = getimagesize('images/tongji.png');
	// imagecopy($img,$img4,0,198,0,0,$width4,$height4);
	// list($width5, $height5) = getimagesize($img5Src);
	// imagecopy($img,$img5,60,655,0,0,$width5,$height5);
	

	// $box = @imageTTFBbox(50,0,$font,$text);
	// $textwidth = abs($box[4] - $box[0]);
	// $textheight = abs($box[5] - $box[1]);

	// imagettftext($img, 50, 0, 140, 840, $color, $font, $text);
	// imagettftext($img, 50, 0, (640-$textwidth)/2, 840, $color, $font, $text);

	$file = UPLOAD_DIR . uniqid() . '.png';
	imagejpeg($img, $file);
	echo $file ? json_encode($_POST['path'].$file) : 'Unable to save the file.';
	// echo $file ? json_encode('http://frontshare.duapp.com/apps/a20160804babyNurse/'.$file) : 'Unable to save the file.';
	// echo $file ? json_encode('http://192.168./bigbone/babyNurse/'.$file) : 'Unable to save the file.';
	// echo $file ? 1 : 0;
	// header("Content-type: image/png");
 //    imagepng($img );
 //    imagedestroy($img);
    // echo($_POST['path'].'base64.php';)
?>