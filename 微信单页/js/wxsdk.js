//这里填写分享时的信息
var hrefUrl=window.location.href;
var domain="http://www.faw-mazda.com";  //这里修改为您的网站域名，后面不要加斜杠
var wxData = new Array();
wxData.link= 'http://www.faw-mazda.com/market/2016mijingtansuoh5';  //链接地址，一般不需要修改。
wxData.imgUrl="http://www.faw-mazda.com/market/2016mijingtansuoh5/assets/mobile/wx300.jpg"; //分享时显示的缩略图，根据图片的实际位置修改
wxData.title="行走秘境 探寻心境"; //分享标题
wxData.desc="一封来自秘境的信，阅后即焚"; //分享正文
wxData.desc2="一封来自秘境的信，阅后即焚"; //分享正文

$.ajax({
	url:"http://wx.aoaodo.com/cx4_explore/api/jssdk.php",
	type:"get",
    async: true,
    dataType : "jsonp",
	data:{url:hrefUrl},
	success:function(data){
    //var data = JSON.parse(data);
		wx.config({
		    debug: 0,
		    appId: data.appid,
		    timestamp: data.timestamp,
		    nonceStr: data.noncestr,
		    signature: data.signature,
		    jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage',
		    'onMenuShareQQ','onMenuShareWeibo']
			// 所有要调用的 API 都要加到这个列表中
		});
        shareFunc();
    }
});

//=====================下面代码不用修改=================
function shareFunc(){
  wx.ready(function () {
      // 在这里调用 API
      updateShare();
      setInterval(updateShare, 5 * 1000);
  });

}

function updateShare(){
    wx.onMenuShareTimeline({//分享到朋友圈
        title: TimelineVal(), // 分享标题
        link: wxData.link, // 分享链接
        imgUrl: wxData.imgUrl, // 分享图标
        success: function () {
            //用户确认分享后执行的回调函数
            window.hideShareLayer && window.hideShareLayer();
        },
        cancel: function () {
            //用户取消分享后执行的回调函数
            window.hideShareLayer && window.hideShareLayer();
        }
    });

    wx.onMenuShareAppMessage({//分享给朋友
        title: wxData.title, // 分享标题
        desc: getDesc(), // 分享描述
        link: wxData.link, // 分享链接
        imgUrl: wxData.imgUrl, // 分享图标
        type: '', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () {
            //用户确认分享后执行的回调函数
            window.hideShareLayer && window.hideShareLayer();
        },
        cancel: function () {
            //用户取消分享后执行的回调函数
            window.hideShareLayer && window.hideShareLayer();
        }
    });

    wx.onMenuShareQQ({//分享到QQ
        title: wxData.title, // 分享标题
        desc: getDesc(), // 分享描述
        link: wxData.link, // 分享链接
        imgUrl: wxData.imgUrl, // 分享图标
        success: function () {
            //用户确认分享后执行的回调函数
            window.hideShareLayer && window.hideShareLayer();
        },
        cancel: function () {
            //用户取消分享后执行的回调函数
            window.hideShareLayer && window.hideShareLayer();
        }
    });

    wx.onMenuShareWeibo({//分享到腾讯微博
        title: wxData.title, // 分享标题
        desc: getDesc(), // 分享描述
        link: wxData.link, // 分享链接
        imgUrl: wxData.imgUrl, // 分享图标
        success: function () {
            //用户确认分享后执行的回调函数
            window.hideShareLayer && window.hideShareLayer();
        },
        cancel: function () {
            //用户取消分享后执行的回调函数
            window.hideShareLayer && window.hideShareLayer();
        }
    });
}

function getDesc(){
    return wxData.desc2;
}

function addZero(str,length){
    return new Array(length - (str+'').length + 1).join("0") + str;
}
function TimelineVal(){
    if(wxData.desc2==null || wxData.desc2==""){
        return getDesc();
    }else{
        return getDesc();
    }
}

