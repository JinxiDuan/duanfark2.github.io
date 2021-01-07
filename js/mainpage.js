$(function Openpage() {
	$('#spiner').animate({
		right: '0',
		bottom: '0'
	}, 1200);
	$('#motobox').fadeIn()
	var loadhere = setInterval(
		function loadInG() {
			var loadingP = $('#loadingP')
			loadingP.animate({
				height: '147px',
				opacity: 1,
			}, );
			loadingP.animate({
				width: '300px',
				opacity: 0.5,
			}, );
			loadingP.animate({
				height: '50px',
				width: '50px',
				opacity: 1,
			}, );
			$('#TxtT').fadeIn();
			loadingP.animate({
				width: '50px',
			}, )
		})
$('#spiner').animate({
	right: '100%'
}, 1000);
})
$(function() {
	let windowWidth = document.body.clientWidth + 20; //获取屏幕宽度
	let windowHeight = $(window).height();
	let childNum = $('#bannerContainer').children('li').length; //获取子节点个数
	let listWidth = windowWidth * childNum;
	$("#bannerContainer li").css('width', windowWidth); //设置li的宽
	$("#bannerContainer li img").css('height', windowHeight);
	$("#bannerContainer").css('width', listWidth); //设置ul的宽
	//根据图片张数创建小图标 
	for (let x = 1; x <= childNum; x++) {
		$("#bannerTip").append("<li>" + x + "</li>");
		$("#bannerTip li").first().addClass("active")
	}

	// 获取第一张图片的节点对象
	let firstImg = $('#bannerContainer li').first().clone();
	childNum = childNum + 1;
	// 添加到最后的位置 并设置 ul 的宽度
	$('#bannerContainer').append(firstImg).width(childNum * windowWidth);
	let i = 0;
	let timer;

	// 移动图片
	function moveImg() {

		// 最后一张
		if (i === childNum) {
			$('#bannerContainer').css({
				left: 0
			});
			i = 1;
			// console.log('最后一张')
			// console.log(i)
		}


		// 移动图片动画
		$('#bannerContainer').stop().animate({
			left: i * -windowWidth
		}, 1000);

		// // 换一下每个图片的小标记
		if (i === (childNum - 1)) {
			$('#bannerTip li').eq(0).addClass('active').siblings().removeClass('active');
		} else {
			$('#bannerTip li').eq(i).addClass('active').siblings().removeClass('active');
		}
	}

	// 点击小标记，跳转到指定的图片
	$('#bannerTip li').click(function() {
		i = $(this).index();
		moveImg();
	});
	$('#leftjt').click(function() {
		if (i === 1) {
			i = 5;
			moveImg();
		} else {
			i--;
			moveImg();
		}
	})
	$('#rightjt').click(function() {
		if (i === 5) {
			i = 1;
			moveImg();
		} else {
			i++;
			moveImg();
		}
	})

	//自动播放
	function autoPlay() {
		timer = setInterval(function() {
			i++;
			moveImg();
		}, 3000);
	}

	autoPlay();

	// 鼠标移入幻灯片清除定时器
	$('#bannerTip,.jtinCon,.bannerContainer li').mouseover(function() {
		clearInterval(timer)
	}).mouseout(function() {
		// 鼠标离开重新播放
		autoPlay();
	})


});
$(document).ready(function() {
	var id = 0;
	$('.bannerCon').mousemove(function() {
		clearInterval(id);
		$('.jtinCon').css("opacity", 0.8);
		id = setInterval(function hideit() {
			$('.jtinCon').css("opacity", 0);
		}, 2500)
	});
	$('.jtinCon').click(function() {
		$('.jtinCon').css("opacity", 0.8);
	});
});
$(document).ready(function() {
	let windowHeight = $(window).height();
	$('.bannerCon').mousewheel(function(event) {
		// console.log(event.deltaX, event.deltaY, event.deltaFactor);
		if (event.deltaY === -1) {
			$('#menu').animate({
				top: -windowHeight - 10,
			}, )
		}
		return false;
	});
	$('#mousedown').click(function() {
		$('#menu').animate({
			top: -windowHeight - 10,
		}, )
	})

});
$(function() {
	$('#menu').mousewheel(function(event) {
		var isTop = $(document).scrollTop();
		var isBottom = $(this).height() + isTop - $("body").height();
		if (isTop == 0) {
			if (event.deltaY === 1) {
				$('#menu').animate({
					top: '0px',
				}, )
			}
		}
	});
});
