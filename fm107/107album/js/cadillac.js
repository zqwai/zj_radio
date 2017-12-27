var body = document.body;
var main = $id('main');
var bodyWidth, bodyHeight, _scale, bgHeight;

var isControl = false,
	isMusicPlay= true;

var pageAry, pageNow = 0;

var cleanFun, interval;
var touchStartY, distY;

var motionElement; //save spaceMotion or spaceEnd
var audio;

setMusic();
index();
function index() {

	APLoader.addEvt({onComplete:loadHTML});  //loadHTML, onProgress:onProgress
	var _imgAry =[ 'img/0-01.png', 'img/0-02.png', 'img/0-03.png', 'img/0-04.png', 'img/0-05.png', 'img/0-06.png', 'img/0-07.png', 'img/0-08.png', 'img/0-09.png', 'img/0-10.png', 'img/0-13.png', 'img/0-14.png', 'img/0-15.png', 'img/0-16.png', 'img/0-17.jpg', 'img/0-18.png', 'img/0-20.png', 'img/0-21.png', 'img/0-22.png', 'img/0-23.png', 'img/0-24.png', 'img/0-37.png', 'img/bg-03.jpg' ];
	APLoader.load(_imgAry);
	
	// function onProgress(e){
	// 	$id('ldNum').innerHTML = parseInt(e.loaded/e.total*100)+ "%";	
	// }
	function loadHTML () 
	{
		log('loadHTML.');
		trace('loadHTML.');
		$.ajax({
		    url: 'info.html',
		    data: {},
		    dataType:'html',
		    type: 'GET',
		    success: function (data) {
		    	trace("ajax loadHTML comp.");
		     	main.innerHTML = data;
		    	setTimeout(init, 100);
		    }
		}); // ajax
	}
	function init () 
	{
		log('index.init.');
		trace('index.init.');
		pageAry = [$id('p1'), $id('p2'), $id('p3'), $id('p4'), $id('p5'), $id('p8'), $id('p9'), $id('p11'), $id('p12'), $id('p13'), $id('p14'), $id('p15'), $id('p16')];  //, $id('p10'), $id('p6'), $id('p7')
		
		audio = $('#myMusic');

		setDom();
		showStage ();
		addEvt();
	}

	function setDom ()
	{
		bodyWidth = window.innerWidth,
		bodyHeight = window.innerHeight,
		_scale = bodyWidth/ 750; 

		main.style.display = 'block';
		main.style.height = bodyHeight+ 'px';
		
		
		// interval = setInterval(function(){
		// 	if($id('main').offsetHeight> 0){
		// 		clearInterval(interval);
				
		// 		bgHeight = $id('main').offsetHeight;
		// 		for(var i=0; i<pageAry.length; i++){
		// 			pageAry[i].style.height = bgHeight+ 'px';	
		// 		}	
		// 	}
		// }, 100);
	}
	
	function showStage () {
		$id('loader').style.display = 'none';
		
		// pageNow= 11;
		pageAry[pageNow].style.top = 0;
		pageAry[pageNow].style.display = 'block';
		delayControlTrue(1300);

		// $id('spaceMotion').style.top = 0;
		// $id('spaceMotion').style.display = 'block';
	}
	
	function addEvt () {
		$id('p9OpenBt').addEventListener('click', p9OpenBtTap, false);
		$id('p9CloseBt').addEventListener('click', p9CloseBtTap, false);

		$id('p12OpenBt').addEventListener('click', p12OpenBtTap, false);
		$id('p12CloseBt').addEventListener('click', p12CloseBtTap, false);

		body.addEventListener('touchstart', bodyTouchStart, false);
		body.addEventListener('touchend', bodyTouchEnd, false);

		$id('musicDiv').addEventListener('touchend', musicDivTap, false);
	}

	function musicDivTap () {
		trace('musicDivTap.'+ isMusicPlay);
		if(isMusicPlay){
			isMusicPlay= false;
			pauseAudio();
		}else{
			isMusicPlay= true;
			playAudio();
		}
	}

	function p9OpenBtTap () {
		if(isControl){
			isControl= false;
			delayControlTrue(300);

			$id('p9Pop').style.display= 'block';
			$id('p9CloseBt').style.display= 'block';
			$id('p9OpenBt').style.display= 'none';
		}
	}
	function p9CloseBtTap () {
		if(isControl){
			isControl= false;
			delayControlTrue(300);

			setClass($id('p9Pop'), 'out_alpha');
			clearClass($id('p9Pop'), 'show_alpha', 300, 'none');
			
			$id('p9CloseBt').style.display= 'none';
			$id('p9OpenBt').style.display= 'block';
		}
	}

	function p12OpenBtTap () {
		if(isControl){
			isControl= false;
			delayControlTrue(300);

			$id('p12Pop').style.display= 'block';
			$id('p12CloseBt').style.display= 'block';
			$id('p12OpenBt').style.display= 'none';

			setClass($id('p12Car'), 'p12Car2 p12CarTrans');
			setClass($id('p12CarImg2'), 'p12CarImg2 show_alpha');
		}
	}
	function p12CloseBtTap () {
		if(isControl){
			isControl= false;
			delayControlTrue(300);

			$id('p12Pop').style.display= 'none';
			$id('p12CloseBt').style.display= 'none';
			$id('p12OpenBt').style.display= 'block';

			setClass($id('p12Car'), 'p12Car p12CarTrans');
			setClass($id('p12CarImg2'), 'p12CarImg2 out_alpha');
		}
	}


	function bodyTouchStart (e) {
		touchStartY= e.changedTouches[0].clientY;
	}
	function bodyTouchEnd (e) 
	{
		if(isControl){
			distY = e.changedTouches[0].clientY- touchStartY;

			if(Math.abs(distY)> 30  && distY< 0 && pageNow< pageAry.length- 1)
			{
				isControl= false;
				delayControlTrue(700);

				changePage(pageAry[pageNow], pageAry[pageNow+ 1], -1, pageNow+ 1);
				pageNow++;
			}
			else if(Math.abs(distY)> 30  && distY> 0 && pageNow> 0)
			{
				isControl= false;
				delayControlTrue(700);

				changePage(pageAry[pageNow], pageAry[pageNow- 1], 1, pageNow- 1);
				pageNow--;
			}
		}
	}

	function p2Motion () 
	{
		setClass($id('p2Masker').getElementsByTagName('img')[0], 'p2MaskerOut');
		clearClass($id('p2Masker'), 'p2Masker', 1000, 'none');
		clearClass($id('p2Masker').getElementsByTagName('img')[0], '', 1000);

		setClass($id('p2T1'), 'p2T1 out_alpha_slow');
		clearClass($id('p2T1'), 'p2T1', 600, 'none');
		$id('p2Arr1').style.display= 'none';

		setTimeout(function () {
			$id('p2Motion2').style.display= 'block';
		}, 500);
	}
}


