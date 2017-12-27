//禁止默认触屏默认动作
document.addEventListener("touchmove",function(e){e.preventDefault()},!1);
//监听是否为竖屏
window.addEventListener("orientationchange",function(){
	if(window.orientation==90||window.orientation==-90){
		location.reload();
	}
	else if (window.orientation==0||window.orientation==180) {
		location.reload();
	}
},!1);
// 动画控制 兼容
	// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
	// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
	// MIT license
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
            || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());



var sClientWidth=document.documentElement.clientWidth, //获取屏幕宽
	sClientHeight=document.documentElement.clientHeight, //获取屏幕高
	animationStop=null, //动画监听
	the_images = []; //载入图片
// bg

the_images.push( 'img/p1/bg/p1-bg-3.jpg');
// 栏目
the_images.push( 'img/p2/title.png');
the_images.push( 'img/p1/p1-1.png');
//横屏提示
the_images.push( 'img/landscape_hint@2x.png');
the_images.push( 'img/landscape_phone@2x.png');
//loading logo
the_images.push( 'img/logo-loading.png');
// 分享
// the_images.push( 'img/share/share.jpg');
// 二维码
// the_images.push( 'img/page/wx2.jpg');
// 音乐
the_images.push( 'img/audio/Music.png');

// console.log(the_images.length);

var loadImgNum=0;
jQuery.imgpreload(the_images,
{
	each: function()
	{

		loadImgNum++
		var per=Math.floor((loadImgNum/the_images.length)*100);
		$('.logo-n').css('opacity',per/100);
		$("#percent").html(per+'%'+'<br>资源加载中<br>请在WiFi下浏览');
		
		if(per>=100){
			setTimeout(function(){
				$("#percent").html('100%<br>场景渲染完毕…');
				
			},500)
		}	
	},
	all: function()
	{
		$("#percent").html('100%<br>场景渲染完毕…');
		$('.logo-b').css('opacity',0);
		jLazyBgInit();
		setTimeout(function(){
			$('#form1').css('visibility','visible');
			$('#loading').remove();
			musicInit();
			enter_sMoblieSlide1();
		},1000);
		
		console.log("预加载图片："+the_images.length+"张");
	}
});
//图片延迟加载
function imgLazyLoad(t){
	var t = $(".j-lazy-img");
	t.each(function(t, h) {
		var i = $(h),
		a = i.data("src");
		i.attr("src", a )
	})
};
//背景延迟加载
function BgLazyLoad(t){
	var t=$(".j-lazy-scroll-bg");
	t.each(function(t, e) {
		var i = $(e),
		a = i.data("src");
		i.attr("style", "background-image:url(" + a + ");")
	});
};
//载入背景延迟加载
function jLazyBgInit(t){
	var t=$(".jLazyBgInit");
	t.each(function(t, e) {
		var i = $(e),
		a = i.data("src");
		i.attr("style", "background-image:url(" + a + ");")
	});
};
//音乐
function musicInit(e){
	var myAudio=document.createElement("audio"),
	audioHtml= '<div id=audioControl class=play></div>';
	myAudio.id="music",
	myAudio.src="song/4.mp3",
	myAudio.loop="loop",

	$("#audiocontainer").append(myAudio,audioHtml),
	document.getElementById("music").play();

	var isMusicPlaying=!0;

	document.getElementById("audioControl").addEventListener('touchstart',musicPlaying,!1);
	function musicPlaying(){
	    if(isMusicPlaying==!0){
	        myAudio.pause();
	        $('#audioControl').removeClass('play');
	        isMusicPlaying=!1;
	    }else{
	        myAudio.play();
	        $('#audioControl').addClass('play');
	        isMusicPlaying=!0;
	    }
	};	
}

