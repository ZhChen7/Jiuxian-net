$(function(){

	   width=270;
//	   第一个轮波图(标签)
	$('.four-slide-one>.circle>ul>li').click(function(){
		 moveindex7=$(this).index();
		$('.four-slide-one>ul').animate({'left':-width*moveindex7});
		$(this).addClass('on').siblings().removeClass('on');
		
	})
	//	   第二个轮波图(标签)
	$('.four-slide-two>.circle>ul>li').click(function(){
		 moveindex7=$(this).index();
		$('.four-slide-two>ul').animate({'left':-width*moveindex7});
		$(this).addClass('on').siblings().removeClass('on');
		
	})
	//自动播放函数
	  index7=0;
	function slide1(){
		if(index7>=2){
			index7=0;
			$('.four-slide-one>ul').css({'left':0});
		}
		   index7++;
  	$('.four-slide-one>ul').animate({'left':-width*index7});
  	if(index7>=2){
  		$('.four-slide-one>.circle>ul>li').eq(0).addClass('on').siblings().removeClass('on');
  	}else{
  		$('.four-slide-one>.circle>ul>li').eq(index7).addClass('on').siblings().removeClass('on');
  	}
	}
		//自动播放函数
		index7=0
		function slide2(){
		if(index7>=3){
			index7=0;
			$('.four-slide-two>ul').css({'left':0});
		}
		   index7++;
  	$('.four-slide-two>ul').animate({'left':-width*index7});
  	if(index7>=3){
  		$('.four-slide-two>.circle>ul>li').eq(0).addClass('on').siblings().removeClass('on');
  	}else{
  		$('.four-slide-two>.circle>ul>li').eq(index7).addClass('on').siblings().removeClass('on');
  	}
	}
	
	var stoptime=setInterval(function(){
		slide1();
	},3000);
	
		var stoptime1=setInterval(function(){
		slide2();
	},4000);
	
	
	$('.four-slide-one').mouseenter(function(){
		clearInterval(stoptime);
	})
	$('.four-slide-one').mouseleave(function(){
		stoptime=setInterval(function(){
		slide1();
	 },2000);
	})
	
//	轮波图2
	$('.four-slide-two').mouseenter(function(){
		clearInterval(stoptime1);
	})
	$('.four-slide-two').mouseleave(function(){
		stoptime1=setInterval(function(){
		slide2();
	 },3000);
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})


