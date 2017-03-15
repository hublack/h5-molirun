var app = app || {};

/*-- html5-template
====================================================== */
app.template = function(){};

//swiper
app.template.swiper = function(){};
app.template.swiper.mySwiper = {};
app.template.swiper.init = function(){
	app.template.swiper.bind();
};
app.template.swiper.bind = function(){
    $(".swiper-container").css("display", "block");

    app.template.swiper.mySwiper = new Swiper ('.swiper-container', {
        speed:500,
        lazyLoading : true,
        lazyLoadingInPrevNext : true,
        // direction : 'vertical',
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
            app.template.swiper.on_pageslideend(0);
        },
        onSlideChangeStart: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画

            app.template.swiper.on_pageslideend(swiper.activeIndex);
            app.template.swiper.mySwiper.lockSwipes();
        }
    });

    app.template.swiper.lock();
};
app.template.swiper.lock = function(){
	app.template.swiper.mySwiper.lockSwipes();
};
app.template.swiper.on_pageslideend = function(index){};

app.template.swiper.next = function(){
    app.template.swiper.mySwiper.unlockSwipes();
    app.template.swiper.mySwiper.slideNext();
    app.template.swiper.mySwiper.lockSwipes();
};

app.template.swiper.prev = function(){
    app.template.swiper.mySwiper.unlockSwipes();
    app.template.swiper.mySwiper.slidePrev();
    app.template.swiper.mySwiper.lockSwipes();
};

app.template.swiper.to = function(index){
    app.template.swiper.mySwiper.unlockSwipes();
    app.template.swiper.mySwiper.slideTo(index);
    app.template.swiper.mySwiper.lockSwipes();
};

/* Landscape  引导用户竖屏显示 */
app.template.Landscape = function(){};
app.template.Landscape.init= function(){
    var Landscape = new landscape({
        pic: 'js/motion/landscape.png',
        picZoom: 3,
        mode:'portrait',//portrait,landscape
        prefix:'Shine'
    });
};

//touch
app.template.touch = function(){};

app.template.touch.eventlistener_handler = function(e){
    e.preventDefault();     // 阻止浏览器默认动作(网页滚动)
};

app.template.touch.init = function(){
	// fastclick
   FastClick.attach(document.body);
   document.body.addEventListener("touchmove", app.template.touch.eventlistener_handler, false);
   
};

/*-- p1
====================================================== */
app.p1 = function(){};
app.p1.init = function(){
    
};
app.p1.bind_touch_event = function(){
   $(".p1-btn1").on("touchend",function(){
   	  app.template.swiper.next();
   });
   $(".p1-btn2").on("touchend",function(){
   	  app.p1.show_layout();
   	  _hmt.push(['_trackEvent', 'div', 'touchend']);
   });
};
app.p1.show_layout = function(){
	$(".p1-coverimg").attr("src", $(".p1-coverimg").attr("data-src"));
    $(".p1-coverimg").css({"width":"750px", "height": "100%"});
    $(".p1-covershade").css({"width":"100%","height":"100%"});
    $(".p1-cover").css({"width":"750px", "height": "100%"});
    $(".cover-btn1,.cover-btn2").css("display","block");
    $(".p1 .p1-cover .cover-wrapper").css({"opacity":"1","left":"111px","top":"286px"});
    //  cover-btn1 拒绝
    $(".p1 .p1-cover .cover-btn1").on("touchend",function(){
    	   $(".p1-coverimg").css({"width":"0", "height": "0"});
    	   $(".p1-covershade").css({"width":"0","height":"0"});
    	   $(".p1-cover").css({"width":"0", "height": "0"});
       $(".cover-btn1,.cover-btn2").css("display","none");
       $(".p1 .p1-cover .cover-wrapper").css("opacity","0");
    });
    // cover-btn2 同意
    $(".p1 .p1-cover .cover-btn2").on("touchend",function(){
    	   $(".p1-coverimg").css({"width":"0", "height": "0"});
    	   $(".p1-covershade").css({"width":"0","height":"0"});
    	   $(".p1-cover").css({"width":"0", "height": "0"});
       $(".cover-btn1,.cover-btn2").css("display","none");
       $(".p1 .p1-cover .cover-wrapper").css("opacity","0");
       app.template.swiper.to(2);
    });   
};

app.p1.destory = function(){};


/*-- p2
====================================================== */
app.p2 = function(){};
app.p2.init = function(){
	
};
app.p2.bind_touch_event = function(){
	//返回
   $(".p2-btn1").on("touchend",function(){
   	   app.template.swiper.prev();
   });
   //报名参赛
   $(".p2-btn2").on("touchend",function(){
   	  app.p2.show_layout();
   });
};
app.p2.show_layout = function(){
	$(".p2-coverimg").attr("src", $(".p2-coverimg").attr("data-src"));
    $(".p2-coverimg").css({"width":"750px", "height": "100%"});
    $(".p2-covershade").css({"width":"100%","height":"100%"});
    $(".p2-cover").css({"width":"750px", "height": "100%"});
    $(".cover2-btn1,.cover2-btn2").css("display","block");
    $(".p2 .p2-cover .cover-wrapper2").css({"opacity":"1","left":"111px","top":"286px"});
	//  p2 cover2-btn1 拒绝
    $(".p2 .p2-cover .cover2-btn1").on("touchend",function(){
    	   $(".p2-coverimg").css({"width":"0", "height": "0"});
    	   $(".p2-covershade").css({"width":"0","height":"0"});
    	   $(".p2-cover").css({"width":"0", "height": "0"});
       $(".cover2-btn1,.cover2-btn2").css("display","none");
       $(".p2 .p2-cover .cover-wrapper2").css("opacity","0");
       app.template.swiper.prev();
    });
    //  p2 cover2-btn2 同意
    $(".p2 .p2-cover .cover2-btn2").on("touchend",function(){
    	   $(".p2-coverimg").css({"width":"0", "height": "0"});
    	   $(".p2-covershade").css({"width":"0","height":"0"});
    	   $(".p2-cover").css({"width":"0", "height": "0"});
       $(".cover2-btn1,.cover2-btn2").css("display","none");
       $(".p2 .p2-cover .cover-wrapper2").css("opacity","0");
       app.template.swiper.to(2);
    });
	
}
app.p2.destory = function(){};