////////////////////////////////////////////////// motion
function changePage (_out, _in, _dir, _pageNow) {
	trace('changePage.'+ _pageNow);
	
	setClass(_out, _dir<0?'out_up':"out_down");
	clearClass(_out, '', 700, 'none');

	setClass(_in, _dir<0?'show_down':'show_up', 0, 'block');

	if(_dir== -1 && _pageNow == 5){
		$id('spaceMotion').setAttribute('class', 'spaceMotion show_down');
		$id('spaceMotion').style.display= 'block';
		motionElement = $id('spaceMotion');
	}
	else if(_dir== -1 &&_pageNow == 7){
		clearClass($id('spaceMotion'), 'spaceMotion', 500, 'none');
		setClass($id('spaceEnd'), 'spaceEnd show_alpha_slow', 0, 'block');
		motionElement = $id('spaceEnd');
	}
	else if(_dir== -1 &&_pageNow == 8){
		setClass($id('spaceEnd'), 'spaceEnd out_up');
		clearClass($id('spaceEnd'), 'spaceEnd', 700, 'none');
		motionElement = undefined;
	}

	if(_dir== 1 && _pageNow== 7){
		setClass($id('spaceEnd'), 'spaceEnd show_up', 0, 'block');
		motionElement = $id('spaceEnd');
	}
	else if(_dir== 1 && _pageNow== 4){
		if(motionElement == $id('spaceEnd'))
		{
			setClass($id('spaceEnd'), "spaceEnd out_down");
			clearClass($id('spaceEnd'), 'spaceEnd', 700, 'none');
			motionElement = undefined;
		}
		else if(motionElement == $id('spaceMotion')){
			setClass($id('spaceMotion'), 'spaceMotion out_down');
			clearClass($id('spaceMotion'), 'spaceMotion', 700, 'none');
			motionElement = undefined;
		}
	}
}

function setMusic () {
	$(function(){
		log('sm1.');
		playAudio();
		document.addEventListener("WeixinJSBridgeReady", function () {
	        WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
	            network = e.err_msg.split(":")[1];  //缁撴灉鍦ㄨ繖閲�
	            	log('sm2.');
					playAudio();
	            if (network == 'wifi') {
	            	log('sm3.');
	                playAudio();
	            } else {
	                // if (window.confirm("2G/3G/4G")) {
	                	log('sm4.');
	                    playAudio();
	                // }
	            }
	        });
	    }, false);
	});
}

function playAudio(_str) {
	trace('playAudio.');
    var audio = $('#myMusic');
    if (audio.attr('src') == undefined) {
        audio.attr('src', audio.data('src'));
    }
 	audio[0].play();
    isMusicPlay = true;
    $id('musicDiv').getElementsByTagName('img')[0].style.display= 'block';
	$id('musicDiv').getElementsByTagName('img')[1].style.display= 'none';
}
function pauseAudio(){
	trace('pauseAudio.');
	$id('musicDiv').getElementsByTagName('img')[0].style.display= 'none';
	$id('musicDiv').getElementsByTagName('img')[1].style.display= 'block';
	audio[0].pause();
	isMusicPlay = false;
}


