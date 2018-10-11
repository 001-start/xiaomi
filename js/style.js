
//$(document).ready(function(){
//	
//	
//	var windHeight= $(window).height();
//	alert(windHeight);
//	
//
//});
//



// 手机版搜索框
$(document).ready(function(){
	
	$("#vic-fadeIn").click(function(){
		$(".vic-input").fadeIn("2000");
	});
	
	$("#vic-fadeOut").click(function(){
		$(".vic-input").fadeOut("2000");
	});
		
});



$(document).ready(function(){
	var c=1;																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																													
	$(".cloud-product-ul>li").mouseenter(function(){
		var e=$(this);
		c=e.data("index");
		var e=$(this);
		setTimeout(function(){
			if(c==e.data("index")){
				$(".cloud-product-ul>li").removeClass("active");
				e.addClass("active")
			}
		},120)
	});

});



// 导航栏的伸缩
$(window).scroll(function() {


if($(window).width()>=1200){
	bigScreen();
}


if($(window).width()<1200&&$(window).width()>=992){
	medalScreen();
   }


if($(window).width()<992&&$(window).width()>=768){
	smallScreen();  
   }
});



function bigScreen(){
		
    if ($(window).scrollTop() >40) {
        $('.vic-nav').css("margin-top","0");
        $('.vic-nav').css("width","100%");
        $('.logoChange').css("border-bottom-left-radius","0");
        $('.logoChange').css("border-top-left-radius","0");
        $('.vic-entrance').css("border-bottom-right-radius","0");
         $('.vic-entrance').css("border-top-right-radius","0");
         
    }
 
  if ($(window).scrollTop() <40) {
    $('.vic-nav').css("margin-top","60px");	
    $('.vic-nav').css("width","1200px");
    $('.logoChange').css("border-bottom-left-radius","30px");
     $('.logoChange').css("border-top-left-radius","30px");
        $('.vic-entrance').css("border-bottom-right-radius","30px");
         $('.vic-entrance').css("border-top-right-radius","30px");
    }
   }


function medalScreen(){
		
    if ($(window).scrollTop() >40) {
        $('.vic-nav').css("margin-top","0");
        $('.vic-nav').css("width","100%");
        $('.logoChange').css("border-bottom-left-radius","0");
        $('.logoChange').css("border-top-left-radius","0");
        $('.vic-entrance').css("border-bottom-right-radius","0");
         $('.vic-entrance').css("border-top-right-radius","0");
         
    }
 
  if ($(window).scrollTop() <40) {
    $('.vic-nav').css("margin-top","60px");	
    $('.vic-nav').css("width","970px");
    $('.logoChange').css("border-bottom-left-radius","30px");
     $('.logoChange').css("border-top-left-radius","30px");
        $('.vic-entrance').css("border-bottom-right-radius","30px");
         $('.vic-entrance').css("border-top-right-radius","30px");
    
    }
   }


function smallScreen(){
	
if ($(window).scrollTop() >40) {
        $('.vic-nav').css("margin-top","0");
        $('.vic-nav').css("width","100%");
        $('.logoChange').css("border-bottom-left-radius","0");
        $('.logoChange').css("border-top-left-radius","0");
        $('.vic-entrance').css("border-bottom-right-radius","0");
         $('.vic-entrance').css("border-top-right-radius","0");
         
    }
 
  if ($(window).scrollTop() <40) {
    $('.vic-nav').css("margin-top","60px");	
    $('.vic-nav').css("width","768px");
    $('.logoChange').css("border-bottom-left-radius","30px");
     $('.logoChange').css("border-top-left-radius","30px");
        $('.vic-entrance').css("border-bottom-right-radius","30px");
         $('.vic-entrance').css("border-top-right-radius","30px");
    
   }
}


// 应用方案动画 
function oneAma(){
	$(".oneAma").addClass("animated fadeInLeft");
	$(".oneAma").css({'opacity':'1','-webkit-animation-fill-mode':'none','animation-fill-mode':'none'});
	
	setTimeout(function (){towAma();},500);
}


function towAma(){
	$(".towAma").addClass("animated fadeInLeft");
	$(".towAma").css({'opacity':'1','-webkit-animation-fill-mode':'none','animation-fill-mode':'none'});
	setTimeout(function (){threeAma();},500);
}