// sMediaSlide1 进入 退出
function enter_sMoblieSlide1(){
	$('.slide1 .J_bg').fadeIn(500,function(){
		$('.slide1 .main-cont li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
		$('.slide1 .main-cont li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
		$('.slide1 .main-cont li:nth-child(3)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
		$('.slide1 .main-cont li:nth-child(4)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
		$('.slide1 .main-cont li:nth-child(5)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
		$('.slide1 .main-cont li:nth-child(6)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
		$('.slide1 .main-cont li:nth-child(7)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
		$('.slide1 .main-cont li:nth-child(8)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
			$('.slide1 .main-head header h1').show().animo( { animation: 'fadeInLeft', duration:  0.3});
			$('.slide1 .main-head header h2').show().animo( { animation: 'fadeInRight', duration:  0.3},function() {
				$('.slide1 .scroll-Up').show(1000);
				$('.slide1 .head-triangle').fadeIn();
			});
		});
		});
		});
		});
		});
		});
		});
		});
	});
}
function out_sMoblieSlide1(){
	$('.slide1 .J_bg').hide();
	$('.slide1 .main-cont ul li').hide();
	$('.slide1 .main-cont ul li .btn-more').hide();
	$('.slide1 .main-head header h1').hide();
	$('.slide1 .main-head header h2').hide();
	$('.slide1 .scroll-Up').hide();
	$('.slide1 .head-triangle').hide();
	$('.slide1 .main-cont ul li.box-btn').show();
}
// sMoblieSlide2 进入 退出
function enter_sMoblieSlide2(){
	$('.slide2 .J_bg').fadeIn(500,function(){
		$('.slide2 .sline-l').show().animo( { animation: 'fadeIn', duration: 0.3},function() {
		$('.slide2 .sline-c').show().animo( { animation: 'fadeIn', duration: 0.3},function() {
		$('.slide2 .sline-r').show().animo( { animation: 'fadeIn', duration: 0.3},function() {
			$('.slide2 .main-media .title').show().animo( { animation: 'bounceIn', duration:  0.3},function() {
				$('.slide2 .main-media .cont li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
				$('.slide2 .main-media .cont li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
				$('.slide2 .main-media .cont li:nth-child(3)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
					$('.slide2 .main-media .cont li.box-btn .btn-more').show().animo( { animation: 'rubberBand', duration: 0.5},function() {
						$('.slide2 .radioList ul li:nth-child(1) .name').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
						$('.slide2 .radioList ul li:nth-child(1) .sbtn:nth-child(1)').show().animo( { animation: 'rubberBand', duration: 0.5});
						$('.slide2 .radioList ul li:nth-child(1) .sbtn:nth-child(2)').show().animo( { animation: 'rubberBand', duration: 0.5},function() {
							$('.slide2 .radioList ul li:nth-child(2) .name').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
							$('.slide2 .radioList ul li:nth-child(2) .sbtn:nth-child(1)').show().animo( { animation: 'rubberBand', duration: 0.5});
							$('.slide2 .radioList ul li:nth-child(2) .sbtn:nth-child(2)').show().animo( { animation: 'rubberBand', duration: 0.5},function() {
								$('.slide2 .radioList ul li:nth-child(3) .name').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
								$('.slide2 .radioList ul li:nth-child(3) .sbtn:nth-child(1)').show().animo( { animation: 'rubberBand', duration: 0.5});
								$('.slide2 .radioList ul li:nth-child(3) .sbtn:nth-child(2)').show().animo( { animation: 'rubberBand', duration: 0.5},function() {
									$('.slide2 .scroll-Up').show(1000);
								});
								});	
							});
							});	
						});
						});	
					});
				});
				});
				});
			});
		});
		});
		});
	});
}
function out_sMoblieSlide2(){
	$('.slide2 .J_bg').hide();
	$('.slide2 .sline').hide();
	$('.slide2 .main-media .title').hide();
	$('.slide2 .main-media .cont li').hide();
	$('.slide2 .main-media .cont li.box-btn .btn-more').hide();
	$('.slide2 .radioList ul li .name').hide();
	$('.slide2 .radioList ul li .sbtn').hide();
	$('.slide2 .scroll-Up').hide();

	$('.slide2 .main-media .cont li.box-btn').show();
}
// sMoblieSlide3 进入 退出
function enter_sMoblieSlide3(){
	$('.slide3 .J_bg').fadeIn(500,function(){
		$('.slide3 .main-media .line-h').show().animo( { animation: 'fadeIn', duration: 0.3},function() {
		$('.slide3 .main-media .line-v').show().animo( { animation: 'fadeIn', duration: 0.3},function() {
			$('.slide3 .main-media .title').show().animo( { animation: 'bounceIn', duration:  0.3},function() {
				$('.slide3 .main-media .cont li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
				$('.slide3 .main-media .cont li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
				$('.slide3 .main-media .cont li:nth-child(3)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
					$('.slide3 .sline-text').show().animo( { animation: 'fadeInUp', duration: 0.3},function() {
					$('.slide3 .sline-d').show().animo( { animation: 'fadeIn', duration: 0.3},function() {
						$('.slide3 .slist').css('visibility','visible').animo( { animation: 'fadeInUp', duration: 0.3});
						$('.slide3 .scroll-Up').show(1000);
					});	
					});
				});
				});
				});
			});
		});
		});
	});
}
function out_sMoblieSlide3(){
	$('.slide3 .J_bg').hide();
	$('.slide3 .main-media .line-h').hide();
	$('.slide3 .main-media .line-v').hide();
	$('.slide3 .sline-text').hide();
	$('.slide3 .sline').hide();
	$('.slide3 .main-media .title').hide();
	$('.slide3 .main-media .cont li').hide();
	$('.slide3 .main-media .cont li.box-btn .btn-more').hide();
	$('.slide3 .radioList ul li .name').hide();
	$('.slide3 .radioList ul li .sbtn').hide();
	$('.slide3 .slist').css('visibility','hidden');
	$('.slide3 .scroll-Up').hide();
	$('.slide3 .main-media .cont li.box-btn').show();
}
// sMoblieSlide4 进入 退出
function enter_sMoblieSlide4(){
	$('.slide4 .J_bg').fadeIn(500,function(){
			$('.slide4 .main-media .title').show().animo( { animation: 'bounceIn', duration:  0.3},function() {
					$('.slide4 .sline-text').show().animo( { animation: 'fadeInUp', duration: 0.3},function() {
					$('.slide4 .sline-d').show().animo( { animation: 'fadeIn', duration: 0.3},function() {
						$('.slide4 .slist').css('visibility','visible').animo( { animation: 'fadeInUp', duration: 0.3});
						$('.slide4 .scroll-Up').show(1000);
					});	
					});
			});
		
	});
}
function out_sMoblieSlide4(){
	$('.slide4 .J_bg').hide();
	$('.slide4 .main-media .line-h').hide();
	$('.slide4 .main-media .line-v').hide();
	$('.slide4 .sline-text').hide();
	$('.slide4 .sline').hide();
	$('.slide4 .main-media .title').hide();
	$('.slide4 .main-media .cont li').hide();
	$('.slide4 .main-media .cont li.box-btn .btn-more').hide();
	$('.slide4 .radioList ul li .name').hide();
	$('.slide4 .radioList ul li .sbtn').hide();
	$('.slide4 .slist').css('visibility','hidden');
	$('.slide4 .scroll-Up').hide();
	$('.slide4 .main-media .cont li.box-btn').show();
}
// sMoblieSlide5 进入 退出
function enter_sMoblieSlide5(){
	$('.slide5 .J_bg').fadeIn(500,function(){
		$('.slide5 .main-media .line-h').show().animo( { animation: 'fadeIn', duration: 0.3},function() {
		$('.slide5 .main-media .line-v').show().animo( { animation: 'fadeIn', duration: 0.3},function() {
			$('.slide5 .main-media .title').show().animo( { animation: 'bounceIn', duration:  0.3},function() {
				$('.slide5 .main-media .cont li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
				$('.slide5 .main-media .cont li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
				
					$('.slide5 .sline-text').show().animo( { animation: 'fadeInUp', duration: 0.3},function() {
					$('.slide5 .sline-d').show().animo( { animation: 'fadeIn', duration: 0.3},function() {
						$('.slide5 .slist').css('visibility','visible').animo( { animation: 'fadeInUp', duration: 0.3});
						$('.slide5 .scroll-Up').show(1000);
					});	
					});	
				
				});
				});
			});
		});
		});
		
	});
}
function out_sMoblieSlide5(){
	$('.slide5 .J_bg').hide();
	$('.slide5 .main-media .line-h').hide();
	$('.slide5 .main-media .line-v').hide();
	$('.slide5 .sline-text').hide();
	$('.slide5 .sline').hide();
	$('.slide5 .main-media .title').hide();
	$('.slide5 .main-media .cont li').hide();
	$('.slide5 .main-media .cont li.box-btn .btn-more').hide();
	$('.slide5 .radioList ul li .name').hide();
	$('.slide5 .radioList ul li .sbtn').hide();
	$('.slide5 .slist').css('visibility','hidden');
	$('.slide5 .scroll-Up').hide();
	$('.slide5 .main-media .cont li.box-btn').show();
}

