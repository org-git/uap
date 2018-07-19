/**
 * 校验手机号码
 * @param {*} num 手机号码
 */
export function isSpecialPhone(num) {
    return /^1[2,3,4,5,7,8]\d{9}$/.test(num)
}
/**
 * 校验中英文姓名
 * @param {*} name 中英文姓名
 */
export function isName(name) {
    return /[a-zA-Z\u4E00-\u9FA5]+$/.test(name)
}
/**
 * 校验输入金额
 * @param {*} n 金额
 */
export function isMoney(n) {
    return /^\d+$/.test(n)
}
/**
 * 去空格
 * @param {*} str 字符串
 */
export function trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, '')
}
/**
 * 遍历参数？后面的
 * @param {*} obj 
 */
export function formatParam(obj) {
    let str = ''
    for (let i in obj) {
        str += `${i}=${obj[i]}&`
    }
    return str.slice(0, -1)
    // console.log(str)  比如{a:111,b:222,c:333}变为a=111&b=222&c=333
}
/**
 * 获取地址栏url参数
 * @param {*} name 参数名
 */
export function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}
/**
 * url参数处理
 */
export var URL = {
    /**
     * 设置参数
     * @param {*} key 
     * @param {*} value 
     * @param {*} url 
     */
    set(key, value, url) {
        var reg = new RegExp('(' + key + ')=([^&]*)', 'ig');
        var url = url ? url : location.href;
        var result = reg.exec(url);
        if (result) {
            return url.replace(result[0], key + '=' + value);
        } else {
            var reg = /\?(.*)#?(.*)/gi;
            var search = reg.exec(url);
            if (search !== null) {
                return url.replace(search[1], search[1] + '&' + key + '=' + value);;
            } else {
                return '';
            }
        }
    },
    /**
     * 获取参数
     * @param {*} key 
     * @param {*} url 
     */
    get(key, url) {
        var reg = new RegExp('(' + key + ')=([^&]*)', 'ig');
        var url = url ? url : location.href;
        var result = reg.exec(url);
        if (result) {
            return result[2];
        } else {
            return '';
        }
    }
}

/**
 * get the IP addresses associated with an account
 * @param {*} callback 
 */
export function getIPs(callback){
    var ip_dups = {};
    //compatibility for firefox and chrome
    var RTCPeerConnection = window.RTCPeerConnection
        || window.mozRTCPeerConnection
        || window.webkitRTCPeerConnection;
    //bypass naive webrtc blocking
    if (!RTCPeerConnection) {
        var iframe = document.createElement('iframe');
        //invalidate content script
        iframe.sandbox = 'allow-same-origin';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
        var win = iframe.contentWindow;
        window.RTCPeerConnection = win.RTCPeerConnection;
        window.mozRTCPeerConnection = win.mozRTCPeerConnection;
        window.webkitRTCPeerConnection = win.webkitRTCPeerConnection;
        RTCPeerConnection = window.RTCPeerConnection
            || window.mozRTCPeerConnection
            || window.webkitRTCPeerConnection;
    }
    //minimal requirements for data connection
    var mediaConstraints = {
        optional: [{RtpDataChannels: true}]
    };
    //firefox already has a default stun server in about:config
    //    media.peerconnection.default_iceservers =
    //    [{"url": "stun:stun.services.mozilla.com"}]
    var servers = undefined;
    //add same stun server for chrome
    if(window.webkitRTCPeerConnection)
        servers = {iceServers: [{urls: "stun:stun.services.mozilla.com"}]};
    //construct a new RTCPeerConnection
    var pc = new RTCPeerConnection(servers, mediaConstraints);
    //listen for candidate events
    pc.onicecandidate = function(ice){
        //skip non-candidate events
        if(ice.candidate){
            //match just the IP address
            var ip_regex = /([0-9]{1,3}(\.[0-9]{1,3}){3})/
            var ip_addr = ip_regex.exec(ice.candidate.candidate)[1];
            //remove duplicates
            if(ip_dups[ip_addr] === undefined)
                callback(ip_addr);
            ip_dups[ip_addr] = true;
        }
    };
    //create a bogus data channel
    pc.createDataChannel("");
    //create an offer sdp
    pc.createOffer(function(result){
        //trigger the stun server request
        pc.setLocalDescription(result, function(){}, function(){});
    }, function(){});
}