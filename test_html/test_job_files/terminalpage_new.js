/***cookie***/
function self_getCookie(name) {
    var b = document.cookie;
    name += "=";
    var c = b.indexOf("; " + name);
    if (c == -1) {
        if (c = b.indexOf(name), c != 0) {
            return null;
        }
    } else {
        c += 2;
    }
    var d = document.cookie.indexOf(";", c);
    if (d == -1) {
        d = b.length;
    }
    var code_str = b.substring(c + name.length, d).replace(/\+/g, " ");
    return decodeURIComponent ? decodeURIComponent(code_str) : unescape(code_str);
}
function setCookie(objName, objValue, objDays) { //添加cookie
    var str = objName + "=" + escape(objValue);
    if (objDays > 0) {
        var date = new Date();
        var ms = objDays * 24 * 3600 * 1000;
        date.setTime(date.getTime() + ms);
        str += "; expires=" + date.toGMTString();
    }
    document.cookie = str;
}
/*20140610 liuhuili*/
$(document).ready(function () {
    /*职位和公司tab切换*/
    $(".tab-ul li").click(function () {
        $(this).addClass("current").siblings().removeClass("current");
        $(".tab-cont-box .tab-inner-cont").eq($(".tab-ul li").index(this)).show().siblings().hide();
        if ($(this).html() == "公司介绍") {
            dyweTrackEvent('bjobsdetail14gb', 'showcompdescnav');
        }
    });
    /*页面头部和右下角的公告用js输出*/
    var positionWaring = {
        announcement: '智联提示您：用人单位以任何名义向应聘者收取费用都属违法行为（如押金、资料费、代收体检费、代收淘宝信誉等），请提高警惕并注意保护个人信息！',
        cheatWarning: ' <div class="layer-top"> <span>防诈骗提示</span> <span class="layer-close"></span> </div><div class="layer-main"> 智联提示您：用人单位以任何名义向应聘者收取费用都属违法行为（<span>如押金、资料费、代收体检费、代收淘宝信誉等</span>），请提高警惕并注意保护个人信息！！ </div>'
    };
    $(".announcement").html('<div class="announcement-icon">' + positionWaring.announcement + '</div></div>');
    $(".layer-01").append(positionWaring.cheatWarning);
    $('.addpopupApply .topBar a,.addpopupApply .popupCancelBtn').bind('click', function () {
        jQuery('.addpopupApply').hide();
    });
    if (typeof (ErrorUn) == "undefined") {
        /*顶部根据鼠标滚动而固定*/
        $(window).scroll(function () {
            var category = $(".top-fixed-box");
            var clone_category = $("#clone_category");
            if (clone_category.length == 0) {
                clone_category = category.clone();
                clone_category.attr("id", "clone_category");
                $('body').append(clone_category);
            }
            var nav_t = category.offset().top;
            var s_top = $(document).scrollTop();
            if (s_top > nav_t) {
                clone_category.addClass("cateFixed");
                clone_category.fadeIn(500);
            } else {
                clone_category.fadeOut(200);
                clone_category.removeClass("cateFixed");
            };
        });
    }
    /*右下角提示框关闭按钮*/
    var isnone3 = self_getCookie("hiddenEpinDiv");
    $(".layer-close").click(function () {
        setCookie("hiddenEpinDiv", "none", 1000);
        $(".layer-01").hide();
    });
    if (isnone3 !== 'none') {
        $(".layer-01").show();
    } else {
        $(".layer-01").hide();
    }
});
//广告js开始
function InitAdvert() {
    if (document.getElementById("positionad") && document.getElementById("job-advertising")) {
        if (typeof (AdDataSync) != "undefined" && AdDataSync != null && AdDataSync != "") {
            $("#job-advertising").html(AdDataSync);
        }
    }
}
InitAdvert();
function getsm() { return get_mcookie('urlfrom'); }
function get_mcookie(Name) {
    var search = Name + '=';
    var returnvalue = '';
    if (document.cookie.length > 0) {
        offset = document.cookie.indexOf(search);
        if (offset != -1) {
            offset += search.length; end = document.cookie.indexOf(';', offset);
            if (end == -1) end = document.cookie.length; returnvalue = unescape(document.cookie.substring(offset, end));
        }
    }
    if (returnvalue.length < 2) returnvalue = '12001997';
    return returnvalue;
}
function getRandom() { return Math.round(Math.random() * 10000000); }
function AdsClick(bid, cid) { (new Image()).src = 'http://cnt.zhaopin.com/Market/adpv.html?sid=' + bid + '&site=' + cid + '&smid=' + getsm() + '&random=' + getRandom(); }
//广告结束
/*右侧高度自适应*/
function timetips() {
    var heightleft = $(".terminalpage-left").height() + 15;
    var heightright = $(".terminalpage-right").height() - 15;
    if (heightleft < heightright) {
        //$(".terminalpage-left").height(heightright);
    } else {
        $(".terminalpage-right").height(heightleft);
    }
}
setTimeout("timetips()", 50);