// sMoblieSlide6 进入 退出
function enter_sMoblieSlide6(){
	$('.slide6 .J_bg').fadeIn(500,function(){
		$('.slide6 .main-media .line-h').show().animo( { animation: 'fadeIn', duration: 0.3},function() {
		$('.slide6 .main-media .line-v').show().animo( { animation: 'fadeIn', duration: 0.3},function() {
			$('.slide6 .main-media .title').show().animo( { animation: 'bounceIn', duration:  0.3},function() {
				$('.slide6 .main-media .cont li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
				$('.slide6 .main-media .cont li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
				
					$('.slide6 .sline-text').show().animo( { animation: 'fadeInUp', duration: 0.3},function() {
					$('.slide6 .sline-d').show().animo( { animation: 'fadeIn', duration: 0.3},function() {
						$('.slide6 .slist').css('visibility','visible').animo( { animation: 'fadeInUp', duration: 0.3});
						$('.slide6 .scroll-Up').show(1000);
					});	
					});	
				
				});
				});
			});
		});
		});
	});
}
function out_sMoblieSlide6(){
	$('.slide6 .J_bg').hide();
	$('.slide6 .main-media .line-h').hide();
	$('.slide6 .main-media .line-v').hide();
	$('.slide6 .sline-text').hide();
	$('.slide6 .sline').hide();
	$('.slide6 .main-media .title').hide();
	$('.slide6 .main-media .cont li').hide();
	$('.slide6 .main-media .cont li.box-btn .btn-more').hide();
	$('.slide6 .radioList ul li .name').hide();
	$('.slide6 .radioList ul li .sbtn').hide();
	$('.slide6 .slist').css('visibility','hidden');
	$('.slide6 .scroll-Up').hide();
	$('.slide6 .main-media .cont li.box-btn').show();
}

// sMoblieSlide7 进入 退出
function enter_sMoblieSlide7(){
	$('.slide7 .J_bg').fadeIn(500,function(){
		$('.slide7 .main-media .line-h').show().animo( { animation: 'fadeIn', duration: 0.3},function() {
		$('.slide7 .main-media .line-v').show().animo( { animation: 'fadeIn', duration: 0.3},function() {
			$('.slide7 .main-media .title').show().animo( { animation: 'bounceIn', duration:  0.3},function() {
				$('.slide7 .main-media .cont li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
				$('.slide7 .main-media .cont li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
				
					$('.slide7 .sline-text').show().animo( { animation: 'fadeInUp', duration: 0.3},function() {
					$('.slide7 .sline-d').show().animo( { animation: 'fadeIn', duration: 0.3},function() {
						$('.slide7 .slist').css('visibility','visible').animo( { animation: 'fadeInUp', duration: 0.3});

						$('.slide7 .scroll-Up').show(1000);
					});	
					});	
				
				});
				});
			});
		});
		});
	});
}
function out_sMoblieSlide7(){
	$('.slide7 .J_bg').hide();
	$('.slide7 .main-media .line-h').hide();
	$('.slide7 .main-media .line-v').hide();
	$('.slide7 .sline-text').hide();
	$('.slide7 .sline').hide();
	$('.slide7 .main-media .title').hide();
	$('.slide7 .main-media .cont li').hide();
	$('.slide7 .main-media .cont li.box-btn .btn-more').hide();
	$('.slide7 .radioList ul li .name').hide();
	$('.slide7 .radioList ul li .sbtn').hide();
	$('.slide7 .slist').css('visibility','hidden');
	$('.slide7 .scroll-Up').hide();
	$('.slide7 .main-media .cont li.box-btn').show();
}

// sMoblieSlide8 进入 退出
function enter_sMoblieSlide8(){
	$('.slide8 .J_bg').fadeIn(500,function(){
		$('.slide8 .logo-album-menu').show().animo( { animation: 'zoomInDown', duration: 0.5},function() {
			$('.slide8 .box-menu-btn li:nth-child(5)').show().animo( { animation: 'zoomInLeft', duration: 0.5},function() {
			$('.slide8 .box-menu-btn li:nth-child(4)').show().animo( { animation: 'zoomInRight', duration: 0.5},function() {
			$('.slide8 .box-menu-btn li:nth-child(3)').show().animo( { animation: 'zoomInLeft', duration: 0.5},function() {
			$('.slide8 .box-menu-btn li:nth-child(2)').show().animo( { animation: 'zoomInRight', duration: 0.5},function() {
			$('.slide8 .box-menu-btn li:nth-child(1)').show().animo( { animation: 'zoomInLeft', duration: 0.5});
			});
			});
			});
			});
		});
	});
}
function out_sMoblieSlide8(){
	$('.slide8 .J_bg,.slide8 .scroll-Up').hide();
	$('.slide8 .logo-album-menu').hide();
	$('.slide8 .box-menu-btn li').hide();
}





//滚屏效果
var s1 = new Swiper('.s1', {
    direction: 'vertical',
	// hashnav:true,
		onSlideChangeStart: function(e){
		// var hasSlide0= $('.slide0').hasClass('swiper-slide-active');
		var hasSlide1= $('.slide1').hasClass('swiper-slide-active');
		var hasSlide2= $('.slide2').hasClass('swiper-slide-active');
		var hasSlide3= $('.slide3').hasClass('swiper-slide-active');
		var hasSlide4= $('.slide4').hasClass('swiper-slide-active');
		var hasSlide5= $('.slide5').hasClass('swiper-slide-active');
		var hasSlide6= $('.slide6').hasClass('swiper-slide-active');
		var hasSlide7= $('.slide7').hasClass('swiper-slide-active');
		var hasSlide8= $('.slide8').hasClass('swiper-slide-active');
		// var hasSlide9= $('.slide9').hasClass('swiper-slide-active');
		// var hasSlide10= $('.slide10').hasClass('swiper-slide-active');
		// if(hasSlide0){
		// 	enter_sMoblieSlide0();
		// 	out_sMoblieSlide1()
		// }
		if(hasSlide1){
			// out_sMoblieSlide0()
			enter_sMoblieSlide1();
			out_sMoblieSlide2()
		}
		else if(hasSlide2){
			out_sMoblieSlide1()
			enter_sMoblieSlide2();
			out_sMoblieSlide3()
		}
		else if(hasSlide3){
			out_sMoblieSlide2()
			enter_sMoblieSlide3();
			out_sMoblieSlide4()
		} 
		else if(hasSlide4){
			out_sMoblieSlide3()
			enter_sMoblieSlide4();
			out_sMoblieSlide5()
		} 
		else if(hasSlide5){
			out_sMoblieSlide4()
			enter_sMoblieSlide5();
			out_sMoblieSlide6()
		} 
		else if(hasSlide6){
			out_sMoblieSlide5()
			enter_sMoblieSlide6();
			out_sMoblieSlide7()
		}
		else if(hasSlide7){
			out_sMoblieSlide6()
			enter_sMoblieSlide7();
			out_sMoblieSlide8()
		} 
		else if(hasSlide8){
			out_sMoblieSlide7()
			enter_sMoblieSlide8();
			// out_sMoblieSlide9()
		} 
		// else if(hasSlide9){
		// 	out_sMoblieSlide8()
		// 	enter_sMoblieSlide9();
		// 	// out_sMoblieSlide10()
		// } 
		// else if(hasSlide10){
		// 	out_sMoblieSlide9()
		// 	enter_sMoblieSlide10();
		// }  
	}
});
//节目滚屏
var s2 = new Swiper('.s2', {
    direction: 'horizontal', 
    freeMode: true,
    loop: true,
});	

