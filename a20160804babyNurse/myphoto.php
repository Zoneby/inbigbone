<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>母乳喂养</title>
    <script type="text/javascript">
        if (/Android (\d+\.\d+)/.test(navigator.userAgent)) {
            var version = parseFloat(RegExp.$1)
            if (version > 2.3) {
                var phoneScale = parseInt(window.screen.width) / 750
                document.write('<meta name="viewport" content="width=750,minimum-scale=' + phoneScale + ',maximum-scale=' + phoneScale + ',target-densitydpi=device-dpi">')
            } else {
                document.write('<meta name="viewport" content="width=750,target-densitydpi=device-dpi">')
            }
        } else {
            document.write('<meta name="viewport" content="width=750,user-scalable=no,target-densitydpi=device-dpi,minimal-ui">')
        }
    </script>
    
    <style type="text/css">
      .container{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 750px;
        background-image: url('images/bg8.png');
      }
      .wrapper{
        width:80%;
        height: 80%;
        position: absolute;
        top:0px;
        left: 80px;
      }
      .btnPlay{
        position: absolute;
        width:496px;
        height: 105px;
        background-image: url('images/btnPlay.png');
        left: 45px;
        bottom: -220px;
      }
      .morebtn{
         position: absolute;
        width:496px;
        height: 105px;
        left: 0px;
        bottom: 0px;
      }
    </style>
</head>
<body>
<?php

try{
if(@$_GET['name']){

?>
<div class="container">
    <div class="wrapper">
        <img src="temp/<?php echo $_GET['name']?>" width="100%"/>
         <div class='btnPlay'>
                <a href="http://www2.bigbone.cn/a20160804babyNurse/index2.html" class="morebtn"></a>
         </div>
    </div>
</div>



<?php }else{ ?>

<?php } }catch(Exception $e){} ?>


</body>

</html>
