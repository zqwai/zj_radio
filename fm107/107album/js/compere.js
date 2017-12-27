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
the_images.push( 'img/p3/bg/bg-1.jpg');
the_images.push( 'img/p3/bg/bg-2.jpg');
the_images.push( 'img/p3/bg/bg-3.jpg');
the_images.push( 'img/p3/bg/bg-4.jpg');
the_images.push( 'img/p3/bg/bg-5.jpg');
the_images.push( 'img/p3/bg/bg-6.jpg');
the_images.push( 'img/p3/bg/bg-7.jpg');

the_images.push( 'img/p1/bg/p1-bg-1.jpg');
the_images.push( 'img/p1/bg/p1-bg-2.jpg');
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



// sMoblieSlide1 进入 退出
function enter_sMoblieSlide1(){
	$('.slide1 .J_bg').fadeIn(500,function(){
		$('.slide1 .main-cont li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
			$('.slide1 .main-cont li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
				$('.slide1 .main-cont li:nth-child(3)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide1 .main-cont li:nth-child(4)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide1 .main-cont li:nth-child(5)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
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
		$('.slide2 .box-compere .rubric').show().animo( { animation: 'bounceInDown', duration: 0.3},function() {
			$('.slide2 .box-compere .cont h1').show().animo( { animation: 'fadeInRight', duration: 0.3},function() {
				$('.slide2 .box-compere .cont .line').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
					$('.slide2 .box-compere .cont ul li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
					$('.slide2 .box-compere .cont ul li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
						$('.slide2 .box-compere .box-btn .btn-more').show().animo( { animation: 'rubberBand', duration: 0.7},function() {
							$('.slide2 .scroll-Up').show(1000);
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
	$('.slide2 .box-compere .rubric ').hide();
	$('.slide2 .box-compere .cont h1 ').hide();
	$('.slide2 .box-compere .cont .line').hide();
	$('.slide2 .box-compere .cont ul li').hide();
	$('.slide2 .box-compere .cont ul li .btn-more').hide();
	$('.slide2 .scroll-Up').hide();

	$('.slide2 .box-compere .cont ul li.box-btn').show();
}
// sMoblieSlide3 进入 退出
function enter_sMoblieSlide3(){
	$('.slide3 .J_bg').fadeIn(500,function(){
		$('.slide3 .box-compere .rubric').show().animo( { animation: 'bounceInDown', duration: 0.3},function() {
			$('.slide3 .box-compere .cont h1').show().animo( { animation: 'fadeInRight', duration: 0.3},function() {
				$('.slide3 .box-compere .cont .line').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
					$('.slide3 .box-compere .cont ul li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
					// $('.slide3 .box-compere .cont ul li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
						$('.slide3 .box-compere .box-btn .btn-more').show().animo( { animation: 'rubberBand', duration: 0.7},function() {
							$('.slide3 .scroll-Up').show(1000);
						});
					// });
					});
				});
			});
		});
	});
}
function out_sMoblieSlide3(){
	$('.slide3 .J_bg').hide();
	$('.slide3 .box-compere .rubric ').hide();
	$('.slide3 .box-compere .cont h1 ').hide();
	$('.slide3 .box-compere .cont .line').hide();
	$('.slide3 .box-compere .cont ul li').hide();
	$('.slide3 .box-compere .cont ul li .btn-more').hide();
	$('.slide3 .scroll-Up').hide();

	$('.slide3 .box-compere .cont ul li.box-btn').show();
}
// sMoblieSlide4 进入 退出
function enter_sMoblieSlide4(){
	$('.slide4 .J_bg').fadeIn(500,function(){
		$('.slide4 .box-compere .rubric').show().animo( { animation: 'bounceInDown', duration: 0.3},function() {
			$('.slide4 .box-compere .cont h1').show().animo( { animation: 'fadeInRight', duration: 0.3},function() {
				$('.slide4 .box-compere .cont .line').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
					$('.slide4 .box-compere .cont ul li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
					$('.slide4 .box-compere .cont ul li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
						$('.slide4 .box-compere .box-btn .btn-more').show().animo( { animation: 'rubberBand', duration: 0.7},function() {
							$('.slide4 .scroll-Up').show(1000);
						});
					});
					});
				});
			});
		});

	});
}
function out_sMoblieSlide4(){
	$('.slide4 .J_bg').hide();
	$('.slide4 .box-compere .rubric ').hide();
	$('.slide4 .box-compere .cont h1 ').hide();
	$('.slide4 .box-compere .cont .line').hide();
	$('.slide4 .box-compere .cont ul li').hide();
	$('.slide4 .box-compere .cont ul li .btn-more').hide();
	$('.slide4 .scroll-Up').hide();

	$('.slide4 .box-compere .cont ul li.box-btn').show();
}
// sMoblieSlide5 进入 退出
function enter_sMoblieSlide5(){
	$('.slide5 .J_bg').fadeIn(500,function(){
		$('.slide5 .box-compere .rubric').show().animo( { animation: 'bounceInDown', duration: 0.3},function() {
			$('.slide5 .box-compere .cont h1').show().animo( { animation: 'fadeInRight', duration: 0.3},function() {
				$('.slide5 .box-compere .cont .line').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
					$('.slide5 .box-compere .cont ul li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
					$('.slide5 .box-compere .cont ul li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
						$('.slide5 .box-compere .box-btn .btn-more').show().animo( { animation: 'rubberBand', duration: 0.7},function() {
							$('.slide5 .scroll-Up').show(1000);
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
	$('.slide5 .box-compere .rubric ').hide();
	$('.slide5 .box-compere .cont h1 ').hide();
	$('.slide5 .box-compere .cont .line').hide();
	$('.slide5 .box-compere .cont ul li').hide();
	$('.slide5 .box-compere .cont ul li .btn-more').hide();
	$('.slide5 .scroll-Up').hide();

	$('.slide5 .box-compere .cont ul li.box-btn').show();
}

// sMoblieSlide6 进入 退出
function enter_sMoblieSlide6(){
	$('.slide6 .J_bg').fadeIn(500,function(){
		$('.slide6 .box-compere .cont h1').show().animo( { animation: 'bounceInDown', duration: 0.3},function() {
			$('.slide6 .box-compere .cont .line').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
				$('.slide6 .box-compere .cont ul li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
				$('.slide6 .box-compere .cont ul li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
					$('.slide6 .box-compere .box-btn .btn-more').show().animo( { animation: 'rubberBand', duration: 0.7},function() {
						$('.slide6 .scroll-Up').show(1000);
					});
				});
				});
			});
		});
	});
}
function out_sMoblieSlide6(){
	$('.slide6 .J_bg').hide();
	$('.slide6 .box-compere .cont h1 ').hide();
	$('.slide6 .box-compere .cont .line').hide();
	$('.slide6 .box-compere .cont ul li').hide();
	$('.slide6 .box-compere .cont ul li .btn-more').hide();
	$('.slide6 .scroll-Up').hide();

	$('.slide6 .box-compere .cont ul li.box-btn').show();
}

// sMoblieSlide7 进入 退出
function enter_sMoblieSlide7(){
	$('.slide7 .J_bg').fadeIn(500,function(){
		$('.slide7 .box-compere .cont h1').show().animo( { animation: 'bounceInDown', duration: 0.3},function() {
			$('.slide7 .box-compere .cont .line').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
				$('.slide7 .box-compere .cont ul li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
				$('.slide7 .box-compere .cont ul li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
					$('.slide7 .box-compere .box-btn .btn-more').show().animo( { animation: 'rubberBand', duration: 0.7},function() {
						$('.slide7 .scroll-Up').show(1000);
					});
				});
				});
			});
		});

	});
}
function out_sMoblieSlide7(){
	$('.slide7 .J_bg').hide();
	$('.slide7 .box-compere .cont h1 ').hide();
	$('.slide7 .box-compere .cont .line').hide();
	$('.slide7 .box-compere .cont ul li').hide();
	$('.slide7 .box-compere .cont ul li .btn-more').hide();
	$('.slide7 .scroll-Up').hide();

	$('.slide7 .box-compere .cont ul li.box-btn').show();
}

// sMoblieSlide8 进入 退出
function enter_sMoblieSlide8(){
	$('.slide8 .J_bg').fadeIn(500,function(){
		$('.slide8 .box-compere .cont h1').show().animo( { animation: 'bounceInDown', duration: 0.3},function() {
			$('.slide8 .box-compere .cont .line').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
				$('.slide8 .box-compere .cont ul li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
				$('.slide8 .box-compere .cont ul li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
					$('.slide8 .box-compere .box-btn .btn-more').show().animo( { animation: 'rubberBand', duration: 0.7},function() {
						$('.slide8 .scroll-Up').show(1000);
					});
				});
				});
			});
		});

	});
}
function out_sMoblieSlide8(){
	$('.slide8 .J_bg').hide();
	$('.slide8 .box-compere .cont h1 ').hide();
	$('.slide8 .box-compere .cont .line').hide();
	$('.slide8 .box-compere .cont ul li').hide();
	$('.slide8 .box-compere .cont ul li .btn-more').hide();
	$('.slide8 .scroll-Up').hide();

	$('.slide8 .box-compere .cont ul li.box-btn').show();
}
// sMoblieSlide9 进入 退出
function enter_sMoblieSlide9(){
	$('.slide9 .J_bg').fadeIn(500,function(){
		$('.slide9 .logo-album-menu').show().animo( { animation: 'zoomInDown', duration: 0.5},function() {
			$('.slide9 .box-menu-btn li:nth-child(5)').show().animo( { animation: 'zoomInLeft', duration: 0.5},function() {
			$('.slide9 .box-menu-btn li:nth-child(4)').show().animo( { animation: 'zoomInRight', duration: 0.5},function() {
			$('.slide9 .box-menu-btn li:nth-child(3)').show().animo( { animation: 'zoomInLeft', duration: 0.5},function() {
			$('.slide9 .box-menu-btn li:nth-child(2)').show().animo( { animation: 'zoomInRight', duration: 0.5},function() {
			$('.slide9 .box-menu-btn li:nth-child(1)').show().animo( { animation: 'zoomInLeft', duration: 0.5});
			});
			});
			});
			});
		});
	});
}
function out_sMoblieSlide9(){
	$('.slide9 .J_bg,.slide9 .scroll-Up').hide();
	$('.slide9 .logo-album-menu').hide();
	$('.slide9 .box-menu-btn li').hide();
}

//滚屏效果
var s1 = new Swiper('.a1', {
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
		var hasSlide9= $('.slide9').hasClass('swiper-slide-active');
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
			out_sMoblieSlide9()
		}
		else if(hasSlide9){
			out_sMoblieSlide8()
			enter_sMoblieSlide9();
			// out_sMoblieSlide10()
		}
		// else if(hasSlide10){
		// 	out_sMoblieSlide9()
		// 	enter_sMoblieSlide10();
		// }
	}

});

//音乐
function musicInit(e){
	var myAudio=document.createElement("audio"),
	audioHtml= '<div id=audioControl class=play></div>';
	myAudio.id="music",
	myAudio.src="http://www.happy107.com/107album/song/3.mp3",
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

// 关闭层
$('#close').on('touchstart',function(e) {
	$(this).parent().removeClass('md-show');
});
var _doc= new Array();
_doc[0]='<div class="sVertical startWork"><section class="swiper-wrapper"><article class="swiper-slide cont"><h1>叱咤 亮爷</h1><div class="text"><p>曾经看轻他人，兀自羞愧。</p><p>已未，阿亮本命之年，一切都不寻常。</p><p>他将广播界的各类大奖尽入囊中，</p><p>他将研讨会开进京城，<br>他登上广电“琅琊榜”，名列“广播六大名嘴”；</p><p>尊上曰：人有多大的能力，便要付起多大的责任。</p><p>于是，他的身上也有了更重的担子。他再度启程。</p><p>吃神计划回归，却已不是当年的酒肉穿肠过，</p><p>他有了更多的感悟、感慨，也被寄予了更高的期盼和更大的使命。</p><p>从阿亮到亮哥再到亮爷，十五年叱咤江湖。</p><p>曾经少年，如今沉稳了气息，沉淀了内心，但激情依旧。</p><p>他掐灭香烟，扣紧衣袖，再次哼唱起了偶像华哥的那首歌谣——</p><p>“偶滴老嘎，就组在则个屯儿……”</p><p>107，就是他的屯儿，纵使策马天涯，心不远游。</p></div></article> </section><div class="sVertical-scrollbar"></div><div class="stip-text">↑ 上下滑动，查看介绍 ↓</div></div>';
_doc[1]='<div class="sVertical startWork"><section class="swiper-wrapper"><article class="swiper-slide cont"><h1>明媚 袁逸</h1><div class="text"><p>“做一个明媚的女子，不倾国，不倾城。以优雅姿态去摸爬滚打！” </p><p>她仿佛是吴淡如散文集中走出的女子，</p><p>徜徉着慵懒的阳光，漫步在瓦尔登湖畔的茵茵草地，</p><p>不与油彩争艳，不与浮华争宠，</p><p>播新闻可以端庄大气，玩幽默可以让你前仰后合，</p><p>而且她的幽默充满了智慧与机巧，</p><p>难能可贵的是，竟还有一份童真。</p><p>听她的节目就像呼吸阿尔卑斯山的空气，</p><p>那么沁润、那么舒畅，</p><p>有时还会感受到林间松鼠的活跃与灵动。</p><p>袁老师、空姐Miss Yuan、袁儿大夫、紫薇、星矢、国际袁Dancing Queen……</p><p>一切都那么惟妙惟肖、入骨入髓。</p><p>她是清晨第一缕阳光、第一声问候，</p><p>在你驾车驶出家门的时候，</p><p>她在《私家车上班路上》送最有温度的资讯。</p><p>早起上班，真好——只要有她陪伴。</p></div></article> </section><div class="sVertical-scrollbar"></div><div class="stip-text">↑ 上下滑动，查看介绍 ↓</div></div>';
_doc[2]='<div class="sVertical startWork"><section class="swiper-wrapper"><article class="swiper-slide cont"><h1>魅力 雯哥</h1><div class="text"><p>她是浙江广电 “八大主播”新锐力量。</p><p>她拥有一个有魅力的女人所应拥有的一切。她是“雯哥”——高雯。</p><p>她对欧美音乐如此熟稔，足以让专业音乐台汗颜。</p><p>她的唱功如此了得，把《雯哥Live Show》唱出了大牌演唱会的水准。</p><p>她对听众的兴奋点把握得如此准确，在一个下午非黄金档的时段，</p><p>创出全频道微信互动量、点赞量的高峰。</p><p>一边享受工作的乐趣，一边享受家庭的幸福，</p><p>这或许就是一个成功女人最期待拥有的吧？雯哥做到了。</p></div></article> </section><div class="sVertical-scrollbar"></div><div class="stip-text">↑ 上下滑动，查看介绍 ↓</div></div>';
_doc[3]='<div class="sVertical startWork"><section class="swiper-wrapper"><article class="swiper-slide cont"><h1>女侠 田雪</h1><div class="text"><p>在古可比李元霸，在今可比史泰龙。</p><p>她所过之处，满城鲜花，尽数凋零。</p><p>她是谁？她是田小雪，江湖人称“雪姨”。</p><p>一个白羊座的女汉子，一个豪气冲云天、霸气震武林的传奇女侠。</p><p>她可以早上5点起床，报路况、赶采访、上直播…… 一直忙活到深夜。</p><p>她可以只身闯荡伦敦，每天只睡3个小时，确保奥运报道准时准点。</p><p>外表有多坚硬，内心便有多柔软。但是也会哭，也会累。</p><p>她爱网购，爱八卦，她会流泪，会母爱泛滥，女汉子的心里，其实住着一个萌妹子。</p><p>她是拼命三娘，因为，</p><p>她不低头、不服输，拼尽全身的力气，只为心中的梦想。</p></div></article> </section><div class="sVertical-scrollbar"></div><div class="stip-text">↑ 上下滑动，查看介绍 ↓</div></div>';
_doc[4]='<div class="sVertical startWork"><section class="swiper-wrapper"><article class="swiper-slide cont"><h1>大明</h1><div class="text"><p>107新生综艺王。</p><p>我不知道我会什么，但我知道没有我不会的。</p><p>“人生得意须尽嗨，莫使DJ空打碟”，</p><p>当HIP HOP成为我的生活我的文化，</p><p>我所迎接的，是一次一次的天性解放，</p><p>除去做作，HIGH在举手投足间。</p><p>我是大明，希望能用我嘻哈的精神与元气，</p><p>在每一个节目的时段，</p><p>感染着各位的快乐情绪。</p></div></article> </section><div class="sVertical-scrollbar"></div><div class="stip-text">↑ 上下滑动，查看介绍 ↓</div></div>';
_doc[5]='<div class="sVertical startWork"><section class="swiper-wrapper"><article class="swiper-slide cont"><h1>刘焕</h1><div class="text"><p>我是大记者刘焕。</p><p>我的专长就是“换”。</p><p>除了脸，基本上我把自己能改变的都改变了，</p><p>从上到下，从里到外。</p><p>我是前跑神、卡通王、猛剧场、大爆炸、焕口气…</p><p>我接下来的身份是，你～猜～</p><p>不变的是不断奔溃的内心，</p><p>扛起的是90后该有的旗帜。</p></div></article> </section><div class="sVertical-scrollbar"></div><div class="stip-text">↑ 上下滑动，查看介绍 ↓</div></div>';
_doc[6]='<div class="sVertical startWork"><section class="swiper-wrapper"><article class="swiper-slide cont"><h1>大力</h1><div class="text"><p>块头不大力气不大，但嗓门儿最大</p><p>没记性却天马行空，天马行空的编各种段子，</p><p>天马行空的给听众讲故事。</p><p>我是面馆儿老板沈三条，我是弄堂DJ杭三鲜，</p><p>我还是英文逗比Teacher沈。</p><p>我不是107的老甲鱼，我是群鳖托地，</p><p>朋友们，请拿出你们“花老开”的力气，</p><p>给我震耳欲聋的掌声！</p></div></article> </section><div class="sVertical-scrollbar"></div><div class="stip-text">↑ 上下滑动，查看介绍 ↓</div></div>';



function sPopCont(){
	$('#popLay').addClass('md-show');
	var _sVertical = new Swiper('.sVertical', {
	    direction: 'vertical',
	    slidesPerView: 'auto',
	    freeMode: true,
	    scrollbar: '.sVertical-scrollbar',
	});
}
// 栏目按钮
$('.sPopOpen0').on('touchstart',function(e) {
	$('#popCont').empty().append(_doc[0]);
	sPopCont()
});
$('.sPopOpen1').on('touchstart',function(e) {
	$('#popCont').empty().append(_doc[1]);
	sPopCont()
});
$('.sPopOpen2').on('touchstart',function(e) {
	$('#popCont').empty().append(_doc[2]);
	sPopCont()
});
$('.sPopOpen3').on('touchstart',function(e) {
	$('#popCont').empty().append(_doc[3]);
	sPopCont()
});
$('.sPopOpen4').on('touchstart',function(e) {
	$('#popCont').empty().append(_doc[4]);
	sPopCont()
});
$('.sPopOpen5').on('touchstart',function(e) {
	$('#popCont').empty().append(_doc[5]);
	sPopCont()
});
$('.sPopOpen6').on('touchstart',function(e) {
	$('#popCont').empty().append(_doc[6]);
	sPopCont()
});
