var ww,hh
var LLDH,S=this,canvas,stage,exportRoot=[],ldMc,paging,isMove;
var	onPage=1,totalPage=4,pageTime=0
var hmpReady,au

function inIt()
{
	resizeF()
	$(window).resize(resizeF)
	//
	canvas = document.getElementById("canv");
	stage = new createjs.Stage(canvas);
	stage.enableDOMEvents(false);
	createjs.Touch.enable(stage);
	createjs.Ticker.setFPS(12);
	createjs.Ticker.addEventListener("tick", stage);
	//
	LLDH=new luoeeLoaderHelper()
	//addScorllEvent()
	//
	au=document.getElementById("bgm");
	$("#auImg").on("touchstart",function()
	{
		if(au.paused)
		{
			playBgm()
		}
		else
		{
			pauseBgm()
		}
	})
	$("#na,#te").on("blur",function(e)
	{
		window.scroll(0,0)
	})
}

function resizeF()
{
	//ww=window.parent.ww
	//hh=window.parent.hh
	ww=$(window).width();
	hh=$(window).height();
	if(hh<ww&&ww>650)
	{
		$("#HVTip").css({"width":ww,"height":hh,"display":"block","visibility":"visible"});
		$("canv").css("display","none");
	}
	else
	{
		$("#HVTip").css({"display":"none"})
		$("canv").css({"display":"block"})
		$("canv").attr({"width":ww,"height":hh})
	}
	window.scroll(0,0);
}


function luoeeLoaderHelper()
{
	var _s=this;
	_s.readyState=[];
	_s.autoId;
	
	var _ldId	
	var ld=new createjs.LoadQueue(false);
	ld.installPlugin(createjs.Sound);
	ld.addEventListener("fileload", _loaded);
	ld.addEventListener("complete", _loadComplete);
	//--------------------
	_s.loadPage=function(_id)
	{
		console.log(_id)
		_s.readyState[_id]=["ing"]
		ld.removeAll();
		//
		_ldId=_id
		if(S["lib"+_ldId].properties.manifest.length>0)
		{
			$["img"+_ldId] = $["img"+_ldId]||{};
			ld.loadManifest(S["lib"+_ldId].properties.manifest);
		}
		else
		{ 
			_loadComplete() 
		}
	}	
	//------------------
	function _loaded(e)
	{
		if (e.item.type == "image") { S["img"+_ldId][e.item.id] = e.result; }
		//lding
		_ldId==onPage?stage.addChild(ldMc):null;
		if(_ldId>0)
		{
			var _per=Math.floor((ld._numItemsLoaded/ld._numItems)*100);
			//ldMc.gotoAndStop(_per);
			ldMc.txt.text=_per+"%";	
		}
	}
	function _loadComplete(e)
	{
		_s.readyState[_ldId]=["ed"]
		//exportRoot[ldingPage] = new S["lib"+ldingPage]["s"+ldingPage]();//s+ldingPage是fla名字
		if(_ldId==0){ ldMc = new lib0.s0().ldMc;};
		if(_ldId==onPage||_ldId==_s.autoId){_s.autoId=null ; stage.removeChild(ldMc) ; changeScene(_ldId,"next",pageTime)}
		//
		ggTrack("load_"+_ldId)
		_ldId++;
		if(_ldId<totalPage)
		{	
			_s.loadPage(_ldId);
		}
		else
		{	
			ld=null;
			ggTrack("loadFinish")
		}
	}
	return _s
}


function changeScene(_page,_arrow,_time)
{
	console.log("onPage:"+onPage,"_page:"+_page,"paging:"+paging,"_time:"+_time,"_arrow:"+_arrow,"totalPage:"+totalPage)
	if(paging||_page==0||_page==totalPage){return}; //正在运动  //首页  //尾页
	if(LLDH.readyState[_page]=='ing'){LLDH.autoId=_page; stage.addChild(ldMc)}
	if(LLDH.readyState[_page]!="ed"){return}//还没加载好,停在当前页加载
	//
	paging=true;
	_time=="undefined"?_time=.5:_time;	
	inScene(_page,_arrow,_time)
	onPage!=_page?outScene(onPage,_arrow,_time):null;
	onPage=_page;
}