/*-- p3
====================================================== */
app.p3 = function(){};
app.p3.init = function(){
	app.p3.checkstock_bygrouptype();
    app.p3.check_group();
	$(".p3-group-5,.p3-group-10,.p3-group-family").change(function(){
		app.p3.check_group();
	});	
	app.p3.remove_month("#year-1","#month-1");
	app.p3.remove_month("#year-2","#month-2");
	app.p3.remove_month("#year-3","#month-3");
	app.p3.remove_month2();
};
app.p3.check_group = function(){
	if($(".p3-group-family").is(":checked")){
		app.p3.disabled_singletextinput();
		app.p3.enabled_familytextinput();
		$(".p3-btn4").show();
	    $(".p3-btn2").hide();
	}else if($(".p3-group-5").is(":checked") || $(".p3-group-10").is(":checked")){
		app.p3.disabled_familytextinput();
		app.p3.enabled_singletextinput();
		$(".p3-btn2").show();
	    $(".p3-btn4").hide();
	}
};
app.p3.remove_month = function(el,el2){
	$(""+el+"").on("change",function(){
		if($(""+el+"").val()==1999){
			$(""+el2+" option[value='4']").remove();
			$(""+el2+" option[value='5']").remove();
			$(""+el2+" option[value='6']").remove();
			$(""+el2+" option[value='7']").remove();
			$(""+el2+" option[value='8']").remove();
			$(""+el2+" option[value='9']").remove();
			$(""+el2+" option[value='10']").remove();
			$(""+el2+" option[value='11']").remove();
			$(""+el2+" option[value='12']").remove();
		}else {
			if($(""+el2+" option[value='4']").val()==undefined){
				$(""+el2+"").append("<option value='4'>4月</option>");
				$(""+el2+"").append("<option value='5'>5月</option>");
				$(""+el2+"").append("<option value='6'>6月</option>");
				$(""+el2+"").append("<option value='7'>7月</option>");
				$(""+el2+"").append("<option value='8'>8月</option>");
				$(""+el2+"").append("<option value='9'>9月</option>");
				$(""+el2+"").append("<option value='10'>10月</option>");
				$(""+el2+"").append("<option value='11'>11月</option>");
				$(""+el2+"").append("<option value='12'>12月</option>");
			}			
		}
	});	
};
app.p3.remove_month2 = function(){
	$("#year-4").on("change",function(){
		if($("#year-4").val()==2011){
			$("#month-4 option[value='4']").remove();
			$("#month-4 option[value='5']").remove();
			$("#month-4 option[value='6']").remove();
			$("#month-4 option[value='7']").remove();
			$("#month-4 option[value='8']").remove();
			$("#month-4 option[value='9']").remove();
			$("#month-4 option[value='10']").remove();
			$("#month-4 option[value='11']").remove();
			$("#month-4 option[value='12']").remove();
			if($("#month-4 option[value='1']").val()==undefined){
				$("#month-4").prepend("<option value='3'>3月</option>");
				$("#month-4").prepend("<option value='2'>2月</option>");
				$("#month-4").prepend("<option value='1'>1月</option>");
			}
		}else if($("#year-4").val()==2000){
				$("#month-4 option[value='1']").remove();
			    $("#month-4 option[value='2']").remove();
			    $("#month-4 option[value='3']").remove();
			    if($("#month-4 option[value='4']").val()==undefined){
					$("#month-4").append("<option value='4'>4月</option>");
					$("#month-4").append("<option value='5'>5月</option>");
					$("#month-4").append("<option value='6'>6月</option>");
					$("#month-4").append("<option value='7'>7月</option>");
					$("#month-4").append("<option value='8'>8月</option>");
					$("#month-4").append("<option value='9'>9月</option>");
					$("#month-4").append("<option value='10'>10月</option>");
					$("#month-4").append("<option value='11'>11月</option>");
					$("#month-4").append("<option value='12'>12月</option>");
				}
		}else {
			if($("#month-4 option[value='4']").val()==undefined){
				$("#month-4").append("<option value='4'>4月</option>");
				$("#month-4").append("<option value='5'>5月</option>");
				$("#month-4").append("<option value='6'>6月</option>");
				$("#month-4").append("<option value='7'>7月</option>");
				$("#month-4").append("<option value='8'>8月</option>");
				$("#month-4").append("<option value='9'>9月</option>");
				$("#month-4").append("<option value='10'>10月</option>");
				$("#month-4").append("<option value='11'>11月</option>");
				$("#month-4").append("<option value='12'>12月</option>");
			}else if($("#month-4 option[value='1']").val()==undefined){
				$("#month-4").prepend("<option value='3'>3月</option>");
				$("#month-4").prepend("<option value='2'>2月</option>");
				$("#month-4").prepend("<option value='1'>1月</option>");
			}
		}
	});		
};
app.p3.checkstock_bygrouptype = function(){
	//查询库存信息
	$.getJSON('https://molirun.api.createcdigital.com/stock/get', function(data){
        console.info(data[0]);
        if(data.length>0){
        	  if(data[0].group_type_family<=0){
        	  	 $("#p3-group-family").remove();
        	  	 $("#p3-group-5").attr("checked","checked");
        	  }
        	  if(data[0].group_type_single<=0){
        	  	if($("#p3-group-family")){
        	  		$("#p3-group-5,#p3-group-10").remove();
        	  	    $("#p3-group-family").attr("checked","checked");
        	  	}
        	  }
        	  if(data[0].group_type_family<=0 && data[0].group_type_single<=0){
        	  	 $(".p3-btn2,.p3-btn4").hide();
             alert("很抱歉！本次活动报名人数名额已满！");
        	  }
        	  // 个人 T恤尺码库存
        	  if(data[0].p_xs <= 0){
        	  	 $("#size-1 option[value='XS']").remove();
        	  }
        	  if(data[0].p_s <= 0){
        	  	 $("#size-1 option[value='S']").remove();
        	  }
        	  if(data[0].p_m <= 0){
        	  	 $("#size-1 option[value='M']").remove();
        	  }
        	  if(data[0].p_l <= 0){
        	  	 $("#size-1 option[value='L']").remove();
        	  }
        	  if(data[0].p_xl <= 0){
        	  	 $("#size-1 option[value='XL']").remove();
        	  }
        	  if(data[0].p_xxl <= 0){
        	  	 $("#size-1 option[value='XXL']").remove();
        	  }
        	  if(data[0].p_xs <= 0 && data[0].p_s <= 0 && data[0].p_m <= 0 && data[0].p_l <= 0 && data[0].p_xl <= 0 && data[0].p_xxl <= 0){
        	  	 $(".p3-btn2").hide();
             alert("很抱歉！本次活动5公里,10公里的T恤尺码已没有库存！");
        	  }
        	         	  
        	  // 家庭 T恤尺码库存
        	  if(data[0].f_xs <= 0){
        	  	 $("#size-2 option[value='XS']").remove();
        	  	 $("#size-3 option[value='XS']").remove();
        	  	 $("#size-4 option[value='XS']").remove();
        	  }
        	  if(data[0].f_s <= 0){
        	  	 $("#size-2 option[value='S']").remove();
        	  	 $("#size-3 option[value='S']").remove();
        	  	 $("#size-4 option[value='S']").remove();
        	  }
        	  if(data[0].f_m <= 0){
        	  	 $("#size-2 option[value='M']").remove();
        	  	 $("#size-3 option[value='M']").remove();
        	  	 $("#size-4 option[value='M']").remove();
        	  }
        	  if(data[0].f_l <= 0){
        	  	 $("#size-2 option[value='L']").remove();
        	  	 $("#size-3 option[value='L']").remove();
        	  	 $("#size-4 option[value='L']").remove();
        	  }
        	  if(data[0].f_xl <= 0){
        	  	 $("#size-2 option[value='XL']").remove();
        	  	 $("#size-3 option[value='XL']").remove();
        	  	 $("#size-4 option[value='XL']").remove();
        	  }
        	  if(data[0].f_xxl <= 0){
        	  	 $("#size-2 option[value='XXL']").remove();
        	  	 $("#size-3 option[value='XXL']").remove();
        	  	 $("#size-4 option[value='XXL']").remove();
        	  }
        	  if(data[0].kids_110 <= 0){
        	  	 $("#size-4 option[value='XXXS']").remove();
        	  }
        	  if(data[0].kids_130 <= 0){
        	  	 $("#size-4 option[value='XXS']").remove();
        	  }
        	  if(data[0].f_xs <= 0 && data[0].f_s <= 0 && data[0].f_m <= 0 && data[0].f_l <= 0 && data[0].f_xl <= 0 && data[0].f_xxl <= 0 && data[0].kids_110 <= 0 && data[0].kids_130 <= 0){
        	  	 $(".p3-btn4").hide();
             alert("很抱歉！本次活动家庭跑的T恤尺码已没有库存！");
        	  }
         	  
        }
   });	
};
app.p3.disabled_singletextinput = function(){
    $("#username-1").attr("disabled", "disabled");
    $("#idcard-1").attr("disabled", "disabled");
    $("#phone-1").attr("disabled", "disabled");
    $("#eperson-1").attr("disabled", "disabled");
    $("#ephone-1").attr("disabled", "disabled");
};
app.p3.disabled_familytextinput = function(){
    $("#username-2,#username-3,#username-4").attr("disabled", "disabled");
    $("#idcard-2,#idcard-3,#idcard-4").attr("disabled", "disabled");
    $("#phone-2,#phone-3").attr("disabled", "disabled");
    $("#eperson-2,#eperson-3,#eperson-4").attr("disabled", "disabled");
    $("#ephone-2,#ephone-3,#ephone-4").attr("disabled", "disabled");
    $("#parent,#parent-phone").attr("disabled", "disabled");
};
app.p3.enabled_singletextinput = function(){
    $("#username-1").removeAttr("disabled");
    $("#idcard-1").removeAttr("disabled");
    $("#phone-1").removeAttr("disabled");
    $("#eperson-1").removeAttr("disabled");
    $("#ephone-1").removeAttr("disabled");
};
app.p3.enabled_familytextinput = function(){
    $("#username-2,#username-3,#username-4").removeAttr("disabled");
    $("#idcard-2,#idcard-3,#idcard-4").removeAttr("disabled");
    $("#phone-2,#phone-3").removeAttr("disabled");
    $("#eperson-2,#eperson-3,#eperson-4").removeAttr("disabled");
    $("#ephone-2,#ephone-3,#ephone-4").removeAttr("disabled");
    $("#parent,#parent-phone").removeAttr("disabled");
};
var idcard1;
var idcard2;
var idcard3;
var idcard4;

