$(function(){
	$("#gnb > ul > li").hover(
		function(){
			$(".upper").addClass("active");
		},
		function(){
			$(".upper").removeClass("active");
		}
	);

	$("#gnb > ul > li:first-child a").focusin(function(){
		$(".upper").addClass("active");
	});
	$("#gnb ul li:last-child li:last-child").focusout(function(){
		$(".upper").removeClass("active");
	});
	$("#gnb > ul > li").focusin(function(){
		$(this).children("a").addClass("active");
	});
	$("#gnb li li:last-child").focusout(function(){
		$(this).parent().parent().removeClass("active");
	});


var n=0;
var w=$(window).width();
var amount=0;

var timer=setInterval(function(){
	$(".controlls li").eq(n).addClass("active");
	$(".right").trigger("click");
	if(n < 3){
		n++;
	}
	else{
		n=0;
	}
	$(".controlls li").removeClass("active");
	$(".controlls li").eq(n).addClass("active");
}, 5000);

$(".left, .right").hover(
	function(){
		clearInterval(timer);
	},
	function(){
		timer=setInterval(function(){
			$(".right").trigger("click");
		}, 5000);
	}
);

$(".left").click(function(e){
	if($(".keyvisual_moving").is(":animated")) return;

	e.preventDefault();
	$(".keyvisual_moving ul").prepend($(".keyvisual_moving li:last-child"));
	amount-=w
	$(".keyvisual_moving").css({left:amount});
	amount+=w;
	$(".keyvisual_moving").animate({left:amount}, 500);
});

$(".right").click(function(e){
	if($(".keyvisual_moving").is(":animated")) return;

	e.preventDefault();
	amount-=w
	$(".keyvisual_moving").animate({left:amount}, 500, function(){
		$(".keyvisual_moving ul").append($(".keyvisual_moving li:first-child"));
		amount+=w;
		$(".keyvisual_moving").css({left:amount});
	});
});


	/* video pop*/
	/*
	var video=document.getElementById("video");

	video.muted=true;
	video.play();


	for(var i=0; i<pop.children.length; i++){
		if((pop.children[i].className) == "video"){
			var video=pop.children[i];
		}
	}
	*/

	$(".close").click(function(e){
		e.preventDefault();
		$(".pop").css({"display": "none"});
	});

	/* select */
	$("#content_wrap .content .form > div > a").click(function(e){
		e.preventDefault();
		$(this).parent().next(".select").slideToggle(300);
	});

	var m=0;
	var pos=0;
	var subjectH=184;

	$(".index li").eq(0).addClass("active");

	setInterval(function(){
		if(m < 2){
			m++;
		}
		else{
			m=0;
		}

		pos-=subjectH;
		$(".campus_wrap_moving ul").animate({top:pos}, 500, function(){
			$(".campus_wrap_moving ul").append($(".campus_wrap_moving ul li:first-child"));
			pos+=subjectH;
			$(".campus_wrap_moving ul").css({top:pos});
		});

		$(".index li").removeClass("active");
		$(".index li").eq(m).addClass("active");
	}, 3000);


	/* footer slider */

	var imgW=127;
	var target=0;

	$("#footer .prev").click(function(e){
		e.preventDefault();
		leftMoving();
	});
	$("#footer .next").click(function(e){
		e.preventDefault();
		rightMoving();
	});
	function rightMoving(){
		target-=imgW;
		$(".site_wrapper ul").animate({left:target}, 500, function(){
			$(this).append($(".site_wrapper ul li:first-child"));
			target+=imgW;
			$(this).css({left:target});
		});
	}
	function leftMoving(){
		$(".site_wrapper ul").prepend($(".site_wrapper li:last-child"));
		target-=imgW;
		$(".site_wrapper ul").css({left:target});
		target+=imgW;
		$(".site_wrapper ul").animate({left:target}, 500);
	}
});
