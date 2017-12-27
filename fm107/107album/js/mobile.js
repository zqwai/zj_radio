//禁止默认触屏默认动作
document.addEventListener("touchmove",function(e){e.preventDefault()},!1),
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
the_images.push( 'img/p2/bg/mobile-bg-0.jpg');
// the_images.push( 'img/p2/bg/mobile-bg-1.jpg');
the_images.push( 'img/p2/bg/mobile-bg-2.jpg');
the_images.push( 'img/p2/bg/mobile-bg-3.jpg');
the_images.push( 'img/p2/bg/mobile-bg-4.jpg');
the_images.push( 'img/p2/bg/mobile-bg-5.jpg');
the_images.push( 'img/p2/bg/mobile-bg-6.jpg');
the_images.push( 'img/p2/bg/mobile-bg-7.jpg');
the_images.push( 'img/p2/bg/mobile-bg-8.jpg');
// 栏目
the_images.push( 'img/p2/title.png');
the_images.push( 'img/p2/logo-car.png');
//内容
the_images.push( 'img/p1/phb-1.png');
the_images.push( 'img/p1/phb-2.png');
the_images.push( 'img/p1/case-1.png');
the_images.push( 'img/p1/case-2.png');
the_images.push( 'img/p1/case-3.png');
the_images.push( 'img/p1/case-4.png');
the_images.push( 'img/p1/case-5.png');
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
		jLazyImgInit();
		setTimeout(function(){
			$('#form1').css('visibility','visible');
			$('#loading').remove();
			musicInit();
			enter_sMoblieSlide0();
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
function jLazyImgInit (t){
	var t = $(".jLazyImgInit");
	t.each(function(t, h) {
		var i = $(h),
		a = i.data("src");
		i.attr("src", a )
	})
};


// sMoblieSlide0 进入 退出
function enter_sMoblieSlide0(){
	$('.slide0 .J_bg').fadeIn(500,function(){
		$('.slide0 .main-cont li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
			$('.slide0 .main-cont li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
				$('.slide0 .main-cont li:nth-child(3)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide0 .main-cont li:nth-child(4)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
						$('.slide0 .main-head header h1').show().animo( { animation: 'fadeInLeft', duration:  0.3});
						$('.slide0 .main-head header h2').show().animo( { animation: 'fadeInRight', duration:  0.3},function() {
							$('.slide0 .scroll-Up').show(1000);
							$('.slide0 .head-moblie').fadeIn();
						});
					});
				});
			});
		});
	});
}
function out_sMoblieSlide0(){
	$('.slide0 .J_bg,.slide0 .scroll-Up,.slide0 .head-moblie,.slide0 .main-head header h2,.slide0 .main-head header h1,.slide0 .main-cont li').hide();
}
// sMoblieSlide1 进入 退出
function enter_sMoblieSlide1(){
	$('.slide1 .J_bg').fadeIn(500,function(){
		$('.slide1 .main-cont h2').show().animo( { animation: 'flipInX', duration: 0.3},function() {
		$('.slide1 .main-cont h1').show().animo( { animation: 'flipInX', duration: 0.3},function() {
			$('.slide1 .main-cont .line').show().animo( { animation: 'fadeInRight', duration: 0.5},function() {
				$('.slide1 .main-cont ul li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
				$('.slide1 .main-cont ul li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
				$('.slide1 .main-cont ul li:nth-child(3)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
				$('.slide1 .main-cont ul li:nth-child(4)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
				$('.slide1 .main-cont ul li:nth-child(5)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
					$('.slide1 .main-cont ul li .btn-more:nth-child(1)').show().animo( { animation: 'rubberBand', duration: 0.7});
					$('.slide1 .main-cont ul li .btn-more:nth-child(2)').show().animo( { animation: 'rubberBand', duration: 0.7},function() {
						$('.slide1 .main-head header h1').show().animo( { animation: 'fadeInLeft', duration:  0.3});
						$('.slide1 .main-head header h2').show().animo( { animation: 'fadeInRight', duration:  0.3},function() {
							$('.slide1 .scroll-Up').show(1000);
							$('.slide1 .head-moblie').fadeIn();
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
function out_sMoblieSlide1(){
	$('.slide1 .J_bg').hide();
	$('.slide1 .main-cont h1').hide();
	$('.slide1 .main-cont h2').hide();
	$('.slide1 .main-cont .line').hide();
	$('.slide1 .main-cont ul li').hide();
	$('.slide1 .main-cont ul li .btn-more').hide();
	$('.slide1 .main-head header h1').hide();
	$('.slide1 .main-head header h2').hide();
	$('.slide1 .scroll-Up').hide();
	$('.slide1 .head-moblie').hide();

	$('.slide1 .main-cont ul li.box-btn').show();
}
// sMoblieSlide2 进入 退出
function enter_sMoblieSlide2(){
	$('.slide2 .J_bg').fadeIn(500,function(){
		$('.slide2 .main-cont h1').show().animo( { animation: 'flipInX', duration: 0.3},function() {
		$('.slide2 .main-cont h3').show().animo( { animation: 'flipInX', duration: 0.3},function() {
			$('.slide2 .main-cont .line').show().animo( { animation: 'fadeInRight', duration: 0.5},function() {
				$('.slide2 .main-cont ul li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
				$('.slide2 .main-cont ul li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
				$('.slide2 .main-cont ul li:nth-child(3)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
				$('.slide2 .main-cont ul li:nth-child(4)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
				// $('.slide2 .main-cont ul li:nth-child(5)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
					$('.slide2 .main-cont ul li .btn-more:nth-child(1)').show().animo( { animation: 'rubberBand', duration: 0.7});
					$('.slide2 .main-cont ul li .btn-more:nth-child(2)').show().animo( { animation: 'rubberBand', duration: 0.7},function() {
						// $('.slide1 .main-head header h1').show().animo( { animation: 'fadeInLeft', duration:  0.3});
						// $('.slide1 .main-head header h2').show().animo( { animation: 'fadeInRight', duration:  0.3},function() {
							$('.slide2 .scroll-Up').show(1000);
							// $('.slide1 .head-moblie').fadeIn();
						// });
					});
				// });
				});
				});
				});
				});
			});
		});
		});
		console.log('222222')
	});
}
function out_sMoblieSlide2(){
	$('.slide2 .J_bg').hide();
	$('.slide2 .main-cont h1').hide();
	$('.slide2 .main-cont h3').hide();
	$('.slide2 .main-cont .line').hide();
	$('.slide2 .main-cont ul li').hide();
	$('.slide2 .main-cont ul li .btn-more').hide();
	$('.slide2 .scroll-Up').hide();

	$('.slide2 .main-cont ul li.box-btn').show();
}
// sMoblieSlide3 进入 退出
function enter_sMoblieSlide3(){
	$('.slide3 .J_bg').fadeIn(500,function(){
		$('.slide3 .main-cont h2').show().animo( { animation: 'fadeInUp', duration: 0.3},function() {
		$('.slide3 .main-cont h1').show().animo( { animation: 'flipInX', duration: 0.3},function() {
			$('.slide3 .main-cont .line').show().animo( { animation: 'fadeInRight', duration: 0.5},function() {
				$('.slide3 .main-cont ul li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
				$('.slide3 .main-cont ul li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
				$('.slide3 .main-cont ul li:nth-child(3)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {

					$('.slide3 .main-cont ul li .btn-more:nth-child(1)').show().animo( { animation: 'rubberBand', duration: 0.7});
					$('.slide3 .main-cont ul li .btn-more:nth-child(2)').show().animo( { animation: 'rubberBand', duration: 0.7},function() {
						$('.slide3 .main-head header h1').show().animo( { animation: 'fadeInLeft', duration:  0.3});
						$('.slide3 .main-head header h2').show().animo( { animation: 'fadeInRight', duration:  0.3},function() {
							$('.slide3 .scroll-Up').show(1000);
							$('.slide3 .head-moblie').fadeIn();
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
	$('.slide3 .main-cont h1').hide();
	$('.slide3 .main-cont h2').hide();
	$('.slide3 .main-cont .line').hide();
	$('.slide3 .main-cont ul li').hide();
	$('.slide3 .main-cont ul li .btn-more').hide();
	$('.slide3 .main-head header h1').hide();
	$('.slide3 .main-head header h2').hide();
	$('.slide3 .scroll-Up').hide();
	$('.slide3 .head-moblie').hide();

	$('.slide3 .main-cont ul li.box-btn').show();
}
// sMoblieSlide4 进入 退出
function enter_sMoblieSlide4(){
	$('.slide4 .J_bg').fadeIn(500,function(){
		$('.slide4 .box-carLogo h1.a1').show().animo( { animation: 'fadeInRight', duration: 0.3},function() {
			$('.slide4 .box-carLogo .line.a2').show().animo( { animation: 'fadeInUp', duration: 0.3},function() {
				$('.slide4 .box-carLogo .carLogo1 li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration: 0.3});
				$('.slide4 .box-carLogo .carLogo2 li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:0.1});
				$('.slide4 .box-carLogo .carLogo3 li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:0.2});
				$('.slide4 .box-carLogo .carLogo4 li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:0.3});
				$('.slide4 .box-carLogo .carLogo5 li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:0.4});

				$('.slide4 .box-carLogo .carLogo1 li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:0.5});
				$('.slide4 .box-carLogo .carLogo2 li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:0.6});
				$('.slide4 .box-carLogo .carLogo3 li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:0.7});
				$('.slide4 .box-carLogo .carLogo4 li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:0.8});
				$('.slide4 .box-carLogo .carLogo5 li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:0.9});

				$('.slide4 .box-carLogo .carLogo1 li:nth-child(3)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:1.0});
				$('.slide4 .box-carLogo .carLogo2 li:nth-child(3)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:1.1});
				$('.slide4 .box-carLogo .carLogo3 li:nth-child(3)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:1.2});
				$('.slide4 .box-carLogo .carLogo4 li:nth-child(3)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:1.3});
				$('.slide4 .box-carLogo .carLogo5 li:nth-child(3)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:1.4});

				$('.slide4 .box-carLogo .carLogo1 li:nth-child(4)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:1.5});
				$('.slide4 .box-carLogo .carLogo2 li:nth-child(4)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:1.6});
				$('.slide4 .box-carLogo .carLogo3 li:nth-child(4)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:1.7});
				$('.slide4 .box-carLogo .carLogo4 li:nth-child(4)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:1.8});
				$('.slide4 .box-carLogo .carLogo5 li:nth-child(4)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:1.9});

				$('.slide4 .box-carLogo .carLogo6 li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:2.0});
				$('.slide4 .box-carLogo .carLogo7 li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:2.1});
				$('.slide4 .box-carLogo .carLogo8 li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:2.2});
				$('.slide4 .box-carLogo .carLogo9 li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:2.3});
				$('.slide4 .box-carLogo .carLogo10 li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:2.4});

				$('.slide4 .box-carLogo .carLogo6 li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:3.0});
				$('.slide4 .box-carLogo .carLogo7 li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:3.1});
				$('.slide4 .box-carLogo .carLogo8 li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:3.2});
				$('.slide4 .box-carLogo .carLogo9 li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:3.3});
				$('.slide4 .box-carLogo .carLogo10 li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:3.4});

				$('.slide4 .box-carLogo .carLogo6 li:nth-child(3)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:3.5});
				$('.slide4 .box-carLogo .carLogo7 li:nth-child(3)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:3.6});
				$('.slide4 .box-carLogo .carLogo8 li:nth-child(3)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:3.7});
				$('.slide4 .box-carLogo .carLogo11 li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:3.8});
				$('.slide4 .box-carLogo .carLogo12 li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:3.9});

				$('.slide4 .box-carLogo .carLogo6 li:nth-child(4)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:4.0});
				$('.slide4 .box-carLogo .carLogo7 li:nth-child(4)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:4.1});
				$('.slide4 .box-carLogo .carLogo8 li:nth-child(4)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:4.2});
				$('.slide4 .box-carLogo .carLogo11 li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:4.3});
				$('.slide4 .box-carLogo .carLogo12 li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:4.4});

				$('.slide4 .box-carLogo h1.a3').show().animo( { animation: 'fadeInRight', duration: 0.3, delay:4.6},function() {
					$('.slide4 .box-carLogo .line.a4').show().animo( { animation: 'fadeInUp', duration: 0.3},function() {
						$('.slide4 .box-carLogo .appLogo li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration: 0.3});
						$('.slide4 .box-carLogo .appLogo li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:0.2});
						$('.slide4 .box-carLogo .appLogo li:nth-child(3)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:0.4});
						$('.slide4 .box-carLogo .appLogo li:nth-child(4)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:0.6});
						$('.slide4 .box-carLogo .appLogo li:nth-child(5)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:0.8});
						$('.slide4 .box-carLogo .appLogo li:nth-child(6)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:1.0});
						$('.slide4 .box-carLogo .appLogo li:nth-child(7)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:1.2});

						$('.slide4 .box-carLogo h1.a5').show().animo( { animation: 'fadeInRight', duration: 0.3, delay:1.4},function() {
							$('.slide4 .box-carLogo .line.a6').show().animo( { animation: 'fadeInUp', duration: 0.3},function() {
								$('.slide4 .box-carLogo .brandLogo li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration: 0.3});
								$('.slide4 .box-carLogo .brandLogo li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:0.2});
								$('.slide4 .box-carLogo .brandLogo li:nth-child(3)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:0.4});
								$('.slide4 .box-carLogo .brandLogo li:nth-child(4)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:0.6});
								$('.slide4 .box-carLogo .brandLogo li:nth-child(5)').show().animo( { animation: 'fadeInUp', duration: 0.3, delay:0.8});
			
							});
						});
					});
				});

			});
		});
	});
}
function out_sMoblieSlide4(){
	$('.slide4 .J_bg,.slide4 .scroll-Up').hide();
	$('.slide4 .box-carLogo h1').hide();
	$('.slide4 .box-carLogo .line').hide();
	$('.slide4 .box-carLogo .carLogo li').hide();
	$('.slide4 .box-carLogo .appLogo li').hide();
	$('.slide4 .box-carLogo .brandLogo li').hide();
}
// sMoblieSlide5 进入 退出
function enter_sMoblieSlide5(){
	$('.slide5 .J_bg').fadeIn(500,function(){
		$('.slide5 .main-cont h2').show().animo( { animation: 'fadeInUp', duration: 0.3},function() {
		$('.slide5 .main-cont h1').show().animo( { animation: 'flipInX', duration: 0.3},function() {
			$('.slide5 .main-cont .line').show().animo( { animation: 'fadeInRight', duration: 0.5},function() {
				$('.slide5 .main-cont ul li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
				$('.slide5 .main-cont ul li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
				
					$('.slide5 .main-cont ul li .btn-more:nth-child(1)').show().animo( { animation: 'rubberBand', duration: 0.7});
					$('.slide5 .main-cont ul li .btn-more:nth-child(2)').show().animo( { animation: 'rubberBand', duration: 0.7},function() {
						$('.slide5 .main-head header h1').show().animo( { animation: 'fadeInLeft', duration:  0.3});
						$('.slide5 .main-head header h2').show().animo( { animation: 'fadeInRight', duration:  0.3},function() {
							$('.slide5 .scroll-Up').show(1000);
							$('.slide5 .head-moblie').fadeIn();
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
	$('.slide5 .main-cont h1').hide();
	$('.slide5 .main-cont h2').hide();
	$('.slide5 .main-cont .line').hide();
	$('.slide5 .main-cont ul li').hide();
	$('.slide5 .main-cont ul li .btn-more').hide();
	$('.slide5 .main-head header h1').hide();
	$('.slide5 .main-head header h2').hide();
	$('.slide5 .scroll-Up').hide();
	$('.slide5 .head-moblie').hide();

	$('.slide5 .main-cont ul li.box-btn').show();
}

// sMoblieSlide6 进入 退出
function enter_sMoblieSlide6(){
	$('.slide6 .J_bg').fadeIn(500,function(){
		$('.slide6 .main-cont h2').show().animo( { animation: 'fadeInUp', duration: 0.3},function() {
		$('.slide6 .main-cont h1').show().animo( { animation: 'flipInX', duration: 0.3},function() {
			$('.slide6 .main-cont .line').show().animo( { animation: 'fadeInRight', duration: 0.5},function() {
				$('.slide6 .main-cont ul li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
				$('.slide6 .main-cont ul li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
				$('.slide6 .main-cont ul li:nth-child(3)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
				$('.slide6 .main-cont ul li:nth-child(4)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {

					$('.slide6 .main-cont ul li .btn-more:nth-child(1)').show().animo( { animation: 'rubberBand', duration: 0.7});
					$('.slide6 .main-cont ul li .btn-more:nth-child(2)').show().animo( { animation: 'rubberBand', duration: 0.7},function() {
						$('.slide6 .main-head header h1').show().animo( { animation: 'fadeInLeft', duration:  0.3});
						$('.slide6 .main-head header h2').show().animo( { animation: 'fadeInRight', duration:  0.3},function() {
							$('.slide6 .scroll-Up').show(1000);
							$('.slide6 .head-moblie').fadeIn();
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
function out_sMoblieSlide6(){
	$('.slide6 .J_bg').hide();
	$('.slide6 .main-cont h1').hide();
	$('.slide6 .main-cont h2').hide();
	$('.slide6 .main-cont .line').hide();
	$('.slide6 .main-cont ul li').hide();
	$('.slide6 .main-cont ul li .btn-more').hide();
	$('.slide6 .main-head header h1').hide();
	$('.slide6 .main-head header h2').hide();
	$('.slide6 .scroll-Up').hide();
	$('.slide6 .head-moblie').hide();

	$('.slide6 .main-cont ul li.box-btn').show();
}

// sMoblieSlide7 进入 退出
function enter_sMoblieSlide7(){
	$('.slide7 .J_bg').fadeIn(500,function(){
		$('.slide7 .main-cont h2').show().animo( { animation: 'fadeInUp', duration: 0.3},function() {
		$('.slide7 .main-cont h1').show().animo( { animation: 'flipInX', duration: 0.3},function() {
			$('.slide7 .main-cont .line').show().animo( { animation: 'fadeInRight', duration: 0.5},function() {
				$('.slide7 .main-cont ul li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
				$('.slide7 .main-cont ul li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {

					$('.slide7 .main-cont ul li .btn-more:nth-child(1)').show().animo( { animation: 'rubberBand', duration: 0.7});
					$('.slide7 .main-cont ul li .btn-more:nth-child(2)').show().animo( { animation: 'rubberBand', duration: 0.7},function() {
						$('.slide7 .main-head header h1').show().animo( { animation: 'fadeInLeft', duration:  0.3});
						$('.slide7 .main-head header h2').show().animo( { animation: 'fadeInRight', duration:  0.3},function() {
							$('.slide7 .scroll-Up').show(1000);
							$('.slide7 .head-moblie').fadeIn();
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
	$('.slide7 .main-cont h1').hide();
	$('.slide7 .main-cont h2').hide();
	$('.slide7 .main-cont .line').hide();
	$('.slide7 .main-cont ul li').hide();
	$('.slide7 .main-cont ul li .btn-more').hide();
	$('.slide7 .main-head header h1').hide();
	$('.slide7 .main-head header h2').hide();
	$('.slide7 .scroll-Up').hide();
	$('.slide7 .head-moblie').hide();

	$('.slide7 .main-cont ul li.box-btn').show();
}

// sMoblieSlide8 进入 退出
function enter_sMoblieSlide8(){
	$('.slide8 .J_bg').fadeIn(500,function(){
		$('.slide8 .main-cont h2').show().animo( { animation: 'fadeInUp', duration: 0.3},function() {
		$('.slide8 .main-cont h1').show().animo( { animation: 'flipInX', duration: 0.3},function() {
			$('.slide8 .main-cont .line').show().animo( { animation: 'fadeInRight', duration: 0.5},function() {
				$('.slide8 .main-cont ul li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
				$('.slide8 .main-cont ul li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
				$('.slide8 .main-cont ul li:nth-child(3)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
				$('.slide8 .main-cont ul li:nth-child(4)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {
				$('.slide8 .main-cont ul li:nth-child(5)').show().animo( { animation: 'fadeInUp', duration: 0.5},function() {

					$('.slide8 .main-cont ul li .btn-more:nth-child(1)').show().animo( { animation: 'rubberBand', duration: 0.7});
					$('.slide8 .main-cont ul li .btn-more:nth-child(2)').show().animo( { animation: 'rubberBand', duration: 0.7},function() {
						$('.slide8 .main-head header h1').show().animo( { animation: 'fadeInLeft', duration:  0.3});
						$('.slide8 .main-head header h2').show().animo( { animation: 'fadeInRight', duration:  0.3},function() {
							$('.slide8 .scroll-Up').show(1000);
							$('.slide8 .head-moblie').fadeIn();
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
function out_sMoblieSlide8(){
	$('.slide8 .J_bg').hide();
	$('.slide8 .main-cont h1').hide();
	$('.slide8 .main-cont h2').hide();
	$('.slide8 .main-cont .line').hide();
	$('.slide8 .main-cont ul li').hide();
	$('.slide8 .main-cont ul li .btn-more').hide();
	$('.slide8 .main-head header h1').hide();
	$('.slide8 .main-head header h2').hide();
	$('.slide8 .scroll-Up').hide();
	$('.slide8 .head-moblie').hide();

	$('.slide8 .main-cont ul li.box-btn').show();
}

// sMoblieSlide9 进入 退出
function enter_sMoblieSlide9(){
	$('.slide9 .J_bg').fadeIn(500,function(){
		$('.slide9 .scroll-Up').show(1000);
	});
}
function out_sMoblieSlide9(){
	$('.slide9 .J_bg,.slide9 .scroll-Up').hide();
}

// sMoblieSlide10 进入 退出
function enter_sMoblieSlide10(){
	$('.slide10 .J_bg').fadeIn(500,function(){
		$('.slide10 .logo-album-menu').show().animo( { animation: 'zoomInDown', duration: 0.5},function() {
			$('.slide10 .box-menu-btn li:nth-child(5)').show().animo( { animation: 'zoomInLeft', duration: 0.5},function() {
			$('.slide10 .box-menu-btn li:nth-child(4)').show().animo( { animation: 'zoomInRight', duration: 0.5},function() {
			$('.slide10 .box-menu-btn li:nth-child(3)').show().animo( { animation: 'zoomInLeft', duration: 0.5},function() {
			$('.slide10 .box-menu-btn li:nth-child(2)').show().animo( { animation: 'zoomInRight', duration: 0.5},function() {
			$('.slide10 .box-menu-btn li:nth-child(1)').show().animo( { animation: 'zoomInLeft', duration: 0.5});
			});
			});
			});
			});
		});
	});
}
function out_sMoblieSlide10(){
	$('.slide10 .J_bg,.slide10 .scroll-Up').hide();
	$('.slide10 .logo-album-menu').hide();
	$('.slide10 .box-menu-btn li').hide();
}







//滚屏效果
var s1 = new Swiper('.a1', {
    direction: 'vertical',
	// hashnav:true,
	onSlideChangeStart: function(e){
		var hasSlide0= $('.slide0').hasClass('swiper-slide-active');
		var hasSlide1= $('.slide1').hasClass('swiper-slide-active');
		var hasSlide2= $('.slide2').hasClass('swiper-slide-active');
		var hasSlide3= $('.slide3').hasClass('swiper-slide-active');
		var hasSlide4= $('.slide4').hasClass('swiper-slide-active');
		var hasSlide5= $('.slide5').hasClass('swiper-slide-active');
		var hasSlide6= $('.slide6').hasClass('swiper-slide-active');
		var hasSlide7= $('.slide7').hasClass('swiper-slide-active');
		var hasSlide8= $('.slide8').hasClass('swiper-slide-active');
		var hasSlide9= $('.slide9').hasClass('swiper-slide-active');
		var hasSlide10= $('.slide10').hasClass('swiper-slide-active');
		if(hasSlide0){
			enter_sMoblieSlide0();
			out_sMoblieSlide1()
		}
		if(hasSlide1){
			out_sMoblieSlide0()
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
			out_sMoblieSlide10()
		} 
		else if(hasSlide10){
			out_sMoblieSlide9()
			enter_sMoblieSlide10();
		}  
	}

});

//音乐
function musicInit(e){
	var myAudio=document.createElement("audio"),
	audioHtml= '<div id=audioControl class=play></div>';
	myAudio.id="music",
	myAudio.src="song/2.mp3",
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

// 节目链接 地址
var _mediaListLink = new Array();
_mediaListLink[0]= 'http://www.happy107.com/play/play_wcbz.aspx?vid=1473';
_mediaListLink[1]= 'http://www.happy107.com/play/play_wcbz.aspx?vid=1315';
_mediaListLink[2]= 'http://www.happy107.com/play/play_wcbz.aspx?vid=1265';
_mediaListLink[3]= 'http://www.happy107.com/play/play_wcbz.aspx?vid=1425';
_mediaListLink[4]= 'http://www.happy107.com/play/play_wcbz.aspx?vid=1267';
_mediaListLink[5]= 'album-1.html';
// 节目链接 按钮
$('.swiper-container').each(function(){
	$('.sbtnLink').on('touchstart',function(e) {
		var sLink = $(this).data('link-id');
		window.location.href= _mediaListLink[sLink];
	});
})


// 关闭层
$('#close').on('touchstart',function(e) {
	$(this).parent().removeClass('md-show');
});
var _doc = new Array();
_doc[0]='<div class="sVertical startWork"><section class="swiper-wrapper"><article class="swiper-slide cont infoMobile"><h1 class="tname">大显神通之《跑神计划》</h1><h1>首创</h1><div class="text"><p>突破广播运作极限，每天视频直播，手机全程观看，无颜值，不广播。</p></div><h1>路线</h1><div class="text"><p>户外、室内、写字楼、综合体…</p><p>Keep running everywhere!</p><p>黄金路线缔造黄金价值。</p></div><h1>跑神团</h1><div class="text"><p>明星、听众、品牌，颜值当道，</p><p>柳岩、开心麻花、阿里大咖…</p><p>不来你就out了。</p></div><h1>大吉利是</h1><div class="text"><p>支付宝、微信、卡券、</p><p>千品牌万电商线下闭合百人利是群，</p><p>派发你的影响力。</p></div><h1>起来HIGH</h1><div class="text"><p>别开生面的任务式夜跑，</p><p>PK、KO、对战、互撕，</p><p>我们不止100种方式让你high起来。</p><p>我们城会玩！</p></div><h1>超能合伙人</h1><ul class="partner"><li>阿里巴巴</li><li>蚂蚁金服</li><li>支付宝</li><li>杭州国际马拉松组委会</li><li>西溪印象城 古墩印象城</li><li>衣之家</li><li>外婆家</li><li>新远国际影城</li><li>唯瑜伽健身会馆</li><li>世纪星滑冰场</li><li>box27 运河上街</li><li>樟宜机场</li><li>印尼旅游局</li><li>携程旅游网</li><li>融师傅</li><li>森山</li><li>优谷大地</li><li>云曼温泉</li><li>合景天峻</li><li>未来科技城</li><li>悦麒美寓</li><li>嘉润公馆</li><li>理想国际·西溪金座</li></ul><p>……</p></article> </section><div class="sVertical-scrollbar"></div><div class="stip-text">↑ 上下滑动，查看介绍 ↓</div></div>';
_doc[1]='<div class="sVertical startWork"><section class="swiper-wrapper"><article class="swiper-slide cont infoMobile"><h1 class="tname">大显神通之《车神计划》</h1><h1>联姻</h1><div class="text"><p>以uber为代表的出行APP成为节目的“新媒体”伙伴。在广播史上第一次实现参与电台活动的“线下”预约，不仅在“网上”还是在“手上”。</p></div><h1>体验</h1><div class="text"><p>“车”是载体，形成一个移动直播间，而以奔驰为代表的车企们正是“直播间”的打造者，给参与者带来奢华行程和超爽体验，座驾诸多特性淋漓体现。</p></div><h1>红利</h1><div class="text"><p>车厢就是奖品池，约车成功，奖品拿到手软，品牌进车，红利派到极致。</p></div><h1>公益</h1><div class="text"><p>以“为小候鸟送清凉”为代表的公益活动，车神永不停歇，因为我们是私家车群体爱心领跑者。</p></div></article> </section><div class="sVertical-scrollbar"></div><div class="stip-text">↑ 上下滑动，查看介绍 ↓</div></div>';
_doc[2]='<div class="sVertical startWork"><section class="swiper-wrapper"><article class="swiper-slide cont infoMobile"><h1 class="tname">大显神通之《吃神计划》</h1><h1>食材</h1><div class="text"><p>我们扫荡吃货宝地</p><p>拥有“鹤川”、“iLike”、“烤拉”…</p><p>风格各异的“食材”，</p><p>搅动全浙江听众味蕾的饕餮盛宴。</p></div><h1>调料</h1><div class="text"><p>我们加入视频直播平台，</p><p>这一秘制调料，光听怎么够，</p><p>看看更有味。</p></div><h1>大厨</h1><div class="text"><p>蒸煮煎炸炒，掌勺的大厨还得是</p><p>浙江广播集团6大名嘴之阿亮</p><p>以及一众长腿大眼女徒弟。</p></div><h1>加火</h1><div class="text"><p>外婆家掌门人吴国平、香港食神戴龙、台湾厨界名嘴柯俊年…</p><p>吃货铁粉大拿，统统来加火。</p></div><h1>开席</h1><div class="text"><p>各类品牌，和吃有关，齐齐上桌。</p><p>再蘸上微信互动群这一“蘸料”，</p><p>百分百抨击你的味蕾。</p><p>开吃！</p></div></article> </section><div class="sVertical-scrollbar"></div><div class="stip-text">↑ 上下滑动，查看介绍 ↓</div></div>';
_doc[3]='<div class="sVertical startWork"><section class="swiper-wrapper"><article class="swiper-slide cont infoMobile"><h1 class="tname">大显神通之《游神计划》</h1><h1>便宜有好货</h1><div class="text"><p>“便宜没好货”？不可能<br>每件产品，李SIR精挑细选，<br>小夫妻？宝爸宝妈？全家度周末？<br>便宜有好货！</p></div><h1>手快很重要</h1><div class="text"><p>每周产品都很火爆，所以手快很重要！<br>“李SIR秒杀团”抢单攻略：<br>周末起床先听7:00-10:00《快乐旅行家》，<br>耳朵接收通关密码，拇指微信直接抢单。<br>说走就走，驾车出发！</p></div></article> </section><div class="sVertical-scrollbar"></div><div class="stip-text">↑ 上下滑动，查看介绍 ↓</div></div>';
_doc[4]='<div class="sVertical startWork"><section class="swiper-wrapper"><article class="swiper-slide cont infoMobile"><h1 class="tname">大显神通之《财神计划》</h1><h1>全智能</h1><div class="text"><p>互联网＋理财APP，你理我，财理你。</p></div><h1>大转盘</h1><div class="text"><p>财神计划转盘，时时喜从天降。</p></div><h1>财神到</h1><div class="text"><p>西湖、城西银泰、吴山广场、肯德基、祐驿站…<br>哪儿人多我们去哪儿，财气祝福定时不定点</p></div></article> </section><div class="sVertical-scrollbar"></div><div class="stip-text">↑ 上下滑动，查看介绍 ↓</div></div>';
_doc[5]='<div class="sVertical startWork"><section class="swiper-wrapper"><article class="swiper-slide cont infoMobile"><h1 class="tname">《跑神计划》·心花路放</h1><h1>何时跑</h1><div class="text"><p>工作日晚上，还有周六、周天，反正没得休！</p></div><h1>去哪跑</h1><div class="text"><p>可以是景区，CBD、Shopping Mall、写字楼、楼盘…</p></div><h1>怎么跑</h1><div class="text"><p>夜跑、彩跑、亲子跑、情侣跑、理财跑…怎么好玩怎么跑。</p></div><h1>至尊跑</h1><div class="text"><p>杭州国际马拉松，唯一合作电台节目，跑神团纵横杭马！</p></div><p>交友相亲谈生意，理财亲子看房子……</p><p>跑步的时间都可以解决，并且我们不收中介费，</p><p>我们不止跑步，你懂的。</p></article> </section><div class="sVertical-scrollbar"></div><div class="stip-text">↑ 上下滑动，查看介绍 ↓</div></div>';
_doc[6]='<div class="sVertical startWork"><section class="swiper-wrapper"><article class="swiper-slide cont infoMobile"><h1 class="tname">广播与手机相遇，收获惊喜意外</h1><div class="text"><p>私家车107官方微信“私家车第一广播”，依托广播而生；</p><p>突破广播线性约束、地域约束和市场约束；</p><p>一式一份，每天三次发行，受众百万微型电子杂志；</p><p>自信而立、自主而为、突围而生、媒体融合；</p><p>我们不是在路上，而是在领跑的路上。</p></div><ul class="madia-time"><li>服务、体验、互动、活动……</li><li>随时随地，没完没了。</li><li>107+，无限精彩！</li></ul><h1>服务用户，打造超级平台</h1><div class="text"><p>私家车107官方微信“私家车第一广播”，依托数量庞大粉丝群，融合广播宣传、新媒体模式及各类社会资源，为客户的营销打造超级平台。</p><p>囊括健康、亲子、职场、社会热点、历史文化……</p><p>用户最感兴趣的内容应有尽有。</p></div><h1>极致体验，创新永不止步</h1><div class="text"><p>私家车107官方微信“私家车第一广播”，</p><p>为追求极致，永不停步，</p><p>摇奖、游戏、互动……各类用户体验层出不穷。</p><p>天天有主题周周有策划，用户时时惦记，念念不忘。</p></div></article></section><div class="sVertical-scrollbar"></div><div class="stip-text">↑ 上下滑动，查看介绍 ↓</div></div>';
_doc[7]='<div class="swiper-container mediaInfo s3"><div class="swiper-wrapper"><section class="swiper-slide"><div class="info-text"><h2>《家有萌宠》</h2><article class="cont"><img src="img/p1/case-1.png" alt="《家有萌宠》"><br>107新媒体王牌互动栏目，欢乐秀逗的萌宠拉票，萌动全城。第一季线上点击率近200万人次，第二季线上点击率突破了500万人次，宠气爆棚。</article></div></section><section class="swiper-slide"><div class="info-text"><h2>《金币乾坤袋》</h2><article class="cont"><img src="img/p1/case-2.png" alt="《金币乾坤袋》"><br>“私家车第一广播”与中信银行合作推出“金币乾坤袋”微信游戏。参与人数近万，活动点击阅读量超过300万次。带来了大量到店客户。</article></div></section><section class="swiper-slide"><div class="info-text"><h2>《点亮东京塔》</h2><article class="cont"><img src="img/p1/case-3.png" alt="《点亮东京塔》"><br>2014年12月推出的《点亮东京塔》，是一次为凯撒旅游量身打造的微信互动活动。活动以许愿为参与点，以境外游为亮点，点击阅读量超过200万人次。</article></div></section><section class="swiper-slide"><div class="info-text"><h2>《宝贝梦想秀》</h2><article class="cont"><img src="img/p1/case-4.png" alt="《宝贝梦想秀》"><br>第一季万多家庭组队参与，总点击量近800万。第二季“宝贝去哪了“、第三季”善财童子压岁秀”、”暑假有约！晒亲子照，赢旅游大奖”更是连创新高。</article></div></section><section class="swiper-slide"><div class="info-text"><h2>《忍者挑战赛》</h2><article class="cont"><img src="img/p1/case-5.png" alt="《忍者挑战赛》"><br>2015年，“私家车第一广播”微信公众平台与浙江电信深度合作推出的微信游戏。将电信同步推广的“双百兆”活动融入其中。活动在微信平台刊出后，点击阅读量近千万次，参加总人数达到15000人。</article></div></section></div><div class="stip-text">← 左右滑动，查看案例介绍 →</div></div>';
_doc[8]='<div class="sVertical startWork" style="background-color:none;border-radius:0;"><section class="swiper-wrapper"><article class="swiper-slide infoMobile"><img src="img/p1/phb-1.png" alt="民生新媒体" width="100%"> </section><div class="sVertical-scrollbar"></div></div>';
_doc[9]='<div class="sVertical startWork" style="background-color:none;border-radius:0;"><section class="swiper-wrapper"><article class="swiper-slide infoMobile"><img src="img/p1/phb-2.png" alt="民生新媒体" width="100%"></section><div class="sVertical-scrollbar"></div></div>'

function sPopCont(){
	$('#popLay').addClass('md-show'); 
	var _sVertical = new Swiper('.sVertical', {
	    direction: 'vertical', 
	    slidesPerView: 'auto',
	    freeMode: true,
	    scrollbar: '.sVertical-scrollbar',
	});	
}
$('.swiper-container').each(function(){
	$('.sPopOpen').on('touchstart',function(e) {
		var sInfo = $(this).data('info-id');
		$('#popCont').empty().append(_doc[sInfo]);
		sPopCont()
	});
})

$('.sPopOpen1').on('touchstart',function(e) {
	var sCase = $(this).data('case-id');
	$('#popCont').empty().append(_doc[sCase]);
	$('#popLay').addClass('md-show'); 
	var s3 = new Swiper('.s3', {
	    direction: 'horizontal', 
		loop:true, 
	});
});


var _pChart = new Swiper('.pChart', {
	direction: 'horizontal',
	loop:true, 
});	


// 关闭层
$('#closePic').on('touchstart',function(e) {
	$(this).parent().removeClass('md-show');
});
$('.swiper-slide').each(function(){
	$('.sPopOpenPic').on('touchstart',function(e) {
		var sPic = $(this).data('pic-id');
		$('#popPic').empty().append(_doc[sPic]);
		$('#popLayPic').addClass('md-show'); 
		var _sVertical = new Swiper('.sVertical', {
		    direction: 'vertical', 
		    slidesPerView: 'auto',
		    freeMode: true,
		    scrollbar: '.sVertical-scrollbar',
		});	
	});
});