// 关闭层
$('#close').on('touchstart',function(e) {
	$(this).parent().removeClass('md-show');
});
// 节目介绍数据
var _doc = new Array();
_doc[0] ='<div class="swiper-container mediaInfo s3"><div class="swiper-wrapper"><section class="swiper-slide mediaInfo1" data-hash="mediaInfo1"><div class="info-text"><h2>上班路上·袁小逸脱口秀</h2><article class="cont">一个差一点签约的业余歌手，因为酷爱唱歌，擅长改编歌词，总能把现下热点新闻和耳熟能详的歌曲做精妙结合。随意的哼唱竟能引起强烈的共鸣，而因为歌词改编精妙和太过朗朗上口，听众有时甚至忘记原歌词。比如在全杭州盛传“明天将限牌”的当晚，袁小逸便献唱了一首《难忘多珍重》：“听说明天，到明天要限牌。”袁小逸总能把任何事情都说的妙趣横生，并且，始终的，站在听众的角度，三小时中随机出现。</article></div></section><section class="swiper-slide mediaInfo2" data-hash="mediaInfo2"><div class="info-text"><h2>上班路上·雯报纸</h2><article class="cont">报纸，确实不用看了，因为邹小雯会读给你听。怎么读？谴责，网友用骂的，邹小雯的一首RAP《算你狠》绝对让你脑洞大开！不听《雯报纸》，根本不知道这个世界发生了什么；不听《雯报纸》，你更不知道流行音乐还能这么玩！《雯报纸》开创广播和流行乐坛史上首个音乐说唱读报节目，邹小雯每天改编一首歌曲，用旋律和节奏讲述最有意思最劲爆的新闻故事，连方文山都甘拜下风！自从有了《雯报纸》，妈妈再也不用买报纸了！7:20、7:50、8:20、9:18，那些人那些事，奇葩、悬疑、有趣……这个编辑的口味，你难以捉摸，她的每一个故事，总是耐人寻味。</article></div></section><section class="swiper-slide mediaInfo3" data-hash="mediaInfo3"><div class="info-text"><h2>上班路上·焕口气</h2><article class="cont">一个滔滔不绝的90后男孩儿，一大早纠集100个听众，开辟“微信百人闭合聊天群”，他想干什么？！节目边聊边做？！7:15、8:15、9:15，从表达到状态，他到底想干什么？！！原来这个年轻的声音，以及他的朋友，笑着唱着，让你在拥挤的上班路上换口气。一个不留神在那个白人微信群里嗨强起了红白，他究竟想干什么…</article></div></section></div><div class="stip-text">← 左右滑动，查看节目介绍 →</div></div>';
_doc[1] ='<div class="swiper-container mediaInfo s3"><div class="swiper-wrapper"><section class="swiper-slide"><div class="info-text"><h2>潮、爆、才、夯！Big Ming</h2><article class="cont">主持人界最屌的饶舌rapper，说唱界最会主持的dancer<br>——即兴说唱，恐怕只有热狗才能和他PK！<br>浙江饶舌口爆新闻评论第一人！<br>一秒钟入戏，嬉笑怒骂，说着唱着就能让你high起来！<br>如果你觉得他是个玩世不恭的主持人？<br>No，他是个标准的暖男，男友力爆棚！兄弟力Max！</article></div></section><section class="swiper-slide"><div class="info-text"><h2>快乐Cube田小雪</h2><article class="cont">声优、谐星、嗲兮兮、萌汉子？嗯，这些都是田小雪。<br>她是最会变声音的电台主持人，从3岁到80岁，从小男孩到大怪兽，<br>从韩剧到TVB再到各种各样的动画片，<br>她气场强大到可以随时控制任何场合的气氛、节奏、情绪，<br>有她在的下班路上，不听都觉得有违和感。<br>很多听众都想降服这个主持人，你可以吗？</article></div></section><section class="swiper-slide"><div class="info-text"><h2>下班路上·心灵鳖汤时间</h2><article class="cont">路怒症犯了怎么办？按喇叭大声骂？<br>别闹了！听下班路上不就行了！<br>广播界最有社会责任感、最具主人翁意识、<br>最一笑泯恩仇的版块！<br>心灵鳖汤把所有车主的不爽、愤懑，<br>全部转化成笑声！</article></div></section><section class="swiper-slide"><div class="info-text"><h2>下班路上·私家车一起唱</h2><article class="cont">唱歌不用订包厢，车里你就可以唱KTV！<br>全省第一档把KTV搬进车厢的广播节目！<br>用甜蜜的感觉唱《洋葱》，用忧伤的情感唱《high歌》！<br>节目线下活动《上亿歌王挑战赛》、《怀旧金曲赛》潮流蔓延！</article></div></section><section class="swiper-slide"><div class="info-text"><h2>下班路上·饶舌Battle</h2><article class="cont">不是数来宝，是Rap，是饶舌，是狂拽酷炫的说唱！<br>省内唯一用饶舌犀利说唱新闻的版块，<br>每天最热点、有争议、值得Battle的话题！<br>杭州最棒的女Rapper，<br>把你带入节奏当中，完全没办法挣脱！</article></div></section><section class="swiper-slide"><div class="info-text"><h2>下班路上·大剧场</h2><article class="cont">我们是演员，是声优，也是主持人，<br>嗯，就是这么有才。中美日韩欧，你看过的，<br>我们就能搬到电台节目里！<br>播而优则演，演而优则赚！<br>广告植入之后不但好听，还好玩儿。<br>你说不爱《大剧场》，可能吗？</article></div></section><section class="swiper-slide"><div class="info-text"><h2>下班路上·大爆炸曲苑杂坛</h2><article class="cont">重拾中国最古老的曲艺形式：相声、小品、评书、快板、京韵大鼓……，用老一辈艺术家之口说今天的新闻。在车厢里，打着节奏听演绎！样样专业，次次精彩！</article></div></section></div><div class="stip-text">← 左右滑动，查看节目介绍 →</div></div>';
_doc[2] ='<div class="swiper-container mediaInfo s3"><div class="swiper-wrapper"><section class="swiper-slide"><div class="info-text"><h2>袁老师来了</h2><article class="cont">这是一个可爱的老师，随时准备和学生粉笔大战；这是一个市侩的老师，随时等着家长送来超市卡；这是一个絮叨的老师，只要她打开了话匣子，就别想让她停下来。</article></div></section><section class="swiper-slide"><div class="info-text"><h2>空姐miss袁</h2><article class="cont">带您穿越进机舱，倾听miss袁絮语、逗乐的机舱广播，围观miss袁和机长隔空传情。</article></div></section><section class="swiper-slide"><div class="info-text"><h2>天后国际袁</h2><article class="cont">一个差点签约的业余歌手，握着一柄劣质的麦克风，想要一圆未完的梦。她改遍了所有脍炙人口的歌曲，朗朗上口，让人忘了原唱，在车厢里轻轻地和。</article></div></section><section class="swiper-slide"><div class="info-text"><h2>袁儿大夫寻医问药</h2><article class="cont">一个江湖郎中在电台里卖着药，还真有人捧着电话打进了场。甚至于节目的垫底音乐《为爱伤心为你痛》，也进了KTV的热门点歌榜。</article></div></section><section class="swiper-slide"><div class="info-text"><h2>还珠格格</h2><article class="cont">经典电视剧《还珠格格》有广播版？难道你没听过？一个破碎的尔康如何挽回一个破碎的紫薇，他们来到二十一世纪科技高度繁荣的现在又会经历什么呢？</article></div></section><section class="swiper-slide"><div class="info-text"><h2>田小雪随便唱-儿歌</h2><article class="cont">最会模仿蠢萌小孩声音的田小雪，以小孩视野，唱大人世界。</article></div></section><section class="swiper-slide"><div class="info-text"><h2>TVB</h2><article class="cont">百变声优田小雪，像到令人咋舌的TVB配音。听到这些你会想起陀枪师姐？笑看风云？还是鹿鼎记里的双儿？</article></div></section><section class="swiper-slide"><div class="info-text"><h2>韩剧</h2><article class="cont">百变声优田小雪的招牌声音，央视版韩剧配音。不仅仅是一声oppa带来的酥麻，还有婆婆媳妇儿和小姑之间的恩怨情仇。</article></div></section><section class="swiper-slide"><div class="info-text"><h2>蜡笔小新</h2><article class="cont">百变声优田小雪的卡通片力作，100%还原小新和麻麻的声音。这对母子，经常讨论成人世界的问题哦！</article></div></section><section class="swiper-slide"><div class="info-text"><h2>美少女战士</h2><article class="cont">百变声优田小雪的卡通片力作，100%每次当操着一口杭普的夜礼服假面，赖赖唧唧的出现在美达林女王面前，拯救水冰月的时候，你，就该崩溃了。</article></div></section><section class="swiper-slide"><div class="info-text"><h2>恋爱课堂</h2><article class="cont">百变声优田小雪的卡通片力作，100%以恋爱教授之名，看透人世情爱纷争。爱情至上的恋爱教授professor雪，在她眼里，世间一切事情，都与爱情有关。</article></div></section><section class="swiper-slide"><div class="info-text"><h2>开运要你管</h2><article class="cont">百变声优田小雪的卡通片力作，100%只要你一个动作，她就能看出你是什么星座。星座分析师中，美女那么多，jennifer田是分析的最准的一个。天秤座？渴了一定会想喝水。是不是很准？</article></div></section><section class="swiper-slide"><div class="info-text"><h2>常总来了</h2><article class="cont">百变声优田小雪的卡通片力作，100%康熙走了，常总来了，独特的语言表述，标识性的声音，每天都有一个故事，每个故事讲的都是一种人生！</article></div></section><section class="swiper-slide"><div class="info-text"><h2>常总读报</h2><article class="cont">百变声优田小雪的卡通片力作，100%趴着畅谈世界风云变化，躺着讲述身边市井传闻。</article></div></section><section class="swiper-slide"><div class="info-text"><h2>五常大道</h2><article class="cont">盘点每日新闻热点，点评新闻另类内容……听着怎么感觉那么不正经…哦不！那么搞笑呢！五常大道，不一样的新闻，搞笑的新闻，直击新闻核心的新闻。</article></div></section><section class="swiper-slide"><div class="info-text"><h2>新神经侠侣</h2><article class="cont">当大老雕变成了滴滴专车，神雕侠侣就变成了神经侠侣。他们离奇爆笑的矛盾，总是和尹道长相关。</article></div></section><section class="swiper-slide"><div class="info-text"><h2>老汉秀</h2><article class="cont">黄土高坡的西北老汉，评说日新月异的科技潮流，你想得到与想不到的冲突和诙谐，理性与癫狂，这绝无仅有。</article></div></section><section class="swiper-slide"><div class="info-text"><h2>动物世界</h2><article class="cont">冰雪消融，万物复苏，又到了繁衍的季节，然而，在广阔无垠的行车大道上，却生存着一个奇特而又充满魅力的物种：107…</article></div></section><section class="swiper-slide"><div class="info-text"><h2>四大美声</h2><article class="cont">男高音、男低音、男中音，就是没有男走音；唱美声、唱通俗、唱民族，就是不会唱平庸。</article></div></section><section class="swiper-slide"><div class="info-text"><h2>诗朗诵</h2><article class="cont">用清晰的语言，响亮的声音，超凡的声音，让经典作品接地气、与时俱进改编，走心！</article></div></section><section class="swiper-slide"><div class="info-text"><h2>山东快书</h2><article class="cont">当哩个当，当哩个当，当哩个当哩个当哩个当！闲言碎语不要讲，表一表娱乐大爆炸。那节目影响穿过太平洋，功夫练到月球上…</article></div></section><section class="swiper-slide"><div class="info-text"><h2>流星花园</h2><article class="cont">最嗲港台腔，恶搞经典偶像剧。杉菜已经不是那个杉菜，道明寺也不是那个道明寺。</article></div></section><section class="swiper-slide"><div class="info-text"><h2>小蝌蚪找妈妈</h2><article class="cont">看过上世纪八九十年代水墨动画片的老朋友们，这是带你们穿越回过去的唯一机会。这声音，一模一样，简直了！</article></div></section><section class="swiper-slide"><div class="info-text"><h2>阿哲相亲记</h2><article class="cont">苦命的阿哲，30多岁的高龄单身屌丝男，每次相亲都会相到奇葩。不过这些奇葩身上，多多少少都有你身上的影子，信么？</article></div></section><section class="swiper-slide"><div class="info-text"><h2>福尔老师</h2><article class="cont">美容教主是谁？牛尔老师？不，还有福尔老师!他最热衷的就是跟女主持撕，比娘更娘，当然爱好也是够三八的。</article></div></section></div><div class="stip-text">← 左右滑动，查看节目介绍 →</div></div>'
_doc[3] ='<div class="swiper-container mediaInfo s3"><div class="swiper-wrapper"><section class="swiper-slide"><div class="info-text"><h2>阿亮的烦恼生活</h2><article class="cont">这不是中国广播史上最好的广播剧。但一定是史上生命力最强的系列剧！角色鲜明，性格奇葩，剧情跌宕起伏，针砭时弊，嬉笑怒骂 ，让人忍俊不禁。中国广播娱乐节目金奖，浙江唯此一档。</article></div></section><section class="swiper-slide"><div class="info-text"><h2>心花路放</h2><article class="cont">用能歌善舞的表达方式在每个午后展现人格魅力。用高颜值迎接每位听众的回复，用不明觉厉的状态迎接每位听众的赞扬。每天都用“睡什么睡，起来嗨”的状态，嗨翻各位午饭后的行车路。《心花路放》＝十八般武艺＋忘记吃药＋雯哥。</article></div></section><section class="swiper-slide"><div class="info-text"><h2>城市卡通</h2><article class="cont">这是一档让人感到智商捉急的超常规访谈节目，访谈对象是各类熊孩子，访谈场所是个大小鲜肉散养基地，访谈结果是独一无二的hold不住神级节目。</article></div></section><section class="swiper-slide"><div class="info-text"><h2>猛剧场</h2><article class="cont">我叫王二夯！每天王二夯都会化身不同角色出现在不同的故事里，白雪王子、船长杰克、007，但相同的是王二夯总是最搞笑和最受伤的那个人，他的故事一定让你捧腹大笑。</article></div></section><section class="swiper-slide"><div class="info-text"><h2>超能娱乐圈</h2><article class="cont">细数娱乐圈是非圈，成功就在一瞬间，炒作就在一瞬间，狗带就在一瞬间，娱乐就在一瞬间。为了搏出位、博头条，明星们费尽了心机，有意无意最成为了领一时之风骚的头面人物！我们不粉不黑，麻辣点评，插科打诨，大明星做客，最娱乐的下午三点钟《超能娱乐圈》，认真你就输了！</article></div></section><section class="swiper-slide"><div class="info-text"><h2>娱乐红黑榜</h2><article class="cont">浙江最专业的娱乐记者，全浙江最毒舌的娱乐评论人，徐主播的娱乐红黑榜。每天新鲜热辣点评各路娱乐明星最新动态，新电影新歌麻辣评析。八卦，好玩，娱乐的娱乐红黑榜。</article></div></section><section class="swiper-slide"><div class="info-text"><h2>魅主播魅周末</h2><article class="cont">完全颠覆你对电台主播的认知！她们全是90后的最鲜嫩女主播。她们集齐了最招人喜欢的女生所有特点！有颜还有才！她们是帮单身联谊的爱神，是节目里古灵精怪的百变声音，是线下活动的焦点！每年更新一次成员的魅主播团队，你期待今年的阵容吗？</article></div></section><section class="swiper-slide"><div class="info-text"><h2>火星人音乐</h2><article class="cont">流行的、另类的、科技的、时尚的、无所不有的音乐类型，在你或寂寞或热闹的车上，做你流动的背景音乐，让你感受到各种天马行空的听觉享受。</article></div></section><section class="swiper-slide"><div class="info-text"><h2>跑神计划</h2><article class="cont">跑神计划1.0，广播史上首档大型户外直播；跑神计划2.0，广播史上首档视频直播节目。两大跑神少聪、阳阳，全新组合、全面升级，每晚带你发现杭城夜跑无限可能。跑神计划，keep running~</article></div></section><section class="swiper-slide"><div class="info-text"><h2>车神计划</h2><article class="cont">创路面社交电台节目，与APP合作，以“车”为载体，形成独特移动直播间，车+电台+新媒体，豪车+奖品+公益，快乐大不同。</article></div></section><section class="swiper-slide"><div class="info-text"><h2>吃神计划</h2><article class="cont">金牌亮爷带队吃遍杭城美食，这不仅仅是一档电台直播互动美食节目，更是搅动全浙江听众味蕾的饕餮盛宴。</article></div></section></div><div class="stip-text">← 左右滑动，查看节目介绍 →</div></div>';
_doc[4] ='<div class="swiper-container mediaInfo s3"><div class="swiper-wrapper"><section class="swiper-slide"><div class="info-text"><h2>城市大眼睛</h2><article class="cont">全省最具特色路况播报团队——大眼睛。时而甜美可人，时而风趣癫狂，自由切换的女神和女神经，一路为您导航。107大眼睛，专业的路况，颠覆的播报，温馨的陪伴。我是你的眼，为你看路面。</article></div></section><section class="swiper-slide"><div class="info-text"><h2>高速大眼睛</h2><article class="cont">坐拥高速交警指挥中心、浙江省智慧高速平台，面对上千监控摄像头，通联全省高速交警，将全浙江4000多公里高速公路实况尽收眼底，庞大而浩瀚的专业、实用出行资源。居家旅行，出门求财，必备神器。</article></div></section><section class="swiper-slide"><div class="info-text"><h2>超级火星人</h2><article class="cont">浙江省内历史最悠久，最权威的电台科技节目，解决科技产品使用中遇到的问题等。双向交流方式，权威性与科学性并存。是省内科技迷，IT菜鸟和达人们的最爱。独创的火星大战，吸引了大量听众的参与，通过娱乐的形式进行环保、科普教育。</article></div></section><section class="swiper-slide"><div class="info-text"><h2>107国学馆</h2><article class="cont">碎片化的国学栏目，全天12次，两分钟讲国学，但是！国学并不是四书五经，中国的，就是国学。你可以听到《明朝那些事》，还可以听到一些猎奇的盗墓故事，想知道古时候人们怎么过情人节？知道严寒四君子为什么是梅、兰、竹、菊吗？一切尽在国学馆。</article></div></section><section class="swiper-slide"><div class="info-text"><h2>互联网+</h2><article class="cont">N多个新兴产业N多家创新企业、马云、宗庆后、吴晓波，都是节目的内容和座上宾。纵横浙江创业圈、投融资圈，讲创业，讲投资，讲故事、讲情怀。节目的背后，是一个“大众创业 万众创新”的巨大的资源聚合平台。总有一款，能够让你泪流满面。</article></div></section><section class="swiper-slide"><div class="info-text"><h2>107微公益</h2><article class="cont">讲述最美浙江人的故事，《107微公益》是一份“浙江好人榜”。如果把这个节目看作一座桥梁，“微笑私家车”行动向低收入农户家庭子女伸出援手。《107微公益》是无数线下公益活动的宣传渠道、募集方式和展示平台。微公益，勿以善小而不为，为好人点赞，正能量点赞！</article></div></section><section class="swiper-slide"><div class="info-text"><h2>城市快报</h2><article class="cont">世界那么大，带你去看看。只需微信发送关键词，即可获悉旅游圈内政策权威发布、行业及时资讯和旅游行业动态消息。</article></div></section><section class="swiper-slide"><div class="info-text"><h2>私家车气象</h2><article class="cont">独具节奏感和个人情怀私家车气象RAP，幽默诙谐、动感十足、引人入胜，每日热点新闻、小皮观点和24节气的糅合，打破人们对于天气播报的刻板印象。</article></div></section></div><div class="stip-text">← 左右滑动，查看节目介绍 →</div></div>';
_doc[5] ='<div class="swiper-container mediaInfo s3"><div class="swiper-wrapper"><section class="swiper-slide"><div class="info-text"><h2>城市私家车</h2><article class="cont">我是常总！一个愿意为了维护您消费权益而发声的人！有问题找常总！常总为汽车维权代言！<br>《城市私家车》累计解决听众投诉问题8000余件，挽回消费者损失数千万元。投诉解决率达到90%以上。2015年启动浙江私家车维权大会，走遍全省11地市，打造更专业权威的城市维权品牌。</article></div></section><section class="swiper-slide"><div class="info-text"><h2>房产六脉神剑</h2><article class="cont">最专业的态度、最尖锐的观点，最个性的表达，杭州房产评论最权威发声。六脉神剑，节目特邀杭州日报房产工作室主任李坤军、透明售房网市场研究院院长方张接、住在杭州网总策划丁晓红，新浪乐居主编上官剑、腾讯大浙网房产主编郭晓雯和107资深房产主持人舒云，浙江主流房产媒体资深评论员共同铸造。</article></div></section><section class="swiper-slide"><div class="info-text"><h2>买房找舒云</h2><article class="cont">杭州资深房产节目主持人舒云，杭城楼市如数家珍，购房政策了如指掌，个大楼盘深入合作。一对一为你的购房计划提供方案，一对一为你的投资增值出谋划策。买房，有人、有策、有资源，找舒云，你放心！</article></div></section><section class="swiper-slide"><div class="info-text"><h2>107健康会所</h2><article class="cont">省内首档由专业健康管理师制作的健康服务类节目，国家三级健康管理师领衔主持，建全面的网络后盾提供健康服务，只为全民健康生活。</article></div></section><section class="swiper-slide"><div class="info-text"><h2>万万没想到</h2><article class="cont">每周都有银行、房产、家电、商超等品牌被请上榜，栏目组据理力争，听众消费纠纷迎刃而解。节目中攻势凌厉的调解，节目背后消保、工商、质检、律师的专业团队，90秒呈现出广播投诉节目不同凡响。</article></div></section><section class="swiper-slide"><div class="info-text"><h2>买车找老陈</h2><article class="cont">买车类咨询节目，周一至周五，只要你有买车方面的疑虑，都可以来找老陈咨询，因为老陈了解市场上所有的车型，而且和省内各大4S店都保持密切联系。</article></div></section><section class="swiper-slide"><div class="info-text"><h2>旅游找李sir</h2><article class="cont">李sir，浙江省主持人中最专业的角色化领队，领队中最专业的旅游节目主持人，独特打造旅游专业微信平台“城市之声出去玩”，点对点针对旅行问题进行答疑解惑，内容涵盖出境、国内、省内游的咨询、推荐，维权、投诉的受理。出去玩，找李sir！</article></div></section><section class="swiper-slide"><div class="info-text"><h2>万能亲子圈</h2><article class="cont">亲子问题，万能解答。节目邀约各大幼儿园、小学校长以及浙江省的高级教师、育儿专家等名师，为家长解疑答惑。节目开掘线下微信直播交流互动群，每周召集百名家长入群，参与育儿问题大讨论，亲子助理叮当在幼儿教育的第一线助孩子成才！</article></div></section><section class="swiper-slide"><div class="info-text"><h2>在清华听演讲</h2><article class="cont">来自清华大学职业经理训练中心一线的名家的头脑风暴，从金融到管理，从工商到哲学，每期一台名演讲，在碎片的时间中汲取精粹，听之则受益匪浅。</article></div></section></div><div class="stip-text">← 左右滑动，查看节目介绍 →</div></div>';
// 栏目介绍
_doc[6] ='<div class="sVertical startWork"><section class="swiper-wrapper"><article class="swiper-slide cont"><h1>上班路上，全民点赞</h1><div class="text">一个专业私家车电台的<br>上班路上是怎么样的？<br>“精分时段，精准送达”！</div><ul class="madia-time"><li><span>7:00-7:30</span> 将内容输出给送孩子上学的车主</li><li><span>7:30-8:00</span> 将内容输出给政界人士</li><li><span>8:00-8:30</span> 将内容输出给打卡一族</li><li><span>8:30-9:00</span> 将内容输出给SOHO</li><li><span>9:00-9:30</span> 将内容输出给互联网创业人群</li><li><span>9:30-10:00</span> 将内容输出给有闲阶层</li></ul><div class="text">私家车上班路上将早间出行人群做了划分，<br>并在此基础上构建内容全新编排。<br>107总是在最合适时间推送私家车主最感兴趣的话题。</div></article> </section><div class="sVertical-scrollbar"></div></div>';