/*20150624 公司终端页职位过期*/
function heightCont() {
    var iframe = $("#iframe").height();
    var Hcontainer = $("#layer_container").height();
    if (iframe < Hcontainer) {
        $("#iframe").height(Hcontainer);
    } else {
        $("#layer_container").height(iframe);
    }
}
heightCont();
$("#top_layer").find("a").html("<img src=\"http://img01.zpin.net.cn/2014/rd2/img/company_back.png\">");

/******************相似职位推荐开始**********************/
// show_xszw();
function show_xszw() {
    //  var CityNameArr = ",广州,杭州,深圳,重庆,天津,上海,北京,"; //需要即时打开相似职位的城市
    var tjUrl = window.tjUrl;
    var sub_city = tjUrl.match(/(&subtype=\S*&cityid=\d*)$/)[1];
    var _url = "http://recommendapi.zhaopin.com/behavior.json?num=10&JobNo=" + window.PositionExtID + sub_city;
    /*var _url =  "http://recommendapiqa.zpidc.com/behavior.json?num=10&jobNo=" + window.PositionExtID;*/

    if (typeof (arrVarFromASP) != "undefined" && arrVarFromASP != null && arrVarFromASP.length > 5 && _url) {
        GetData(_url);
    }
}
//页面初始时没有相似职位隐藏外层div
$(function(){
    if($('.batch_ul li').length <= 0){
        $('#job-xszwtj').hide();
    }
});

