$(function() {

	$('.main-img-ten').eq(0).show();
	$('.four-top>ul>li').mouseenter(function() {
		$(this).css({
			'background': '#ffffff'
		});
		$(this).css({
			'border-top': '2px solid #cc0000'
		});
		$('.four-top>ul>li').not($(this)).css({
			'background': '#f9f9f9'
		});
		$('.four-top>ul>li').not($(this)).css({
			'border-top': 'none'
		});
		$(this).find('a').css({
			'color': '#cc0000'
		});
		$('.four-top>ul>li>a').not($(this).find('a')).css({
			'color': 'rgb(102, 102, 102)'
		});

		$(this).find('.main-img-ten').show();
		$('.main-img-ten').not($(this).find('.main-img-ten')).hide();
	})

	//	color: #cc0000
	//	右侧标签
	$('.four-right-top-nav>ul>li').eq(0).css({
		'background': '#fff'
	});
	$('.dropdown-nav').eq(0).show();
	$('.four-right-top-nav>ul>li').eq(0).css({
		'border-top': '2px solid #cc0000'
	});
	$('.four-right-top-nav>ul>li').mouseenter(function() {
		$(this).css({
			'background': '#fff'
		});
		$(this).find('.gonggao').css({
			'color': '#cc0000'
		});
		$('.gonggao').not($(this).find('.gonggao')).css({
			'color': 'rgb(102, 102, 102)'
		});
		$(this).css({
			'border-top': '2px solid #cc0000'
		});
		$('.four-right-top-nav>ul>li').not($(this)).css({
			'border-top': 'none'
		});
		$('.four-right-top-nav>ul>li').not($(this)).css({
			'background': '#f9f9f9'
		});
		$(this).find('.dropdown-nav').show();
		$('.dropdown-nav').not($(this).find('.dropdown-nav')).hide();
	})
	//固定栏
	$('.right-guding').mouseenter(function() {
		$(this).find('.drop').show();
		$(this).css({
			'background': 'rgb(204, 0, 0)'
		});

	})
	$('.right-guding').mouseleave(function() {
		$(this).find('.drop').hide();
		$(this).css({
			'background': '#fff'
		});

	})

	//last-part
	$('.last-top>ul>li').mouseenter(function() {
		var index = $(this).index();
		var width = 120;
		$('.last-bottom>ul').eq(index).show().siblings().hide();
		$('.titleslide').css({
			'left': width * index
		});
		$(this).addClass('on').siblings().removeClass('on');
		//		$('.last-bottom>ul>li>img').css({'margin-left':'left1'});

	})

	$('.last-bottom>ul>li>img').mouseenter(function() {
		var left1 = 100;
		$(this).animate({
			'margin-left': -left1
		});
		$('.last-bottom>ul>li>img').not($(this)).animate({
			'margin-left': 0
		});

	})

	var index5 = 0;

	function biaoqianleft() {
		index5++;
		if(index5 >= 5) {
			index5 = 0;
		}
		$('.four-top>ul>li').eq(index5).css({
			'background': '#ffffff'
		});
		$('.four-top>ul>li').eq(index5).css({
			'border-top': '2px solid #cc0000'
		});
		$('.four-top>ul>li').not($('.four-top>ul>li').eq(index5)).css({
			'background': '#EEEEEE'
		});
		$('.four-top>ul>li').not($('.four-top>ul>li').eq(index5)).css({
			'border-top': 'none'
		});
		$('.four-top>ul>li').eq(index5).find('a').css({
			'color': '#f30'
		});
		$('.four-top>ul>li>a').not($('.four-top>ul>li').eq(index5).find('a')).css({
			'color': '#000'
		});
		$('.four-center p').eq(index5).show().siblings().hide();
		$('.main-img-ten').eq(index5).show();
		$('.main-img-ten').not($('.main-img-ten').eq(index5)).hide();
	};

	var stoptime = setInterval(function() {
		biaoqianleft();
	}, 2000);

	$('.four-mainbox').mouseenter(function() {
		clearInterval(stoptime);

	})
	$('.four-mainbox').mouseleave(function() {
		stoptime = setInterval(function() {
			biaoqianleft();

		}, 2000);
	})

	//滾動監聽
	$('.floorback').mouseenter(function() {
		$('.floorback>i').css({
			'background-position': '-95px -190px'
		});
	})
	$('.floorback').mouseleave(function() {
		$('.floorback>i').css({
			'background-position': '-74px -190px'
		});
	})

	$('.floorback').click(function() {
		s = $(window).scrollTop();
		v = 50;

		sobj = setInterval(function() {
			s -= v;

			if(s <= 0) {
				s = 0;
				clearInterval(sobj);
			}

			$(window).scrollTop(s);
		}, 10);
	})

	$('.floor1').mouseenter(function() {
	  var floo1name2=$(this).find('a').attr('name');
		$(this).find('i').hide();
		$(this).find('a').html(floo1name2).css({
			'display': 'block'
		}).animate({
			'width': 60
		}, 800);

	})
	$('.floor1').mouseleave(function() {

		$(this).find('a').animate({
			'width': '28px'
		}, 400, function() {
			$(this).css({
				'display': 'none'
			});
			$('.floor1').find('i').show();

		});
	})
	$('.floor1').click(function() {
       var f=$(this).find('a').attr('name1')
       var t=$('#'+f).offset().top-100;
       var st=$(window).scrollTop();
       var v=35;
       if(st>=t){
       	 
      	var	objfloor=setInterval(function(){
       	    st-=v;
       	    if(st<=t) {
				st=t;
				clearInterval(objfloor);
			}
      	 $(window).scrollTop(st);
     	  },10);
       }else{
       	 var objfloor=setInterval(function(){
       	    st+=v;
       	    if(st>=t) {
				st=t;
				clearInterval(objfloor);
			}
      	 $(window).scrollTop(st);
     	  },10);
       	
       }
       
       
     
	})
	$('.floor2').mouseenter(function(){
	 	 var floo1name2=$(this).find('a').attr('name');
		$(this).find('i').hide();
		$(this).find('a').html(floo1name2).css({
			'display': 'block'
		}).animate({
			'width': 90
		}, 800);

	})
	$('.floor2').mouseleave(function() {

		$(this).find('a').animate({
			'width': '28px'
		}, 400, function() {
			$(this).css({
				'display': 'none'
			});
			$('.floor2').find('i').show();
		});
	});
	$('.floor2').click(function() {
       var f=$(this).find('a').attr('name1')
       var t=$('#'+f).offset().top-100;
       var st=$(window).scrollTop();
       var v=35;
      if(st>=t){
       	 
      	var	objfloor=setInterval(function(){
       	    st-=v;
       	    if(st<=t) {
				st=t;
				clearInterval(objfloor);
			}
      	 $(window).scrollTop(st);
     	  },10);
       }else{
       	 var objfloor=setInterval(function(){
       	    st+=v;
       	    if(st>=t) {
				st=t;
				clearInterval(objfloor);
			}
      	 $(window).scrollTop(st);
     	  },10);
       	
       }
	})
	$('.floor3').mouseenter(function() {
		 var floo1name2=$(this).find('a').attr('name');
		$(this).find('i').hide();
		$(this).find('a').html(floo1name2).css({
			'display': 'block'
		}).animate({
			'width': 90
		}, 800);

	})
	$('.floor3').mouseleave(function() {

		$(this).find('a').animate({
			'width': '28px'
		}, 400, function() {
			$(this).css({
				'display': 'none'
			});
			$('.floor3').find('i').show();
		});
	});
	$('.floor3').click(function() {
       var f=$(this).find('a').attr('name1')
       var t=$('#'+f).offset().top-100;
 		var st=$(window).scrollTop();
       var v=35;
       if(st>=t){
       	 
      	var	objfloor=setInterval(function(){
       	    st-=v;
       	    if(st<=t) {
				st=t;
				clearInterval(objfloor);
			}
      	 $(window).scrollTop(st);
     	  },10);
       }else{
       	 var objfloor=setInterval(function(){
       	    st+=v;
       	    if(st>=t) {
				st=t;
				clearInterval(objfloor);
			}
      	 $(window).scrollTop(st);
     	  },10);
       	
       }
	})
	$('.floor4').mouseenter(function() {
		 var floo1name2=$(this).find('a').attr('name');
		$(this).find('i').hide();
		$(this).find('a').html(floo1name2).css({
			'display': 'block'
		}).animate({
			'width': 130
		}, 1200);

	})
	$('.floor4').mouseleave(function() {

		$(this).find('a').animate({
			'width': '28px'
		}, 400, function() {
			$(this).css({
				'display': 'none'
			});
			$('.floor4').find('i').show();
		});
	});
	$('.floor4').click(function() {
       var f=$(this).find('a').attr('name1')
       var t=$('#'+f).offset().top-100;
        var st=$(window).scrollTop();
       var v=35;
      if(st>=t){
       	 
      	var	objfloor=setInterval(function(){
       	    st-=v;
       	    if(st<=t) {
				st=t;
				clearInterval(objfloor);
			}
      	 $(window).scrollTop(st);
     	  },10);
       }else{
       	 var objfloor=setInterval(function(){
       	    st+=v;
       	    if(st>=t) {
				st=t;
				clearInterval(objfloor);
			}
      	 $(window).scrollTop(st);
     	  },10);
       	
       }
	})
	$('.floor5').mouseenter(function() {
	    var floo1name2=$(this).find('a').attr('name');
		$(this).find('i').hide();
		$(this).find('a').html(floo1name2).css({
			'display': 'block'
		}).animate({
			'width': 60
		}, 800);

	})
	$('.floor5').mouseleave(function() {

		$(this).find('a').animate({
			'width': '28px'
		}, 400, function() {
			$(this).css({
				'display': 'none'
			});
			$('.floor5').find('i').show();
		});
	});
	$('.floor5').click(function() {
       var f=$(this).find('a').attr('name1')
       var t=$('#'+f).offset().top-100;
        var st=$(window).scrollTop();
       var v=35;
      if(st>=t){
       	 
      	var	objfloor=setInterval(function(){
       	    st-=v;
       	    if(st<=t) {
				st=t;
				clearInterval(objfloor);
			}
      	 $(window).scrollTop(st);
     	  },10);
       }else{
       	 var objfloor=setInterval(function(){
       	    st+=v;
       	    if(st>=t) {
				st=t;
				clearInterval(objfloor);
			}
      	 $(window).scrollTop(st);
     	  },10);
       	
       }
	})
	
	//滚动监听开始
	$(window).scroll(function(){
		var st= $(window).scrollTop();
//		 document.title=st;
		    $('.floornum').each(function(){
		    	var ot= $(this).offset().top-100;
		    	if(st>=ot){
		   	 	 fname=$(this).attr('id');
		   	 	 $('.Scrolling-monitor a[name1='+fname+']').html(fname).css({'display':'block'});
		   	 	 $('.Scrolling-monitor a[name1='+fname+']').next('i').hide();
		   	 	 
		   	 	 $('.floorA').not($('.Scrolling-monitor a[name1='+fname+']')).each(function(){
		   	 	 	fname1=$(this).attr('name');
		   	 	 	$(this).html(fname1).hide();
		   	 	 	$(this).siblings().show();
		   	 	 	
		   	 	 })
		    	}
		    	
		    	
		    })
	})
	
	
	//广告
	$('.newGuestsBox>i').click(function(){
		$('.guanggao').hide(1500);
	})
	
	
})