// 节目介绍按钮
$('.sPopOpen1').on('touchstart',function(e) {
	$('#popLay').addClass('md-show'); 
	var sNum = $(this).data('page-id');
	$('#popCont').empty().append(_doc[0]);
	var s3 = new Swiper('.s3', {
	    direction: 'horizontal', 
	});
	setTimeout(function(){
		s3.slideTo(sNum, 1000, false);
	},20);
});
$('.sPopOpen2').on('touchstart',function(e) {
	$('#popLay').addClass('md-show'); 
	var sNum = $(this).data('page-id');
	$('#popCont').empty().append(_doc[1]);
	var s3 = new Swiper('.s3', {
	    direction: 'horizontal', 
	});
	setTimeout(function(){
		s3.slideTo(sNum, 1000, false);
	},20);
});
$('.sPopOpen3').on('touchstart',function(e) {
	$('#popLay').addClass('md-show'); 
	var sNum = $(this).data('page-id');
	$('#popCont').empty().append(_doc[2]);
	var s3 = new Swiper('.s3', {
	    direction: 'horizontal', 
	});
	setTimeout(function(){
		s3.slideTo(sNum, 1000, false);
	},20);
});
$('.sPopOpen4').on('touchstart',function(e) {
	$('#popLay').addClass('md-show'); 
	var sNum = $(this).data('page-id');
	$('#popCont').empty().append(_doc[3]);
	var s3 = new Swiper('.s3', {
	    direction: 'horizontal', 
	});
	setTimeout(function(){
		s3.slideTo(sNum, 1000, false);
	},20);
});
$('.sPopOpen5').on('touchstart',function(e) {
	$('#popLay').addClass('md-show'); 
	var sNum = $(this).data('page-id');
	$('#popCont').empty().append(_doc[4]);
	var s3 = new Swiper('.s3', {
	    direction: 'horizontal', 
	});
	setTimeout(function(){
		s3.slideTo(sNum, 1000, false);
	},20);
});
$('.sPopOpen6').on('touchstart',function(e) {
	$('#popLay').addClass('md-show'); 
	var sNum = $(this).data('page-id');
	$('#popCont').empty().append(_doc[5]);
	var s3 = new Swiper('.s3', {
	    direction: 'horizontal', 
	});
	setTimeout(function(){
		s3.slideTo(sNum, 1000, false);
	},20);
});
// 栏目按钮
$('.sPopOpen7').on('touchstart',function(e) {
	$('#popLay').addClass('md-show'); 
	$('#popCont').empty().append(_doc[6]);
	var _sVertical = new Swiper('.sVertical', {
	    direction: 'vertical', 
	    slidesPerView: 'auto',
	    freeMode: true,
	    scrollbar: '.sVertical-scrollbar',
	});	
});

