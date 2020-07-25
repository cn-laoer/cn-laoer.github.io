//用rem布局适配各种手机屏幕尺寸
$(document).ready(function() {
	
	$(function() {
		var docEl = document.documentElement;
		var resize = 'orientationchange' in window ? 'orientationchange' : 'resize';
		var setRem = function() {

			var screenWidth = docEl.clientWidth || window.screen.width || 360;
			// 1080 PSD宽度(可变的)
			docEl.style.fontSize = (100 * screenWidth / 750) + 'px';
		};
		window.addEventListener('resize', setRem, false);
		setRem();
	});

});
