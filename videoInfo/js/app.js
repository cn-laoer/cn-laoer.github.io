document.ondragstart = document.onselectstart = function(){return false;};
function createNode(type, id, css, fathernode, beforeNode) {

    var node = $(type);
    if (beforeNode) {
        beforeNode.before(node);
    }
    node.attr('id', id);
    node.addClass(css);

    if (fathernode) {
        node.appendTo(fathernode);
    }

    return node;
}

$(document).ready(function () {
    $("#btn_video_play").show();
    $("#share_user").show();
})

//视频设置
function videoCanPlay() {
    $("#spc").hide();
    $("#btn_video_play").show();
    $("#share_video")[0].pause();
}


function videoOnplaying() {
    $("#spc").show();
    $("#btn_video_play").hide();
    $("#share_user").hide();
    $("#video_list_box")[0].style.webkitAnimation = "video_list_animate 0.1s linear forwards";
    $("#video_list_box")[0].style.animation = "video_list_animate 0.1s linear forwards";
}


function videoOnended() {
    $("#spc").hide();
    $("#btn_video_play").show();
}


function videoPause() {
    $("#btn_video_play").show();
    var myVideo = document.getElementsByTagName('video')[0];   //获取视频video
    if (myVideo.paused) {
        myVideo.play();
    } else {
        myVideo.pause();
    }
}

function playVideo() {
    $('.share_conup #btn_video_play').css('display', 'none');
    $('.share_conup #btn_video_play').css('top', '48%');
    $("#share_video")[0].play();
}
//点击打开已经安装的应用
// $('.share_con_button').click(function () {
//     var u = navigator.userAgent, app = navigator.appVersion;
//     var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
//     var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
//     if (isAndroid) {
//         window.location.href = "tago://wwyt/openwith"; /***打开app的协议，有安卓同事提供***/
//         window.setTimeout(function () {
//             alert("没有安装");
//         }, 2000)
//     }
// });