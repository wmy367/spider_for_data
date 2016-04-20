//初始化头部用户名等信息
if (document.all){
	window.attachEvent('onload',widfn);
}
else{
	window.addEventListener('load', widfn,false);
}
function  widfn(){
    (function(){
        var loginNcolse = document.getElementById("loginNcolse") ;
        var loginNwid = document.getElementById("loginNwid") ;
        $(document).click(function(e){
            if ($(e.target).closest("#loginNwid").length || $(e.target).closest("#person-service").length ){
                return;
            }
            loginNwid.style.display = 'none' ;
        });

        loginNcolse.onclick = function(){
            loginNwid.style.display = 'none' ;
        }
        ;$(".loginNFormInput").focus(function(){
            $(".errorstyle").hide();
        });
        if(document.all){
            $("#loginname").val("输入手机号/邮箱");
            $("#loginname").focus(function(){
                if($(this).val() == '输入手机号/邮箱'){$(this).val('');}
            }).blur(function(){
                if($(this).val() == ''){$(this).val('输入手机号/邮箱');}
            });
            function passwordfn(){
                if($("#password").val() == ''){
                    if($("#passwordtxt").length<1){$("#loginNwid").append('<div id="passwordtxt">输入密码</div>');}
                    $("#passwordtxt").show();
                    $("#passwordtxt").focus(function(){
                        $("#passwordtxt").hide();
                        $("#password").focus();
                    });
                }
            }
            passwordfn();
            $("#password").focus(function(){$("#passwordtxt").hide()}).blur(passwordfn);
        }
    })();
    window.zlzpUtils = {};
    (function(i) {
        i.cookie = function(i, m, q) {
            if (1 < arguments.length && "[object Object]" !== "" + m) {
                q = jQuery.extend({},
                q);
                if (null === m || void 0 === m) q.expires = -1;
                if ("number" === typeof q.expires) {
                    var h = q.expires,
                    k = q.expires = new Date;
                    k.setDate(k.getDate() + h);
                }
                m = "" + m;
                return document.cookie = [encodeURIComponent(i), "=", q.raw ? m: encodeURIComponent(m), q.expires ? "; expires=" + q.expires.toUTCString() : "", q.path ? "; path=" + q.path: "", q.domain ? "; domain=" + q.domain: "", q.secure ? "; secure": ""].join("");
            }
            q = m || {};
            k = q.raw ?
            function(h) {
                return h
            }: decodeURIComponent;
            return (h = RegExp("(?:^|; )" + encodeURIComponent(i) + "=([^;]*)").exec(document.cookie)) ? k(h[1]) : null;
        }
    })(jQuery);
    //初始化头
    ZPIDC.applyjob.LoginInHeadShowHtml();
    $("#person-service").click(function(){
        $("#loginNwid").show();
        try{recordOutboundLink(this,'addnewlink','personlogin');}catch(e){}
    });
    $(".loginNFormBtn").click(function(){
        ZPIDC.applyjob.LoginInHead();
    });
    $("#personcheckout").click(function(){
        ZPIDC.applyjob.LoginoutHeadHtml();
    });
}
//底部联系我们弹出窗口
function openFeedback(strTarget){
	window.open(strTarget, "_blank","width=1,height=1,left=100,top=60,scrollbars=0,overflow=auto,status=0");
}