// 节目链接
var _mediaListLink = new Array();
_mediaListLink[0]= new Array();
_mediaListLink[1]= new Array();
_mediaListLink[2]= new Array();
_mediaListLink[3]= new Array();
_mediaListLink[4]= new Array();
_mediaListLink[5]= new Array();

// 上班路上
_mediaListLink[0][0] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1277';
_mediaListLink[0][1] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1264';
_mediaListLink[0][2] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1274';
// 下班路上
_mediaListLink[1][0] ='#';
_mediaListLink[1][1] ='#';
_mediaListLink[1][2] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1477';
_mediaListLink[1][3] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1482';
_mediaListLink[1][4] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1476';
_mediaListLink[1][5] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1475';
_mediaListLink[1][6] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1474';
// 娱乐大爆炸
_mediaListLink[2][0] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1305';
_mediaListLink[2][1] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1291';
_mediaListLink[2][2] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1308';
_mediaListLink[2][3] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1304';
_mediaListLink[2][4] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1289';
_mediaListLink[2][5] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1302';
_mediaListLink[2][6] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1285';
_mediaListLink[2][7] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1290';
_mediaListLink[2][8] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1292';
_mediaListLink[2][9] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1297';

_mediaListLink[2][10] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1296';
_mediaListLink[2][11] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1281';
_mediaListLink[2][12] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1306';
_mediaListLink[2][13] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1287';
_mediaListLink[2][14] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1303';
_mediaListLink[2][15] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1299';
_mediaListLink[2][16] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1294';
_mediaListLink[2][17] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1288';
_mediaListLink[2][18] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1301';
_mediaListLink[2][19] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1293';

