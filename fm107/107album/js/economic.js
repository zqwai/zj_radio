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
the_images.push( 'img/p5/bg/bg-1.jpg');
the_images.push( 'img/p5/bg/bg-2.jpg');
the_images.push( 'img/p5/bg/bg-3.jpg');
the_images.push( 'img/p5/bg/bg-4.jpg');
the_images.push( 'img/p5/bg/bg-5.jpg');
the_images.push( 'img/p5/bg/bg-6.jpg');
the_images.push( 'img/p5/bg/bg-7.jpg');
the_images.push( 'img/p5/bg/bg-8.jpg');
the_images.push( 'img/p5/bg/bg-9.jpg');
the_images.push( 'img/p5/bg/bg-10.jpg');
the_images.push( 'img/p5/bg/bg-11.jpg');
the_images.push( 'img/p5/bg/bg-12.jpg');

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
			enter_sMoblieSlide1()
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
		$('.slide1 .main-cont li:nth-child(6)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
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
		$('.slide2 .main-economic .nCont li:nth-child(1)').show().animo( { animation: 'fadeInRight', duration:  0.3},function() {
		$('.slide2 .main-economic .nCont li:nth-child(2)').show().animo( { animation: 'fadeInRight', duration:  0.3},function() {
		$('.slide2 .main-economic .nCont li:nth-child(3)').show().animo( { animation: 'fadeInRight', duration:  0.3},function() {
			$('.slide2 .main-economic .mainTilte li:nth-child(1)').show().animo( { animation: 'bounceIn', duration:  0.3},function() {
			$('.slide2 .main-economic .mainTilte li:nth-child(2)').show().animo( { animation: 'bounceIn', duration:  0.3},function() {
				$('.slide2 .head-triangle').fadeIn();
				$('.slide2 .main-economic .nTitle li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
				$('.slide2 .main-economic .nTitle li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide2 .main-economic .nExplan li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide2 .main-economic .nExplan li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide2 .main-economic .nExplan li:nth-child(3)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide2 .main-economic .nExplan li:nth-child(4)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {

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
}
function out_sMoblieSlide2(){
	$('.slide2 .J_bg').hide();
	$('.slide2 .scroll-Up').hide();
	$('.slide2 .main-economic .nCont li').hide();
	$('.slide2 .main-economic .mainTilte li').hide();
	$('.slide2 .main-economic .nExplan li').hide();
	$('.slide2 .main-economic .nTitle li').hide();
	$('.slide2 .head-triangle').hide();
}
// sMoblieSlide3 进入 退出
function enter_sMoblieSlide3(){
	$('.slide3 .J_bg').fadeIn(500,function(){
		$('.slide3 .main-case .nCont li:nth-child(1)').show().animo( { animation: 'fadeInRight', duration:  0.3},function() {
		$('.slide3 .main-case .nCont li:nth-child(2)').show().animo( { animation: 'fadeInRight', duration:  0.3},function() {
			$('.slide3 .main-case h1').show().animo( { animation: 'bounceIn', duration:  0.3},function() {
				$('.slide3 .main-case .nExplan li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
				$('.slide3 .main-case .nExplan li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide3 .main-case .nExplan li .btn-more:nth-child(1)').show().animo( { animation: 'rubberBand', duration:  0.5},function() {
					$('.slide3 .main-case .nExplan li .btn-more:nth-child(2)').show().animo( { animation: 'rubberBand', duration:  0.5},function() {
						$('.slide3 .scroll-Up').show(1000);
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
	$('.slide3 .scroll-Up').hide();
	$('.slide3 .main-case h1').hide();
	$('.slide3 .main-case .nCont li').hide();
	$('.slide3 .main-case .nExplan li').hide();
	$('.slide3 .main-case .nExplan li .btn-more').hide();
	$('.slide3 .main-case .nExplan li.box-btn').show();

}
// sMoblieSlide4 进入 退出
function enter_sMoblieSlide4(){
	$('.slide4 .J_bg').fadeIn(500,function(){
		$('.slide4 .main-economic .nCont li:nth-child(1)').show().animo( { animation: 'fadeInRight', duration:  0.3},function() {
		$('.slide4 .main-economic .nCont li:nth-child(2)').show().animo( { animation: 'fadeInRight', duration:  0.3},function() {
			$('.slide4 .main-economic .mainTilte li:nth-child(1)').show().animo( { animation: 'bounceIn', duration:  0.3},function() {
			$('.slide4 .main-economic .mainTilte li:nth-child(2)').show().animo( { animation: 'bounceIn', duration:  0.3},function() {
			$('.slide4 .head-triangle').fadeIn();
				$('.slide4 .main-economic .nTitle li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
				$('.slide4 .main-economic .nTitle li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide4 .main-economic .nExplan li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide4 .main-economic .nExplan li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide4 .main-economic .nExplan li:nth-child(3)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide4 .main-economic .nExplan li:nth-child(4)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
						$('.slide4 .scroll-Up').show(1000);
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
function out_sMoblieSlide4(){
	$('.slide4 .J_bg').hide();
	$('.slide4 .scroll-Up').hide();
	$('.slide4 .main-economic .nCont li').hide();
	$('.slide4 .main-economic .mainTilte li').hide();
	$('.slide4 .main-economic .nExplan li').hide();
	$('.slide4 .main-economic .nTitle li').hide();
	$('.slide4 .head-triangle').hide();
}
// sMoblieSlide5 进入 退出
function enter_sMoblieSlide5(){
	$('.slide5 .J_bg').fadeIn(500,function(){
		$('.slide5 .main-case .nCont li:nth-child(1)').show().animo( { animation: 'fadeInRight', duration:  0.3},function() {
		$('.slide5 .main-case .nCont li:nth-child(2)').show().animo( { animation: 'fadeInRight', duration:  0.3},function() {
			$('.slide5 .main-case h1').show().animo( { animation: 'bounceIn', duration:  0.3},function() {
				$('.slide5 .main-case .nExplan li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
				$('.slide5 .main-case .nExplan li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide5 .main-case .nExplan li .btn-more:nth-child(1)').show().animo( { animation: 'rubberBand', duration:  0.5},function() {
					$('.slide5 .main-case .nExplan li .btn-more:nth-child(2)').show().animo( { animation: 'rubberBand', duration:  0.5},function() {
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
	$('.slide5 .scroll-Up').hide();
	$('.slide5 .main-case h1').hide();
	$('.slide5 .main-case .nCont li').hide();
	$('.slide5 .main-case .nExplan li').hide();
	$('.slide5 .main-case .nExplan li .btn-more').hide();
	$('.slide5 .main-case .nExplan li.box-btn').show();
}

// sMoblieSlide6 进入 退出
function enter_sMoblieSlide6(){
	$('.slide6 .J_bg').fadeIn(500,function(){
		$('.slide6 .main-economic .nCont li:nth-child(1)').show().animo( { animation: 'fadeInRight', duration:  0.3},function() {
		$('.slide6 .main-economic .nCont li:nth-child(2)').show().animo( { animation: 'fadeInRight', duration:  0.3},function() {
			$('.slide6 .main-economic .mainTilte li:nth-child(1)').show().animo( { animation: 'bounceIn', duration:  0.3},function() {
			$('.slide6 .main-economic .mainTilte li:nth-child(2)').show().animo( { animation: 'bounceIn', duration:  0.3},function() {
			$('.slide6 .main-economic .mainTilte li:nth-child(3)').show().animo( { animation: 'fadeInUp', duration:  0.3},function() {
			$('.slide6 .head-triangle').fadeIn();
				$('.slide6 .main-economic .nTitle li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
				$('.slide6 .main-economic .nTitle li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide6 .main-economic .nExplan li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide6 .main-economic .nExplan li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide6 .main-economic .nExplan li:nth-child(3)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide6 .main-economic .nExplan li:nth-child(4)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide6 .main-economic .nExplan li:nth-child(5)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
						$('.slide6 .main-economic .nExplan li .btn-more').show().animo( { animation: 'rubberBand', duration:  0.5});
						$('.slide6 .scroll-Up').show(1000);
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
function out_sMoblieSlide6(){
	$('.slide6 .J_bg').hide();
	$('.slide6 .scroll-Up').hide();
	$('.slide6 .main-economic .nCont li').hide();
	$('.slide6 .main-economic .mainTilte li').hide();
	$('.slide6 .main-economic .nExplan li').hide();
	$('.slide6 .main-economic .nTitle li').hide();
	$('.slide6 .head-triangle').hide();
	$('.slide6 .main-economic .nExplan li .btn-more').hide();
	$('.slide6 .main-economic .nExplan li.box-btn').show();
}

// sMoblieSlide7 进入 退出
function enter_sMoblieSlide7(){
	$('.slide7 .J_bg').fadeIn(500,function(){
		$('.slide7 .main-economic .nCont li:nth-child(1)').show().animo( { animation: 'fadeInRight', duration:  0.3},function() {
		$('.slide7 .main-economic .nCont li:nth-child(2)').show().animo( { animation: 'fadeInRight', duration:  0.3},function() {
			$('.slide7 .main-economic .mainTilte li:nth-child(1)').show().animo( { animation: 'bounceIn', duration:  0.3},function() {
			$('.slide7 .main-economic .mainTilte li:nth-child(2)').show().animo( { animation: 'bounceIn', duration:  0.3},function() {
			$('.slide7 .head-triangle').fadeIn();
				$('.slide7 .main-economic .nTitle li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
				$('.slide7 .main-economic .nTitle li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide7 .main-economic .nExplan li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide7 .main-economic .nExplan li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide7 .main-economic .nExplan li:nth-child(3)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide7 .main-economic .nExplan li:nth-child(4)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide7 .main-economic .nExplan li:nth-child(5)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
						$('.slide7 .scroll-Up').show(1000);
						$('.slide7 .main-economic .nExplan li .btn-more').show().animo( { animation: 'rubberBand', duration:  0.5});
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
function out_sMoblieSlide7(){
	$('.slide7 .J_bg').hide();
	$('.slide7 .scroll-Up').hide();
	$('.slide7 .main-economic .nCont li').hide();
	$('.slide7 .main-economic .mainTilte li').hide();
	$('.slide7 .main-economic .nExplan li').hide();
	$('.slide7 .main-economic .nTitle li').hide();
	$('.slide7 .head-triangle').hide();
	$('.slide7 .main-economic .nExplan li .btn-more').hide();
	$('.slide7 .main-economic .nExplan li.box-btn').show();
}

// sMoblieSlide8 进入 退出
function enter_sMoblieSlide8(){
	$('.slide8 .J_bg').fadeIn(500,function(){
		$('.slide8 .main-economic .nCont li:nth-child(1)').show().animo( { animation: 'fadeInRight', duration:  0.3},function() {
		$('.slide8 .main-economic .nCont li:nth-child(2)').show().animo( { animation: 'fadeInRight', duration:  0.3},function() {
			$('.slide8 .main-economic .mainTilte li:nth-child(1)').show().animo( { animation: 'bounceIn', duration:  0.3},function() {
			$('.slide8 .main-economic .mainTilte li:nth-child(2)').show().animo( { animation: 'bounceIn', duration:  0.3},function() {
			$('.slide8 .head-triangle').fadeIn();
				$('.slide8 .main-economic .nTitle li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
				$('.slide8 .main-economic .nTitle li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide8 .main-economic .nExplan li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide8 .main-economic .nExplan li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide8 .main-economic .nExplan li:nth-child(3)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide8 .main-economic .nExplan li:nth-child(4)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide8 .main-economic .nExplan li:nth-child(5)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide8 .main-economic .nExplan li:nth-child(6)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
						$('.slide8 .scroll-Up').show(1000);
						$('.slide8 .main-economic .nExplan li .btn-more').show().animo( { animation: 'rubberBand', duration:  0.5});
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
function out_sMoblieSlide8(){
	$('.slide8 .J_bg').hide();
	$('.slide8 .scroll-Up').hide();
	$('.slide8 .main-economic .nCont li').hide();
	$('.slide8 .main-economic .mainTilte li').hide();
	$('.slide8 .main-economic .nExplan li').hide();
	$('.slide8 .main-economic .nTitle li').hide();
	$('.slide8 .head-triangle').hide();
	$('.slide8 .main-economic .nExplan li .btn-more').hide();
	$('.slide8 .main-economic .nExplan li.box-btn').show();
}

// sMoblieSlide9 进入 退出
function enter_sMoblieSlide9(){
	$('.slide9 .J_bg').fadeIn(500,function(){
		$('.slide9 .main-economic .nCont li:nth-child(1)').show().animo( { animation: 'fadeInRight', duration:  0.3},function() {
		$('.slide9 .main-economic .nCont li:nth-child(2)').show().animo( { animation: 'fadeInRight', duration:  0.3},function() {
			$('.slide9 .main-economic .mainTilte li:nth-child(1)').show().animo( { animation: 'bounceIn', duration:  0.3},function() {
			$('.slide9 .main-economic .mainTilte li:nth-child(2)').show().animo( { animation: 'bounceIn', duration:  0.3},function() {
			$('.slide9 .head-triangle').fadeIn();
				$('.slide9 .main-economic .nTitle li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
				$('.slide9 .main-economic .nTitle li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide9 .main-economic .nExplan li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide9 .main-economic .nExplan li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide9 .main-economic .nExplan li:nth-child(3)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide9 .main-economic .nExplan li:nth-child(4)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide9 .main-economic .nExplan li:nth-child(5)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide9 .main-economic .nExplan li:nth-child(6)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
						$('.slide9 .scroll-Up').show(1000);
						$('.slide9 .main-economic .nExplan li .btn-more').show().animo( { animation: 'rubberBand', duration:  0.5});
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
function out_sMoblieSlide9(){
	$('.slide9 .J_bg').hide();
	$('.slide9 .scroll-Up').hide();
	$('.slide9 .main-economic .nCont li').hide();
	$('.slide9 .main-economic .mainTilte li').hide();
	$('.slide9 .main-economic .nExplan li').hide();
	$('.slide9 .main-economic .nTitle li').hide();
	$('.slide9 .head-triangle').hide();
	$('.slide9 .main-economic .nExplan li .btn-more').hide();
	$('.slide9 .main-economic .nExplan li.box-btn').show();
}

// sMoblieSlide10 进入 退出
function enter_sMoblieSlide10(){
	$('.slide10 .J_bg').fadeIn(500,function(){
		$('.slide10 .main-economic .nCont li:nth-child(1)').show().animo( { animation: 'fadeInRight', duration:  0.3},function() {
		$('.slide10 .main-economic .nCont li:nth-child(2)').show().animo( { animation: 'fadeInRight', duration:  0.3},function() {
			$('.slide10 .main-economic .mainTilte li:nth-child(1)').show().animo( { animation: 'bounceIn', duration:  0.3},function() {
			$('.slide10 .main-economic .mainTilte li:nth-child(2)').show().animo( { animation: 'bounceIn', duration:  0.3},function() {
			$('.slide10 .head-triangle').fadeIn();
				$('.slide10 .main-economic .nTitle li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
				$('.slide10 .main-economic .nTitle li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide10 .main-economic .nExplan li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide10 .main-economic .nExplan li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide10 .main-economic .nExplan li:nth-child(3)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					// $('.slide10 .main-economic .nExplan li:nth-child(4)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					// $('.slide10 .main-economic .nExplan li:nth-child(5)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					// $('.slide10 .main-economic .nExplan li:nth-child(6)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
						$('.slide10 .scroll-Up').show(1000);
						$('.slide10 .main-economic .nExplan li .btn-more').show().animo( { animation: 'rubberBand', duration:  0.5});
					// });
					// });
					// });
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
function out_sMoblieSlide10(){
	$('.slide10 .J_bg').hide();
	$('.slide10 .scroll-Up').hide();
	$('.slide10 .main-economic .nCont li').hide();
	$('.slide10 .main-economic .mainTilte li').hide();
	$('.slide10 .main-economic .nExplan li').hide();
	$('.slide10 .main-economic .nTitle li').hide();
	$('.slide10 .head-triangle').hide();
	$('.slide10 .main-economic .nExplan li .btn-more').hide();
	$('.slide10 .main-economic .nExplan li.box-btn').show();
}

// sMoblieSlide11 进入 退出
function enter_sMoblieSlide11(){
	$('.slide11 .J_bg').fadeIn(500,function(){
		$('.slide11 .main-economic .nCont li:nth-child(1)').show().animo( { animation: 'fadeInRight', duration:  0.3},function() {
		$('.slide11 .main-economic .nCont li:nth-child(2)').show().animo( { animation: 'fadeInRight', duration:  0.3},function() {
			$('.slide11 .main-economic .mainTilte li:nth-child(1)').show().animo( { animation: 'bounceIn', duration:  0.3},function() {
			$('.slide11 .main-economic .mainTilte li:nth-child(2)').show().animo( { animation: 'bounceIn', duration:  0.3},function() {
			$('.slide11 .head-triangle').fadeIn();
				$('.slide11 .main-economic .nTitle li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
				$('.slide11 .main-economic .nTitle li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide11 .main-economic .nExplan li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide11 .main-economic .nExplan li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide11 .main-economic .nExplan li:nth-child(3)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide11 .main-economic .nExplan li:nth-child(4)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					// $('.slide11 .main-economic .nExplan li:nth-child(5)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					// $('.slide11 .main-economic .nExplan li:nth-child(6)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
						$('.slide11 .scroll-Up').show(1000);
						$('.slide11 .main-economic .nExplan li .btn-more').show().animo( { animation: 'rubberBand', duration:  0.5});
					// });
					// });
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
function out_sMoblieSlide11(){
	$('.slide11 .J_bg').hide();
	$('.slide11 .scroll-Up').hide();
	$('.slide11 .main-economic .nCont li').hide();
	$('.slide11 .main-economic .mainTilte li').hide();
	$('.slide11 .main-economic .nExplan li').hide();
	$('.slide11 .main-economic .nTitle li').hide();
	$('.slide11 .head-triangle').hide();
	$('.slide11 .main-economic .nExplan li .btn-more').hide();
	$('.slide11 .main-economic .nExplan li.box-btn').show();
}

// sMoblieSlide12 进入 退出
function enter_sMoblieSlide12(){
	$('.slide12 .J_bg').fadeIn(500,function(){
		$('.slide12 .main-economic .nCont li:nth-child(1)').show().animo( { animation: 'fadeInRight', duration:  0.3},function() {
		$('.slide12 .main-economic .nCont li:nth-child(2)').show().animo( { animation: 'fadeInRight', duration:  0.3},function() {
			$('.slide12 .main-economic .mainTilte li:nth-child(1)').show().animo( { animation: 'bounceIn', duration:  0.3},function() {
			$('.slide12 .main-economic .mainTilte li:nth-child(2)').show().animo( { animation: 'bounceIn', duration:  0.3},function() {
			$('.slide12 .head-triangle').fadeIn();
				$('.slide12 .main-economic .nTitle li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
				$('.slide12 .main-economic .nTitle li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide12 .main-economic .nExplan li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide12 .main-economic .nExplan li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide12 .main-economic .nExplan li:nth-child(3)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide12 .main-economic .nExplan li:nth-child(4)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide12 .main-economic .nExplan li:nth-child(5)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					// $('.slide12 .main-economic .nExplan li:nth-child(6)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
						$('.slide12 .scroll-Up').show(1000);
						$('.slide12 .main-economic .nExplan li .btn-more').show().animo( { animation: 'rubberBand', duration:  0.5});
					// });
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
function out_sMoblieSlide12(){
	$('.slide12 .J_bg').hide();
	$('.slide12 .scroll-Up').hide();
	$('.slide12 .main-economic .nCont li').hide();
	$('.slide12 .main-economic .mainTilte li').hide();
	$('.slide12 .main-economic .nExplan li').hide();
	$('.slide12 .main-economic .nTitle li').hide();
	$('.slide12 .head-triangle').hide();
	$('.slide12 .main-economic .nExplan li .btn-more').hide();
	$('.slide12 .main-economic .nExplan li.box-btn').show();
}

// sMoblieSlide13 进入 退出
function enter_sMoblieSlide13(){
	$('.slide13 .J_bg').fadeIn(500,function(){
		$('.slide13 .main-economic .nCont li:nth-child(1)').show().animo( { animation: 'fadeInRight', duration:  0.3},function() {
		$('.slide13 .main-economic .nCont li:nth-child(2)').show().animo( { animation: 'fadeInRight', duration:  0.3},function() {
			$('.slide13 .main-economic .mainTilte li:nth-child(1)').show().animo( { animation: 'bounceIn', duration:  0.3},function() {
			$('.slide13 .main-economic .mainTilte li:nth-child(2)').show().animo( { animation: 'bounceIn', duration:  0.3},function() {
			$('.slide13 .head-triangle').fadeIn();
				$('.slide13 .main-economic .nTitle li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
				$('.slide13 .main-economic .nTitle li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide13 .main-economic .nExplan li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide13 .main-economic .nExplan li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide13 .main-economic .nExplan li:nth-child(3)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					$('.slide13 .main-economic .nExplan li:nth-child(4)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					// $('.slide13 .main-economic .nExplan li:nth-child(5)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
					// $('.slide13 .main-economic .nExplan li:nth-child(6)').show().animo( { animation: 'fadeInUp', duration:  0.5},function() {
						$('.slide13 .scroll-Up').show(1000);
						$('.slide13 .main-economic .nExplan li .btn-more').show().animo( { animation: 'rubberBand', duration:  0.5});
					// });
					// });
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
function out_sMoblieSlide13(){
	$('.slide13 .J_bg').hide();
	$('.slide13 .scroll-Up').hide();
	$('.slide13 .main-economic .nCont li').hide();
	$('.slide13 .main-economic .mainTilte li').hide();
	$('.slide13 .main-economic .nExplan li').hide();
	$('.slide13 .main-economic .nTitle li').hide();
	$('.slide13 .head-triangle').hide();
	$('.slide13 .main-economic .nExplan li .btn-more').hide();
	$('.slide13 .main-economic .nExplan li.box-btn').show();
}
// sMoblieSlide14 进入 退出
function enter_sMoblieSlide14(){
	$('.slide14 .J_bg').fadeIn(500,function(){
		$('.slide14 .logo-album-menu').show().animo( { animation: 'zoomInDown', duration: 0.5},function() {
			$('.slide14 .box-menu-btn li:nth-child(5)').show().animo( { animation: 'zoomInLeft', duration: 0.5},function() {
			$('.slide14 .box-menu-btn li:nth-child(4)').show().animo( { animation: 'zoomInRight', duration: 0.5},function() {
			$('.slide14 .box-menu-btn li:nth-child(3)').show().animo( { animation: 'zoomInLeft', duration: 0.5},function() {
			$('.slide14 .box-menu-btn li:nth-child(2)').show().animo( { animation: 'zoomInRight', duration: 0.5},function() {
			$('.slide14 .box-menu-btn li:nth-child(1)').show().animo( { animation: 'zoomInLeft', duration: 0.5});
			});
			});
			});
			});
		});
	});
}
function out_sMoblieSlide14(){
	$('.slide14 .J_bg,.slide14 .scroll-Up').hide();
	$('.slide14 .logo-album-menu').hide();
	$('.slide14 .box-menu-btn li').hide();
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
		var hasSlide10= $('.slide10').hasClass('swiper-slide-active');
		var hasSlide11= $('.slide11').hasClass('swiper-slide-active');
		var hasSlide12= $('.slide12').hasClass('swiper-slide-active');
		var hasSlide13= $('.slide13').hasClass('swiper-slide-active');
		var hasSlide14= $('.slide14').hasClass('swiper-slide-active');

		if(hasSlide1){
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
			out_sMoblieSlide11()
		}
		else if(hasSlide11){
			out_sMoblieSlide10()
			enter_sMoblieSlide11();
			out_sMoblieSlide12()
		}
		else if(hasSlide12){
			out_sMoblieSlide11()
			enter_sMoblieSlide12();
			out_sMoblieSlide13()
		}
		else if(hasSlide13){
			out_sMoblieSlide12()
			enter_sMoblieSlide13();
			out_sMoblieSlide14()
		}
		else if(hasSlide14){
			out_sMoblieSlide13()
			enter_sMoblieSlide14();
		}
	}

});



//音乐
function musicInit(e){
	var myAudio=document.createElement("audio"),
	audioHtml= '<div id=audioControl class=play></div>';
	myAudio.id="music",
	myAudio.src="http://www.happy107.com/107album/song/5.mp3",
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
_doc[0]= '<div class="sVertical startWork"><section class="swiper-wrapper"><article class="swiper-slide cont infoMobile"><h1 class="tname">《皇宫汽车音乐会》</h1><p>把车开进皇宫，豪车占领太和殿，我们举办有史以来最帝王的汽车音乐会。</p><p>太和殿广场上被豪车占领了，仅看场面就令人叹为观止！！！！！！！</p><p style="margin-top: 80px">“私家车107·城市之声，是横店影视城重要的合作伙伴，</p><p>他们充满想象力的创新能力以及一丝不苟的配合执行能力，</p><p>为我们完成了一个漂亮的皇宫汽车音乐节！</p><p>也展示了他们在浙江私家车人群中的影响力，确实是中国私家车广播领跑者！”</p><p>——浙江横店影视城有限公司董事长桑小庆先生</p></article> </section><div class="sVertical-scrollbar"></div></div>';
_doc[1]= '<div class="swiper-container infoCase s3"><div class="swiper-wrapper"><section class="swiper-slide"><div class="swiper-container sVertical sVertical-1"><div class="swiper-wrapper"><section class="swiper-slide"><h2>经典案例之</h2><h1>《微笑私家车》</h1><article class="cont"><div class="text">时间：连续做了8年~公益根本停不下来。<br>地点：需要帮助的孩子们在哪，我们在哪</div><ul class="madia-time"><li>2014年度浙江广播电视创新创优栏目</li><li>希望工程20周年接触公益伙伴</li><li>浙江省青少年发展基金会特别设计“微笑私家车专项基金”</li></ul><div class="text">每次公益行动，3分钟，只要3分钟，<br>3分钟集结百辆爱心车，募集爱心款十万！<br>爱心和能力我们都有。</div><h3>微笑私家车品牌</h3><p>“与你同行” &nbsp;&nbsp;&nbsp;“梦想书库” &nbsp;“梦想操场”<br>“一双爱笑鞋” &nbsp;“免费午餐”</p><img src="img/p5/brandlogo.png" width="100%"></article><div class="blank40"></div></section></div><div class="sVertical-scrollbar-1"></div></div></section><section class="swiper-slide"><div class="swiper-container sVertical sVertical-2"><div class="swiper-wrapper"><section class="swiper-slide"><h2>经典案例之</h2><h1>《和谐中秋·一封家书》</h1><article class="cont"><div class="text">时间：中秋月圆时<br>地点：人月团圆地</div><p>每年，一万多封家书，满载真情，汇聚西子湖畔；<br>中秋，一场家书朗读，凝结光华，传遍华人世界；<br>“家书”，饱含的不止浓浓亲情，更是中华文化的传承；<br>与时俱进的“微家书”，当代人的情感表达。</p><p>我们把中秋文化赋予时代色彩，领跑潮流。<br>和谐中秋，传递都市人的温暖情感，<br>既有平民英雄吴菊萍、吴斌家庭的感人文字，<br>也有体育名将孙杨、吴鹏的真情朗读。</p><img src="img/p5/brandlogo2.png" width="100%"></article><div class="blank40"></div></section></div><div class="sVertical-scrollbar-2"></div></div></section><section class="swiper-slide"><h2>经典案例之</h2><h1>《私家车维权大会》</h1><article class="cont"><div class="text">时间：一月一维权<br>地点：浙江各地市</div><p>在这里什么问题都不是问题，常红和他的专业团队就是王道！<br>我们团结浙江省各地市主流媒体（超有公信力！），<br>团结浙江省各地市消保委（妈妈再也不用担心您受委屈），<br>团结律师、技师、理赔师（大师有100种方式为您撑腰！），<br>所以，私家车维权，找常红！</p></article></section><section class="swiper-slide"><h2>经典案例之</h2><h1>《清凉一夏》</h1><article class="cont"><div class="text">时间：炎炎夏日<br>地点：浙江全省</div><p>烈日下，我们给车喷上清凉的画面，<br>奔赴浙江每一个高温岗位。<br>把每一分清凉产品送到那些值得被尊敬的人手中，<br>交警、环卫、停车管理…<br>也包括我们私家车的众多车主。<br>让更多人记得，在这个夏天，<br>有一份清凉，来自您的品牌。</p></article></section><section class="swiper-slide"><h2>经典案例之</h2><h1>《非常男女》</h1><article class="cont"><div class="text">时间：浪漫周末<br>地点：邂逅爱情</div><p>风车节party，暗黑电影party，放空party，<br>还有什么奇怪的约会没有体验过？<br>我们这里应有尽有，<br>没错，我们的单身男女大部分已经成功脱单。<br>爱情经济，分享价值，有你更赞。</p></article></section></div><div class="stip-text">← 左右滑动，查看案例介绍 →</div></div>';
_doc[2]= '<div class="swiper-container infoCase s3"><div class="swiper-wrapper"><section class="swiper-slide"><div class="swiper-container sVertical sVertical-1"><div class="swiper-wrapper"><section class="swiper-slide"><h2>经典案例之</h2><h1>《百场飞行计划》</h1><article class="cont"><div class="text">时间：每一个出行的日子<br>地点：每一片飞翔的天空</div><p>我们有专业领队李SIR和空姐MISS袁,<br>我们有一大票有飞行旅游的听众，<br>还有有职人员随行记录点点滴滴哦！<br>每年，我们有100场飞行计划。</p><p>首飞澳门\探秘吴哥窟\浪漫济州岛\时尚香港游\小资清迈\风情普吉岛\俄罗斯硬汉之旅\吃在兰卡威\美食探寻新加坡\日本跨年冬游\浙江人在纽约\走进美国黄石公园\加拿大古巴红叶之旅\新加坡亲子游\塞班岛美人鱼之旅\南澳自驾之旅\土耳其自驾之旅\老挝自驾之旅\66号公路自驾之旅\德国汽车工厂自驾之旅……</p></article><div class="blank40"></div></section></div><div class="sVertical-scrollbar-1"></div></div></section><section class="swiper-slide"><h2>经典案例之</h2><h1>《江南仙境游》</h1><article class="cont"><div class="text">时间：最美的季节<br>地点：浙江省仙境</div><p>带着N多自驾家庭，<br>去龙游玩！武义嗨！缙云游！仙居吃！临海乐！武义温泉……</p><p>吃、喝、玩、乐、驾！<br>就是要让人民的周末丰满起来！<br>给人民一个完美周末！<br>你仙你也来</p></article><div class="blank40"></div></section><section class="swiper-slide"><h2>经典案例之</h2><h1>《李sir秒杀团》</h1><article class="cont"><div class="text">时间：周末上午<br>地点：“城市之声出去玩”</div><p>既然是秒杀，旅游宝贝就足够震撼！<br>产品震撼、价格震撼、服务震撼…<br>你震撼你也来！</p></article></section><section class="swiper-slide"><h2>经典案例之</h2><h1>《千车万人游泰顺》</h1><article class="cont"><div class="text">时间：枫叶红了的时候<br>地点：中国廊桥之乡泰顺</div><p>乐天派车友会全省各大分会<br>杭州、宁波、绍兴、金华及义乌、温州、台州、衢州……<br>应者景从，天下第一武林大会的架势。</p></article></section><section class="swiper-slide"><h2>经典案例之</h2><h1>《横店春假60天大撒欢》</h1><article class="cont"><div class="text">时间：春暖花开时<br>地点：横店影视城</div><p>风筝节、大妈节、皇宫汽车音乐节、台湾美食节、动漫节、横店马拉松、工衣篮球赛…</p><p>4G直播连线，每周都有新玩法。</p></article></section></div><div class="stip-text">← 左右滑动，查看案例介绍 →</div></div>';
_doc[3]= '<div class="swiper-container infoCase s3"><div class="swiper-wrapper"><section class="swiper-slide"><h2>经典案例之</h2><h1>《歌王挑战赛》</h1><article class="cont"><div class="text">时间：梅逐雨中黄<br>地点：全浙江</div><p>决赛观众票被抢光了……<br>现场观众比预计多出了6倍……<br>就在楼盘现场，赞助商的品牌，<br>也成了冠军</p></article><div class="blank40"></div></section><section class="swiper-slide"><h2>经典案例之</h2><h1>《万象风尚汇》</h1><article class="cont"><div class="text">时间：万象更新时<br>地点：湖州、绍兴、义务时尚之地</div><p>高端生活方式展，精品文化交流汇，<br>一个城市中，总有那么一些人，<br>用他们的品味，指引城市的节奏。<br>汇集这些人的，因该是你！</p></article></section><section class="swiper-slide"><h2>经典案例之</h2><h1>《107悦车会》</h1><article class="cont"><div class="text">时间：一年去两次悦车会，每次都有新收获<br>地点：哪里爆棚，我们就去哪里</div><p>不只有人，有车，还有有豪豪豪豪豪车。<br>两天刷新3000多万销售额纪录，<br>我们只用数字说话。</p></article></section><section class="swiper-slide"><h2>经典案例之</h2><h1>《让快乐飞》</h1><article class="cont"><div class="text">时间：Shopping Time<br>地点：Shopping Mall——西溪印象城、古墩路印象城、西田城、运河上街……</div><p>《让快乐飞·银联嘻唰唰》<br>只为购物要刷卡的人，旅游要刷卡的人，<br>和所有银联卡为62开头的群众们。<br>你知道这些人有几多吗？你知道他们多壕吗？<br>那你还不快来？！</p></article></section></div><div class="stip-text">← 左右滑动，查看案例介绍 →</div></div>';
_doc[4]= '<div class="swiper-container infoCase s3"><div class="swiper-wrapper"><section class="swiper-slide"><h2>经典案例之</h2><h1>《浪漫达人SHOW》</h1><article class="cont"><div class="text">时间：开学季<br>地点：浙江省各大高校园</div><p>看人表白谈恋爱！<br>送冰淇淋！<br>打印情侣照片！<br>……</p><p>为了传递冰淇淋口感的甜蜜，<br>我们制造出了校园里最浪漫最甜腻的空气氛围，<br>让品牌大气甜蜜的形象深深印在了他们的脑海里~</p></article><div class="blank40"></div></section><section class="swiper-slide"><h2>经典案例之</h2><h1>《快乐童声》</h1><article class="cont"><div class="text">时间：每年儿童节前1440小时<br>地点：百所甲级幼儿园、若干家早教机构</div><p>地毯式海选，飘洒着人生第一张奖状；<br>区域复赛、全省总决赛，总有想不到的精彩；<br>寻找童声代言人，录制童声公益片。<br>《快乐童声》，3万小朋友在活蹦乱跳的舞台！</p></article></section></div><div class="stip-text">← 左右滑动，查看案例介绍 →</div></div></div></div>';
_doc[5]= '<div class="swiper-container infoCase s3"><div class="swiper-wrapper"><section class="swiper-slide"><h2>经典案例之</h2><h1>《LIVE秀》</h1><article class="cont"><div class="text">时间：庆典时刻<br>地点：家门口</div><p>草根选秀，唱出你的风采。</p></article><div class="blank40"></div></section><section class="swiper-slide"><h2>经典案例之</h2><h1>《你好青春》</h1><article class="cont"><div class="text">时间：从寒冷的冬天，到可以赤膊的夏天<br>地点：宅男宅女聚集地</div><p>永久自行车、双卡录音机、14寸黑白电视机、超级马力、俄罗斯方块、红色警戒、街霸、魂斗罗……</p><p>黑猫警长、花仙子、舒克贝塔、灌篮高手……</p><p>70、80后们，你好青春，起来嗨。</p></article></section><section class="swiper-slide"><h2>经典案例之</h2><h1>《寻找铁肺王》</h1><article class="cont"><div class="text">时间：横跨春夏两个季节<br>地点：省内百个大型社区</div><p>台下是一个一个测肺活量的，在排队！<br>台上是主持人口若悬河，滔滔不绝，<br>而路过的人已被“养肝清肺，我选森山”洗脑.</p></article></section><section class="swiper-slide"><h2>经典案例之</h2><h1>《一道邻里菜》</h1><article class="cont"><div class="text">时间：这个春天我做“煮”<br>地点：小区里</div><p>炫耀厨艺的时刻到了，名扬社区的时刻到了！<br>就在社区比赛，家门口的比赛！<br>走过路过的没吃饭的朋友们，来蹭吧！</p></article></section><section class="swiper-slide"><h2>经典案例之</h2><h1>《健康厨艺大比拼》</h1><article class="cont"><div class="text">时间：饭点儿<br>地点：专设烧饭的地儿</div><p>没有硝烟，只有炊烟的战争。</p></article></section><section class="swiper-slide"><h2>经典案例之</h2><h1>《百团大战》</h1><article class="cont"><div class="text">时间：常年不休息<br>地点：杭州好楼盘</div><p>每周一个团，每团一个盘，啥也别说，走走走！<br>我带上你，你带上钱，啥也别说，买买买！</p></article></section><section class="swiper-slide"><h2>经典案例之</h2><h1>《汽车运动会》</h1><article class="cont"><div class="text">时间：开车比拼的好日子<br>地点：能展开比拼的大空地</div><p>专业赛道，供高手停车、倒车！<br>大赛排行榜，成绩一目了然！<br>丰富奖品，冠军大奖直接抱走！<br>我们吸引众多私家车主来参与，<br>我们开创了10多项的汽车运动项目！<br>这种特别的“运动会”每年都在不断升级，不断升级！</p></article></section><section class="swiper-slide"><h2>经典案例之</h2><h1>《琅邪相亲会》</h1><article class="cont"><div class="text">时间：浪漫盛夏时<br>地点：陌上花开地</div><p>余之城琅邪交友大会，结合热门电视剧琅邪榜，<br>大战数十米琅邪交友榜——最强的交友信息墙！<br>以8分钟约会为主线，浙江卫视御用舞团加盟助阵，<br>网络红人星盘分析师现场分析，为爱指点迷津……</p></article></section></div><div class="stip-text">← 左右滑动，查看案例介绍 →</div></div>';
_doc[6]= '<div class="swiper-container infoCase s3"><div class="swiper-wrapper"><section class="swiper-slide"><h2>经典案例之</h2><h1>《奥运冠军领跑健康生活》</h1><article class="cont"><div class="text">时间：一年四季<br>地点：看的见风景跑道——西湖、钱塘、西溪里…</div><p>乒乓冠军吕林、射击冠军朱启南、 体操冠军吴晓璇、皮划艇冠军孟关良…</p><p>奥运冠军振臂一呼，上千豪杰聚一堂，<br>最美的是沿途的风景，和一起看风景的人。</p></article><div class="blank40"></div></section><section class="swiper-slide"><h2>经典案例之</h2><h1>《T+英雄传》</h1><article class="cont"><div class="text">时间：火热的六月<br>地点：杭州奥体中心</div><p>平凡办公室一族，隐藏着超级英雄，<br>当他们穿上披风，向平板记录发起冲锋，画风瞬间改变。</p></article></section><section class="swiper-slide"><h2>经典案例之</h2><h1>《私家车世界杯》</h1><article class="cont"><div class="text">时间：有世界杯的那些日子<br>地点：球场！球场！球场！</div><p>为了各行各业怀揣足球梦想，<br>但无处实现的男人们，<br>所举办的五人制“笼式足球赛”。</p></article></section></div><div class="stip-text">← 左右滑动，查看案例介绍 →</div></div>';
_doc[7]= '<div class="swiper-container infoCase s3"><div class="swiper-wrapper"><section class="swiper-slide"><h2>经典案例之</h2><h1>《西湖环保公益行》</h1><article class="cont"><div class="text">时间：春雨美景三月天<br>地点：有缘千里来相会</div><p>实时监测西湖景区空气质量，<br>每一口呼吸都带着温度；<br>带走每一位游客丢弃的垃圾，<br>还给他们一个微笑。<br>环保行动，也可以像是一场寻宝游戏。</p></article><div class="blank40"></div></section><section class="swiper-slide"><h2>经典案例之</h2><h1>《T+英雄传》</h1><article class="cont"><div class="text">时间：火热的六月<br>地点：杭州奥体中心</div><p>平凡办公室一族，隐藏着超级英雄，<br>当他们穿上披风，向平板记录发起冲锋，画风瞬间改变。</p></article></section><section class="swiper-slide"><h2>经典案例之</h2><h1>《快闪蓝精灵》</h1><article class="cont"><div class="text">时间：不骗人的愚人节<br>地点：一般人进不去的淘宝城</div><p>成群结队的蓝精灵，<br>出现在你想不到的地方，<br>啊，可爱的蓝精灵<br>我们齐心合力开动脑筋，<br>打响了大品牌。</p></article></section><section class="swiper-slide"><h2>经典案例之</h2><h1>《来自星星的你》</h1><article class="cont"><div class="text">时间：都教授风靡时<br>地点：韩粉聚集地</div><p>以韩剧《来自星星的你》<br>为灵感的搞笑版录播短剧，<br>巧妙把新款珠宝挂坠特点融入其中，<br>每天都有韩粉力挺。</p></article></section></div><div class="stip-text">← 左右滑动，查看案例介绍 →</div></div>';

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
// 案例按钮
function sPopCont2(){
	$('#popLay').addClass('md-show');
	var s3 = new Swiper('.s3', {
		    direction: 'horizontal',
		});
	var _sVertical = new Swiper('.sVertical-1', {
		    direction: 'vertical',
		    slidesPerView: 'auto',
		    freeMode: true,
		    scrollbar: '.sVertical-scrollbar-1',
		});
	var _sVertical = new Swiper('.sVertical-2', {
		    direction: 'vertical',
		    slidesPerView: 'auto',
		    freeMode: true,
		    scrollbar: '.sVertical-scrollbar-2',
		});
}
$('.sPopOpen1').on('touchstart',function(e) {
	$('#popCont').empty().append(_doc[1]);
	sPopCont2();
});
$('.swiper-container').each(function(){
	$('.sPopOpen').on('touchstart',function(e) {
		var sNum = $(this).data('case-id');
		$('#popCont').empty().append(_doc[sNum]);
		sPopCont2();
	});
})
// sPopCont2();



// 节目链接 地址
var _mediaListLink = new Array();
_mediaListLink[0]= 'album-2.html';
_mediaListLink[1]= 'album-3.html';
_mediaListLink[2]= 'album-4.html';
// 节目链接 按钮
$('.swiper-container').each(function(){
	$('.sbtnLink').on('touchstart',function(e) {
		var sLink = $(this).data('link-id');
		window.location.href= _mediaListLink[sLink];
	});
})
