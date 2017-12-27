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
the_images.push( 'img/album/adv/bg.jpg');
the_images.push( 'img/album.jpg');

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
		jLazyBgInit();
		$("#percent").html('100%<br>场景渲染完毕…');
		setTimeout(function(){
			// $('#form1').css('visibility','visible');
			$('#loading').remove();
			enterAd();

			// musicInit();
			
		},1000);
		
		console.log("预加载图片："+the_images.length+"张");
	}
});

//载入背景延迟加载
function jLazyBgInit(t){
	var t=$(".jLazyBgInit");
	t.each(function(t, e) {
		var i = $(e),
		a = i.data("src");
		i.attr("style", "background-image:url(" + a + ");")
	});
};

//enterAdvertising
function enterAd(){
	$('.adv .J_bg').fadeIn(500,function(){
	$('.adv .round').fadeIn(500,function(){
		$('.adv .main').fadeIn(1000,function(){
			$('.btn-enter').fadeIn(10).animate({'bottom':'10%'});
		});
	});
	});
}
//outAdvertising
function outAd(){
	$('.adv').hide();
	$('.adv .main').hide();
	$('.btn-enter').removeAttr('style');
}
document.getElementById('btnEnter5').addEventListener('touchstart',function(){
	// outAd();
	$('.btn-enter').removeAttr('style');
	$('.adv .main').hide(10,function(){
		$('.adv').hide(100,function(){

			$('.ad').removeClass('adCont');

		});
	});
},!1);

var a1 = new Swiper('.a1', {
	direction : 'horizontal',
	prevButton:'.swiper-button-prev',
	nextButton:'.swiper-button-next',
	slidesPerView: 2,
	loop : true,
});
var _sVertical = new Swiper('.sVertical', {
    direction: 'vertical', 
    slidesPerView: 'auto',
    freeMode: true,
    scrollbar: '.sVertical-scrollbar',
});	