$("#viewjob").click(function () {
    GetData(tjUrl);
    dyweTrackEvent('bjobsdetail14gb', 'showsimjobmodule');
});
//请求接口获取相似职位
function GetData(_url) {
    var html = '<h2>相似职位推荐</h2><ul><li>'
    html += "正在加载相似职位...</li></ul>";
    $("#job-xszwtj").html(html);
    //  var url = _url.replace("SimilarPosition.asp", "SimilarPositionCom.asp")
    url = _url + "&callback=?";
    var fdata = { format: "json" };
    $.getJSON(url, fdata, function (res) {
        show_xszw_dm(res, _url);
    });
}
//展示职位
function show_xszw_dm(data, _url) {
    var count = data.count;
    count = count > 11 ? 10 : count;//相似职位显示数量
    var html = '';
    html += '<h2>相似职位推荐</h2>';
    html += '<form name="myform" method="post" id="myform" action="">';
    html += '<div class="applay-All dlapplay-all applay-All-b"><label><input type="checkbox" name="allvacancyid" onclick="ChkSelectAll(\'vacancyid\',\'allvacancyid\',this)" checked="" id="allvacancyid">全选</label><button onclick="return CheckApply();" class="selectall-btn" type="button"></button></div><ul class="batch_ul">';
    if (count > 0) {
        for (var i = 0; i < count; i++) {
            var jobIdArr = data.positions[i].jobsID.split('_');
            var CityName = GetCityName(jobIdArr[1]);
            var jobUrl = data.positions[i].jobsUrl;
            //var jobUrlArr = jobUrl.split('?');
            //jobUrl = jobUrlArr[0] + "?ff=100&ss=301";
            jobUrl = jobUrl + "?ff=100&ss=301";

            html += "<li>";
            html += '<p class="pone"><input checked="" name="vacancyid" value="' + data.positions[i].jobsID + '" onclick="unChkSelectAll(\'allvacancyid\')" type="checkbox"><a href="' + jobUrl + '" class="job-name" target="_blank" title="' + data.positions[i].jobsName + '">' + data.positions[i].jobsName + '</a></p>';
            html += '<p class="ptwo"><a href="' + data.positions[i].companyUrl + '?sp=102&act=101" class="company-name" target="_blank" title="' + data.positions[i].companyName + '">' + data.positions[i].companyName + '</a><span class="w150">地点：' + CityName + '</span><span class="w110">' + data.positions[i].pubDate + '</span></p>';
            html += '<p class="pthree fr"><strong onclick="applyjob(\'' + data.positions[i].jobsID + '\')"></strong></p>';
            html += '</li>';
        }
        if (count == 10) { //为10条则显示查看更多
            html += '</ul><div class="applay-All dlapplay-all applay-All-b"><label><input type="checkbox" onclick="ChkSelectAll(\'vacancyid\',\'allvacancyid\',this)" name="allvacancyid" checked="" id="allvacancyid">全选</label><button onclick="return CheckApply();" class="selectall-btn" type="button"></button></div><p class="see-more fr"><a rel="nofollow" href="' + tjUrl + '" target="blank" onclick="dyweTrackEvent(\'bjobsdetail14gb\',\'showmoresimjobs\')">查看更多相似职位推荐 >></a></p></form>';
        }
    } else {
        var html = '<h2>相似职位推荐</h2><ul><li>'
        html += "没有可以推荐给你的职位</li></ul>";
        //html += "<li>没有可以推荐给你的职位</li></ul></form>";
    }
    $("#job-xszwtj").html(html);
    timetips();
}
//申请职位
function applyjob(jobid) {
    dyweTrackEvent('bjobsdetail14gb', 'directapply_simtuijian');
    ///删除已显示的申请界面代码
    if (zlapply.searchjob.ajaxApply) {
        zlapply.searchjob.ajaxApply.div = undefined;
        $(".popupApply").remove();
        $("#zlzp_jsc").html("");
    }
    if (zlzp) {
        if (zlzp.searchjob.ajaxApply) {
            zlzp.searchjob.ajaxApply.div = undefined;
            $(".popupApply").remove();
            $("#zlzp_jsc").html("");
        }
        if (zlzp.searchjob.bodymask) {
            zlzp.searchjob.bodymask = undefined;
            $("#divMask").hide();
        }
    }
    jobid = jobid.split('_');
    jobid.splice(3, 2, 100, 301);
    jobid.splice(6, 1, 2);
    jobid = jobid.join("_");
    zlapply.searchjob.ajaxApplyBrig0(jobid, 'ssb');
}
//从基础数据取城市名称
function GetCityName(CityId) {
    var name = "";
    if (typeof (dCity) != "undefined" && CityId > 0) {
        var reg = dCity.split('@' + CityId + '|');
        var regTem = reg[1].split('|');
        name = regTem[0];
    }
    return name;
}
/*支持ie6下相似职位推荐悬浮出现立即申请按钮*/
$(".similar-job ul li").live("mouseover", function () {
    $(this).css("background", "#F4FAFF");
    /*2016.3.30*/
    if($(this).parent().parent().attr('id')=='myform2' && $(this).children('.pone').children('input').attr('data-apply')==4){
        $(this).find(".pthree").html('');
        $(this).find(".pthree").addClass('btn_tj_bg');
        $(this).find(".pthree").show();
        $(this).children('.pone').children('input')[0].checked=false;
        var url=$(this).children('.pone').children('input').attr('data-url')
        $(this).find(".pthree").click(function(){
            window.open(url);

        })
    }else{
        $(this).find(".pthree").show();
    }
});
$(".similar-job ul li").live("mouseout", function () {
    $(this).css("background", "#fff");
    $(this).find(".pthree").hide();
});
/*20150526 相似职位推荐加批量申请功能*/
function CheckApply(e) {
    var a= e.target || e.srcElement;
    var form = a.parentNode.parentNode;
    var chkbox = form.vacancyid;
    chkbox = chkbox.length ? chkbox : [chkbox];
    var hidden = form.h_method;
    var arrOkNo = [];
    if (hidden && hidden.value) arrOkNo = hidden.value.split("|");
    var data = { num: 0, ok: "", no: "" };

    for (var i = 0; i < chkbox.length; i++) if (chkbox[i].checked) {
        data.num++;
        if (arrOkNo.length > i && arrOkNo[i] == 0) data.no += (data.no == "" ? "" : ",") + chkbox[i].value;
        else data.ok += (data.ok == "" ? "" : ",") + chkbox[i].value;
    }

    if (data.num == 0) {
        alert("请选择要申请的职位！");
    }
    else {
        if (data.ok == "") zlzp.searchjob.allNoPosition(data);
        else zlzp.searchjob.ajaxApply(data, "");
    }
}
function applyOne(formObj, vacancyID) {
    var hidden = formObj.h_method;
    var arrOkNo = [];
    if (hidden && hidden.value) arrOkNo = hidden.value.split("|");
    var data = { num: 0, ok: "", no: "" };
    data.num++;
    if (arrOkNo.length > 0 && arrOkNo[0] == 0) data.no = vacancyID;
    else data.ok = vacancyID;
    if (data.num == 0) alert("请选择职位");
    else {
        recordApplyOne();
        setTimeout(function () {
            if (data.ok == "") zlzp.searchjob.allNoPosition(data);
            else zlzp.searchjob.ajaxApply(data, "");
        }, 0);
    }
}
function recordApplyOne() {
    function ed(d, a) {
        var c = encodeURIComponent;
        return c instanceof Function ? (a ? encodeURI(d) : c(d)) : escape(d);
    }
    try {
        _dywet._getTrackerByName()._trackEvent("ja", "direct");
        try {
            _gat._getTrackerByName()._trackEvent("ja", "direct");
        } catch (err) { }
    } catch (err) {
        var i = new Image(1, 1);
        var e = document.location;
        i.src = "http://l.zhaopin.com/track_err.gif?dywee=5(ja*direct)&dywehn=" + ed(e.hostname) + "&dywep=" + ed(e.pathname + e.search, true);
    }
}
window.zlzp = {};
function ChkSelectAll(chknameStr, chkallnameStr) {
    var arrInput = document.getElementsByTagName('input');
    var arrCheckbox = [];
    var chkname = [];
    var chkallname = [];
    for (var j = 0; j < arrInput.length; j++) {
        if (arrInput[j].type.toLowerCase() == 'checkbox') arrCheckbox[arrCheckbox.length] = arrInput[j];
    }
    for (j = 0; j < arrCheckbox.length; j++) {
        if (arrCheckbox[j].name == chknameStr) chkname[chkname.length] = arrCheckbox[j];
        else if (arrCheckbox[j].name == chkallnameStr) chkallname[chkallname.length] = arrCheckbox[j];
    }
    var length = chkname.length;
    if (chkallname.length == 1) chkallname[0].checked = chkallname[0].checked | 0;
    else if (chkallname.length > 1 && ChkSelectAll.arguments[2]) for (j = 0; j < chkallname.length; j++) chkallname[j].checked = ChkSelectAll.arguments[2].checked | 0;
    for (var i = 0; i < length; i++) if (!chkname[i].disabled) {chkname[i].checked = chkallname[0].checked}
    var form2Checked=$('#myform2').children('ul').children('li').children('.pone').children('input');
    $.each(form2Checked,function(i,v){
        if($(form2Checked[i]).attr('data-apply')==4){
           form2Checked[i].checked=false;
        }

    })

}
function unChkSelectAll(chkallnameStr) {
    var arrInput = document.getElementsByTagName('input');
    var arrCheckbox = [];
    var chkallname = [];
    for (var j = 0; j < arrInput.length; j++) {
        if (arrInput[j].type.toLowerCase() == 'checkbox') arrCheckbox[arrCheckbox.length] = arrInput[j];
    }
    for (j = 0; j < arrCheckbox.length; j++) {
        if (arrCheckbox[j].name == chkallnameStr) chkallname[chkallname.length] = arrCheckbox[j];
    }

    for (j = 0; j < chkallname.length; j++) if (chkallname[j].checked) chkallname[j].checked = chkallname[j].checked & 0;
}
/******************相似职位推荐结束**********************/
//查看详细地图
function fnOpenMiniMap(locName, locAddr, locCity, locLat, locLon) {
    var url = "http://my.zhaopin.com/map/minimap.htm?ln=" + escape(locName) + "&la=" + escape(locAddr) + "&lc=" + escape(locCity) + "&lla=" + escape(locLat) + "&llo=" + escape(locLon);
    window.open(url, "minimap", "height=530,width=940,status=yes,toolbar=no,menubar=no,location=no");
}
/***下方搜索***/
window.zlzp = window.zlzp || {}; zlzp.first = zlzp.first || [];
zlzp.first.push(function () {
    function initBottomSearch() {
        zlzp.searchjob.setTips(document.frmSearch_bottom);
        var pJobtype_bottom = new zlzp.PopupJobTypeName("buttonSelJobType_bottom", document.frmSearch_bottom.SchJobType, dJobtype, { title: "选择职位", col: 3, width: 710, shidden: document.frmSearch_bottom.subJobtype, sdata: dSubjobtype, scol: 2, swidth: 360, popdir: "up" });
        var pIndustry_bottom = new zlzp.PopupIndustry("buttonSelIndustry_bottom", document.frmSearch_bottom.industry, dIndustry, { title: "选择行业", col: 2, width: 710, maxsel: 10, popdir: "up" });
        var pCity_bottom = new zlzp.PopupCityS("buttonSelCity_bottom", document.frmSearch_bottom.JobLocation, dCity, { title: "选择城市", col: 6, width: 468, popdir: "up", titOffset: -100 });
    }
    var bSearchBarTimer = centralTimer.delay(function () {
        if (document.getElementById("KeyWord_kw2_bottom")) initBottomSearch();
        else bSearchBarTimer.fire();
    }, 50);
});
window.setTimeout(function () { var a = document.createElement("script"); a.async = true; a.src = "http://img01.zhaopin.cn/2012/js/searchjob_20121008.js"; (document.getElementById("zljsc") || document.body).appendChild(a); }, 0);
/*Cookie*/
$(".top-fixed-box").append("<div class=\"fkwWechat\" style=\"display:none;\"><img src=\"http://img02.zhaopin.cn/2014/rd2/img/wechat_cookie.jpg\" width=\"121\" height=\"208\"><a onclick=\"fkwWechat();\" href=\"javascript:;\" target=\"_self\">&nbsp;</a></div>");