_mediaListLink[2][20] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1286';
_mediaListLink[2][21] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1280';
_mediaListLink[2][22] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1309';
_mediaListLink[2][23] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1434';
_mediaListLink[2][24] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1307';
// 加点娱乐
_mediaListLink[3][0] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1266';
_mediaListLink[3][1] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1312';
_mediaListLink[3][2] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1269';
_mediaListLink[3][3] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1426';
_mediaListLink[3][4] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1311';
_mediaListLink[3][5] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1273';
_mediaListLink[3][6] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1370';
_mediaListLink[3][7] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1368';
_mediaListLink[3][8] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1473';
_mediaListLink[3][9] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1315';

_mediaListLink[3][10] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1265';
// 加点资讯
_mediaListLink[4][0] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1278';
_mediaListLink[4][1] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1260';
_mediaListLink[4][2] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1275';
_mediaListLink[4][3] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1272';
_mediaListLink[4][4] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1313';
_mediaListLink[4][5] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1369';
_mediaListLink[4][6] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1478';
_mediaListLink[4][7] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1402';
// 加点服务
_mediaListLink[5][0] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1268';
_mediaListLink[5][1] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1271';
_mediaListLink[5][2] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1447';
_mediaListLink[5][3] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1404';
_mediaListLink[5][4] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1263';
_mediaListLink[5][5] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1405';

_mediaListLink[5][6] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1371';
_mediaListLink[5][7] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1403';
_mediaListLink[5][8] ='http://www.happy107.com/play/play_wcbz.aspx?vid=1406';

// console.log(_mediaListLink[0][0])

$('.sbtnLink1').on('touchstart',function(e) {
	var sLink = $(this).data('link-id');
	window.location.href= _mediaListLink[0][sLink];
});
$('.sbtnLink2').on('touchstart',function(e) {
	var sLink = $(this).data('link-id');
	window.location.href= _mediaListLink[1][sLink];
});
$('.sbtnLink3').on('touchstart',function(e) {
	var sLink = $(this).data('link-id');
	window.location.href= _mediaListLink[2][sLink];
});
$('.sbtnLink4').on('touchstart',function(e) {
	var sLink = $(this).data('link-id');
	window.location.href= _mediaListLink[3][sLink];
});
$('.sbtnLink5').on('touchstart',function(e) {
	var sLink = $(this).data('link-id');
	window.location.href= _mediaListLink[4][sLink];
});
$('.sbtnLink6').on('touchstart',function(e) {
	var sLink = $(this).data('link-id');
	window.location.href= _mediaListLink[5][sLink];
});













