app.p3.bind_touch_event = function(){  		
	// 两个返回按钮
	$(".p3-btn1,.p3-btn3").on("touchend",function(){
		app.template.swiper.to(0);
	});
    
	// 5公里 10公里 确定按钮
	$(".p3-btn2").on("touchend",function(){
		var phone_patt = new RegExp(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/); // 手机号码
	    var id_patt = new RegExp(/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X|x)$/); // 身份证
	    var hkm_patt = new RegExp(/^[HMhm]{1}([0-9]{10}|[0-9]{8})$/); // 港澳
	    var tw_patt = new RegExp(/\d{8}/); // 台胞证	
		if($(".p3-group-5").is(":checked") || $(".p3-group-10").is(":checked")){
			if($("#username-1").val()!="" && $("#idcard-1").val()!="" && $("#phone-1").val()!="" && phone_patt.test($("#phone-1").val()) && $("#eperson-1").val()!="" && $("#ephone-1").val()!="" && phone_patt.test($("#ephone-1").val()) && $("#phone-1").val()!=$("#ephone-1").val() && $("#username-1").val()!=$("#eperson-1").val()){
				var card_number = $("#idcard-1").val();
				console.info(card_number);
				if(($("#idchange-1").val()== "0" && id_patt.test(card_number)) || ($("#idchange-1").val() == "1" && $("#idchange-1").val() != "") || ($("#idchange-1").val()== "2" && hkm_patt.test(card_number)) || ($("#idchange-1").val()== "3" && tw_patt.test(card_number))){
					idcard1 = true;
					app.template.swiper.next();
				}else {
					$(".p3 .p3-coverbox").css("display","block");
					idcard1 = false;
				}
			}else {
				$(".p3 .p3-coverbox").css("display","block");
			}
		}else {
//			$(".p3 .p3-coverbox").css("display","block");
		}			
	});
	
	//家庭跑 确定按钮
	$(".p3-btn4").on("touchend",function(){
		app.p3.check_personOne();
		app.p3.check_personTwo();
		app.p3.check_children();
		app.p3.check_idcard();
		if($(".p3-group-family").is(":checked")){
			if((personOne==true&&personTwo=="empty"&&children==true&&checkidcard==true) || (personOne==true&&personTwo==true&&children==true&&checkidcard==true)){
				app.template.swiper.next();
			}else {
				$(".p3 .p3-coverbox").css("display","block");
			}
		}
	});
	// 浮层确定按钮
	$(".p3-coverBtn").on("touchend",function(){
		$(".p3 .p3-coverbox").css("display","none");
		if($(".p3-group-5").is(":checked") || $(".p3-group-10").is(":checked")){
			app.p3.checkValue_one();
		}
		if($(".p3-group-family").is(":checked")){
			app.p3.checkValue_two();
			app.p3.checkValue_three();
			app.p3.checkValue_four();
		}
		
	});
	//input blur
	$("#idcard-1,#phone-1,#ephone-1").on("blur",function(){
		$(this).css("color","#8393ca");
		idcard1 = true;
	});
	$("#idcard-2,#phone-2,#ephone-2").on("blur",function(){
		$(this).css("color","#8393ca");
		idcard2 = true;
	});
	$("#idcard-3,#phone-3,#ephone-3").on("blur",function(){
		$(this).css("color","#8393ca");
		idcard3 = true;
	});
	$("#idcard-4,#parent-phone,#ephone-4").on("blur",function(){
		$(this).css("color","#8393ca");
		idcard4 = true;
	});
		
};
app.p3.checkValue_one = function(){
	if(idcard1==false){
		$("#idcard-1").css("color","red");
	}
	if(!phone_patt.test($("#phone-1").val())){
		$("#phone-1").css("color","red");
	}
	if(!phone_patt.test($("#ephone-1").val())){
		$("#ephone-1").css("color","red");
	}
};