function threeAma(){
	$(".threeAma").addClass("animated fadeInLeft");
	$(".threeAma").css({'opacity':'1','-webkit-animation-fill-mode':'none','animation-fill-mode':'none'});
	setTimeout(function (){fourAma()},500);
}


function fourAma(){
	$(".fourAma").addClass("animated fadeInLeft");
	$(".fourAma").css({'opacity':'1','-webkit-animation-fill-mode':'none','animation-fill-mode':'none'});
	setTimeout(function (){fiveAma()},500);
}

function fiveAma(){
	$(".fiveAma").addClass("animated fadeInLeft");
	$(".fiveAma").css({'opacity':'1','-webkit-animation-fill-mode':'none','animation-fill-mode':'none'});
	setTimeout(function (){sixAma()},500);
}

function sixAma(){
	$(".sixAma").addClass("animated fadeInLeft");
	$(".sixAma").css({'opacity':'1','-webkit-animation-fill-mode':'none','animation-fill-mode':'none'});
	setTimeout(function (){sevenAma()},500);
}

function sevenAma(){
	$(".sevenAma").addClass("animated fadeInLeft");
	$(".sevenAma").css({'opacity':'1','-webkit-animation-fill-mode':'none','animation-fill-mode':'none'});
	setTimeout(function (){eightAma()},500);
}

function eightAma(){
	$(".eightAma").addClass("animated fadeInLeft");
	$(".eightAma").css({'opacity':'1','-webkit-animation-fill-mode':'none','animation-fill-mode':'none'});
}


$(document).ready(function(){
	oneAma();
});



//  首页动画

$(document).ready(function(){
	
	$("#chuMo").mouseover(function(){
		$(".vic-centerHoney").addClass("animated bounce");
	});
	
	$("#chuMo").mouseout(function(){
		$(".vic-centerHoney").removeClass("animated bounce");
	});
	
	
});


function zhanfang(){
	$(".vic-honeyXian").addClass("animated zoomIn");
	$(".vic-honeyXian").css("opacity","1");
setTimeout(function (){xiantiao()},550);
}


function xiantiao(){
$(".vic-honeyBord").addClass("animated bounceIn");
	$(".vic-honeyBord").css("opacity","1");

}


$(document).ready(function(){
setTimeout(function (){zhanfang()},550);
});



//  产品动画

$(document).ready(function(){
	$(".vic-colTan").css("opacity","0");
	$(".vic-pcMorecold").css("opacity","0");
	$(".vic-dtu").css("opacity","0");
	$(".vic-peopel").css("opacity","0");
	$(".vic-pcCont").css("opacity","0");
	$(".vic-pcBorder").css("opacity","0");
		xinxin();
		pcTubiao();
	   	pcText();
	 	phone();
	 	people();
});

function xinxin(){
	$(".vic-colTan").addClass("animated bounceIn delay-100ms slower");	
	setTimeout(function (){douCould()},550);
}

function douCould(){
	$(".vic-pcMorecold").addClass("animated bounceIn delay-100ms slower");
	setTimeout(function (){dtu()},550);
//	$(".vic-pcMorecold").css("animation-iteration-count","infinite");	
}

function pcTubiao(){
	$(".vic-pcTubiao").addClass("animated zoomInUp delay-100ms slower");
	setTimeout(function (){pcXian()},2000);
}

function pcText(){
	$(".vic-pcText").addClass("animated slideInLeft delay-100ms slower");
}

function pcXian(){
	$(".vic-pcBorder").addClass("animated fadeIn delay-100ms slower");
	$(".vic-pcBorder").css("opacity","0.9");
}

function dtu(){
	$(".vic-dtu").addClass("animated fadeIn delay-100ms slower");
}

function phone(){
	$(".vic-phone").addClass("animated zoomInDown delay-100ms slower");
}

function people(){
	$(".vic-people").addClass("animated zoomInDown delay-100ms slower");
	setTimeout(function (){cont()},2000);
}

function cont(){
	$(".vic-pcCont").addClass("animated fadeIn delay-100ms slower");
	$(".vic-pcCont").css("opacity","0.9");
}
