//反馈通D期C端修改
try{
    ZPIDC.ns("ZPIDC.applyjob");
}catch(e){
    ZPIDC = {applyjob : {}};
}
//反馈通弹出窗口对象
ZPIDC.applyjob.feedbackPopup = {
    createPopup : function(){
        var popup_html = '<div class="feedbackBox"><h3>如有面试通知，马上提醒我</h3>' +
            '<p class="addP">仅向对我感兴趣的企业开放联系方式</p>' +
            '<div class="feeLast"><a href="#" class="openFeedback" onclick="dyweTrackEvent(\'turnOnDialog\',\'clickOK\')">接受面试通知</a>' +
            '<span class="close" onclick="dyweTrackEvent(\'turnOnDialog\',\'clickCancle\')">不用通知我，让简历石沉大海吧</span>' +
            '</div></div><div class="fullBg"></div>';
        return popup_html;
    },
    showMask : function(){
        // 计算遮罩层大小
        var documentHeight = $(document).height();
        var documentWidth = $(document).width();
        $(".fullBg").css({"width":documentWidth,"height":documentHeight,'display': 'block','opacity':'0.5'});
    },
    showFeedbackBox : function(nextFun){
        var feedbackBox = $('.feedbackBox');
        if(feedbackBox.length == 0){
            var str_popup = this.createPopup();
            $('body').append(str_popup);
        }else{
            feedbackBox.show();
        }
        $(".feedbackBox .close").unbind().click(function(){
            $(".feedbackBox,.fullBg").fadeOut(0);
            typeof nextFun == 'function' ? nextFun() : '';
        });
        $(".openFeedback").unbind().click(function(){
            /*发送开通反馈通请求*/
            $.ajax({
                type : 'get',
                dataType : 'jsonp',
                url : 'http://i.zhaopin.com/feedback/api/set'
            });
            $(".feedbackBox,.fullBg").fadeOut(200);
            setTimeout(function(){typeof nextFun == 'function' ? nextFun() : '';}, 200);
        });
        /*显示遮罩*/
        this.showMask();
    }
};
/*窗口大小变化时调整遮罩的大小*/
try{
    $(window).resize(function(){
        if($('.fullBg').is(':visible')){
            $('.fullBg').css({width : $(document).width(), height : $(document).height()});
        }
        if($('.divMask').is(':visible')){
            $('.divMask').css({width : $(document).width(), height : $(document).height()});
        }
    });
}catch(e){

}
//反馈通入口
ZPIDC.applyjob.feedBackInter = function(nextFun){
    //去掉反馈通提示弹窗，默认都设置为反馈通用户
    jQuery.cookie('JSfeedback','y',{domain : '.zhaopin.com',path:'/'});
    /*去掉反馈通提醒开通弹窗*/
    //try{
    //    /*从cookie中取到的JSfeedback的值可能是null（没发送过请求）、y（已开通反馈通）、n（未开通反馈通，但提示窗口已显示了三次）、
    //    0（未开通反馈通，提示窗口没有显示过）、1（未开通反馈通，提示窗口显示过1次）、2（未开通反馈通，提示窗口显示过2次）*/
    //    var feedBackTipTimes = jQuery.cookie('JSfeedback');
    //    //jQuery.cookie('JSpUserInfo')或jQuery.cookie('JSsUserInfo')如果有值，说明用户已登录
    //    if(feedBackTipTimes == null && (jQuery.cookie('JSpUserInfo') || jQuery.cookie('JSsUserInfo'))){
    //        /*发送请求查看以显示的次数或者是否已开通反馈通*/
    //        $.ajax({
    //            type : 'get',
    //            url : 'http://i.zhaopin.com/feedback/api/get',
    //            dataType : 'jsonp',
    //            success : function(data){
    //                /*开通了反馈通或已经显示了3次弹窗后都不再显示弹窗，返回的data的值0一次都没显示，
    //                1显示了一次，2显示了两次，'N'显示了三次，'Y'已开通反馈通，-10等用户没有登陆等*/
    //                if(data == 0 || data == 1 || data == 2){
    //                    dyweTrackEvent("turnOnDialog","loadDialog");/*监控*/
    //                    ZPIDC.applyjob.feedbackPopup.showFeedbackBox(nextFun);
    //                    /*发送请求修改cookies的值*/
    //                    $.ajax({
    //                        type : 'get',
    //                        dataType : 'jsonp',
    //                        url : 'http://i.zhaopin.com/feedback/api/SetNumber?n=' + (++data)
    //                    });
    //                }else{
    //                    typeof nextFun == 'function' ? nextFun() : '';
    //                }
    //            },
    //            error: function(){
    //                typeof nextFun == 'function' ? nextFun() : '';
    //            }
    //        });
    //    }else if((feedBackTipTimes == 0 || feedBackTipTimes == 1 ||feedBackTipTimes == 2) && (jQuery.cookie('JSpUserInfo') || jQuery.cookie('JSsUserInfo'))){
    //        dyweTrackEvent("turnOnDialog","loadDialog");/*监控*/
    //        ZPIDC.applyjob.feedbackPopup.showFeedbackBox(nextFun);
    //        /*发送请求修改cookies的值*/
    //        $.ajax({
    //            type : 'get',
    //            dataType : 'jsonp',
    //            url : 'http://i.zhaopin.com/feedback/api/SetNumber?n=' + (++feedBackTipTimes)
    //        });
    //    }else{
    //        typeof nextFun == 'function' ? nextFun() : '';
    //    }
    //}catch(e){
        typeof nextFun == 'function' ? nextFun() : '';
    //}
};
//反馈通二维码
ZPIDC.applyjob.feedBackWeiXin = function(){
    //0是未绑定,1是绑定
    var tipedTimes = jQuery.cookie('JSweixinNum')*1;
    //如果提示超过3次，也不弹出框
    if(tipedTimes < 3){
        //从后端接口取数，判断是否是微信绑定
        jQuery.ajax({
            url : 'http://i.zhaopin.com/MessageCenter/api/IsBindWeiXin',
            dataType : 'jsonp',
            success : function(data){
                if(data == '0'){
                    showWindow();
                    jQuery.cookie('JSweixinNum',++tipedTimes,{domain : '.zhaopin.com',path:'/'})
                }
            }
        });
    }
    function showWindow(){
        var bodyTpl =  '<div class="Delivery_success_popdiv_conleft fl">'+
            '<img src="http://i.zhaopin.com/MessageCenter/api/WeiXin" width="180" height="180" title="扫一扫" alt="扫一扫">'+
            '</div><div class="Delivery_success_popdiv_conright fr">'+
            '<p><span class="">微信扫一扫</span></p>'+
            '<p class="lin37"><font>第一时间</font>接收<font color="#ff6600">面试通知!</font></p><p class="lin37">不再错过任何机会哦。</p></div>';
        var feedBackWeiXin = new ZPIDC.dialog({
            title:  '关注智联招聘，企业反馈及时达',
            containerid: "window_result_dialog",
            width: 600,
            height: 340,
            isMask: true,
            headerHeight : 80,
            containerCls : 'Delivery_success_popdiv',
            headCls : 'Delivery_success_popdiv_title',
            bodyCls : 'Delivery_success_popdiv_content clearfix',
            footCls : null
        });
        feedBackWeiXin.optionBody(bodyTpl);
    }
};