//反馈通Cookie
function setCookie(objName, objValue, objDays, objDomain) { //添加cookie
    var str = objName + "=" + objValue;
    if (objDays > 0) {
        var date = new Date();
        var ms = objDays * 24 * 3600 * 1000;
        date.setTime(date.getTime() + ms);
        str = str + "; expires=" + date.toGMTString();
    }
    document.cookie = str;
}
var sendW = self_getCookie("fkwWechat");
if (sendW == null) {
    $(".fkwWechat").show();
}
function fkwWechat() {
    $('.fkwWechat').fadeOut(300);
    setCookie('fkwWechat', 1, 7);
}
//反馈通D期-反馈率
if ($(".fixed-inner-box #applyVacButton2").length > 0) {
    $("#applyVacButton2").hide();
    $.ajax({
        url: 'http://jobs.zhaopin.com/ResumeFeedback.ashx',
        dataType: "json",
        data: {
            positionNumber: PositionExtID
        },
        success: function (result) {
            if (result.Probability < 50) {
                $("#applyVacButton2").show();
                $(".fixed-inner-box .fr").attr("class", "inner-right fr");
                $(".fixed-inner-box .fl").attr("class", "inner-left fl");
                $(".fixed-inner-box .fl .welfare-tab-box").attr("style", "");
            }
            else {
                if (result.Lasttime != "" || result.Probability != "" || result.Evgtime != "") {
                    var feedback = [];
                    feedback.push('<div class="fdtips"><ul>');
                    if (result.Lasttime != "") {
                        feedback.push('<li><div class="fdtime">');
                        feedback.push('<p>' + result.Lasttime + '前</p>');
                        feedback.push('<div class="hrreply">HR最后一次查看简历<a class="tooltips" href="javascript:void(0);"><img src="http://images.zhaopin.com/2014/rd2/img/fdqueico.jpg" width="14" height="13">');
                        feedback.push('<div><div class="chat-bubble">该公司HR最近一次查看简历在' + result.Lasttime + '前<span class="chat-bubble-arrow-border"></span><span class="chat-bubble-arrow"></span></div></div></a></div></div>');
                        feedback.push('</li>');
                    }
                    if (result.Probability != "") {
                        feedback.push('<li><div class="fdreply-pro">');
                        feedback.push('<p><font>' + result.Probability + '%</font></p>');
                        feedback.push('<div class="rate">申请人已获得反馈<a class="tooltips"  href="javascript:void(0);"><img src="http://images.zhaopin.com/2014/rd2/img/fdqueico.jpg" width="14" height="13">');
                        feedback.push('<div class="chat-bubble">已有' + result.Probability + '%的申请人得到反馈了<span class="chat-bubble-arrow-borderone"></span><span class="chat-bubble-arrowone"></span></div></a></div>');
                        feedback.push('</div></li>');
                    }
                    if (result.Evgtime != "") {
                        feedback.push('<li><div class="usetime">');
                        feedback.push('<p>' + result.Evgtime + '内</p>');
                        feedback.push('<div class="uesd">就有反馈(平均值)<a class="tooltips"  href="javascript:void(0);"><img src="http://images.zhaopin.com/2014/rd2/img/fdqueico.jpg" width="14" height="13">');
                        feedback.push('<div><div class="chat-bubble">简历投递后平均' + result.Evgtime + '内获得HR的反馈<span class="chat-bubble-arrow-bordertwo"></span><span class="chat-bubble-arrowtwo"></span></div></div>');
                        feedback.push('</a></div></div> </li></ul></div>');
                    }
                    $(".fixed-inner-box .fr").html(feedback.join(""));
                    $(".top-fixed-box").attr("style", "overflow:visible;");
                    $(".fixed-inner-box .fr").attr("class", "fr");
                    $(".fixed-inner-box .fl").attr("class", "fl");
                    $(".fixed-inner-box .fl .welfare-tab-box").attr("style", "width:520px;");
                    $(".fdtips ul li:last-child > div").attr("style", "border:none;");
                }
            }
        }
    });
}
//职位投诉开始
function getPositionFeedbackHtml(jobtitle, username, email, phone) {
    var html = '<div class="tan tan_offer" id="reportDIV" style="display: block;" >';
    html += '<h5 class="tanTitle">';
    html += '<span>举报该职位</span>';
    html += '<a class="close" id="closed" href="javascript:;" target="_self">&nbsp;</a>';
    html += '</h5>';
    html += '<div class="tanCont">';
    html += '<div class="tanShow">';
    html += '<p class="tips1">该举报针对歧视性信息等违规职位，其他问题请联系客服。</p>';
    html += '<div class="point"><img src="http://img01.zpin.net.cn/2014/rd2/img/re_icon.jpg"> 举报职位:' + jobtitle + '</div>';
    html += '<div class="offer">';
    html += '<form id="formTan" method="post" action="" class="formTan">';
    html += '<div class="form_list">';
    html += '<span class="title"><em>*</em>举报原因:</span>';
    html += '<textarea class="place truePlace" id="report_reason" name="report_reason" cols="30" rows="10" ></textarea><span class="can_in">还可输入 <b id="job_count">200</b> 字</span>';
    html += '<div class="tip tipReason"></div>';
    html += '</div>';
    html += '<div class="form_list">';
    html += '<span class="title"><em>*</em>联 系 人:</span>';
    html += '<input id="linkPeson" class="linkPeson truelinkPeson" name="linkPeson" type="text"  readonly="readonly" value="' + username + '">';
    html += '<div class="tip tipLinkPeson"></div>';
    html += '</div>';
    html += '<div class="form_list">';
    html += '<span class="title"><em>*</em>联系电话:</span>';
    html += '<input id="tel_num" class="tel_num trueLinkNum" name="tel_num" type="text" maxlength="30" value="' + phone + '" />';
    html += '<div class="tip tipLinkNum"></div>';
    html += '</div>';
    html += '<div class="form_list">';
    html += '<span class="title"><em>*</em>电子邮箱:</span>';
    html += '<input id="linkEmail" class="linkPeson truelinkPeson" name="linkEmail" type="text" maxlength="40" value="' + email + '" />';
    html += '<div class="tip tipLinkEmail"></div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</form>';
    html += '</div>';
    html += '<div class="tanFoot">';
    html += '<input id="submit_btn" class="send active" type="button" value="确定" onclick="positionFeedbackPost();" />';
    html += '<input id="refuse" class="refuse no_active" type="button" value="取消" />';
    html += '</div>';
    html += '</div>';
    html += '<div class="maskL"></div>';
    return html;
}
//点击举报
$("#reportBtn").live("click", function () {
    var username = self_getCookie("JSShowname");
    var jobTitle = arrVarFromASP[2];
    if (username != null) {
        if (document.getElementById("reportDIV")) {
            $("#reportDIV").show();
        } else {
            $.ajax({
                url: "ResumeFeedback.ashx",
                type: "POST",
                data: "type=2",
                dataType: "text",
                success: function (msg) {
                    if (msg == null || msg == "" || msg == "0") {
                        alert("你还没有登录，请登录后重试！");
                    } else {
                        var arr = msg.split("|");
                        username = arr[0];
                        var phone = arr[1];
                        var email = arr[2];
                        var html = getPositionFeedbackHtml(jobTitle, username, email, phone);
                        $("body").append(html);
                        //绑定校验事件
                        checkForm();
                    }
                }
            });
        }
    } else {
        alert("您还没有登录，请登录后再投诉！");
    }
});
/*职位投诉前端验证 20150910 liuhuili*/
var tipsMsg = {
    reportReason: '请输入举报原因!',
    isNoMatch_200figure: '最多输入200个字!',
    linkPerson_isRight: '请输入联系人!',
    mobile_isRight: '请输入联系电话!',
    mobile_isRight1: '请输入正确的联系电话!',
    email: '请输入电子邮箱!',
    email1: '请输入正确的电子邮箱!'
};
function checkForm() {
    if (arrVarFromASP != null && PositionExtID != null) {
        var positionCheck = {
            isEmail: function (str) {
                return /^([a-zA-Z0-9]+[_|\_|\.|\-]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.|\-]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(str);
            },
            isMobile_section: function (str) {
                return /^(1[3|4|5|7|8][0-9])\d{8}$/.test(str);
            }
        };
        $("#report_reason").blur(function () {
            var reason = $(this), res_tip = $(".tipReason");
            if (reason.val() == "") {
                res_tip.html(tipsMsg.reportReason);
                reason.addClass("error");
                $(".can_in").hide();
                res_tip.show();
            } else {
                $(this).trigger('keyup');
            }
        }).focus(function () {
            $(this).trigger('keyup');
        }).keyup(function () {
            var maxChars = 200, str = $(this).val(), strLen = str.replace(/[^\x00-\xff]/g, '**').length
            if (strLen > maxChars) {
                $(this).addClass("error");
                $(".can_in").hide();
                $(".tipReason").html(tipsMsg.isNoMatch_200figure);
                $(".tipReason").show();
            } else {
                var curr = maxChars - strLen;
                $("#job_count").html(curr);
                $(".tipReason").hide();
                $(".can_in").show();
                $(this).removeClass("error");
            }
        });
        $("#tel_num").blur(function () {
            var tel = $(this), tel_tip = $(".tipLinkNum");
            if (tel.val() == "") {
                tel_tip.html(tipsMsg.mobile_isRight);
                tel.addClass("error");
            } else {
                tel.removeClass("error");
                tel_tip.html("");
                var telephoneVal = tel.val();
                if (!positionCheck.isMobile_section(telephoneVal)) {
                    tel_tip.html(tipsMsg.mobile_isRight1);
                    tel.addClass("error");
                }
            }
        });
        $("#linkEmail").blur(function () {
            var email = $(this), email_tip = $(".tipLinkEmail");
            if (email.val() == "") {
                email_tip.html(tipsMsg.email);
                email.addClass("error");
            } else {
                email.removeClass("error");
                email_tip.html("");
                var emailVal = email.val();
                if (!positionCheck.isEmail(emailVal)) {
                    email_tip.html(tipsMsg.email1);
                    email.addClass("error");
                }
            }
        });
    }
}
//提交数据
function positionFeedbackPost() {
    $("#report_reason,#tel_num,#linkEmail").trigger('blur');
    if ($(".form_list textarea,.form_list input").hasClass("error")) {
        return false;
    }
    var linkemail = $("#linkEmail").val();
    var phone = $("#tel_num").val();
    var content = $("#report_reason").val();
    var jobtitle = arrVarFromASP[2];
    var data = "type=1&refurl=" + document.referrer + "&url=" + window.location.href + '&positionNumber=' + PositionExtID + '&phone=' + phone + '&email=' + linkemail + '&content=' + content + '&jobtitle=' + jobtitle;
    $.ajax({
        url: "ResumeFeedback.ashx",
        data: data,
        dataType: "html",
        type: "POST",
        success: function (msg) {
            switch (msg) {
                case "0":
                    alert("你还没有登录，请登录后重试！");
                    break;
                case "1":
                    alert("参数不正确，请重新输入！");
                    break;
                case "2":
                    alert("请求失败，请刷新页面重试！");
                    break;
                case "3":
                    var succHtml = '<div class="tan tan_offer reportBox"><h5 class="tanTitle"><span>举报该职位</span><a class="close" id="closed" href="javascript:;" target="_self">&nbsp;</a></h5><div class="reportEnd"><h3>举报成功</h3><p>您的举报我们会尽快处理，确认为歧视性信息等违规职位将<br>被下线，感谢您的支持！</p></div><div class="tanFoot"><input onclick="$(\'.reportBox\').remove();" class="send active" type="button" value="确定"></div></div>';
                    $(succHtml).appendTo("body");
                    break;
                case "4":
                    alert("投诉失败！");
                    break;
                default:
                    alert("请求异常，请刷新页面重试");
                    break;
            }
            $("#reportDIV").remove();
            $(".maskL").remove();
        }
    });
}
//关闭显示投诉弹框
$("#reportBtn").click(function () {
    $("#reportDIV").show();
    $(".maskL").show();
});
$("#closed,#refuse").live("click", function () {
    $("#reportDIV").hide();
    $(".reportBox").hide();
    $(".maskL").hide();
});
//职位投诉结束