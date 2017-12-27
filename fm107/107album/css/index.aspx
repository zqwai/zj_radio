<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="LA.Web._107album.index" %>

<!doctype html>
<html>
<head runat="server">
    <meta charset="utf-8">
    <meta name="zqwai.com" content="True">
    <meta name="format-detection" content="telephone=no">
    <meta name="format-detection" content="email=no"/>
    <meta http-equiv="cleartype" content="on">
    <!--分享-->
    <meta itemprop="name" content="107+私家车"/>
    <meta itemprop="description" name="description"  content="我们相信：1+1>2，当电台与私家车深度结合，我们看到无限可能，所以我们是私家车电台。"/>
    <meta itemprop="image" content="img/share/share.jpg" />
    <!--标题-->
    <title>107+私家车</title>
    <link href="css/index.css" rel="stylesheet">
    <link href="css/animate.min.css" rel="stylesheet">

<script>
var phoneWidth =parseInt(window.screen.width);
var phoneScale =phoneWidth/640;
var ua =navigator.userAgent;
if (/Android (\d+\.\d+)/.test(ua)){
    var version =parseFloat(RegExp.$1);
    if(version>2.3){
        document.write('<meta name="viewport" content="width=640, minimum-scale = '+phoneScale+', maximum-scale = '+phoneScale+', target-densitydpi=device-dpi">');
    } else{
        document.write('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">');
    }
} else {
    document.write('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi">');
}
</script>
</head>

<body class="sIndex">
 

<div id="loading" class="loadingWrap"><!-- loading -->
    <div class="loadingInner">
        <div class="loadingAnimate" id="progressbar">
            <span class='logo-b'></span>
            <span class='logo-n'></span>
        </div>
        <div class="loadingNumber" id="percent">
            0%
        </div>
    </div>
</div>

<div id="landscape_hinter">
    <div class="hinter_phone"></div>
    <div class="hinter_rotate"></div>
    <div class="hinter_text">竖屏体验效果更佳</div>
</div>

<div id="audiocontainer"><!-- 音乐 -->
</div>

<div id="form1" class="container"><!-- container -->
<div class="swiper-container a1 ">
    <div class="swiper-wrapper">
        <section class="swiper-slide slide1" data-hash="slide1">
            <div class="logo-album"></div>
            <div class="logo-107"></div>
            <ul class="box-text">
                <li>我们相信</li>
                <li>1+1>2</li>
                <li>当电台与私家车深度结合</li>
                <li>我们看到无限可能</li>
                <li>所以我们是私家车电台</li>
            </ul>
            <div class="scroll-Up"></div>
            <div class="J_bg j_bg_big jLazyBgInit" data-src='img/p1/p1-a-1.jpg'></div>
        </section>

        <section class="swiper-slide slide2" data-hash="slide2">
            <ul class="box-text">
                <li>我们相信，1+1+1=∞</li>
                <li>一个前所未有的广阔平台</li>
            </ul>
            <div class="btn btn-enter" data-url='mobile.html' id="btnEnter1">
                <span class='btn-text'>107+移动端</span>
                <div class="icon-arrow-right">
                    <div class="line line1"></div>
                    <div class="line line2"></div>
                    <div class="line line3"></div>
                </div>
            </div>
            <div class="box-main box-phone">
                <div class="j-phone"></div>
                <div class="j-circle j-circle-1"></div>
                <div class="j-circle j-circle-2"></div>
            </div>
            <div class="scroll-Up"></div>
            <div class="J_bg  jLazyBgInit" data-src='img/p1/bg/p1-bg-1.jpg'></div>
        </section>

        <section class="swiper-slide slide3" data-hash="slide3">
            <ul class="box-text">
                <li>最娱乐\最年轻\最情怀\最攻势凌厉…</li>
                <li>107致力于收集眼冒金星的声音们</li>
            </ul>
            <div class="btn btn-enter"  data-url='compere.html' id="btnEnter2">
                <span class='btn-text'>107+男神女神</span>
                <div class="icon-arrow-right">
                    <div class="line line1"></div>
                    <div class="line line2"></div>
                    <div class="line line3"></div>
                </div>
            </div>
            <div class="preside">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </div>
            <ul class="triangle">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>

            <div class="scroll-Up"></div>
            <div class="J_bg j_bg_big jLazyBgInit" data-src='img/p1/bg/p1-bg-2.jpg'></div>
        </section>

        <section class="swiper-slide slide4" data-hash="slide4">
            <ul class="box-text">
                <li>只要私家车种草的东东</li>
                <li>107随时可以上架</li>
                <li>够朋友，不用等</li>
            </ul>
            <div class="btn btn-enter" data-url='media.html' id="btnEnter3">
                <span class='btn-text'>107+流媒体</span>
                <div class="icon-arrow-right">
                    <div class="line line1"></div>
                    <div class="line line2"></div>
                    <div class="line line3"></div>
                </div>
            </div>
            <ul class="gearwheel">
                <li><span></span></li>
                <li><span></span></li>
                <li><span></span></li>

                <li><span></span></li>
                <li><span></span></li>
                <li><span></span></li>

                <li><span></span></li>
                <li><span></span></li>
                <li><span></span></li>

                <li><span></span></li>
                <li><span></span></li>
                <li><span></span></li>

                <li><span></span></li>
                <!-- <li><span></span></li> -->
            </ul>
            <div class="scroll-Up"></div>
            <div class="J_bg j_bg_big jLazyBgInit" data-src='img/p1/bg/p1-bg-3.jpg'></div>
        </section>

        <section class="swiper-slide slide5" data-hash="slide5">
            <ul class="box-text">
                <li>107不喜欢条条框框</li>
                <li>她参考一切，也引领中国广播</li>
                <li>最勇敢创新和最大胆突破</li>
            </ul>
            <div class="btn btn-enter" data-url='economic.html' id="btnEnter4">
                <span class='btn-text'>107+分享经济</span>
                <div class="icon-arrow-right">
                    <div class="line line1"></div>
                    <div class="line line2"></div>
                    <div class="line line3"></div>
                </div>
            </div>
            <ul class="brain">
                <li>创意</li>
                <li>情怀</li>
                <li>明星</li>
                <li>运动</li>
                <li>爱心</li>
                <li>梦想</li>
                <li>时尚</li>
                <li>校园</li>
                <li>邻里</li>
                <li>Jewelry</li>
            </ul>
            <ul class="triangle3d">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <!-- <div class="scroll-Up"></div> -->
            <div class="J_bg j_bg_big jLazyBgInit" data-src='img/p1/bg/p1-bg-4.jpg'></div>
        </section>
    </div>
    <canvas id='myCanvas'></canvas>
