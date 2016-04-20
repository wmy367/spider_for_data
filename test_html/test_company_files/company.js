//显示地图
function fnOpenMiniMap(locName, locAddr, locCity, locLat, locLon) {
    var url = "http://my.zhaopin.com/map/minimap.htm?ln=" + escape(locName) + "&la=" + escape(locAddr) + "&lc=" + escape(locCity) + "&lla=" + escape(locLat) + "&llo=" + escape(locLon);
    window.open(url, "minimap", "height=506,width=906,status=yes,toolbar=no,menubar=no,location=no");
}

//城市切换
function changeCitys(obj, cityid) {
    var companyNumber = $("#companyNumber").val();
    if (cityid == 999999) {
        window.location.href = "http://sou.zhaopin.com/jobs/companysearch.ashx?CompID=" + companyNumber;
    }
    else {
        var id = "positionlist_" + cityid;
        $(".text-overflow").removeClass("choosed");
        $(obj).addClass("choosed");
        $(".positionListContent").addClass("displaynone");
        if (document.getElementById(id)) {
            //城市数据存在
            $("#" + id).removeClass("displaynone");
        } else {
            var apiurl = "http://company.zhaopin.com/companypositions.aspx?companynumber=" + companyNumber + "&cityid=" + cityid;
            $.ajax({
                url: apiurl,
                type: "GET",
                dataType: "json",
                success: function (msg) {
                    if (msg != null && msg.Code == 200 && msg.Data != null) {
                        SetHtml(msg.Data, cityid);
                    }
                }
            });
        }
    }
}

function SetHtml(dataList, cityId) {
    var html = '<div class="positionListContent" id="positionlist_' + cityId + '">';
    if (dataList != null && dataList.length > 0 && cityId > 0) {
        for (var i = 0; i < dataList.length; i++) {
            var data = dataList[i];
            html += '<div class="positionListContent1">';
            html += '<span class="jobName"><a href="' + data.positionURL + '" target="_blank">' + data.jobName + '</a></span>';
            html += '<span class="comName">' + data.company.name + '</span>';
            html += '<span class="jobPay">' + data.SalaryT + '</span>';
            var cityRegionName = data.city.display;
            html += '<span class="jobAddr">' + cityRegionName + '</span>';
            html += '<span class="publishTime">' + data.updateDate.substr(0, 10) + '</span>';
            html += '<div class="clearFloat"></div>';
            html += '</div>';
            html += '<div class="cLeft">';
            html += '<span>地点：' + cityRegionName + '</span>';
            html += '<span>公司性质：' + data.company.type.name + '</span>';
            html += '<span>公司规模：' + data.company.size.name + '</span>';
            html += '<span>经验：' + data.workingExp.name + '</span>';
            html += '<span>学历：' + data.eduLevel.name + '</span>';
            html += '<span>职位月薪：' + data.SalaryT + '</span>';
            html += '<p>';
            html += data.jobDesc;
            html += '</p>';
            html += '</div>';
            html += '<div class="cRight">';
            if(data.applyType == 4)
            {
                html += '<a href="' + data.positionURL + '" target="_blank" class="applyJob">查看详情</a>';
            }
            else{
                html += '<a href="javascript:void(0)" onclick="applyjob(\'' + data.number + '_' + data.city.items[0].code + '_1_66_101__2_\'); return false;" class="applyJob">申请职位</a>';
            }
            
            html += '<a href="javascript:void(0);" onclick="saveJobTerminalApply(\'' + data.number + '_' + data.city.items[0].code + '_1\'); return false;" class="collectJob">收藏职位</a>';
            html += '</div>';
            html += '<div class="clearFloat"></div>';
        }
    }
    html = html + '</div>';
    $("#morecity").append(html);
}

//申请职位    applyjob('CC120070365J90269574000_850_1_31_301__1_')
function applyjob(jobid) {
    ///删除已显示的申请界面代码
    if (zlapply.searchjob.ajaxApply) {
        zlapply.searchjob.ajaxApply.div = undefined;
        $(".popupApply").remove();
        $("#zlzp_jsc").html("");
    }
    zlapply.searchjob.ajaxApplyBrig0(jobid, 'ssb');
    dyweTrackEvent('bjobsdetail14gb', 'directapply_simtuijian');
}

//收藏职位
function saveJobTerminalApply(positionNumber) {
    var idstr = zlapply.searchjob.v.h_n + "=" + positionNumber;
    var collectUrl = "http://my.zhaopin.com/myzhaopin/job_fav_portal.asp";
    jsonp({
        url: collectUrl,
        data: idstr,
        callback: "jsonp" + Math.floor(Math.random() * 2147483648).toString(36),
        onSuccess: function (data) {
            zlapply.searchjob.collect(data[0], '.addpopupApply');
        },
        onError: function () {
            zlapply.searchjob.collect(0, '.addpopupApply');
        },
        onAbort: function (callbackIndex) {
            // if (apply.div.state == "open" && apply.jsonpCallback == callbackIndex) zlapply.searchjob.showTimeout();
        },
        beforeCall: function () {
            //apply.jsonpCallback = this.callback;
        },
        callbackParName: "jsonpcallback"
    });
};