function inScene(_page,_arrow,_time)
{	
	//!exportRoot[_page]?exportRoot[_page] = new S["lib"+_page]["s"+_page]():null;
	exportRoot[_page] = new S["lib"+_page]["s"+_page]()
	stage.addChildAt(exportRoot[_page],0)
	exportRoot[_page].gotoAndStop(1)
	TweenMax.set(exportRoot[_page],{y:_arrow=="next"?1040:-1040})
	TweenMax.to(exportRoot[_page],_time,{y:0,ease:Cubic.easeOut,onComplete:function()
		{
			paging=false	
		}
	})
	//ggTrack("page_"+_page)
}
function outScene(_page,_arrow,_time)
{	
	TweenMax.to(exportRoot[_page],_time,{y:_arrow=="next"?-1040:1040,ease:Cubic.easeOut,onComplete:function()
		{
			stage.removeChild(exportRoot[_page])
			exportRoot[_page]=null	
		}
	})		
}


function playSound(id, loop) {	createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);  }
function stopSound(id)       {	createjs.Sound.stop(id); }



function playBgm()
{
	au.play()
	$("#pla").css("visibility","visible")
	$("#pau").css("visibility","hidden")
}
function pauseBgm()
{
	au.pause()
	$("#pau").css("visibility","visible")
	$("#pla").css("visibility","hidden")
}



function enableShake(_fun)
{
	var SHAKE_THRESHOLD = 5000;
	var last_update = 0;
	var x=0,y=0,z=0,last_x=0,last_y=0,last_z=0,delayIt=true;
	
	function deviceMotionHandler(eventData) {
		var acceleration = eventData.accelerationIncludingGravity;
		var curTime = new Date().getTime();
		if ((curTime - last_update) > 60) {
			var diffTime = curTime - last_update;
			last_update = curTime;
			x = acceleration.x;
			y = acceleration.y;
			z = acceleration.z;
			var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;
			//$("#debug").val(x.toFixed(2) +"    "+last_x.toFixed(2)+"     "+y.toFixed(2)+"     "+last_y.toFixed(2)+"     "+z.toFixed(2)+"     "+last_z.toFixed(2))
			if (speed > SHAKE_THRESHOLD&&delayIt) {
				delayIt=false
				setTimeout(function(){delayIt=true},1000)
				_fun();
				return;
			}
			last_x = x;
			last_y = y;
			last_z = z;
		}
	}
	
	
	if (window.DeviceMotionEvent) {
		window.addEventListener('devicemotion', deviceMotionHandler, false);
	} else {
		alert('not support mobile event');
	}
}
function disableShake()
{
	window.removeEventListener('devicemotion', deviceMotionHandler, false);
}
function showHtmlInput()
{
	stage.enableDOMEvents(true);
	$("#na,#te").css("left",240)
}
function closeHtmlInput()
{
	$("#na,#te").css("left",-300)
	stage.enableDOMEvents(false);
}





function addScorllEvent()
{
	var sy,ey
	function _checkIt()
	{
		if(!isMove){return;}
		//
		if(sy-ey<-50)
		{
			changeScene(onPage-1,"prev",pageTime)	
		}
		else if(sy-ey>50)
		{
			//if(arrPass[onPage]!=1){return}
			changeScene(onPage+1,"next",pageTime)			
		}
		isMove=false;	
	}
	//
	$("#canv").on("touchstart",function(e)
	{
		sy=e.originalEvent.targetTouches[0].pageY;
	})
	$("#canv").on("touchmove",function(e)
	{
		isMove=true
	})
	$("#canv").on("touchend",function(e)
	{
		ey=e.originalEvent.changedTouches[0].pageY;
		_checkIt();
	})
}


function checkAndroid()
{
	var ua = navigator.userAgent.toLowerCase();
 	return ua.match(/android/i) == "android";
}



$(document).ready(inIt);
window.onload=function()
{
	LLDH.loadPage(0)
}