</div>
</div>


</body>
<script src="js/jquery.1.11.0.min.js"></script>
<script src="js/jquery.imgpreload.min.js"></script>
<script src="js/dist/js/swiper.min.js"></script>
<script src="js/animo.min.js"></script>
<script src="js/index.js"></script>

<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
wx.config({
debug: false,
appId: "wxb3364c8087c40997",
 <%=GetSignature() %>,
jsApiList: [
    'checkJsApi',
    'onMenuShareTimeline',
    'onMenuShareAppMessage',
    'onMenuShareQQ',
    'onMenuShareWeibo'
]
});
wx.ready(function () {
wx.checkJsApi({
    jsApiList: [
        'onMenuShareTimeline',
           'onMenuShareAppMessage'
    ]
});

wx.onMenuShareTimeline({
    title: '107+私家车',
    desc: '我们相信：1+1>2，当电台与私家车深度结合，我们看到无限可能，所以我们是私家车电台。',
    link: 'http://www.happy107.com/107album/index.aspx',
    imgUrl: 'http://www.happy107.com/107album/img/share/share.jpg',
    trigger: function (res) {
        console.log('用户点击分享到朋友圈');
    },
    success: function (res) {
        alert('已分享');
    },
    cancel: function (res) {
        console.log('已取消');
    },
    fail: function (res) {
        alert('wx.onMenuShareTimeline:fail: '+JSON.stringify(res));
    }
});

  wx.onMenuShareAppMessage({
   title: '107+私家车',
    desc: '我们相信：1+1>2，当电台与私家车深度结合，我们看到无限可能，所以我们是私家车电台。',
    link: 'http://www.happy107.com/107album/index.aspx',
    imgUrl: 'http://www.happy107.com/107album/img/share/share.jpg',
    trigger: function (res) {
        console.log('用户点击分给到朋友');
    },
    success: function (res) {
        alert('已分享');
    },
    cancel: function (res) {
        console.log('已取消');
    },
    fail: function (res) {
        alert('wx.onMenuShareTimeline:fail: '+JSON.stringify(res));
    }
});

});
wx.error(function (res) {
alert('wx.error: '+JSON.stringify(res));
});

</script>
</html>