app.p3.checkValue_two = function(){
	if(idcard2==false){
		$("#idcard-2").css("color","red");
	}
	if(!phone_patt.test($("#phone-2").val())){
		$("#phone-2").css("color","red");
	}
	if(!phone_patt.test($("#ephone-2").val())){
		$("#ephone-2").css("color","red");
	}
};
app.p3.checkValue_three = function(){
	if(idcard3==false){
		$("#idcard-3").css("color","red");
	}
	if(!phone_patt.test($("#phone-3").val())){
		$("#phone-3").css("color","red");
	}
	if(!phone_patt.test($("#ephone-3").val())){
		$("#ephone-3").css("color","red");
	}
};
app.p3.checkValue_four = function(){
	if(idcard4==false){
		$("#idcard-4").css("color","red");
	}
	if(!phone_patt.test($("#parent-phone").val())){
		$("#parent-phone").css("color","red");
	}
	if(!phone_patt.test($("#ephone-4").val())){
		$("#ephone-4").css("color","red");
	}
};
var personOne;
var personTwo;
var children;
var checkidcard;
var phone_patt = new RegExp(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/); // 手机号码
var id_patt = new RegExp(/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X|x)$/); // 身份证
var childid_patt = new RegExp(/^[1-9]\d{5}20[01][0-9]((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X|x)$/); // 儿童身份证
var hkm_patt = new RegExp(/^[HMhm]{1}([0-9]{10}|[0-9]{8})$/); // 港澳通行证号码
var tw_patt = new RegExp(/\d{8}/); // 台胞证	
// 验证家庭跑
app.p3.check_personOne = function(){
	if($("#username-2").val()!="" && $("#idcard-2").val()!="" && $("#phone-2").val()!="" && phone_patt.test($("#phone-2").val()) && $("#eperson-2").val()!="" && $("#ephone-2").val()!="" && phone_patt.test($("#ephone-2").val()) && $("#phone-2").val()!=$("#ephone-2").val() && $("#username-2").val()!=$("#eperson-2").val()){
		var card_number = $("#idcard-2").val();
		if(($("#idchange-2").val()== "0" && id_patt.test(card_number)) || ($("#idchange-2").val() == "1" && $("#idchange-2").val() != "") || ($("#idchange-2").val()== "2" && hkm_patt.test(card_number)) || ($("#idchange-2").val()== "3" && tw_patt.test(card_number))){
			personOne = true;
			idcard2 = true;
		}else {		
			personOne = false;
			idcard2 = false;
		}
	}else {
		personOne = false;
	}
};
app.p3.check_personTwo = function(){
	if($("#username-3").val()!="" && $("#idcard-3").val()!="" && $("#phone-3").val()!="" && phone_patt.test($("#phone-3").val()) && $("#eperson-3").val()!="" && $("#ephone-3").val()!="" && phone_patt.test($("#ephone-3").val()) && $("#phone-3").val()!=$("#ephone-3").val() && $("#username-3").val()!=$("#eperson-3").val()){
		var card_number = $("#idcard-3").val();
		if(($("#idchange-3").val()== "0" && id_patt.test(card_number)) || ($("#idchange-3").val() == "1" && $("#idchange-3").val() != "") || ($("#idchange-3").val()== "2" && hkm_patt.test(card_number)) || ($("#idchange-3").val()== "3" && tw_patt.test(card_number))){
			idcard3 = true;
			personTwo = true;
		}else {
			personTwo = false;
			idcard3 = false;
		}
	}else if($("#username-3").val()=="" && $("#idcard-3").val()=="" && $("#phone-3").val()=="" && $("#eperson-3").val()=="" && $("#ephone-3").val()==""){
		console.info("表单为空");
		personTwo = "empty";
		idcard3 = true;
	}else {		
		personTwo = false;
	}
};
app.p3.check_children = function(){
	if($("#username-4").val()!="" && $("#idcard-4").val()!="" && $("#parent").val()!="" && $("#parent-phone").val()!="" && phone_patt.test($("#parent-phone").val()) && $("#eperson-4").val()!="" && $("#ephone-4").val()!="" && phone_patt.test($("#ephone-4").val()) && $("#parent-phone").val()!=$("#ephone-4").val() && $("#username-4").val()!=$("#eperson-4").val()!=$("#parent").val()){
		var card_number = $("#idcard-4").val();
		if(($("#idchange-4").val()== "0" && childid_patt.test(card_number)) || ($("#idchange-4").val() == "1" && $("#idchange-4").val() != "") || ($("#idchange-4").val()== "2" && hkm_patt.test(card_number)) || ($("#idchange-4").val()== "3" && tw_patt.test(card_number))){
			idcard4 = true;
			children = true;
		}else {			
			children = false;
			idcard4 = false;
		}
	}else {		
		children = false;
	}
};
app.p3.check_idcard = function(){
	if($("#idchange-2").val()== "0" && $("#idchange-3").val()== "0" && $("#idchange-4").val()== "0"){
		if(($("#idcard-2").val()==$("#idcard-3").val()) || ($("#idcard-2").val()==$("#idcard-4").val()) || ($("#idcard-3").val()==$("#idcard-4").val()) || ($("#idcard-2").val()==$("#idcard-3").val()==$("#idcard-4").val())){
			checkidcard = false;
		}else {
			checkidcard = true;
		}
	}else if($("#idchange-2").val()== "1" && $("#idchange-3").val()== "1" && $("#idchange-4").val()== "1"){
		if(($("#idcard-2").val()==$("#idcard-3").val()) || ($("#idcard-2").val()==$("#idcard-4").val()) || ($("#idcard-3").val()==$("#idcard-4").val()) || ($("#idcard-2").val()==$("#idcard-3").val()==$("#idcard-4").val())){
			checkidcard = false;
		}else {
			checkidcard = true;
		}
	}else if($("#idchange-2").val()== "2" && $("#idchange-3").val()== "2" && $("#idchange-4").val()== "2"){
		if(($("#idcard-2").val()==$("#idcard-3").val()) || ($("#idcard-2").val()==$("#idcard-4").val()) || ($("#idcard-3").val()==$("#idcard-4").val()) || ($("#idcard-2").val()==$("#idcard-3").val()==$("#idcard-4").val())){
			checkidcard = false;
		}else {
			checkidcard = true;
		}
	}else if($("#idchange-2").val()== "3" && $("#idchange-3").val()== "3" && $("#idchange-4").val()== "3"){
		if(($("#idcard-2").val()==$("#idcard-3").val()) || ($("#idcard-2").val()==$("#idcard-4").val()) || ($("#idcard-3").val()==$("#idcard-4").val()) || ($("#idcard-2").val()==$("#idcard-3").val()==$("#idcard-4").val())){
			checkidcard = false;
		}else {
			checkidcard = true;
		}
	}else {
		checkidcard = true;
	}
}


app.p3.destory = function(){};

/*-- p4
====================================================== */
app.p4 = function(){};
app.p4.init = function(){
	if($(".p4-send").is(":checked")){
		$(".p4-nametext,.p4-name,.p4-adresstext,.p4-adress,.p4-phonetext,.p4-phone").css("display","block");
	}else if($(".p4-get").is(":checked")){
		$(".p4-nametext,.p4-name,.p4-adresstext,.p4-adress,.p4-phonetext,.p4-phone").css("display","none");
	}
	$(".p4-send").change(function(){
		$(".p4-nametext,.p4-name,.p4-adresstext,.p4-adress,.p4-phonetext,.p4-phone").css("display","block");
	});
	$(".p4-get").change(function(){
		$(".p4-nametext,.p4-name,.p4-adresstext,.p4-adress,.p4-phonetext,.p4-phone").css("display","none");
		$(".p4-hint").css("display","none");
	});
};
app.p4.bind_touch_event = function(){
	// 返回按钮
	$(".p4-btn1").on("touchend",function(){
		app.template.swiper.prev();
	});
     $("#p4-name,#p4-adress,#p4-phone").on("focus", function(){
        $(".p4-hint").css("display","none");
    });
    //	确定按钮
    $(".p4-btn2").on("touchend",function(){
    	    var phone_patt = new RegExp(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);
    	    //判断用户选取的寄送方式
    	    if($(".p4-send").is(":checked")){
    	    	   if($(".p4-name").val()!="" && $(".p4-adress").val()!="" && $(".p4-phone").val()!="" && phone_patt.test($(".p4-phone").val())){
    	    	   	  $(".p4-hint").css("display","none");
    	    	   	  app.template.swiper.next();
    	    	   }else {
    	    	   	  $(".p4-hint").css("display","block");
    	    	   }
    	    }else if($(".p4-get").is(":checked")){
    	    	   app.template.swiper.next();
    	    }else {
    	    	   
    	    }
    });
		
};


app.p4.destory = function(){};

/*-- p5
====================================================== */
app.p5 = function(){};
app.p5.init = function(){
	//进入第五页 获取用户填的表单信息
	if($(".p3-group-5").is(":checked") || $(".p3-group-10").is(":checked")){
		app.p5.singlejudge();
		$(".p5-group").html(''+singleGroup+'公里');
	    $(".p5-size").html(''+singleSize+'');
	    $(".p5-tag").html(''+singleTag+'');
	    $(".p5-username").html(''+singleName+''); 
	    $(".p5-sex").html(''+singleSex+'');
	}else if($(".p3-group-family").is(":checked")){
		app.p5.familyjudge();
		$(".p5-group").html(''+familyGroup+'');
	    $(".p5-size").html(''+familySize1+','+' '+familySize2+','+' '+familySize3+'');
	    $(".p5-tag").html(''+familyTag+'');
	    $(".p5-username").html(''+familyName1+','+' '+familyName2+','+' '+familyName3+''); 
	    $(".p5-sex").html(''+familySex1+','+' '+familySex2+','+' '+familySex3+'');
	};
	//进入第五页 判断用户选取的赛事包寄送方式
	if($(".p4-send").is(":checked")){
		$(".p5-textlocal").css("display","none");
		$(".p5-textadress,.p5-name,.p5-nameinput,.p5-adress,.p5-adressinput,.p5-phone,.p5-phoneinput").css("display","block");
		$(".p5-nameinput").html($(".p4-name").val());
		$(".p5-adressinput").html($(".p4-adress").val());
		$(".p5-phoneinput").html($(".p4-phone").val());
	}else if($(".p4-get").is(":checked")){
		$(".p5-textadress,.p5-name,.p5-nameinput,.p5-adress,.p5-adressinput,.p5-phone,.p5-phoneinput").css("display","none");
		$(".p5-textlocal").css("display","block");
	};
};
app.p5.bind_touch_event = function(){
	$(".p5-btn1").on("touchend",function(){
		app.template.swiper.to(2);
	});
	$(".p5-btn2").on("touchend",function(){
		app.template.swiper.prev();
	});
	//确认并支付
	$(".p5-paybtn").on("touchend",function(){
		if($(".p3-group-5").is(":checked") || $(".p3-group-10").is(":checked")){
			app.p5.singlejudge();
			var paydata;
			if($(".p3-group-5").is(":checked")){
				paydata = {"openid": app.p5.getUser().id, "grouptype": "5km"};
			}else if($(".p3-group-10").is(":checked")){
				paydata = {"openid": app.p5.getUser().id, "grouptype": "10km"};
			}
			$.post('https://molirun.api.createcdigital.com/user/add', user, function(data){
				var rdata = JSON.parse(data);
	           
	            if(rdata.rs=="success"){                   
	            	     app.p5.payment(paydata);
	            }
	        }, "JSON");
		}
		if($(".p3-group-family").is(":checked")){
			app.p5.familyjudge();
			$.post('https://molirun.api.createcdigital.com/user/add', user, function(data){
				var rdata = JSON.parse(data);
	           
	            if(rdata.rs=="success"){
	            	     var paydata = {"openid": app.p5.getUser().id, "grouptype": "family"};
	            	     app.p5.payment(paydata);
	            }
	        }, "JSON");
		}
	});
};
//获取用户所填的信息
var user = {};
var singleGroup;
var singleSize;
var singleTag;
var singleName;
var singleSex;
app.p5.singlejudge=function(){
     app.p5.getUserinfo_bygetUser();
        
	if($("#p3-group-5").is(":checked")){
		singleGroup = "5";
		user.grouptype = "5km";
	}else if($("#p3-group-10").is(":checked")){
		singleGroup = "10";
		user.grouptype = "10km";
	}
	if($("#size-1").val()=="XS"){
        singleSize="XS(160/82A)";
        user.p1_teesize = "XS(160/82A)";
    }else if($("#size-1").val()=="S"){
        singleSize="S(165/84A)";
        user.p1_teesize = "S(165/84A)";
    }else if($("#size-1").val()=="M"){
        singleSize="M(170/88A)";
        user.p1_teesize = "M(170/88A)";
    }else if($("#size-1").val()=="L"){
        singleSize="L(175/92A)";
        user.p1_teesize = "L(175/92A)";
    }else if($("#size-1").val()=="XL"){
        singleSize="XL(180/96A)";
        user.p1_teesize = "XL(180/96A)";
    }else if($("#size-1").val()=="XXL"){
        singleSize="XXL(185/100A)";
        user.p1_teesize = "XXL(185/100A)";
    }
    if($("#tag").val()=="1"){
        singleTag="小清新";
        user.p1_tag = "#小清新";
    }else if($("#tag").val()=="2"){
        singleTag="重口味";
        user.p1_tag = "#重口味";
    }else if($("#tag").val()=="3"){
        singleTag="天然萌";
        user.p1_tag = "#天然萌";
    }else if($("#tag").val()=="4"){
        singleTag="自然呆";
        user.p1_tag = "#自然呆";
    }else if($("#tag").val()=="5"){
        singleTag="纯爷们";
        user.p1_tag = "#纯爷们";
    }else if($("#tag").val()=="6"){
        singleTag="万人迷";
        user.p1_tag = "#万人迷";
    }else if($("#tag").val()=="7"){
        singleTag="女神经";
        user.p1_tag = "#女神经";
    }else if($("#tag").val()=="8"){
        singleTag="男神经";
        user.p1_tag = "#男神经";
    }
    singleName = $("#username-1").val();
    user.p1_name = ""+$("#username-1").val()+"";
    user.p1_birthday = " "+$("#year-1").val()+""+"-"+""+$("#month-1").val()+" ";
    if ($(".p3-sex-boy").is(":checked")){
         singleSex="男";
         user.p1_sex = "男";
    }else{
         singleSex="女";
         user.p1_sex = "女";
    }
    if($("#idchange-1").val()== "0"){
    	  user.p1_card_type = "身份证";
    }else if($("#idchange-1").val()== "1"){
    	  user.p1_card_type = "护照";
    }else if($("#idchange-1").val()== "2"){
    	  user.p1_card_type = "港澳通行证";
    }else if($("#idchange-1").val()== "3"){
    	  user.p1_card_type = "台胞证";
    }
    user.p1_card_number = ""+$("#idcard-1").val()+"";
    user.p1_phone = ""+$("#phone-1").val()+"";
    user.p1_emergency_name = ""+$("#eperson-1").val()+"";
    user.p1_emergency_phone = ""+$("#ephone-1").val()+"";
    if($(".p4-send").is(":checked")){
    	    user.pakcage_get_way = "顺丰到付";
        user.pakcage_get_name = ""+$(".p4-name").val()+"";
        user.pakcage_get_phone = ""+$(".p4-phone").val()+"";
        user.pakcage_get_address = ""+$(".p4-adress").val()+"";
    }else if($(".p4-get").is(":checked")){
    	    user.pakcage_get_way = "现场领取";
    	    user.pakcage_get_name = "";
        user.pakcage_get_phone = "";
        user.pakcage_get_address = "";
    }
        // p2
        user.p2_name = "";
        user.p2_sex = "";
        user.p2_birthday = "";
        user.p2_teesize = "";
        user.p2_card_type = "";
        user.p2_card_number = "";
        user.p2_phone = "";
        user.p2_emergency_name = "";
        user.p2_emergency_phone = "";
        // kids
        user.kids_name = "";
        user.kids_sex = "";
        user.kids_birthday = "";
        user.kids_teesize = "";
        user.kids_card_type = "";
        user.kids_card_number = "";
        user.kids_guardian_name = "";
        user.kids_guardian_phone = "";
        user.kids_emergency_name = "";
        user.kids_emergency_phone = "";    
};
var familyGroup;
var familySize1;
var familySize2;
var familySize3;
var familyTag;
var familyName1;
var familyName2;
var familyName3;
var familySex1;
var familySex2;
var familySex3;
app.p5.familyjudge=function(){
	
    app.p5.getUserinfo_bygetUser();
        
	if($("#p3-group-family").is(":checked")){
		familyGroup = "家庭跑";
		user.grouptype = "family";
	}
	if($("#size-2").val()=="XS"){
        familySize1="XS(160/82A)";
        user.p1_teesize = "XS(160/82A)";
    }else if($("#size-2").val()=="S"){
        familySize1="S(165/84A)";
        user.p1_teesize = "S(165/84A)";
    }else if($("#size-2").val()=="M"){
        familySize1="M(170/88A)";
        user.p1_teesize = "M(170/88A)";
    }else if($("#size-2").val()=="L"){
        familySize1="L(175/92A)";
        user.p1_teesize = "L(175/92A)";
    }else if($("#size-2").val()=="XL"){
        familySize1="XL(180/96A)";
        user.p1_teesize = "XL(180/96A)";
    }else if($("#size-2").val()=="XXL"){
        familySize1="XXL(185/100A)";
        user.p1_teesize = "XXL(185/100A)";
    }
    familyName1 = $("#username-2").val();
    user.p1_name = ""+$("#username-2").val()+"";
    user.p1_birthday = " "+$("#year-2").val()+""+"-"+""+$("#month-2").val()+" ";
    if ($(".p3-sex-boy-2").is(":checked")){
         familySex1 = "男";
         user.p1_sex = "男";
    }else{
         familySex1 = "女";
         user.p1_sex = "女";
    }
    if($("#idchange-2").val()== "0"){
    	  user.p1_card_type = "身份证";
    }else if($("#idchange-2").val()== "1"){
    	  user.p1_card_type = "护照";
    }else if($("#idchange-2").val()== "2"){
    	  user.p1_card_type = "港澳通行证";
    }else if($("#idchange-2").val()== "3"){
    	  user.p1_card_type = "台胞证";
    }
    user.p1_card_number = ""+$("#idcard-2").val()+"";
    user.p1_phone = ""+$("#phone-2").val()+"";
    user.p1_emergency_name = ""+$("#eperson-2").val()+"";
    user.p1_emergency_phone = ""+$("#ephone-2").val()+"";
    if(personTwo == false || personTwo == "empty"){
    	   familySize2 = "";
    	   familyName2 = "";
    	   familySex2 = "";
    	    user.p2_name = "";
        user.p2_sex = "";
        user.p2_birthday = "";
        user.p2_teesize = "";
        user.p2_card_type = "";
        user.p2_card_number = "";
        user.p2_phone = "";
        user.p2_emergency_name = "";
        user.p2_emergency_phone = "";
    }else if(personTwo == true){
    	   if($("#size-3").val()=="XS"){
	        familySize2="XS(160/82A)";
	        user.p2_teesize = "XS(160/82A)";
	    }else if($("#size-3").val()=="S"){
	        familySize2="S(165/84A)";
	        user.p2_teesize = "S(165/84A)";
	    }else if($("#size-3").val()=="M"){
	        familySize2="M(170/88A)";
	        user.p2_teesize = "M(170/88A)";
	    }else if($("#size-3").val()=="L"){
	        familySize2="L(175/92A)";
	        user.p2_teesize = "L(175/92A)";
	    }else if($("#size-3").val()=="XL"){
	        familySize2="XL(180/96A)";
	        user.p2_teesize = "XL(180/96A)";
	    }else if($("#size-3").val()=="XXL"){
	        familySize2="XXL(185/100A)";
	        user.p2_teesize = "XXL(185/100A)";
	    }
	    familyName2 = $("#username-3").val();
	    user.p2_name = ""+$("#username-3").val()+"";
	    if ($(".p3-sex-boy-3").is(":checked")){
	         familySex2 = "男";
	         user.p2_sex = "男";
	    }else{
	         familySex2 = "女";
	         user.p2_sex = "女";
	    }
	    if($("#idchange-3").val()== "0"){
	    	  user.p2_card_type = "身份证";
	    }else if($("#idchange-3").val()== "1"){
	    	  user.p2_card_type = "护照";
	    }else if($("#idchange-3").val()== "2"){
	    	  user.p2_card_type = "港澳通行证";
	    }else if($("#idchange-3").val()== "3"){
	    	  user.p2_card_type = "台胞证";
	    }
	    user.p2_birthday = " "+$("#year-3").val()+""+"-"+""+$("#month-3").val()+" ";
	    user.p2_card_number = ""+$("#idcard-3").val()+"";
	    user.p2_phone = ""+$("#phone-3").val()+"";
	    user.p2_emergency_name = ""+$("#eperson-3").val()+"";
	    user.p2_emergency_phone = ""+$("#ephone-3").val()+"";
    }
    
    user.kids_name = ""+$("#username-4").val()+"";
    user.kids_birthday = " "+$("#year-4").val()+""+"-"+""+$("#month-4").val()+" ";
    if($("#size-4").val()=="XXXS"){
        familySize3="110cm以下";
        user.kids_teesize = "110以下";
    }else if($("#size-4").val()=="XXS"){
        familySize3="110cm-130cm";
        user.kids_teesize = "110cm-130cm";
    }else if($("#size-4").val()=="XS"){
        familySize3="XS(160/82A)";
        user.kids_teesize = "XS(160/82A)";
    }else if($("#size-4").val()=="S"){
        familySize3="S(165/84A)";
        user.kids_teesize = "S(165/84A)";
    }else if($("#size-4").val()=="M"){
        familySize3="M(170/88A)";
        user.kids_teesize = "M(170/88A)";
    }else if($("#size-4").val()=="L"){
        familySize3="L(175/92A)";
        user.kids_teesize = "L(175/92A)";
    }else if($("#size-4").val()=="XL"){
        familySize3="XL(180/96A)";
        user.kids_teesize = "XL(180/96A)";
    }else if($("#size-4").val()=="XXL"){
        familySize3="XXL(185/100A)";
        user.kids_teesize = "XXL(185/100A)";
    }
    if($("#idchange-4").val()== "0"){
    	  user.kids_card_type = "身份证";
    }else if($("#idchange-4").val()== "1"){
    	  user.kids_card_type = "护照";
    }else if($("#idchange-4").val()== "2"){
    	  user.kids_card_type = "港澳通行证";
    }else if($("#idchange-4").val()== "3"){
    	  user.kids_card_type = "台胞证";
    }
	if($("#tag-family").val()=="1"){
        familyTag="棒棒哒";
        user.p1_tag = "#棒棒哒";
    }else if($("#tag-family").val()=="2"){
        familyTag="萌萌哒";
        user.p1_tag = "#萌萌哒";
    }else if($("#tag-family").val()=="3"){
        familyTag="美美哒";
        user.p1_tag = "#美美哒";
    }
	familyName3 = $("#username-4").val();
	 if ($(".p3-sex-boy-4").is(":checked")){
         familySex3 = "男";
         user.kids_sex = "男";
    }else{
         familySex3 = "女";
         user.kids_sex = "女";
    }
    user.kids_card_number = ""+$("#idcard-4").val()+"";
    user.kids_guardian_name = ""+$("#parent").val()+"";
    user.kids_guardian_phone = ""+$("#parent-phone").val()+"";
    user.kids_emergency_name = ""+$("#eperson-4").val()+"";
    user.kids_emergency_phone = ""+$("#ephone-4").val()+"";
    if($(".p4-send").is(":checked")){
    	    user.pakcage_get_way = "顺丰到付";
        user.pakcage_get_name = ""+$(".p4-name").val()+"";
        user.pakcage_get_phone = ""+$(".p4-phone").val()+"";
        user.pakcage_get_address = ""+$(".p4-adress").val()+"";
    }else if($(".p4-get").is(":checked")){
    	    user.pakcage_get_way = "现场领取";
    	    user.pakcage_get_name = "";
        user.pakcage_get_phone = "";
        user.pakcage_get_address = "";
    }
    
}
app.p5.getUserinfo_bygetUser = function(){
	    app.p5.getUser();
	    user.openid = app.p5.wechatUserInfo.id;
        user.nickname = app.p5.wechatUserInfo.nickname;
        user.headimgurl = app.p5.wechatUserInfo.original.headimgurl;
        user.sex = app.p5.wechatUserInfo.original.sex;
        user.city = app.p5.wechatUserInfo.original.city;
        user.country = app.p5.wechatUserInfo.original.country;
        user.province = app.p5.wechatUserInfo.original.province;
        user.subscribe_time = "";
};
app.p5.getCookie = function(c_name){        
    if (document.cookie.length>0)
    {
        var c_start=document.cookie.indexOf(c_name + "=");
        if (c_start!=-1)
        {
            c_start=c_start + c_name.length+1;
            var c_end=document.cookie.indexOf(";",c_start);
            if (c_end==-1) c_end=document.cookie.length
                return unescape(document.cookie.substring(c_start,c_end));
        }
    }
    return ""
};
app.p5.wechatUserInfo = undefined;
app.p5.getUser = function(){
    if(!app.p5.wechatUserInfo){
        var wechatUserInfoBase64 = app.p5.getCookie("wechatUserInfo");
        app.p5.wechatUserInfo = JSON.parse(atob(wechatUserInfoBase64));
    }
    	  return app.p5.wechatUserInfo;
};
//  pay
app.p5.payment=function(data){
   $.post('https://pay.wechat.createcdigital.com/molirun-wxpayapi/wxpay/pub/pay.php', data, function(data){
       callpay(JSON.parse(data));
   }, "JSON");
	var callpay = function(jsapi){
            if (typeof WeixinJSBridge == "undefined"){
                if( document.addEventListener ){
                    document.addEventListener('WeixinJSBridgeReady', jsapicall, false);
                }else if (document.attachEvent){
                    document.attachEvent('WeixinJSBridgeReady', jsapicall);
                    document.attachEvent('onWeixinJSBridgeReady', jsapicall);
                }
            }else{
                jsapicall(jsapi);
            }
        };

        var jsapicall = function(jsapi){
            WeixinJSBridge.invoke(
                'getBrandWCPayRequest', {"appId": jsapi.appId,"nonceStr": jsapi.nonceStr,"package": jsapi.package,"signType": jsapi.signType,"timeStamp": jsapi.timeStamp,"paySign": jsapi.paySign}, function(res){
                    if(res.err_msg == "get_brand_wcpay_request:ok" )
                    {
                        alert("支付成功");
                        $(".p5-paybtn,.p5-btn1,.p5-btn2").hide();
                        $(".p5-payfinish").show();
                    }else{
                        alert("支付失败！");
                    }
                }
            );
        };
};

app.p5.destory = function(){};

// init
(function(){
	 // 框架
    app.template.swiper.init();
    app.template.touch.init();
    app.template.Landscape.init();
	
	/* page init */
    app.template.swiper.on_pageslideend = function(index){
        switch(index)
        {
            case 0:
                app.p1.init();
                break;
            case 1:
                app.p1.destory();
                app.p2.init();
                break;
            case 2:
                app.p2.destory();
                app.p3.init();
                break;
            case 3:
                app.p3.destory();
                app.p4.init();
                break;
            case 4:
                app.p5.init();
                break;
        }
    };
   
	//点击事件初始化
	
	app.p1.bind_touch_event();
	app.p2.bind_touch_event();
	app.p3.bind_touch_event();
	app.p4.bind_touch_event();
	app.p5.bind_touch_event();
	
})();
