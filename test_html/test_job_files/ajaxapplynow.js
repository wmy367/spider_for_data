(function () {
    function log(info) {
        try {
            console.log(info);
        } catch (e) { alert(info); }
    }

    var isIE = navigator.appName.indexOf("Microsoft") > -1;
    var isIE6 = navigator.appVersion.indexOf("MSIE 6") > -1;
    var piximg = "http://sou.zhaopin.com/images/blank.gif";
    function xhr() {
        var a = null;
        try {
            a = new XMLHttpRequest;
        }
        catch (b) {
            for (var c = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], d = 0, e; e = c[d++]; )
                try {
                    a = new ActiveXObject(e);
                    break;
                }
                catch (f) { };
        }
        return a;
    }
    function $(id) {
        return document.getElementById(id) || null;
    }
    function getUid() {
        return Math.floor(Math.random() * 2147483648).toString(36);
    }
    function getCookie(name) {
        var dc = document.cookie;
        var prefix = name + "=";
        var begin = dc.indexOf("; " + prefix);
        if (begin == -1) {
            begin = dc.indexOf(prefix);
            if (begin != 0) return null;
        }
        else begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) end = dc.length;
        return dc.substring(begin + prefix.length, end).replace(/\+/g, ' ').urlDecode();
    }
    function getElementsByClass(name, type, parent) {
        var r = [];
        var re = new RegExp("(^|\\s)" + name + "(\\s|$)");
        var e = (parent && parent.nodeType == 1 ? parent : document).getElementsByTagName(type || "*");
        for (var j = 0; j < e.length; j++) if (re.test(e[j].className)) r.push(e[j]);
        return r;
    }
    function getStyle(ele, name) {
        if (ele.style[name]) return ele.style[name];
        else if (ele.currentStyle) return ele.currentStyle[name];
        else if (document.defaultView && document.defaultView.getComputedStyle) {
            name = name.replace(/([A-Z])/g, "-$1");
            name = name.toLowerCase();
            var s = document.defaultView.getComputedStyle(ele, "");
            return s && s.getPropertyValue(name);
        }
        else return null;
    }
    function setStyle(ele) {
        for (var i = 1; i < arguments.length; i += 2) {
            var sName = arguments[i];
            var sValue = arguments[i + 1];
            if (sName == "opacity") setOpacity(ele, sValue);
            else {
                if (ele.style && sName in ele.style) ele.style[sName] = sValue;
                else if (sName in ele) ele[sName] = sValue;
            }
        }
        return ele;
    }
    function setOpacity(ele, sValue) {
        if (isIE) ele.style.filter = (ele.style.filter || "").replace(/alpha\([^)]*\)/, "") + "alpha(opacity=" + (sValue * 100) + ")";
        else ele.style.opacity = sValue;
        return ele;
    }
    function addEvent(a, b, c) {
        if (a.addEventListener) a.addEventListener(b, c, false);
        else if (a.attachEvent) a.attachEvent("on" + b, c);
    }
    function clearSelOptions(sel) {
        if (sel.options && sel.options.length)
            while (sel.length) sel.remove(0);
    }
    function typeOf(value) {
        var s = typeof value;
        if (s == "object")
            if (value) {
                if (value instanceof Array || !(value instanceof Object) && Object.prototype.toString.call(value) == "[object Array]" || typeof value["length"] == "number" && typeof value["splice"] != "undefined" && typeof value["propertyIsEnumerable"] != "undefined" && !value.propertyIsEnumerable("splice")) return "array";
                if (!(value instanceof Object) && (Object.prototype.toString.call(value) == "[object Function]" || typeof value["call"] != "undefined" && typeof value["propertyIsEnumerable"] != "undefined" && !value.propertyIsEnumerable("call"))) return "function";
            }
            else return "null";
        else if (s == "function" && typeof value["call"] == "undefined") return "object";
        return s;
    }
    function isDef(val) { return val !== undefined; }
    function isNull(val) { return val === null; }
    function isDefAndNotNull(val) { return val != null; }
    function isArray(val) { return typeOf(val) == "array"; }
    function isArrayLike(val) {
        var type = typeOf(val);
        return type == "array" || type == "object" && typeof val.length == "number";
    }
    function isString(val) { return typeof val == "string"; }
    function isBoolean(val) { return typeof val == "boolean"; }
    function isNumber(val) { return typeof val == "number"; }
    function isFunction(val) { return typeOf(val) == "function"; }
    function isObject(val) {
        var type = typeOf(val);
        return type == "object" || type == "array" || type == "function";
    }
    function getCursorIndex(input) {
        if (!isIE) {
            function vb(a) {
                try { return isNumber(a.selectionStart); }
                catch (err) { return false; }
            }
            var b = 0, c = 0;
            if (vb(input)) {
                b = input.selectionStart;
                c = input.selectionEnd;
            }
            return b && c && b == c ? b : 0;
        }
        else {
            var b = 0, c = 0;
            input = input.createTextRange();
            var d = document.selection.createRange();
            if (input.inRange(d)) {
                input.setEndPoint("EndToStart", d);
                b = input.text.length;
                input.setEndPoint("EndToEnd", d);
                c = input.text.length;
            }
            return b && c && b == c ? b : 0;
        }
    }
    function getCursorXY(e) {
        var e = e || window.event;
        var s = getScrollPosition();
        var x = e.pageX || e.clientX + s.x;
        var y = e.pageY || e.clientY + s.y;
        return { x: x, y: y };
    }
    function getXY(ele) {
        for (var x = 0, y = 0; ele; ) {
            x += ele.offsetLeft;
            y += ele.offsetTop;
            ele = ele.offsetParent;
        }
        return { x: x, y: y };
    }
    function getScrollPosition() {
        function scrollbarX() {
            if (typeof window.pageXOffset == "number") return window.pageXOffset;
            else if (document.documentElement && document.documentElement.scrollLeft) return document.documentElement.scrollLeft;
            else if (document.body && document.body.scrollLeft) return document.body.scrollLeft;
            return 0;
        }
        function scrollbarY() {
            if (typeof window.pageYOffset == "number") return window.pageYOffset;
            else if (document.documentElement && document.documentElement.scrollTop) return document.documentElement.scrollTop;
            else if (document.body && document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }
        return { x: scrollbarX(), y: scrollbarY() };
    }
    function getViewportSize() {
        function viewportWidth() {
            if (typeof window.innerWidth == "number") return window.innerWidth;
            else if (document.documentElement && document.documentElement.clientWidth) return document.documentElement.clientWidth;
            else if (document.body && document.body.clientWidth) return document.body.clientWidth;
            return 0;
        }
        function viewportHeight() {
            if (typeof window.innerHeight == "number") return window.innerHeight;
            else if (document.documentElement && document.documentElement.clientHeight) return document.documentElement.clientHeight;
            else if (document.body && document.body.clientHeight) return document.body.clientHeight;
            return 0;
        }
        return { w: viewportWidth(), h: viewportHeight() };
    }
    function getPageSize() {
        return { w: document.body.scrollWidth, h: document.body.scrollHeight };
    }
    function fixMozScrollBarWidth() {
        var f = 0;
        if (!isIE) {
            var viewportS = getViewportSize();
            var pageS = getPageSize();
            if (viewportS.h < pageS.h) f = 21;
        }
        return f;
    }
    function getValByName(str, name, sp) {
        var val = "", j;
        if (str) {
            j = str.indexOf(sp + name);
            if (j > -1) {
                sp = str.indexOf(sp, j + 1);
                if (sp < 0) sp = str.length;
                val = str.substring(j + name.indexOf("=") + 2, sp);
            }
        }
        return val.urlDecode();
    }
    function openPopup(url, windowname, w, h) {
        var intTop = 0;
        var intLeft = 0;
        var viewportS = getViewportSize();
        var winWidth = viewportS.w; //-12;
        var winHeight = viewportS.h; //-50;
        var scrollNorY = "no";
        if (parseInt(h) == 8888) {//如果高度为8888,那么全屏显示
            w = winWidth; //-12;
            h = winHeight; //-50;
        }
        else { //从中间呈现
            intTop = (winHeight - parseInt(h)) / 2;
            intLeft = (winWidth - parseInt(w)) / 2;
            if (intTop < 30) intTop = 0;
            if (intLeft < 30) intLeft = 0;
        }
        if (w > winWidth) {
            w = winWidth;
            scrollNorY = "yes";
        }
        if (h == 800) scrollNorY = "yes";
        else if (h > winHeight) {
            if (h == 6666) scrollNorY = "no";
            else scrollNorY = "yes";
            h = winHeight;
        }
        var windowconfig = "status=no,scrollbars=" + scrollNorY + ",top=" + intTop + ",left=" + intLeft + ",resizable=0,width=" + w + ",height=" + h;
        subwin = window.open(url, windowname, windowconfig);
        if (subwin) {
            subwin.focus();
            return subwin;
        }
    }
    String.prototype.trim = function () {
        return this.replace(/^[\s\xa0\u3000]+|[\s\xa0\u3000]+$/g, "");
    };
    String.prototype.trimLeft = function () {
        return this.replace(/^[\s\xa0\u3000]+/, "");
    };
    String.prototype.trimRight = function () {
        return this.replace(/[\s\xa0\u3000]+$/, "");
    };
    String.prototype.urlEncode = function () {
        return window.encodeURIComponent ? encodeURIComponent(this) : escape(this);
    };
    String.prototype.urlDecode = function () {
        return window.decodeURIComponent ? decodeURIComponent(this) : unescape(this);
    };
    String.prototype.realLength = function () {
        return this.replace(/[^\x00-\xff]/g, "aa").length;
    };
    /*2015-07-22 start*/
    if(!document.getElementsByClassName){
        document.getElementsByClassName = function(className, element){
            var children = (element || document).getElementsByTagName('*');
            var elements = new Array();
            for (var i=0; i<children.length; i++){
                var child = children[i];
                var classNames = child.className.split(' ');
                for (var j=0; j<classNames.length; j++){
                    if (classNames[j] == className){
                        elements.push(child);
                        break;
                    }
                }
            }
            return elements;
        };
    }
    /*2015-07-22 end*/
    function inherits(childCtor, parentCtor) {
        function tempCtor() { };
        tempCtor.prototype = parentCtor.prototype;
        childCtor.aa = parentCtor.prototype;
        childCtor.prototype = new tempCtor;
        childCtor.prototype.constructor = childCtor;
    }
    function base(me, opt_methodName) {
        var caller = arguments.callee.caller;
        if (caller.aa) return caller.aa.constructor.apply(me, Array.prototype.slice.call(arguments, 1));
        for (var args = Array.prototype.slice.call(arguments, 2), foundCaller = false, ctor = me.constructor; ctor; ctor = ctor.aa && ctor.aa.constructor)
            if (ctor.prototype[opt_methodName] === caller) foundCaller = true;
            else if (foundCaller) return ctor.prototype[opt_methodName].apply(me, args);
        if (me[opt_methodName] === caller) return me.constructor.prototype[opt_methodName].apply(me, args);
        else throw Error("base called from a method of one name to a method of a different name");
    }
    function loadJs(a, b, c) {
        var d = arguments.callee;
        var e = d.queue || (d.queue = {});
        b = b || (((window.document.charset ? window.document.charset : window.document.characterSet) || "").match(/^(gb2312|big5|utf-8)$/gi) || "utf-8").toString().toLowerCase();
        if (a in e) {
            if (c) {
                if (e[a]) e[a].push(c);
                else c();
            }
            return;
        }
        e[a] = c ? [c] : [];
        var f = window.document.createElement("script");
        f.type = "text/javascript";
        f.charset = b;
        f.onload = f.onreadystatechange = function () {
            if (f.readyState && f.readyState != "loaded" && f.readyState != "complete") return;
            f.onreadystatechange = f.onload = null;
            while (e[a].length) e[a].shift()();
            e[a] = null;
        };
        f.src = a; window.document.getElementsByTagName("head")[0].appendChild(f);
    }
    function regEveDomReady() {
        if (arguments.length) {
            if (arguments.length > 1) {
                for (var i = 0; i < arguments.length; i++) regOneEveDomReady(arguments[i]);
            }
            else regOneEveDomReady(arguments[0]);
        }
    }
    function regOneEveDomReady(fn) {
        var callFn = arguments.callee;
        if (!callFn['domReadyUtil']) {
            var userAgent = navigator.userAgent.toLowerCase();
            callFn['domReadyUtil'] = {
                browser: {
                    version: (userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [])[1],
                    safari: /webkit/.test(userAgent),
                    opera: /opera/.test(userAgent),
                    msie: /msie/.test(userAgent) && !/opera/.test(userAgent),
                    mozilla: /mozilla/.test(userAgent) && !/(compatible|webkit)/.test(userAgent)
                },
                readyList: [],
                each: function (object, callback, args) {
                    var name, i = 0, length = object.length;
                    if (args) {
                        if (length == undefined) {
                            for (name in object)
                                if (callback.apply(object[name], args) === false) break;
                        }
                        else
                            for (; i < length; )
                                if (callback.apply(object[i++], args) === false) break;
                    }
                    else {
                        if (length == undefined) {
                            for (name in object)
                                if (callback.call(object[name], name, object[name]) === false) break;
                        }
                        else
                            for (var value = object[0]; i < length && callback.call(value, i, value) !== false; value = object[++i]) { };
                    }
                    return object;
                },
                ready: function () {
                    var dom = callFn['domReadyUtil'];
                    if (!dom.isReady) {
                        dom.isReady = true;
                        if (dom.readyList) {
                            dom.each(dom.readyList, function () { this.call(document) });
                            dom.readyList = null;
                        }
                    }
                }
            }
        }
        var domReadyUtil = callFn['domReadyUtil'];
        (function () {
            if (callFn['readyBound']) return;
            callFn['readyBound'] = true;
            if (document.addEventListener && !domReadyUtil.browser.opera) document.addEventListener("DOMContentLoaded", domReadyUtil.ready, false);
            if (domReadyUtil.browser.msie && window == top)
                (function () {
                    if (domReadyUtil.isReady) return;
                    try { document.documentElement.doScroll("left"); }
                    catch (error) { setTimeout(arguments.callee, 0); return; }
                    domReadyUtil.ready();
                })();
            if (domReadyUtil.browser.opera)
                document.addEventListener("DOMContentLoaded", function () {
                    if (domReadyUtil.isReady) return;
                    for (var i = 0; i < document.styleSheets.length; i++)
                        if (document.styleSheets[i].disabled) {
                            setTimeout(arguments.callee, 0);
                            return;
                        }
                    domReadyUtil.ready();
                }, false);
            addEvent(window, "load", domReadyUtil.ready);
        })();
        if (domReadyUtil.isReady) fn.call(document, domReadyUtil);
        else domReadyUtil.readyList.push(function () { return fn.call(this, domReadyUtil) });
        return this;
    }

    zlzp.charW = 6.25; //pix
    zlzp.checkAll = function (trigger, itemname) {
        var allArr = document.getElementsByName(trigger.name);
        var itemArr = document.getElementsByName(itemname);
        for (var i = 0; i < allArr.length; i++) allArr[i].checked = trigger.checked;
        for (i = 0; i < itemArr.length; i++) itemArr[i].checked = trigger.checked;
    };
    zlzp.uncheckAll = function (allname) {
        var allArr = document.getElementsByName(allname);
        for (var i = 0; i < allArr.length; i++) allArr[i].checked = allArr[i].checked & 0;
    };
    zlzp.setDefTxt = function (obj, txt) {
        if (obj.value == "" || obj.value == txt) {
            obj.value = txt;
            obj.style.color = "#cccccc";
        }
        else obj.style.color = "#000000";
    };
    zlzp.clearDefTxt = function (obj, txt) {
        if (obj.value == txt) {
            obj.value = "";
            obj.style.color = "#000000";
        }
    };

    zlzp.searchjob = zlzp.searchjob || {};

    zlzp.searchjob.buildBodyMask = function (flag) {
        if (!isDef(zlzp.searchjob.bodymask)) {
            var div = document.createElement("div");
            div.className = "divMask";
            setStyle(div, "opacity", 0.5);
            setStyle(div, "zIndex", 10);
            setStyle(div, "width", 0);
            setStyle(div, "height", 0);
            setStyle(div, "left", 0);
            setStyle(div, "top", 0);
            setStyle(div, "visibility", "hidden");
            ($("zlzp_jsc") || document.body).appendChild(div);
            zlzp.searchjob.bodymask = div;
            zlzp.searchjob.bodymask.state = "hidden";
            zlzp.searchjob.bodymask.show = function () {
                if (this.state == "hidden") {
                    this.state = "visible";
                    var pageS = getPageSize();
                    setStyle(this, "width", pageS.w + "px");
                    setStyle(this, "height", pageS.h + "px");
                    setStyle(this, "visibility", "visible");
                }
                else zlzp.searchjob.fixBodyMask();
            };
            zlzp.searchjob.bodymask.hide = function () {
                if (this.state == "visible") {
                    this.state = "hidden";
                    setStyle(this, "visibility", "hidden");
                    setStyle(this, "width", 0);
                    setStyle(this, "height", 0);
                }
            };
        }
        if (flag) zlzp.searchjob.bodymask.show();
    };
    zlzp.searchjob.fixBodyMask = function () {
        if (isDef(zlzp.searchjob.bodymask) && zlzp.searchjob.bodymask.state == "visible") {
            var pageS = getPageSize();
            var m = zlzp.searchjob.bodymask;
            if (parseFloat(getStyle(m, "width")) != pageS.w * 1) setStyle(m, "width", pageS.w * 1 + "px");
            if (parseFloat(getStyle(m, "height")) != pageS.h * 1) setStyle(m, "height", pageS.h * 1 + "px");
        }
    };
    zlzp.searchjob.buildShim = function (div) {
        var shim = document.createElement("iframe");
        shim.src = "javascript:''";
        shim.frameBorder = "0";
        shim.scrolling = "no";
        shim.className = "iframeShim";
        setStyle(shim, "position", "absolute");
        setStyle(shim, "visibility", "hidden");
        setStyle(shim, "zIndex", getStyle(div, "zIndex") - 1);
        setStyle(shim, "top", "-100px");
        setStyle(shim, "left", "-100px");
        setStyle(shim, "width", isNaN(parseFloat(getStyle(div, "width"))) ? "0px" : parseFloat(getStyle(div, "width")) + "px");
        setStyle(shim, "height", "0px");
        return shim;
    };

    zlzp.searchjob.ajaxApplyBrig0 = function (vanid, q) {
        apply({ num: 1, ok: vanid, no: "" }, q);
    };
    zlzp.searchjob.ajaxApplyBrig1 = function (vanid, q, ok) {
        apply.dyweTrackEve("applyNow", "JOBLIST");
        var data = { num: 1, ok: "", no: "" };
        if (typeof (ok) != "undefined" && ok == 0) data.no = vanid + "_1";
        else data.ok = vanid + "_1";
        if (data.ok == "") zlzp.searchjob.allNoPosition(data);
        else apply(data, q);
    };
    zlzp.searchjob.ajaxApplyBrig2 = function (chkbox, q) {
        if (chkbox) {
            var chkbox = chkbox.length ? chkbox : [chkbox];
            var form = zlzp.searchjob.f_m;
            var hidden = null;
            var arrOkNo = [];
            if (form) hidden = form.h_method;
            if (hidden && hidden.value) arrOkNo = hidden.value.split("|");
            var data = { num: 0, ok: "", no: "" };
            for (var i = 0; i < chkbox.length; i++) if (chkbox[i].checked) {
                data.num++;
                if (arrOkNo.length > i && arrOkNo[i] == 0) data.no += (data.no == "" ? "" : apply.vanSepa) + chkbox[i].value + "_1";
                else data.ok += (data.ok == "" ? "" : apply.vanSepa) + chkbox[i].value + "_1";

            }
            if (data.num == 0) alert("请选择职位");
            else {
                if (data.ok == "") zlzp.searchjob.allNoPosition(data);
                else apply(data, q);
            }
        }
    };
    zlzp.searchjob.ajaxApplyBrig3 = function (type) {
        var url;
        var mStr_CompName = "";
        if (typeof (Str_CompName) != 'undefined') {//Str_CompName 公司名称，页面上取值的
            mStr_CompName = encodeURIComponent(Str_CompName);
        }
        var queryStr = window.location.search;
        queryStr = queryStr && "&" + queryStr.substring(1);

        var f = getValByName(queryStr, "f=", "&").urlEncode();

        //chris.cai 投递数据监控 20130703
        var pagecode,source,custom,jobcode;//页面编码，来源，自定义串(来自url)，职位编码（来自页面中input，区分普通、急聘、VIP、special）
        pagecode = getValByName(queryStr, "ff=", "&").urlEncode();
        source = getValByName(queryStr, "ss=", "&").urlEncode();
        if(pagecode == '' || source == ''){
            pagecode = '100';
            source = '101';
        }
        custom = getValByName(queryStr, "cc=", "&").urlEncode();
        jobcode = document.getElementById('jobcode') != null ? document.getElementById('jobcode').value : '' ;
        var data = {
            num: 1,
            ok: arrVarFromASP[1]+"_"+pagecode+"_"+source+"_"+jobcode+"_3_"+custom,
            no: ""
        };
        if (typeof (type) != 'undefined') {
            if (type == "4") {
                var mStr_ApplyUrl = "";
                if (typeof (ApplyUrl) != 'undefined') {
                    mStr_ApplyUrl = ApplyUrl;
                }
                if (mStr_ApplyUrl.indexOf("http") < 0) {
                    mStr_ApplyUrl = "http://" + mStr_ApplyUrl;
                }
                window.location = mStr_ApplyUrl;
                return;
            }
            apply(data, f == "-" ? "" : f);
        }
        else {
            apply(data, f == "-" ? "" : f);
        }
    };
    var apply = zlzp.searchjob.ajaxApply = function (data, q) {
        //反馈通D期C端修改
        var request_apply = function(){
            zlzp.searchjob.action = "apply";
            apply.buildDivFrame();
            apply.vanId = data;
            if (typeof (q) != "undefined") apply.q = q;
            apply.titleCon.innerHTML = "职位申请";
            apply.mainCon.innerHTML = apply.genHTML("5");
            apply.fixShimWH();
            zlzp.searchjob.buildBodyMask(true);
            apply.openDiv();
            apply.showMask();
            var anaParStr = apply.getAnaParStr();
            jsonp({
                url: apply.applynowURL,
                data: apply.paraName.type + "=1&" + apply.paraName.jobidok + "=" + apply.vanId.ok.urlEncode() + "&" + apply.paraName.jobidno + "=" + apply.vanId.no.urlEncode() + "&" + anaParStr + "&" + apply.paraName.feedback + "=" + (jQuery.cookie ? jQuery.cookie('JSfeedback') : ''),//反馈通D期C端修改
                callback: "jsonp" + getUid(),
                onSuccess: function (data) {
                    if (apply.div.state == "open" && data && apply.jsonpCallback == data["callback"] && "loginstatus" in data) {
                        switch (apply.getStatusIndex(data["loginstatus"])) {
                            case "0":
                                zlzp.searchjob.popupLogout(data, "apply");
                                break; //未登录
                            case "1":
                                zlzp.searchjob.showApply(data);
                                break; //登录成功，无默认简历
                            case "5":
                                zlzp.searchjob.showValidator(data);
                                break; //登录成功，有默认简历，>10职位
                            case "6":
                                zlzp.searchjob.gotoOkPage(data);//无重复投递
                                break; //投递成功
                            case "7":
                                zlzp.searchjob.applyFail(data);
                                break;//投递失败
                        }
                    }
                },
                onAbort: function (callbackIndex) {
                    if (apply.div.state == "open" && apply.jsonpCallback == callbackIndex) zlzp.searchjob.showTimeout();
                },
                beforeCall: function () {
                    apply.jsonpCallback = this.callback;
                },
                callbackParName: "c"
            });
        };
        try{
            ZPIDC.applyjob.feedBackInter(request_apply);
        }catch(e){
            request_apply();
        }
    };
    zlzp.searchjob.allNoPosition = function (data) {
        apply.buildDivFrame();
        apply.vanId = data;
        apply.titleCon.innerHTML = "职位申请";
        apply.mainCon.innerHTML = apply.genHTML("13");
        apply.fixShimWH();
        zlzp.searchjob.buildBodyMask(true);
        apply.openDiv();
    };
    zlzp.searchjob.setApplyNowDefault = function (freshParent) {
        zlzp.searchjob.action = "set";
        zlzp.searchjob.freshParent = freshParent || false;
        apply.buildDivFrame();
        apply.titleCon.innerHTML = "默认简历设置";
        apply.mainCon.innerHTML = apply.genHTML("5");
        apply.fixShimWH();
        zlzp.searchjob.buildBodyMask(true);
        apply.openDiv();
        apply.showMask();
        jsonp({
            url: apply.setdefaultURL,
            data: apply.paraName.type + "=1",
            callback: "jsonp" + getUid(),
            onSuccess: function (data) {
                if (apply.div.state == "open" && data && apply.jsonpCallback == data["callback"] && "loginstatus" in data) {
                    switch (apply.getStatusIndex(data["loginstatus"])) {
                        case "0": zlzp.searchjob.popupLogout(data, "set"); break; //未登录
                        case "1": zlzp.searchjob.showSet(data); break; //已登录
                    }
                }
            },
            onAbort: function (callbackIndex) {
                if (apply.div.state == "open" && apply.jsonpCallback == callbackIndex) zlzp.searchjob.showTimeout();
            },
            beforeCall: function () {
                apply.jsonpCallback = this.callback;
            },
            callbackParName: "c"
        });
    };
    zlzp.searchjob.popupLogout = function (data, nextType) {
        apply.dyweTrackEve("applyNow", "login");
        apply.titleCon.innerHTML = "登&nbsp;录";
        apply.mainCon.innerHTML = apply.genHTML("0", data, nextType);
        ZPIDC.applyjob.freshValidate();
        apply.fixShimWH();
        apply.hideMask();
        apply.positionDiv();
    };
    zlzp.searchjob.checkLoginForm = function (nextType) {
        var data = ZPIDC.applyjob.getApplyLoginData(nextType);
        if (data) {
            apply.showMask();
            ZPIDC.applyjob.login(data, function(code,errmsg){
                switch(code ){
                    case '0' :
                        //反馈通D期C端修改
                        jQuery('.popupApply').css('opacity','0').show();
                        var request_apply = function(){
                            jQuery('.popupApply').css('opacity','1').show();
                            data = apply.paraName.type + "=2";
                            if (nextType == "apply") {
                                var anaParStr = apply.getAnaParStr();
                                data += "&" + apply.paraName.jobidok + "=" + apply.vanId.ok.urlEncode()
                                    + "&" + apply.paraName.jobidno + "=" + apply.vanId.no.urlEncode()
                                    + "&" + anaParStr + "&" + apply.paraName.feedback + "=" + (jQuery.cookie ? jQuery.cookie('JSfeedback') : '');//反馈通D期C端修改
                            }
                            jsonp({
                                url: nextType == "apply" ? apply.applynowURL : apply.setdefaultURL,
                                data: data,
                                callback: "jsonp" + getUid(),
                                onSuccess: function (data) {
                                    if (apply.div.state == "open" && data && apply.jsonpCallback == data["callback"] && "loginstatus" in data) {
                                        switch (apply.getStatusIndex(data["loginstatus"])) {
                                            case "0":
                                                zlzp.searchjob.popupLogout(data, "apply");//未登录
                                                break;
                                            case "1":
                                                if (nextType == "apply") {
                                                    zlzp.searchjob.cnt(data);
                                                    zlzp.searchjob.showApply(data);
                                                } else if (nextType == "set")
                                                    zlzp.searchjob.showSet(data);
                                                break; //登录成功，无默认简历      登录成功，设置默认简历
                                            case "5":
                                                zlapply.searchjob.showValidator(data);
                                                break;
                                            case "6":
                                                zlzp.searchjob.cnt(data);
                                                //投递成功(非重复投递)
                                                zlzp.searchjob.gotoOkPage(data);
                                                break;
                                            case "7":
                                                zlzp.searchjob.cnt(data);
                                                zlzp.searchjob.applyFail(data);
                                                break; //投递失败
                                        }
                                    }
                                },
                                onAbort: function (callbackIndex) {
                                    if (apply.div.state == "open" && apply.jsonpCallback == callbackIndex) zlzp.searchjob.showTimeout();
                                },
                                beforeCall: function () {
                                    apply.jsonpCallback = this.callback;
                                },
                                callbackParName: "c"
                            });
                        };
                        try{
                            ZPIDC.applyjob.feedBackInter(request_apply);
                        }catch(e){
                            request_apply();
                        };
                        break;
                    case '37' :
                        if(nextType == "apply"/*&& apply.getStatusIndex(data["needpic"]) ==="y"*/){
                            var validateSty = $("validateLi").style;
                            if(validateSty.display  =="none"){
                                validateSty.display ="block";
                                $("validateErrCon").innerHTML = "";
                                $("passwordErrCon").innerHTML = "";
                            }
                        }
                        apply.hideMask();
                        break;
                    default :
                        zlzp.searchjob.showLoginErr(code,errmsg);//1 用户名密码错 2验证码错
                        break;
                }
            });
        }
        apply.positionDiv();
        apply.fixShimWH();
    };
    zlzp.searchjob.cnt = function (data) {
        var flag = getCookie("monitorlogin2");
        if (flag == "Y") return;
        function insertIframe(srcStr) {
            var iframe = document.createElement("iframe");
            iframe.frameBorder = "0";
            iframe.scrolling = "no";
            setStyle(iframe, "width", "0px");
            setStyle(iframe, "height", "0px");
            iframe.src = srcStr;
            ($("zlzp_jsc") || document.body).appendChild(iframe);
        }
        var srcString = "";
        var strUrlFrom = getCookie("urlfrom");
        var strUserid = data["usermasterid"];
        var strAdfcID = getCookie("adfcid");
        var strAdfbID = getCookie("adfbid");
        if (strUrlFrom == "" || strUrlFrom === null) {
            strAdfcID = "";
            strAdfbID = "";
            srcString = "http://my.zhaopin.com/MYZHAOPIN/new_register_tracking.asp";
            insertIframe(srcString);
        }
        else {
            if (strUrlFrom != "" && strUrlFrom != null && strAdfcID != "" && strAdfcID != null && strAdfbID != "" && strAdfbID != null) {
                strUserid = strUserid;
                srcString = "http://cnt.zhaopin.com/Market/servlet/SourceAnalyzeP?source=" + strUrlFrom + "&pid=" + strUserid + "&action=update&channelid=" + strAdfcID + "&linkid=" + strAdfbID;
                insertIframe(srcString);
                srcString = "http://my.zhaopin.com/MYZHAOPIN/new_register_tracking.asp";
                insertIframe(srcString);
            }
            else {
                strUserid = strUserid;
                srcString = "http://cnt.zhaopin.com/Market/servlet/SourceAnalyze?source=" + strUrlFrom + "&pid=" + strUserid + "&action=update";
                insertIframe(srcString);
                srcString = "http://my.zhaopin.com/MYZHAOPIN/new_register_tracking.asp";
                insertIframe(srcString);
            }
        }
        document.cookie = "monitorlogin2=Y; path=/; domain=zhaopin.com";
    };
    zlzp.searchjob.showApply = function (data) {
        //插入反馈通通知入口 ,根据项目经理要求，某些页面可能没有二维码弹出要求，所以可能无ZPIDC.applyjob.feedBackInter
        apply.showApplyHTML(data);
        apply.hideMask();
        apply.positionDiv();
        apply.fixShimWH();
    };
    zlzp.searchjob.showValidator = function () {
        apply.mainCon.innerHTML = (apply.vanId.no != "" ? apply.genHTML("12") : "") + apply.genHTML("9");
        ZPIDC.applyjob.applyMoreTenValidate();
        apply.hideMask();
        apply.positionDiv();
        apply.fixShimWH();
    };
    zlzp.searchjob.gotoOkPage = function (data) {
        var filename = location.href || "";
        var postBackInfo = data["postBackInfo"] ;
        var pBiarr = postBackInfo.split("_");
        var type = 0 ;
        if(pBiarr[1] == 1)type = 30 ;//seven repeat
        if(pBiarr[2] == 1)type = 30 ;//thirty repeat
        jdr = (filename.match(/(?:\?|&)r=([^&]{3})(?:&|$)/i) || ["", ""])[1];

        //获取和拼接跳转地址
        var paraValue = data["paravalue"], jobType_sub = '', city_id = '', jobSub_city = '', _tj_url = '';
        try{
            _tj_url = tjUrl;
        }catch(e){

        }
        if(_tj_url){
            //职位小类
            var match_job = tjUrl.match(/subtype=([^&]*)/);
            match_job && match_job[1] ? jobType_sub = match_job[1] : '';
            //城市id
            var match_city = tjUrl.match(/cityid=(\d+)/);
            match_city && match_city[1] ? city_id = match_city[1] : '';

            jobSub_city = jobType_sub + encodeURIComponent('|') + city_id;
        }else if(window.location.href.indexOf('req_vacancy_ok.asp') != -1){
            //职位小类和城市id
            var match_job_city = window.location.href.match(/&subjobtype=([^&]*)/);
            jobSub_city = match_job_city && match_job_city[1] ? match_job_city[1] : '';
        }
        if(jobSub_city){
            paraValue = paraValue.replace(/&subjobtype=[^&]*/,"");
            paraValue += '&subjobtype=' + jobSub_city;
        }
        var _href = "http://my.zhaopin.com/jobseeker/req_vacancy_ok.asp?" + paraValue + "&jdr=" + jdr + "&ref=" + filename.split("?")[0].urlEncode() + "&applyType=" +type;
        window.location = _href;
    };
    zlzp.searchjob.applyFail = function (data) {
        apply.mainCon.innerHTML = apply.genHTML("10", data, false);
        apply.hideMask();
        apply.positionDiv();
        apply.fixShimWH();
        apply.closeDivDelay = setTimeout(function () { zlzp.searchjob.ajaxApply.closeDiv(); }, 5000);
    };
    zlzp.searchjob.showTimeout = function () {//log("timeout")
        apply.mainCon.innerHTML = apply.genHTML("11");
        apply.hideMask();
        apply.positionDiv();
        apply.fixShimWH();
    };
    zlzp.searchjob.setDefaultEnd = function (data, end) {
        apply.mainCon.innerHTML = apply.genHTML("8", data, end);
        apply.hideMask();
        apply.positionDiv();
        apply.fixShimWH();
        apply.closeDivDelay = setTimeout(function () { zlzp.searchjob.ajaxApply.closeDiv(); }, 5000);
        if (end && zlzp.searchjob.freshParent) window.location.reload();
    };
    zlzp.searchjob.showSet = function (data) {
        apply.showSetHTML(data);
        apply.hideMask();
        apply.positionDiv();
        apply.fixShimWH();
    };
    zlzp.searchjob.showLoginErr = function (type,errmsg) {
        var _errorDom = $("passwordErrCon") ,
            _errorMsg = errmsg || '';
        switch (type) {
            case "38":
                _errorDom = $("validateErrCon");
                break;
        }
        _errorDom.innerHTML = _errorMsg;

        ZPIDC.applyjob.freshValidate();
        apply.hideMask();
        apply.positionDiv();
        apply.fixShimWH();
    };
    zlzp.searchjob.showRValidErr = function () {
        var html = $("validateErrCon");
        if (html) html.innerHTML = "验证码错误";
        ZPIDC.applyjob.applyMoreTenValidate();
        apply.changeButtonTxt($(apply.applynowId), "立即申请");
        apply.hideMask();
        apply.positionDiv();
        apply.fixShimWH();
    };
    zlzp.searchjob.showValidErr = function () {
        var html = $("validateErrCon");
        if (html) html.innerHTML = "验证码错误";
        ZPIDC.applyjob.applyMoreTenValidate();
        apply.changeButtonTxt($(apply.applynowId), "立即申请");
        apply.hideMask();
        apply.positionDiv();
        apply.fixShimWH();
    };
    zlzp.searchjob.newResume = function () {
        window.open("http://my.zhaopin.com/myzhaopin/resume_nav.asp");
        apply.pleaseFresh(apply.tip4resume);
    };
    zlzp.searchjob.editResume = function () {
        var r = $(apply.resumeSelId);
        var l = $(apply.langSelId);
        if (r && l && apply.resumes && apply.resumes[r.value]) {
            var resume = apply.resumes[r.value];
            var ext_id = resume["resumeextid"];
            var Language_ID = l.value == "3" ? 1 : l.value;
            var Resume_ID = resume["resumeid"];
            var Version_Number = resume["version"];
            var gotowhere = resume["langscore" + (Language_ID != "2" ? "cn" : "en")];
            var url = gotowhere == "1" ? "http://my.zhaopin.com/myzhaopin/resume_preview_edit.asp?ext_id=" + ext_id + "&Language_ID=" + Language_ID + "&Resume_ID=" + Resume_ID + "&Version_Number=" + Version_Number : "http://my.zhaopin.com/myzhaopin/resume_baseinfo.asp?ext_id=" + ext_id + "&language_id=" + Language_ID + "&resume_id=" + Resume_ID + "&Version_Number=" + Version_Number;
            window.open(url);
        }
        apply.pleaseFresh(apply.tip4resume);
    };
    zlzp.searchjob.newCoverletter = function () {
        window.open("http://my.zhaopin.com/myzhaopin/job_letter_add.asp");
        apply.pleaseFresh(apply.tip4letter);
    };
    zlzp.searchjob.editCoverletter = function () {
        var cl = $(apply.coverletterSelId);
        if (cl && cl.value) {
            var var_id = cl.value.split("_")[0];
            var vnum = cl.value.split("_")[1];
            window.open("http://my.zhaopin.com/myzhaopin/job_letter.asp");
            apply.pleaseFresh(apply.tip4letter);
        }
    };
    zlzp.searchjob.genLangOptions = function () {
        var l = $(apply.langSelId);
        var r = $(apply.resumeSelId);
        var myOpt;
        clearSelOptions(l);
        if (r && l && apply.resumes && apply.resumes[r.value]) {
            var resume = apply.resumes[r.value];
            (resume["langcn"] == "1") && (l.options[l.length] = myOpt = new Option("中文", 1, resume["defaultkey"] == "1", resume["defaultkey"] == "1"), isIE6 && resume["defaultkey"] == "1" && l.options[l.length - 1].setAttribute("selected", "selected"));
            (resume["langen"] == "1") && (l.options[l.length] = myOpt = new Option("英文", 2, resume["defaultkey"] == "2", resume["defaultkey"] == "2"), isIE6 && resume["defaultkey"] == "2" && l.options[l.length - 1].setAttribute("selected", "selected"));
            (resume["langcn"] == "1" && resume["langen"] == "1") && (l.options[l.length] = myOpt = new Option("中英文", 3, resume["defaultkey"] == "3", resume["defaultkey"] == "3"), isIE6 && resume["defaultkey"] == "3" && l.options[l.length - 1].setAttribute("selected", "selected"));
        }
        zlzp.searchjob.checkResumeScore();
    };
    zlzp.searchjob.changeCoverletter = function () {
        var s = $(apply.coverletterSelId);
        var e = $(apply.coverletterEditId);
        if (s && e) {
            if (s.value == "") setStyle(e, "display", "none");
            else setStyle(e, "display", "");
        }
    };
    zlzp.searchjob.checkResumeScore = function () {
        var txt = apply.scoreErrTxt;
        var con = $(apply.scoreErrId);
        var l = $(apply.langSelId);
        var r = $(apply.resumeSelId);
        var flag = true;
        if (con && con.nodeType == "1" && apply.resumes && apply.resumes[r.value]) {
            var resume = apply.resumes[r.value];
            if ((l.value == "1" && resume["langscorecn"] == "0") || (l.value == "2" && resume["langscoreen"] == "0") || (l.value == "3" && (resume["langscorecn"] == "0" || resume["langscoreen"] == "0"))) {
                con.innerHTML = txt;
                if(document.getElementById('applyinstance')){document.getElementById('applyinstance').setAttribute('disabled','disabled');}

                flag = false;
            }
            else {
                con.innerHTML = "";
                if(document.getElementById('applyinstance')){document.getElementById('applyinstance').removeAttribute('disabled');}
                flag = true;
            }
        }
        return flag;
    };
    zlzp.searchjob.applyNow = function () {
        var l = $(apply.langSelId);
        var r = $(apply.resumeSelId);
        var cl_sel = $(apply.coverletterSelId);
        var sd_chbox = $(apply.setReDeId);
        var goto = true;
        if (!zlzp.searchjob.checkResumeScore()) goto = false;
        var f = document.applyForm;
        if (f.validate && f.validate.nodeType == 1) {
            var html = $("validateErrCon");
            if (f.validate.value.trim() == "") {
                html.innerHTML = "请输入验证码";
                goto = false;
            }
            else html.innerHTML = "";
        }
        if (goto) {
            apply.changeButtonTxt($(apply.applynowId), "简历发送中");
            apply.showMask();
            apply.dyweTrackEve("applyNow", sd_chbox.checked ? "applyDef" : "apply");
            var anaParStr = apply.getAnaParStr();
            var data = apply.paraName.type + "=3&" + apply.paraName.jobidok + "=" + apply.vanId.ok.urlEncode() + "&" + apply.paraName.jobidno + "=" + apply.vanId.no.urlEncode() + "&" + anaParStr;
            var resume = apply.resumes[r.value];
            var rv = (resume["resumeextid"] + "_" + resume["version"]).urlEncode();
            var rl = l.value.urlEncode();
            var cl = cl_sel.value.urlEncode();
            var sd = sd_chbox.checked ? "1" : "0";
            data += "&" + apply.paraName.resumev + "=" + rv + "&" + apply.paraName.resumel + "=" + rl + "&" + apply.paraName.coverletter + "=" + cl + "&" + apply.paraName.resumed + "=" + sd + ((f.validate && f.validate.nodeType == 1) ? "&" + apply.paraName.validator + "=" + f.validate.value.urlEncode() : "") + "&" + apply.paraName.feedback + "=" + (jQuery.cookie ? jQuery.cookie('JSfeedback') : '');//反馈通D期C端修改
            jsonp({
                url: apply.applynowURL,
                data: data,
                callback: "jsonp" + getUid(),
                onSuccess: function (data) {
                    if (apply.div.state == "open" && data && apply.jsonpCallback == data["callback"] && "loginstatus" in data) {
                        switch (apply.getStatusIndex(data["loginstatus"])) {
                            case "0": zlzp.searchjob.popupLogout(data, "apply"); break; //未登录
                            case "4": zlzp.searchjob.showRValidErr(); break; //验证码错
                            case "6": zlzp.searchjob.gotoOkPage(data); break; //投递成功
                            case "7": zlzp.searchjob.applyFail(data); break;//投递失败
                        }
                    }
                },
                onAbort: function (callbackIndex) {
                    if (apply.div.state == "open" && apply.jsonpCallback == callbackIndex) zlzp.searchjob.showTimeout();
                },
                beforeCall: function () {
                    apply.jsonpCallback = this.callback;
                },
                callbackParName: "c"
            });
        }
        apply.positionDiv();
        apply.fixShimWH();
    };
    zlzp.searchjob.applyNowByDefault = function () {
        var goto = true;
        var f = document.applyForm;
        if (f.validate && f.validate.nodeType == 1) {
            var html = $("validateErrCon");
            if (f.validate.value.trim() == "") {
                html.innerHTML = "请输入验证码";
                goto = false;
            }
            else html.innerHTML = "";
        }
        if (goto) {
            apply.changeButtonTxt($(apply.applynowId), "简历发送中");
            apply.showMask();
            var anaParStr = apply.getAnaParStr();
            var data = apply.paraName.type + "=4&" + apply.paraName.jobidok + "=" + apply.vanId.ok.urlEncode() + "&" + apply.paraName.jobidno + "=" + apply.vanId.no.urlEncode() + "&" + anaParStr + "&" + apply.paraName.validator + "=" + f.validate.value.urlEncode();
            jsonp({
                url: apply.applynowURL,
                data: data,
                callback: "jsonp" + getUid(),
                onSuccess: function (data) {
                    if (apply.div.state == "open" && data && apply.jsonpCallback == data["callback"] && "loginstatus" in data) {
                        switch (apply.getStatusIndex(data["loginstatus"])) {
                            case "0": zlzp.searchjob.popupLogout(data, "apply"); break; //未登录
                            case "4": zlzp.searchjob.showValidErr(); break; //验证码错
                            case "6": zlzp.searchjob.gotoOkPage(data); break; //投递成功
                            case "7": zlzp.searchjob.applyFail(data); break; //投递失败
                        }
                    }
                },
                onAbort: function (callbackIndex) {
                    if (apply.div.state == "open" && apply.jsonpCallback == callbackIndex) zlzp.searchjob.showTimeout();
                },
                beforeCall: function () {
                    apply.jsonpCallback = this.callback;
                },
                callbackParName: "c"
            });
        }
        apply.positionDiv();
        apply.fixShimWH();
    };
    zlzp.searchjob.saveDefault = function () {
        var l = $(apply.langSelId);
        var r = $(apply.resumeSelId);
        var cl = $(apply.coverletterSelId);
        if (!zlzp.searchjob.checkResumeScore()) return;
        if (r && l && apply.resumes && apply.resumes[r.value]) {
            apply.showMask();
            var needRadio = document[apply.setDefaultForm][apply.setDefaultRadio];
            var sd = "1";
            for (var i = 0; i < needRadio.length; i++) if (needRadio[i].checked) {
                sd = needRadio[i].value; break;
            }
            if (sd == "1") {
                var resume = apply.resumes[r.value];
                var rv = (resume["resumeextid"] + "_" + resume["version"]).urlEncode();
                var cl = cl.value.urlEncode();
                var rl = l.value.urlEncode();
                var data = apply.paraName.type + "=3&" + apply.paraName.resumev + "=" + rv + "&" + apply.paraName.resumel + "=" + rl + "&" + apply.paraName.coverletter + "=" + cl + "&" + apply.paraName.resumed + "=" + sd;
            }
            else var data = apply.paraName.type + "=3&" + apply.paraName.resumed + "=" + sd;
            jsonp({
                url: apply.setdefaultURL,
                data: data,
                callback: "jsonp" + getUid(),
                onSuccess: function (data) {
                    if (apply.div.state == "open" && data && apply.jsonpCallback == data["callback"] && "loginstatus" in data) {
                        switch (apply.getStatusIndex(data["loginstatus"])) {
                            case "0": zlzp.searchjob.popupLogout(data, "set"); break; //未登录
                            case "5": zlzp.searchjob.setDefaultEnd(data, true); break; //设置成功
                            case "6": zlzp.searchjob.setDefaultEnd(data, false); break; //设置失败
                        }
                    }
                },
                onAbort: function (callbackIndex) {
                    if (apply.div.state == "open" && apply.jsonpCallback == callbackIndex) zlzp.searchjob.showTimeout();
                },
                beforeCall: function () {
                    apply.jsonpCallback = this.callback;
                },
                callbackParName: "c"
            });
        }
    };
    zlzp.searchjob.previewResume = function () {
        var l = $(apply.langSelId);
        var r = $(apply.resumeSelId);
        if (r && l && apply.resumes && apply.resumes[r.value]) {
            var resume = apply.resumes[r.value];
            var ext_id = resume["resumeextid"];
            var language_id = l.value == "3" ? 1 : l.value;
            var resume_id = resume["resumeid"];
            var Version_Number = resume["version"];
            var url = "http://my.zhaopin.com/myzhaopin/resume_preview.asp?ext_id=" + ext_id + "&language_id=" + language_id + "&resume_id=" + resume_id + "&Version_Number=" + Version_Number;
            //window.open(url);
            openPopup(url, "previewResume", 700, 800);
        }
    };
    zlzp.searchjob.switchNeedDefault = function (r) {
        var b = $(apply.resuColeBlockId);
        if (b && b.nodeType == 1) {
            switch (r) {
                case "1": setStyle(b, "display", "block"); break;
                case "0": setStyle(b, "display", "none"); break;
            }
            apply.positionDiv();
            apply.fixShimWH();
        }
    };
    zlzp.searchjob.freshInfo = function () {
        if (zlzp.searchjob["action"]) {
            switch (zlzp.searchjob["action"]) {
                case "set": zlzp.searchjob.setApplyNowDefault(); break;
                case "apply": if (apply.vanId) apply(apply.vanId); break;
            }
        }
    };
    apply.applynowURL = "http://my.zhaopin.com/v5/FastApply/resumeinfo.aspx";
    apply.setdefaultURL = "http://my.zhaopin.com/v5/FastApply/ResumeDefault.aspx";
    apply.vanSepa = ",";
    apply.resumeSelId = "resumes_sel";
    apply.langSelId = "language_sel";
    apply.scoreErrId = "resumeScore_errCon";
    apply.setReDeId = "applyinstance";
    apply.applynowId = "applynowbutton";
    apply.setDefaultForm = "defaultForm";
    apply.setDefaultRadio = "need";
    apply.scoreErrTxt = "该简历不完整，不能申请工作，请选择其他简历或进行修改。";
    apply.coverletterSelId = "letters_sel";
    apply.coverletterEditId = "letters_edit";
    apply.resuColeBlockId = "reclBlock";
    apply.tip4resume = "您的简历信息已更新，请点击刷新按钮后重新申请";
    apply.tip4letter = "您的求职信信息已更新，请点击刷新按钮后重新申请";
    apply.tip4setOk = "默认简历设置成功。<br />本窗口将在5秒后自动关闭。";
    apply.getTip4setErr = function (statusStr) {
        return "抱歉！默认简历设置失败，请稍后再试（" + statusStr + "）。<br />本窗口将在5秒后自动关闭。";
    };
    apply.tip4applyOk = "职位投递成功。<br />本窗口将在5秒后自动关闭。";
    apply.getTip4applyErr = function (statusStr) {
        if (statusStr == "7_Position has Down") {
            return "抱歉，您申请的职位已下线，请选择其他相似职位进行投递。<br />本窗口将在5秒后自动关闭。";
        } else {
            return "抱歉！职位投递失败，请稍后再试（" + statusStr + "）。<br />本窗口将在5秒后自动关闭。";
        }
    };
    apply.paraName = {
        type: "t",
        username: "n",
        password: "p",
        validator: "v",
        callback: "c",
        isautologin: "i",
        jobidok: "j",
        jobidno: "j2",
        resumev: "rv", //resume_ext_id_version
        resumel: "rl", //1中文,2英文,3中英文
        coverletter: "cl",
        resumed: "sd",
        source: "so",
        subjobtype: "su",
        from: "ff",
        feedback: 'fd' //反馈通D期C端修改
    };
    apply.dyweTrackEve = function (category, action) {
        if (window["dyweTrackEvent"] && isFunction(window["dyweTrackEvent"])) window["dyweTrackEvent"](category, action);
    };
    apply.getStatusIndex = function (statusStr) {
        return statusStr.split("_")[0];
    };
    apply.getAnaParStr = function () {
        var queryStr = window.location.search;
        queryStr = queryStr && "&" + queryStr.substring(1);
        var so = getValByName(queryStr, "source=", "&").urlEncode();
        var su = getValByName(queryStr, "subjobtype=", "&").urlEncode();
        //var ff = getValByName(queryStr,"f=","&").urlEncode();
        var ff = apply.q;
        return apply.paraName.source + "=" + so + "&" + apply.paraName.subjobtype + "=" + su + "&" + apply.paraName.from + "=" + ff;
    };
    apply.changeButtonTxt = function (button, txt) {
        if (button && button.nodeType == 1) button.innerHTML = txt;
    };
    apply.showMask = function () {
        var w = apply.mainCon.offsetWidth;
        var h = apply.mainCon.offsetHeight;
        setStyle(apply.loadCon, "width", w + "px");
        setStyle(apply.loadCon, "height", h + "px");
        setStyle(apply.loadCon, "visibility", "visible");
    };
    apply.hideMask = function () {
        setStyle(apply.loadCon, "width", "0");
        setStyle(apply.loadCon, "height", "0");
        setStyle(apply.loadCon, "visibility", "hidden");
    };
    apply.showApplyHTML = function (data) {
        apply.titleCon.innerHTML = "职位申请";
        if (data["resume"] && data["resume"].length) {//有简历
            apply.dyweTrackEve("applyNow", "selResumes");
            apply.resumes = data["resume"];
            apply.mainCon.innerHTML = (apply.vanId.no != "" ? apply.genHTML("12") : "") + apply.genHTML("1", data);
            zlzp.searchjob.genLangOptions();
            if (apply.vanId.num > 9) ZPIDC.applyjob.applyMoreTenValidate();
        }
        else {//无简历
            apply.resumes = [];
            apply.mainCon.innerHTML = (apply.vanId.no != "" ? apply.genHTML("12") : "") + apply.genHTML("2");
        }
    };
    apply.showSetHTML = function (data) {
        apply.titleCon.innerHTML = "默认简历设置";
        if (data["resume"] && data["resume"].length) {//有简历
            apply.dyweTrackEve("applyNow", "setDef");
            apply.resumes = data["resume"];
            apply.mainCon.innerHTML = apply.genHTML("6", data);
            zlzp.searchjob.genLangOptions();
            zlzp.searchjob.switchNeedDefault(data["defaultkey"] == "" ? "0" : "1");
        }
        else {//无简历
            apply.resumes = [];
            apply.mainCon.innerHTML = apply.genHTML("2");
        }
    };
    apply.pleaseFresh = function (tip) {
        apply.mainCon.innerHTML = apply.genHTML("7", null, tip);
        apply.positionDiv();
        apply.fixShimWH();
    };
    apply.genHTML = function (type, data, argu) {
        var html = "";
        switch (type) {
            case "0": //显示登录框
                html += "<div id=\"loginBlock\"><form name=\"loginForm\"><ul><li><label class=\"leftLabel\">用户名：<input type=\"text\" class=\"textInput\" name=\"loginname\" value=\"" + (data["usermastername"] ? data["usermastername"] : "") + "\" maxlength=\"100\" /></label><label><input type=\"checkbox\" name=\"isautologin\" value=\"1\"" + (data["usermastername"] ? " checked=\"checked\"" : "") + " />自动登录</label></li><li class=\"tips\" id=\"loginnameErrCon\"></li><li><label class=\"leftLabel\">密<img src=\"" + piximg + "\" width=\"12\" height=\"1\" />码：<input type=\"password\" class=\"textInput\" name=\"password\" value=\"\" maxlength=\"25\" /></label><a href=\"http://passport.zhaopin.com/findpassword/email/step1\" target=\"_blank\">忘记密码</a></li><li class=\"tips\" id=\"passwordErrCon\"></li><li id=\"validateLi\" style=\"display:none\"><label class=\"leftLabel\">验证码：<input type=\"text\" class=\"textInput\" name=\"validate\" id=\"validate\" value=\"\" maxlength=\"5\" /></label><a title=\"刷新验证码\" href=\"#\" onClick=\"ZPIDC.applyjob.freshValidate();return false;\"><img align=\"absmiddle\" id=\"vimg\" alt=\"看不清？点击更换\"></a><a title=\"刷新验证码\" href=\"#\" onClick=\"ZPIDC.applyjob.freshValidate();return false;\">看不清，换一张</a></li><li class=\"tips\" id=\"validateErrCon\"></li></ul><div id=\"submitBlock\"  style=\"margin: 10px 0 0 108px;width:264px;\"><div class=\"leftFBlock\"><a href=\"#\" class=\"popapplyButton\" style=\"background:url(http://my.zhaopin.com/images/popapply_butbg_mout.gif);\" onclick=\"zlzp.searchjob.checkLoginForm('" + argu + "');return false;\">登&nbsp;&nbsp;录</a></div><div class=\"rightFBlock\"><a href=\"http://passport.zhaopin.com/account/register\" class=\"txtLink\" target=\"_blank\" style=\"display: block; width: 164px; height: 29px; font-size: 14px; font-weight: bold; text-decoration: none; background: url('http://img02.zhaopin.cn/2012/img/ui/register_jobs.png') no-repeat scroll 0px 0px transparent; color: #3359AA;\">快速注册，申请职位</a></div><div class=\"clear\"></div></div><div class=\"greyDottedLineH\"></div></form>" +
                    '<div class="otherLogin" style="width:200px;height:19px;margin:0 auto;">' +
                    '<span style="display:inline-block;padding-left:4px;color:#666;height:18px;float:left;line-height:18px">使用其他方式登录</span>' +
                    '<a class="" onclick="dyweTrackEvent(\'PCoAuthLogin\',\'wxLogin\')" href="https://passport.zhaopin.com/oauth/weixin/enter" style="display:inline-block;width:18px;height:18px;background:url(http://img02.zhaopin.cn/2012/img/index/icon_wx.png);float:left;margin:0 4px"></a>' +
                    '<a class="" onclick="dyweTrackEvent(\'PCoAuthLogin\',\'qqLogin\')" href="https://passport.zhaopin.com/oauth/qq/enter" style="display:inline-block;width:18px;height:18px;background:url(http://img02.zhaopin.cn/2012/img/index/icon_qq.png);float:left;margin:0 4px"></a>' +
                    '<a class="" onclick="dyweTrackEvent(\'PCoAuthLogin\',\'weiboLogin\')" href="https://passport.zhaopin.com/oauth/weibo/enter" style="display:inline-block;width:18px;height:18px;background:url(http://img02.zhaopin.cn/2012/img/index/icon_xl.png);float:left;margin:0 4px"></a>' +
                    '</div>' +
                    "</div>"; break;
            case "1": //显示简历、求职信列表，立即申请
                html += "<div id=\"applyBlock\">" +
                    "<form name=\"applyForm\"><dl><dt>请选择简历：</dt><dd>" + apply.genHTML("3", data) + "<img src=\"" + piximg + "\" width=\"12\" height=\"1\" /><select name=\"" + apply.langSelId + "\" id=\"" + apply.langSelId + "\" onchange=\"zlzp.searchjob.checkResumeScore()\"></select><a href=\"#\" onclick=\"zlzp.searchjob.editResume();return false;\">修改</a></dd><dd class=\"errInfo\" id=\"resumeScore_errCon\"></dd><dd class=\"blankBr\"></dd><dt>请选择求职信：</dt><dd>" + apply.genHTML("4", data, true) + "</dd>";
                if (apply.vanId.num > 9) html += "<dd class=\"blankBr\"></dd><dt>请输入验证码：</dt><dd><input type=\"text\" class=\"textInput\" name=\"validate\" id=\"validate\" value=\"\" maxlength=\"5\" onkeydown=\"var e = event || window.event;if(e.keyCode == 13){zlzp.searchjob.applyNow();return false;}\" /></label><a title=\"刷新验证码\" href=\"#\" onClick=\"ZPIDC.applyjob.applyMoreTenValidate();return false;\" class=\"aValid\"><img align=\"absmiddle\" id=\"vimg\" alt=\"看不清？点击更换\"></a><a title=\"刷新验证码\" href=\"#\" onClick=\"ZPIDC.applyjob.applyMoreTenValidate();return false;\" class=\"aValid\">看不清，换一张</a></dd><dd class=\"errInfo\" id=\"validateErrCon\"></dd>";
                html += "</dl><div class=\"orgBgBlock\"><label><input type=\"checkbox\" name=\"" + apply.setReDeId + "\" id=\"" + apply.setReDeId + "\" value=\"1\" /><img src=\"" + piximg + "\" width=\"8\" height=\"1\" />申请职位时，默认投递此简历，有效期为30天</label></div><div class=\"greyDottedLineH\"></div><div id=\"submitBlock\"><div class=\"leftFBlock\"><a href=\"#\" class=\"popapplyButton\" style=\"background:url(http://my.zhaopin.com/images/popapply_butbg_mout.gif);\" onclick=\"zlzp.searchjob.applyNow();return false;\" id=\"" + apply.applynowId + "\">立即申请</a></div><div class=\"rightFBlock\"><a href=\"#\" class=\"txtLink\" onclick=\"zlzp.searchjob.previewResume();return false;\">预览简历</a></div><div class=\"clear\"></div></div></form></div>"; break;
            case "2": //显示新建简历（未有简历）
                html += "<div class=\"orgBgBlockTop\">您目前还没有简历，请先新建一份简历。</div><div id=\"submitBlock\"><a href=\"#\" class=\"popapplyButton\" style=\"background:url(http://my.zhaopin.com/images/popapply_butbg_mout.gif);\" onclick=\"zlzp.searchjob.newResume();return false;\">新建简历</a></div>"; break;
            case "3": //显示简历下拉框
                if (data["resume"] && data["resume"].length) {
                    var r = data["resume"];
                    html += "<select name=\"" + apply.resumeSelId + "\" id=\"" + apply.resumeSelId + "\" onchange=\"zlzp.searchjob.genLangOptions()\">";
                    for (var i = 0; i < r.length; i++) {
                        if (r[i]["langcn"] == "1" || r[i]["langen"] == "1") html += "<option value=\"" + i + "\"" + (r[i]["defaultkey"] == "" ? "" : " selected=\"selected\"") + ">" + r[i]["resume_name"] + "</option>";
                    }
                    html += "</select>";
                }; break;
            case "4": //显示求职信
                if (data["coverletter"] && data["coverletter"].length) {
                    var cl = data["coverletter"];
                    html += "<select name=\"" + apply.coverletterSelId + "\" id=\"" + apply.coverletterSelId + "\" onchange=\"zlzp.searchjob.changeCoverletter()\">";
                    var nodef = true;
                    for (var i = 0; i < cl.length; i++) {
                        html += "<option value=\"" + cl[i]["coverletternumber"] + "_" + cl[i]["version"] + "\"" + (cl[i]["defaultkey"] == "1" ? " selected=\"selected\"" : "") + ">" + cl[i]["coverlettername"] + "</option>";
                        nodef = nodef && !(cl[i]["defaultkey"] == "1");
                    }
                    html += "<option value=\"\"" + (nodef ? " selected=\"selected\"" : "") + ">不发送求职信</option>";
                    html += "</select><a href=\"#\" onclick=\"zlzp.searchjob.editCoverletter();return false;\" id=\"" + apply.coverletterEditId + "\" style=\"display:" + (nodef ? "none" : "") + "\">修改</a>";
                }
                else {
                    html += "<select name=\"" + apply.coverletterSelId + "\" id=\"" + apply.coverletterSelId + "\" disabled=\"disabled\"><option value=\"\">不发送求职信</option></select><a href=\"#\" onclick=\"zlzp.searchjob.newCoverletter();return false;\">新建</a>";
                } break;
            case "5": //显示空白过渡页
                html += "<div id=\"applyNowPlaceholder\"></div>"; break;
            case "6": //设置默认简历
                html += "<div id=\"defaultBlock\"><form name=\"" + apply.setDefaultForm + "\"><div class=\"orgBgBlockTop\">在下面设置默认简历，申请职位时直接投递，有效期为30天</div><dl><dt class=\"largeTxt\">是否需要默认简历设置：</dt><dd class=\"largeTxt\"><label class=\"blueTxt\"><input type=\"radio\" name=\"" + apply.setDefaultRadio + "\" value=\"1\"" + (data["defaultkey"] == "" ? "" : " checked=\"checked\"") + " onclick=\"zlzp.searchjob.switchNeedDefault(this.value)\" />需要</label>&nbsp;&nbsp;<label class=\"blueTxt\"><input type=\"radio\" name=\"" + apply.setDefaultRadio + "\" value=\"0\"" + (data["defaultkey"] == "" ? " checked=\"checked\"" : "") + " onclick=\"zlzp.searchjob.switchNeedDefault(this.value)\" />不需要</label></dd></dl><dl id=\"" + apply.resuColeBlockId + "\"><dd class=\"blankBr\"></dd><dt>请选择简历：</dt><dd>" + apply.genHTML("3", data) + "<img src=\"" + piximg + "\" width=\"12\" height=\"1\" /><select name=\"" + apply.langSelId + "\" id=\"" + apply.langSelId + "\" onchange=\"zlzp.searchjob.checkResumeScore()\"></select><a href=\"#\" onclick=\"zlzp.searchjob.editResume();return false;\">修改</a></dd><dd class=\"errInfo\" id=\"resumeScore_errCon\"></dd><dd class=\"blankBr\"></dd><dt>请选择求职信：</dt><dd>" + apply.genHTML("4", data, false) + "</dd></dl><div class=\"greyDottedLineH\"></div><div id=\"submitBlock\"><a href=\"#\" class=\"popapplyButton\" style=\"background:url(http://my.zhaopin.com/images/popapply_butbg_mout.gif);\" onclick=\"zlzp.searchjob.saveDefault();return false;\">保&nbsp;&nbsp;存</a></div></form></div>"; break;
            case "7": //信息更新需刷新重新申请
                html += "<div class=\"orgBgBlockTop\">" + argu + "</div><div id=\"submitBlock\"><a href=\"#\" class=\"popapplyButton\" style=\"background:url(http://my.zhaopin.com/images/popapply_butbg_mout.gif);\" onclick=\"zlzp.searchjob.freshInfo();return false;\">刷&nbsp;&nbsp;新</a></div>"; break;
            case "8": //设置失败/成功
                html += "<div class=\"orgBgBlockTop\">" + (argu ? apply.tip4setOk : apply.getTip4setErr(data["loginstatus"])) + "</div><div id=\"submitBlock\"><a href=\"#\" class=\"popapplyButton\" style=\"background:url(http://my.zhaopin.com/images/popapply_butbg_mout.gif);\" onclick=\"zlzp.searchjob.ajaxApply.closeDiv();return false;\">关&nbsp;&nbsp;闭</a></div>"; break;
            case "9": //已登录有默认简历职位数超10，显示验证码
                html += "<div id=\"applyBlock\"><form name=\"applyForm\"><dl><dd class=\"blankBr\"></dd><dt>请输入验证码：</dt><dd><input type=\"text\" class=\"textInput\" name=\"validate\" id=\"validate\" value=\"\" maxlength=\"5\" onkeydown=\"var e = event || window.event;if(e.keyCode == 13){zlzp.searchjob.applyNowByDefault();return false;}\" /></label><a title=\"刷新验证码\" href=\"#\" onClick=\"ZPIDC.applyjob.applyMoreTenValidate();return false;\" class=\"aValid\"><img align=\"absmiddle\" id=\"vimg\" alt=\"看不清？点击更换\"></a><a title=\"刷新验证码\" href=\"#\" onClick=\"ZPIDC.applyjob.applyMoreTenValidate();return false;\" class=\"aValid\">看不清，换一张</a></dd><dd class=\"errInfo\" id=\"validateErrCon\"></dd></dl><div class=\"greyDottedLineH\"></div><div id=\"submitBlock\"><a href=\"#\" class=\"popapplyButton\" style=\"background:url(http://my.zhaopin.com/images/popapply_butbg_mout.gif);\" onclick=\"zlzp.searchjob.applyNowByDefault();return false;\" id=\"" + apply.applynowId + "\">立即申请</a></div></form></div>"; break;
            case "10": //投递失败/成功
                html += "<div class=\"orgBgBlockTop\">" + (argu ? apply.tip4applyOk : apply.getTip4applyErr(data["loginstatus"])) + "</div><div id=\"submitBlock\"><a href=\"#\" class=\"popapplyButton\" style=\"background:url(http://my.zhaopin.com/images/popapply_butbg_mout.gif);\" onclick=\"zlzp.searchjob.ajaxApply.closeDiv();return false;\">关&nbsp;&nbsp;闭</a></div>"; break;
            case "11": //超时
                html += "<div class=\"orgBgBlockTop\">" + apply.tip4timeout + "</div><div id=\"submitBlock\"><a href=\"#\" class=\"popapplyButton\" style=\"background:url(http://my.zhaopin.com/images/popapply_butbg_mout.gif);\" onclick=\"zlzp.searchjob.ajaxApply.closeDiv();return false;\">关&nbsp;&nbsp;闭</a></div>"; break;
            case "12": //有非招聘投递职位提示
                html += "<div class=\"redTips\">所选职位中，有" + apply.vanId.no.split(apply.vanSepa).length + "个职位不能批量申请，需单独申请，<a href=\"http://my.zhaopin.com/jobseeker/req_vacancy.asp?VanID=" + apply.vanId.no + "\" target=\"_blank\">查看详情</a>&gt;&gt;</div>"; break;
            case "13": //全部是非招聘投递职位提示
                html += "<div class=\"redTips\">所选职位，不能批量申请，需单独申请，<a href=\"http://my.zhaopin.com/jobseeker/req_vacancy.asp?VanID=" + apply.vanId.no + "\" target=\"_blank\">查看详情</a>&gt;&gt;</div>"; break;
        }
        return html;
    };
    apply.buildDivFrame = function () {
        /*由于在职位终端页同时引用了文件http://img02.zhaopin.cn/2012/js/sou/searchresult1.js和http://img01.zhaopin.cn/2014/jobs/js/ajaxapplynow.js
        使得在申请职位、收藏职位都被点击了后会存在连个弹出框，从而导致登录出错，所以添加了下面注释start和end之间的代码；如果没有同时引用两个文件，就不需要这段代码，可以删除；*/
        /*2015-07-22 start*/
        try{
            if(zlapply && zlapply.searchjob.ajaxApply){
                var pop_div = document.getElementsByClassName('popupApply');
                for(var i = 0; i < pop_div.length; i++){
                    pop_div[i].parentNode.removeChild(pop_div[i]);
                }
                apply.div = undefined;
                var mask_div = document.getElementsByClassName('divMask');
                for(var i = 0; i < mask_div.length; i++){
                    mask_div[i].parentNode.removeChild(mask_div[i]);
                }
                zlzp.searchjob.bodymask = undefined;
            }
        }catch(e){

        }
        /*2015-07-22 end*/
        function c(tag) {
            return document.createElement(tag);
        }
        if (!apply.div) {
            var div = c("div");
            div.className = "popupApply";
            div.state = "close";
            addEvent(div, "click", function (e) { e = e || window.event; if (e.stopPropagation) e.stopPropagation(); else e.cancelBubble = true; });
            apply.div = div;
            ($("zlzp_jsc") || document.body).appendChild(div);
            div = c("div");
            div.className = "topBar";
            div.style.backgroundImage = "url(http://my.zhaopin.com/images/topbar_bg.gif)";
            div.style.backgroundRepeat = "repeat-x";
            var h1 = c("h1");
            apply.titleCon = h1;
            div.appendChild(h1);
            var a = c("a");
            a.setAttribute("title", "关闭");
            a.style.background = "url(http://my.zhaopin.com/images/icon_close_mout.gif)";
            a.onclick = apply.closeDiv;
            div.appendChild(a);
            apply.div.appendChild(div);
            var div_f = c("div");
            setStyle(div_f, "position", "relative");
            apply.div.appendChild(div_f);
            div = c("div");
            div.className = "mainBlock";
            apply.mainCon = div;
            div_f.appendChild(div);
            div = c("div");
            div.className = "loading";
            apply.loadCon = div;
            div_f.appendChild(div);
            if (isIE6) {
                var shim = zlzp.searchjob.buildShim(apply.div);
                ($("zlzp_jsc") || document.body).appendChild(shim);
                apply.div.shim = shim;
            }
        }
    };
    apply.openDiv = function () {
        if (apply.closeDivDelay) {
            clearTimeout(apply.closeDivDelay);
            apply.closeDivDelay = null;
        }
        if (apply.div && apply.div.state == "close") {
            var div = apply.div;
            div.state = "open";
            apply.positionDiv();
            setStyle(div, "visibility", "visible");
            if (div.shim) setStyle(div.shim, "visibility", "visible");
            zlzp.searchjob.bodymask.show();
        }
    };
    apply.positionDiv = function () {
        var div = apply.div;
        var vwh = getViewportSize();
        div.x_abs = (vwh.w - div.offsetWidth) / 2;
        div.y_abs = (vwh.h - div.offsetHeight) / 2;
        var x = div.x_abs;
        var y = div.y_abs;
        if (isIE6) {
            var sxy = getScrollPosition();
            x += sxy.x;
            y += sxy.y;
        }
        setStyle(div, "left", x + "px");
        setStyle(div, "top", y + "px");
        if (div.shim) {
            setStyle(div.shim, "left", x + "px");
            setStyle(div.shim, "top", y + "px");
        }
    };
    apply.closeDiv = function () {
        if (apply.closeDivDelay) {
            clearTimeout(apply.closeDivDelay);
            apply.closeDivDelay = null;
        }
        if (apply.div && apply.div.state == "open") {
            apply.div.state = "close";
            setStyle(apply.div, "visibility", "hidden");
            setStyle(apply.div, "top", "-100px");
            setStyle(apply.div, "left", "-100px");
            setStyle(apply.loadCon, "visibility", "hidden");
            if (apply.div.shim) {
                setStyle(apply.div.shim, "visibility", "hidden");
                setStyle(apply.div.shim, "top", "-100px");
                setStyle(apply.div.shim, "left", "-100px");
            }
            zlzp.searchjob.bodymask.hide();
        }
    };
    apply.fixShimWH = function () {
        var div = apply.div;
        if (div.shim) {
            setStyle(div.shim, "width", div.offsetWidth + "px");
            setStyle(div.shim, "height", div.offsetHeight + "px");
        }
    };
    apply.lockDiv = function () {
        if (apply.div && apply.div.state == "open") {
            var div = apply.div;
            if ("x_abs" in div && isNumber(div.x_abs)) {
                var sx = document.documentElement.scrollLeft || document.body.scrollLeft;
                setStyle(div, "left", (sx + div.x_abs) + "px");
                if (div.shim) setStyle(div.shim, "left", (sx + div.x_abs) + "px");
            }
            if ("y_abs" in div && isNumber(div.y_abs)) {
                var sy = document.documentElement.scrollTop || document.body.scrollTop;
                setStyle(div, "top", (sy + div.y_abs) + "px");
                if (div.shim) setStyle(div.shim, "top", (sy + div.y_abs) + "px");
            }
        }
    };
    if (isIE6) addEvent(window, "scroll", apply.lockDiv);

    window.ajax = ajax = function (options) {
        options = {
            type: (options.type && options.type.toUpperCase()) || "POST",
            url: options.url || "",
            timeout: options.timeout || 120000,
            cache: "cache" in options ? options.cache : true,
            onComplete: options.onComplete || function () { },
            onError: options.onError || function () { },
            onSuccess: options.onSuccess || function () { },
            onAbort: options.onAbort || options.onComplete || function () { },
            dataResType: options.dataResType || "",
            dataReqType: options.dataReqType || "form",
            data: options.data || ""
        };
        var reqCt = {
            form: "application/x-www-form-urlencoded",
            xml: "application/xml",
            script: "application/json"
        };
        var url4get = options.url + (options.data != "" ? "?" + options.data : "");
        if (options.cache === false && options.type == "GET") {
            var ts = +new Date;
            var ret = url4get.replace(/(\?|&)_=.*?(&|$)/, "$1_=" + ts + "$2");
            url4get = ret + ((ret == url4get) ? (url4get.match(/\?/) ? "&" : "?") + "_=" + ts : "");
        }
        var xml = xhr();
        xml.open(options.type, options.type == "GET" ? url4get : options.url, true);
        if (options.type == "POST") xml.setRequestHeader("content-type", reqCt[options.dataReqType]);
        var timeoutLength = options.timeout;
        var requestDone = false;

        //setTimeout(function(){requestDone = true;},timeoutLength);
        var timeoutControl = centralTimer.delay(function () { requestDone = true; xml.abort(); if (xml) { xml.onreadystatechange = function () { }; options.onAbort(xml); } }, timeoutLength);
        timeoutControl.fire();

        xml.onreadystatechange = function () {
            if (xml.readyState == 4 && !requestDone) {
                if (timeoutControl && isFunction(timeoutControl["cancel"])) timeoutControl.cancel();
                if (httpSuccess(xml)) {
                    options.onSuccess(httpData(xml, options.dataResType));
                } else {
                    options.onError();
                }
                options.onComplete();
                xml = null;
            }
            /*
             else if(requestDone){
             xml.abort();
             if(xml) xml.onreadystatechange = function(){};
             options.onAbort();
             }
             */
        };
        xml.send(options.type == "POST" ? options.data : null);
        function httpSuccess(r) {
            try {
                return !r.status && location.protocol == "file:" ||
                    (r.status >= 200 && r.status < 300) ||
                    r.status == 304 ||
                    navigator.userAgent.indexOf("Safari") >= 0 && typeof r.status == "undefined";
            } catch (e) { }
            return false;
        }
        function httpData(r, type) {
            var ct = r.getResponseHeader("content-type");
            var data = !type && ct && ct.indexOf("xml") >= 0;
            data = type == "xml" || data ? r.responseXML : r.responseText;
            if (type == "script") eval.call(window, data);
            return data;
        }
        return xml;
    };
    ajax.serialize = function (a) {// A hash of key/value pairs  OR  An array of input elements
        var s = [];
        if (a.constructor == Array) {
            for (var i = 0; i < a.length; i++) s.push(a[i].name + "=" + a[i].value.urlEncode());
        }
        else {
            for (var j in a) s.push(j + "=" + a[j].urlEncode());
        }
        return s.join("&");
    };

    window.jsonp = jsonp = function (options) {
        function removeScript(js) {
            var parent = js.parentNode;
            if (parent && parent.nodeType == 1) {
                js.onreadystatechange = js.onload = null;
                parent.removeChild(js);
            }
        }

        options = {
            url: options.url || "",
            data: options.data || "",
            timeout: options.timeout || 120000, //if(!jsflagok) timeout无效
            onSuccess: options.onSuccess || function () { },
            onError: options.onError || function () { },
            onAbort: options.onAbort || function () { },
            beforeCall: options.beforeCall || function () { },
            noCallback: options.noCallback || false,
            cache: options.cache || false,
            callback: options.callback || "jsonp" + getUid(),
            callbackParName: options.callbackParName || "callback"
        };
        if (options.url == "") return;
        if (!options.noCallback) {
            var callbackPair = options.callbackParName + "=" + options.callback;
            options.data += options.data == "" ? callbackPair : "&" + callbackPair;
        }

        if (!options.cache) {
            var cachePair = "_=" + (+new Date);
            options.data += options.data == "" ? cachePair : "&" + cachePair;
        }
        options.url += options.data == "" ? "" : "?" + options.data;
        var head = window.document.getElementsByTagName("head")[0];
        var jsflag = false;
        var jsflagok = false;
        var timeoutflag = false;
        if (!options.noCallback && !window[options.callback] && !isFunction(window[options.callback])) {
            jsflagok = true;
            window[options.callback] = function () {
                if (!timeoutflag) {
                    if (jsflagok && timeoutControl && isFunction(timeoutControl["cancel"])) timeoutControl.cancel();
                    jsflag = true;
                    options.onSuccess.apply(this, arguments);
                }
            };
        }
        var reg = /loaded|complete|undefined/i;
        var js = document.createElement("script");
        js.charset = "utf-8";
        js.type = "text/javascript";
        js.defer = true;
        js.async = true;
        js.onerror = function () {
            if (!timeoutflag) {
                if (jsflagok && timeoutControl && isFunction(timeoutControl["cancel"])) timeoutControl.cancel();
                options.onError(this);
                removeScript(this);
            }
        };
        js.onreadystatechange = js.onload = function () {
            if (!timeoutflag) {
                var myjs = this;
                if (reg.test(myjs.readyState)) {
                    if (jsflagok && timeoutControl && isFunction(timeoutControl["cancel"])) timeoutControl.cancel();
                    centralTimer.delay(function () {
                        jsflagok && !jsflag && options.onError(myjs);
                    }, 100);
                    removeScript(myjs);
                }
            }
        };
        js.src = options.url;
        if (options.beforeCall && isFunction(options.beforeCall)) options.beforeCall();
        head.insertBefore(js, head.firstChild);
        if (jsflagok) {
            var timeoutControl = centralTimer.delay(function () { timeoutflag = true; js.onerror = js.onreadystatechange = js.onload = function () { }; options.onAbort(options.callback); removeScript(js); }, options.timeout);
            timeoutControl.fire();
        }
    };

    var timerID = 0;
    var timers_reg = [];
    var timers = [];
    var aniType = {
        linear: function (a) {
            return a;
        },
        easeOut: function (a) {
            return 1 - Math.pow(1 - a, 3);
        },
        easeOutCos: function (a) {
            return -(Math.cos(Math.PI * a) - 1) / 2;
        },
        easeInAndOut: function (a) {
            return (3 - 2 * a) * a * a;
        }
    };
    window.centralTimer = centralTimer = {
        frequence: 15,
        animation: function (duration, htmls, endfn, startfn) {
            for (var i = 0, j; j = htmls[i++]; ) {
                j[4] = aniType[j[4]] || aniType["linear"];
                setStyle(j[0], j[1], j[2] + j[5]);
            }
            timers_reg.push({
                duration: duration,
                htmls: htmls,
                endFn: endfn,
                startFn: startfn,
                origPoint: 0,
                index: null,
                aniFlag: true,
                aniDir: "f",
                setStartHTML: function (htmlIndex, newVal) {
                    this.htmls[htmlIndex] && (this.htmls[htmlIndex][2] = newVal);
                },
                setEndHTML: function (htmlIndex, newVal) {
                    this.htmls[htmlIndex] && (this.htmls[htmlIndex][3] = newVal);
                },
                reset: function () {
                    this.origPoint = 0;
                    this.aniDir = "f";
                    for (var i = 0, j; j = this.htmls[i++]; ) setStyle(j[0], j[1], j[2] + j[5]);
                },
                restart: function () {
                    if (this.aniFlag) {
                        this.reset();
                        this.startFn && this.startFn();
                        this.onStart();
                    }
                },
                resume: function () {
                    if (this.aniFlag) this.onStart();
                },
                forward: function () {
                    if (this.aniFlag) {
                        this.aniDir = "f";
                        this.resume();
                    }
                },
                back: function () {
                    if (this.aniFlag) {
                        this.aniDir = "b";
                        this.resume();
                    }
                },
                pause: function () {
                    if (this.index !== null) {
                        if (this.aniDir == "f") this.origPoint = (new Date).getTime() - this.origPoint;
                        else if (this.aniDir == "b") this.origPoint = this.backPoint * 2 - (new Date).getTime() - this.origPoint;
                        this.onStop();
                    }
                },
                cancel: function () {
                    if (this.index != null) this.pause();
                    timers_reg.splice(this.regIndex, 1);
                },
                onStart: function () {
                    this.aniFlag = false;
                    this.origPoint = (new Date).getTime() - this.origPoint;
                    if (this.aniDir == "b") this.backPoint = (new Date).getTime();
                    this.index = timers.length;
                    timers.push(this);
                    timerID = timerID || setInterval(timeControl, centralTimer.frequence);
                },
                onStop: function () {
                    this.aniFlag = true;
                    timers.splice(this.index, 1);
                    for (var i = this.index, j; j = timers[i++]; ) j.index--;
                    this.index = null;
                },
                step: function () {
                    var elapse = this.aniDir == "f" ? ((new Date).getTime() - this.origPoint) : (this.backPoint * 2 - (new Date).getTime() - this.origPoint);
                    if ((this.aniDir == "f" && elapse >= this.duration) || (this.aniDir == "b" && elapse <= 0)) {//end
                        for (var i = 0, j; j = this.htmls[i++]; ) setStyle(j[0], j[1], (this.aniDir == "f" ? j[3] : j[2]) + j[5]);
                        this.origPoint = elapse < 0 ? 0 : elapse > this.duration ? this.duration : elapse;
                        this.onStop();
                        if (this.aniDir == "f") this.endFn && this.endFn();
                        return 0;
                    }
                    else {//continue
                        for (var i = 0, j; j = this.htmls[i++]; ) {
                            var sValue = j[2] + (j[3] - j[2]) * j[4](elapse / this.duration);
                            if (j[5] == "px") sValue = Math.round(sValue);
                            setStyle(j[0], j[1], sValue + j[5]);
                        }
                        return 1;
                    }
                }
            });
            return timers_reg[timers_reg.length - 1];
        },
        delay: function (fn, time) {
            var steps = Math.round(time / centralTimer.frequence);
            timers_reg.push({
                index: null,
                fn: fn,
                steps: steps,
                count: 1,
                fireFlag: true,
                fire: function () {
                    if (this.fireFlag) {
                        this.fireFlag = false;
                        this.index = timers.length;
                        timers.push(this);
                        timerID = timerID || setInterval(timeControl, centralTimer.frequence);
                    }
                },
                cancel: function () {
                    if (this.index !== null) this.onStop();
                },
                onStop: function () {
                    timers.splice(this.index, 1);
                    for (var i = this.index, j; j = timers[i++]; ) j.index--;
                    this.index = null;
                    this.fireFlag = true;
                    this.count = 1;
                },
                step: function () {
                    if (this.count >= this.steps) {//end
                        this.onStop();
                        this.fn();
                        return 0;
                    }
                    else {//wait
                        this.count++;
                        return 1;
                    }
                }
            });
            timers_reg[timers_reg.length - 1].fire();
            return timers_reg[timers_reg.length - 1];
        },
        periodical: function () {
        }
    };
    function timeControl() {
        for (var i = 0, j; j = timers[i++]; ) j.step();
        if (!timers.length) {
            window.clearInterval(timerID);
            timerID = 0;
        }
    }

    addEvent(window, "resize", zlzp.searchjob.fixBodyMask);
	
	
	
	
})()