(function() {

	var initPhotoSwipeFromDOM = function(gallerySelector) {

		var parseThumbnailElements = function(el) {
		    var thumbElements = el.childNodes,
		        numNodes = thumbElements.length,
		        items = [],
		        el,
		        childElements,
		        thumbnailEl,
		        size,
		        item;

		    for(var i = 0; i < numNodes; i++) {
		        el = thumbElements[i];

		        // include only element nodes 
		        if(el.nodeType !== 1) {
		          continue;
		        }

		        childElements = el.children;

		        size = el.getAttribute('data-size').split('x');

		        // create slide object
		        item = {
					src: el.getAttribute('href'),
					w: parseInt(size[0], 10),
					h: parseInt(size[1], 10),
					author: el.getAttribute('data-author')
		        };

		        item.el = el; // save link to element for getThumbBoundsFn

		        if(childElements.length > 0) {
		          item.msrc = childElements[0].getAttribute('src'); // thumbnail url
		          if(childElements.length > 1) {
		              item.title = childElements[1].innerHTML; // caption (contents of figure)
		          }
		        }


				var mediumSrc = el.getAttribute('data-med');
	          	if(mediumSrc) {
	            	size = el.getAttribute('data-med-size').split('x');
	            	// "medium-sized" image
	            	item.m = {
	              		src: mediumSrc,
	              		w: parseInt(size[0], 10),
	              		h: parseInt(size[1], 10)
	            	};
	          	}
	          	// original image
	          	item.o = {
	          		src: item.src,
	          		w: item.w,
	          		h: item.h
	          	};

		        items.push(item);
		    }

		    return items;
		};

		// find nearest parent element
		var closest = function closest(el, fn) {
		    return el && ( fn(el) ? el : closest(el.parentNode, fn) );
		};

		var onThumbnailsClick = function(e) {
		    e = e || window.event;
		    e.preventDefault ? e.preventDefault() : e.returnValue = false;

		    var eTarget = e.target || e.srcElement;

		    var clickedListItem = closest(eTarget, function(el) {
		        return el.tagName === 'A';
		    });

		    if(!clickedListItem) {
		        return;
		    }

		    var clickedGallery = clickedListItem.parentNode;

		    var childNodes = clickedListItem.parentNode.childNodes,
		        numChildNodes = childNodes.length,
		        nodeIndex = 0,
		        index;

		    for (var i = 0; i < numChildNodes; i++) {
		        if(childNodes[i].nodeType !== 1) { 
		            continue; 
		        }

		        if(childNodes[i] === clickedListItem) {
		            index = nodeIndex;
		            break;
		        }
		        nodeIndex++;
		    }

		    if(index >= 0) {
		        openPhotoSwipe( index, clickedGallery );
		    }
		    return false;
		};

		var photoswipeParseHash = function() {
			var hash = window.location.hash.substring(1),
		    params = {};

		    if(hash.length < 5) { // pid=1
		        return params;
		    }

		    var vars = hash.split('&');
		    for (var i = 0; i < vars.length; i++) {
		        if(!vars[i]) {
		            continue;
		        }
		        var pair = vars[i].split('=');  
		        if(pair.length < 2) {
		            continue;
		        }           
		        params[pair[0]] = pair[1];
		    }

		    if(params.gid) {
		    	params.gid = parseInt(params.gid, 10);
		    }

		    if(!params.hasOwnProperty('pid')) {
		        return params;
		    }
		    params.pid = parseInt(params.pid, 10);
		    return params;
		};

		var openPhotoSwipe = function(index, galleryElement, disableAnimation) {
		    var pswpElement = document.querySelectorAll('.pswp')[0],
		        gallery,
		        options,
		        items;

			items = parseThumbnailElements(galleryElement);

		    // define options (if needed)
		    options = {
		        index: index,

		        galleryUID: galleryElement.getAttribute('data-pswp-uid'),

		        getThumbBoundsFn: function(index) {
		            // See Options->getThumbBoundsFn section of docs for more info
		            var thumbnail = items[index].el.children[0],
		                pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
		                rect = thumbnail.getBoundingClientRect(); 

		            return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
		        },

		        addCaptionHTMLFn: function(item, captionEl, isFake) {
					if(!item.title) {
						captionEl.children[0].innerText = '';
						return false;
					}
					captionEl.children[0].innerHTML = item.title +  '<br/><small> ' + item.author + '</small>';
					return true;
		        }
				
		    };

			var radios = document.getElementsByName('gallery-style');
			for (var i = 0, length = radios.length; i < length; i++) {
			    if (radios[i].checked) {
			        if(radios[i].id == 'radio-all-controls') {

			        } else if(radios[i].id == 'radio-minimal-black') {
			        	options.mainClass = 'pswp--minimal--dark';
				        options.barsSize = {top:0,bottom:0};
						options.captionEl = false;
						options.fullscreenEl = false;
						options.shareEl = false;
						options.bgOpacity = 0.85;
						options.tapToClose = true;
						options.tapToToggleControls = false;
			        }
			        break;
			    }
			}

		    if(disableAnimation) {
		        options.showAnimationDuration = 0;
		    }

		    // Pass data to PhotoSwipe and initialize it
		    gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);

		    // see: http://photoswipe.com/documentation/responsive-images.html
			var realViewportWidth,
			    useLargeImages = false,
			    firstResize = true,
			    imageSrcWillChange;

			gallery.listen('beforeResize', function() {

				var dpiRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
				dpiRatio = Math.min(dpiRatio, 2.5);
			    realViewportWidth = gallery.viewportSize.x * dpiRatio;


			    if(realViewportWidth >= 1200 || (!gallery.likelyTouchDevice && realViewportWidth > 800) || screen.width > 1200 ) {
			    	if(!useLargeImages) {
			    		useLargeImages = true;
			        	imageSrcWillChange = true;
			    	}
			        
			    } else {
			    	if(useLargeImages) {
			    		useLargeImages = false;
			        	imageSrcWillChange = true;
			    	}
			    }

			    if(imageSrcWillChange && !firstResize) {
			        gallery.invalidateCurrItems();
			    }

			    if(firstResize) {
			        firstResize = false;
			    }

			    imageSrcWillChange = false;

			});

			gallery.listen('gettingData', function(index, item) {
			    if( useLargeImages ) {
			        item.src = item.o.src;
			        item.w = item.o.w;
			        item.h = item.o.h;
			    } else {
			        item.src = item.m.src;
			        item.w = item.m.w;
			        item.h = item.m.h;
			    }
			});

		    gallery.init();
		};

		// select all gallery elements
		var galleryElements = document.querySelectorAll( gallerySelector );
		for(var i = 0, l = galleryElements.length; i < l; i++) {
			galleryElements[i].setAttribute('data-pswp-uid', i+1);
			galleryElements[i].onclick = onThumbnailsClick;
		}

		// Parse URL and open gallery if it contains #&pid=3&gid=1
		var hashData = photoswipeParseHash();
		if(hashData.pid > 0 && hashData.gid > 0) {
			openPhotoSwipe( hashData.pid - 1 ,  galleryElements[ hashData.gid - 1 ], true );
		}
	};

	initPhotoSwipeFromDOM('#container');

})();

