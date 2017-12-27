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
// 首页
the_images.push( 'img/p1/bg/p1-bg-1.jpg');
the_images.push( 'img/p1/bg/p1-bg-2.jpg');
the_images.push( 'img/p1/bg/p1-bg-3.jpg');
the_images.push( 'img/p1/bg/p1-bg-4.jpg');
// the_images.push( 'img/p1/bg/p1-bg-5.jpg');
// 栏目
the_images.push( 'img/p1/p1-1.png');
the_images.push( 'img/p1/p1-a-1.jpg');
the_images.push( 'img/p1/p1-b-1.png');
the_images.push( 'img/p1/p1-b-2.png');
the_images.push( 'img/p1/p1-c-1.jpg');
the_images.push( 'img/p1/p1-c-2.png');
the_images.push( 'img/p1/p1-d-2.png');
the_images.push( 'img/p1/p1-e-1.png');
// the_images.push( 'img/p1/p1-s5.png');
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
			Initialize();
			enterLogo();
			// $('.container').removeClass('display-none').children('.wrap').removeClass('animationPaused');
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
	myAudio.src='http://www.happy107.com/107album/song/1.mp3',
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

(function() {
})();

// logo进入 退出
function enterLogo(){
	$('.slide1 .logo-album').show().animo( { animation: 'flipInY', duration: 1},function(e) {
		e.element.animo( { animation: "flipOutX", keep: true ,delay:1},function(){
				$('.slide1 .logo-107').show().animo( { animation: 'zoomIn', duration: 0.5 },function(e) {
					e.element.animo( { animation: "flipOutX", keep: true,delay:1 },function(){
						$('.slide1 .J_bg').fadeIn(500,function(){
							$('.slide1 .box-text li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration: 0.8},function() {
								$('.slide1 .box-text li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration:  0.8},function() {
									$('.slide1 .box-text li:nth-child(3)').show().animo( { animation: 'fadeInUp', duration:  0.8},function() {
										$('.slide1 .box-text li:nth-child(4)').show().animo( { animation: 'fadeInUp', duration:  0.8},function() {
											$('.slide1 .scroll-Up').show(1000);
										});
									})
								})
							})
						});
					});
				});
			});
	});
}
function outLogo(){
	$('.slide1 .logo-album').removeClass('p1').removeAttr('style');
	$('.slide1 .logo-107').removeClass('p1').removeAttr('style');
	$('.slide1 .J_bg,.slide1 .box-text li,.slide1 .scroll-Up').hide();
}
// Mailbe进入 退出
function enterMailbe(){
	$('.slide2 .J_bg').fadeIn(500,function(){
		$('.slide2 .box-text li:nth-child(1)').show().animo( { animation: 'fadeInLeft', duration: 0.2});
		$('.slide2 .box-text li:nth-child(2)').show().animo( { animation: 'fadeInRight', duration:0.2},function() {
			$('.slide2 .btn-enter').show().animo( { animation: 'fadeInUp', duration: 0.6},function() {
				$('.slide2 .box-main .j-phone').fadeIn(1000);
				$('.slide2 .box-main .j-circle').fadeIn(1000,function(){
					$('.slide2 .scroll-Up').show(1000);
				});
			});
		});
	});
}
function outMailbe(){
	$('.slide2 .J_bg,.slide2 .box-text li,.slide2 .box-main .j-phone,.slide2 .box-main .j-circle,.slide2 .btn-enter,.slide2 .scroll-Up').hide();
}
// Compere 进入 退出
function enterCompere(){
	$('.slide3 .J_bg').fadeIn(500,function(){
		$('.slide3 .box-text li:nth-child(1)').show().animo( { animation: 'fadeInLeft', duration: 0.2});
		$('.slide3 .box-text li:nth-child(2)').show().animo( { animation: 'fadeInRight', duration:0.2},function() {
			$('.slide3 .btn-enter').show().animo( { animation: 'fadeInUp', duration: 0.6},function() {
				$('.slide3 .preside li:nth-child(1)').fadeIn().animo( { animation: 'rotateIn', duration:0.2},function() {
					$('.slide3 .preside li:nth-child(2)').fadeIn().animo( { animation: 'rotateIn', duration:0.2},function() {
						$('.slide3 .preside li:nth-child(3)').fadeIn().animo( { animation: 'rotateIn', duration:0.2},function() {
							$('.slide3 .preside li:nth-child(4)').fadeIn().animo( { animation: 'rotateIn', duration:0.2},function() {
								$('.slide3 .preside li:nth-child(5)').fadeIn().animo( { animation: 'rotateIn', duration:0.2},function() {
									$('.slide3 .triangle ').fadeIn().animo( { animation: 'zoomIn', duration: 0.15 },function() {
										$('.slide3 .scroll-Up').show(1000);
									});
								});
							});
						});
					});
				});

				// });
			});
		});
	});
}
function outCompere(){
	$('.slide3 .J_bg,.slide3 .box-text li,.slide3 .btn-enter,.slide3 .scroll-Up,.slide3 .preside li,.slide3 .triangle ').hide();
	$('.slide3 .preside li').removeAttr('style');
}
// Media 进入 退出
function enterMedia(){
	$('.slide4 .J_bg').fadeIn(500,function(){
		$('.slide4 .box-text li:nth-child(1)').show().animo( { animation: 'fadeInLeft', duration: 0.2});
		$('.slide4 .box-text li:nth-child(2)').show().animo( { animation: 'fadeInRight', duration:0.2},function() {
			$('.slide4 .btn-enter').show().animo( { animation: 'fadeInUp', duration: 0.6},function() {
				$('.slide4 .gearwheel').fadeIn().animo( { animation: 'zoomIn', duration: 0.15 },function() {
					$('.slide4 .scroll-Up').show(1000);
				});
			});
		});
	});
}
function outMedia(){
	$('.slide4 .J_bg,.slide4 .box-text li,.slide4 .btn-enter,.slide4 .scroll-Up,.slide4 .gearwheel').hide();
}
// Economic 进入 退出
function enterEconomic(){
	$('.slide5 .J_bg').fadeIn(500,function(){
		$('.slide5 .box-text li:nth-child(1)').show().animo( { animation: 'fadeInUp', duration: 0.2},function() {
		$('.slide5 .box-text li:nth-child(2)').show().animo( { animation: 'fadeInUp', duration:0.2},function() {
		$('.slide5 .box-text li:nth-child(3)').show().animo( { animation: 'fadeInUp', duration:0.2},function() {
			$('.slide5 .btn-enter').show().animo( { animation: 'fadeInUp', duration: 0.6},function() {
				$('.slide5 .triangle3d').fadeIn().animo( { animation: 'zoomIn', duration: 0.15 },function() {

					$('.slide5 .brain').fadeIn(100,function() {
						$('.slide5 .brain li:nth-child(1)').fadeIn().animo( { animation: 'fadeInLeft', duration:0.2},function() {
							$('.slide5 .brain li:nth-child(2)').fadeIn().animo( { animation: 'fadeInDown', duration:0.2},function() {
							$('.slide5 .brain li:nth-child(3)').fadeIn().animo( { animation: 'fadeInDown', duration:0.2},function() {
								$('.slide5 .brain li:nth-child(4)').fadeIn().animo( { animation: 'fadeInRight', duration:0.2},function() {
								$('.slide5 .brain li:nth-child(5)').fadeIn().animo( { animation: 'fadeInRight', duration:0.2},function() {
								$('.slide5 .brain li:nth-child(6)').fadeIn().animo( { animation: 'fadeInRight', duration:0.2},function() {
								$('.slide5 .brain li:nth-child(7)').fadeIn().animo( { animation: 'fadeInRight', duration:0.2},function() {
									$('.slide5 .brain li:nth-child(8)').fadeIn().animo( { animation: 'fadeInLeft', duration:0.2},function() {
									$('.slide5 .brain li:nth-child(9)').fadeIn().animo( { animation: 'fadeInLeft', duration:0.2},function() {
										$('.slide5 .brain li:nth-child(10)').fadeIn().animo( { animation: 'fadeInUp', duration:0.2},function() {
											$('.slide5 .scroll-Up').show(1000);
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
		});
	});
}
// $('.slide5 .scroll-Up').show(1000);
function outEconomic(){
	$('.slide5 .J_bg,.slide5 .box-text li,.slide5 .btn-enter,.slide5 .scroll-Up,.slide5 .brain,.slide5 .triangle3d,.slide5 .brain li').hide();
}
//enterAdvertising
// function enterAdvertising(){
// 	$('.slide6 .J_bg').fadeIn(500,function(){
// 		$('.slide6 .box-text li:nth-child(1)').show().animo( { animation: 'fadeInLeft', duration: 0.2});
// 		$('.slide6 .box-text li:nth-child(2)').show().animo( { animation: 'fadeInRight', duration:0.2},function() {
// 			$('.slide6 .btn-enter').show().animo( { animation: 'fadeInUp', duration: 0.6},function() {
// 				$('.slide6 .t-advert .t-platform').show().animo( { animation: 'zoomIn', duration: 0.1},function() {
// 				$('.slide6 .t-advert .t-tree').show().animo( { animation: 'fadeInUp', duration: 0.2},function() {
// 				$('.slide6 .t-advert .t-hill').show().animo( { animation: 'fadeInUp', duration: 0.2},function() {
// 					$('.slide6 .t-advert .t-cloud-b').fadeIn(500);
// 					$('.slide6 .t-advert .t-notbook').show().animo( { animation: 'bounceInDown', duration: 0.3},function() {
// 					$('.slide6 .t-advert .t-cloud-s').fadeIn(500);
// 					$('.slide6 .t-advert .t-phone').show().animo( { animation: 'bounceInDown', duration: 0.3},function() {

// 					});
// 					});
// 				});
// 				});
// 				});
// 			});
// 		});
// 	});
// }
// //outAdvertising
// function outAdvertising(){
// 	$('.slide6 .J_bg').hide();
// 	$('.slide6 .box-text li').hide();
// 	$('.slide6 .btn-enter').hide();
// 	$('.slide6 .t-advert li').hide();
// }


//滚屏效果
var s1 = new Swiper('.a1', {
    direction: 'vertical',
	// hashnav:true,
	onSlideChangeStart: function(e){
		var hasSlide1= $('.slide1').hasClass('swiper-slide-active');
		var hasSlide2= $('.slide2').hasClass('swiper-slide-active');
		var hasSlide3= $('.slide3').hasClass('swiper-slide-active');
		var hasSlide4= $('.slide4').hasClass('swiper-slide-active');
		var hasSlide5= $('.slide5').hasClass('swiper-slide-active');
		var hasSlide6= $('.slide6').hasClass('swiper-slide-active');
		if(hasSlide1){
			stop=requestAnimationFrame(Update);
			$('#myCanvas').show();
			enterLogo();
			outMailbe();
		}
		else if(hasSlide2){
			$('#myCanvas').hide();
			window.cancelAnimationFrame(animationStop);
			outLogo();
			enterMailbe();
			outCompere();
		}
		else if(hasSlide3){
			outMailbe();
			enterCompere();
			outMedia();
		}
		else if(hasSlide4){
			outCompere();
			enterMedia()
			outEconomic()
		}
		else if(hasSlide5){
			outMedia();
			enterEconomic();
			// outAdvertising();
		}
		// else if(hasSlide6){
		// 	outEconomic()
		// 	enterAdvertising()
		// }
	}
});




// 链接
var _btnEnter1 = $('#btnEnter1').data("url");
var _btnEnter2 = $('#btnEnter2').data("url");
var _btnEnter3 = $('#btnEnter3').data("url");
var _btnEnter4 = $('#btnEnter4').data("url");
var _btnEnter5 = $('#btnEnter5').data("url");
// console.log(_btnEnter1);
document.getElementById('btnEnter1').addEventListener('touchstart',function(){
	window.location.href= _btnEnter1;
},!1);
document.getElementById('btnEnter2').addEventListener('touchstart',function(){
	window.location.href= _btnEnter2;
},!1);
document.getElementById('btnEnter3').addEventListener('touchstart',function(){
	window.location.href= _btnEnter3;
},!1);
document.getElementById('btnEnter4').addEventListener('touchstart',function(){
	window.location.href= _btnEnter4;
},!1);
// document.getElementById('btnEnter5').addEventListener('touchstart',function(){
// 	window.location.href= _btnEnter5;
// },!1);

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
function Dot() {
    this.alive = true;
    this.x = Math.round(Math.random() * canvas.width);
    this.y = Math.round(Math.random() * canvas.height);
    this.diameter = Math.random() * 7;
    this.colorIndex = Math.round(Math.random() * 3);
    this.colorArray = ['rgba(20,20,20,', 'rgba(66,66,66,', 'rgba(88,88,88,', 'rgba(100,100,100,'];
    this.alpha = 0.1;
    this.color = this.colorArray[this.colorIndex] + this.alpha + ')';
    this.velocity = { x: Math.round(Math.random() < 0.5 ? -1 : 1) * Math.random() * 0.7, y: Math.round(Math.random() < 0.5 ? -1 : 1) * Math.random() * 0.7 };
}
Dot.prototype = {
    Draw: function () {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.diameter, 0, Math.PI * 2, false);
        context.fill();
    },
    Update: function () {
        if (this.alpha < 0.8) {
            // console.log(this.color);
            this.alpha += 0.01;
            this.color = this.colorArray[this.colorIndex] + this.alpha + ')';
            // console.log('===' + this.color);
        }
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        if (this.x > canvas.width + 5 || this.x < 0 - 5 || this.y > canvas.height + 5 || this.y < 0 - 5) {
            this.alive = false;
        }
    }
};
var EntityArray = [];
function Initialize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    for (var x = 0; x < 100; x++) {
        EntityArray.push(new Dot());
    }
    Update();
}
function Update() {
    if (EntityArray.length < 100) {
        for (var x = EntityArray.length; x < 100; x++) {
            EntityArray.push(new Dot());
        }
    }
    EntityArray.forEach(function (dot) {
        dot.Update();
    });
    EntityArray = EntityArray.filter(function (dot) {
        return dot.alive;
    });
    Draw();

    animationStop=requestAnimationFrame(Update);
}

function Draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    EntityArray.forEach(function (dot) {
        dot.Draw();
    });
}

$(window).resize(function () {
    EntityArray = [];
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
