<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="LA.Web._107album.index" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title></title>
</head>
<body>
   
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
          
            title: '浙江好歌曲',
            desc: '大美浙江，有太多骄傲值得放声一歌：山清水秀的秀美大地，底蕴深厚的人文之美，充满生机的经济热土，务实创新的大众百姓…',
            link: 'http://www.lditent.com/haogequ2/index.aspx',
            imgUrl: 'http://www.lditent.com/haogequ2/img/share/share.jpg',
            trigger: function (res) {
                alert('用户点击分享到朋友圈');
            },
            success: function (res) {
                alert('已分享');
            },
            cancel: function (res) {
                alert('已取消');
            },
            fail: function (res) {
                alert('wx.onMenuShareTimeline:fail: '+JSON.stringify(res));
            }
        });
        
          wx.onMenuShareAppMessage({
           title: '浙江好歌曲',
            desc: '大美浙江，有太多骄傲值得放声一歌：山清水秀的秀美大地，底蕴深厚的人文之美，充满生机的经济热土，务实创新的大众百姓…',
            link: 'http://www.lditent.com/haogequ2/index.aspx',
            imgUrl: 'http://www.lditent.com/haogequ2/img/share/share.jpg',
            trigger: function (res) {
                alert('用户点击分给到朋友');
            },
            success: function (res) {
                alert('已分享');
            },
            cancel: function (res) {
                alert('已取消');
            },
            fail: function (res) {
                alert('wx.onMenuShareTimeline:fail: '+JSON.stringify(res));
            }
        });
        
    });
    wx.error(function (res) {
        alert('wx.error: '+JSON.stringify(res));
    });
//    wx.ready(function() {
//        wx.checkJsApi({
//            jsApiList: [
//                'onMenuShareTimeline',
//                'onMenuShareAppMessage',
//                 'onMenuShareQQ',
//            'onMenuShareWeibo'
//            ]
//        });
//        
//         };
//document.querySelector('#onMenuShareAppMessage').onclick = function () {
//    wx.onMenuShareAppMessage({
//     title: '孙剑&熊婧仪 婚礼晚宴',
//            desc: '2015年6月13日，杭州西溪天堂悦椿度假酒店，18:18分，敬请光临！',
//            link: 'http://www.lditent.com/wedding/invitation.aspx',
//            imgUrl: 'http://www.lditent.com/wedding/images/fx.jpg',
//      trigger: function (res) {
//        alert('用户点击发送给朋友');
//      },
//      success: function (res) {
//        alert('已分享');
//      },
//      cancel: function (res) {
//        alert('已取消');
//      },
//      fail: function (res) {
//        alert(JSON.stringify(res));
//      }
//    });
////    alert('已注册获取“发送给朋友”状态事件');
//  };

//  // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
//  document.querySelector('#onMenuShareTimeline').onclick = function () {
//    wx.onMenuShareTimeline({
//   title: '孙剑&熊婧仪 婚礼晚宴',
//            desc: '2015年6月13日，杭州西溪天堂悦椿度假酒店，18:18分，敬请光临！',
//            link: 'http://www.lditent.com/wedding/invitation.aspx',
//            imgUrl: 'http://www.lditent.com/wedding/images/fx.jpg',
//      trigger: function (res) {
//        alert('用户点击分享到朋友圈');
//      },
//      success: function (res) {
//        alert('已分享');
//      },
//      cancel: function (res) {
//        alert('已取消');
//      },
//      fail: function (res) {
//        alert(JSON.stringify(res));
//      }
//    });
////    alert('已注册获取“分享到朋友圈”状态事件');
//  };
////        wx.onMenuShareTimeline({
////           
////            trigger: function(res) {
////                alert('用户点击分享到朋友圈');
////            },
////            success: function(res) {
////                alert('已分享');
////            },
////            cancel: function(res) {
////                alert('已取消');
////            },
////            fail: function(res) {
////                alert('wx.onMenuShareTimeline:fail: ' + JSON.stringify(res));
////            }
////        });
////  
////    wx.onMenuShareAppMessage({
////    title: '孙剑&熊婧仪 婚礼晚宴',
////    desc: '2015年6月13日，杭州西溪天堂悦椿度假酒店，18:18分，敬请光临！',
////    link: 'http://www.lditent.com/wedding/invitation.aspx',
////    imgUrl: 'http://www.lditent.com/wedding/images/fx.jpg',
////       
////       trigger: function (res) {
////        alert('用户点击分享到QQ');
////      },
////      complete: function (res) {
////        alert(JSON.stringify(res));
////      },
////      success: function (res) {
////        alert('已分享');
////      },
////      cancel: function (res) {
////        alert('已取消');
////      },
////      fail: function (res) {
////        alert(JSON.stringify(res));
////      }
////    });
////    wx.error(function(res) {
////        alert('wx.error: ' + JSON.stringify(res));
 
</script>
</body>
</html>
