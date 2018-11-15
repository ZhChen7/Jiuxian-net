$(function(){
	 $('.hd-n1>a').mouseenter(function(){
	 	$(this).find('s').css({'transform':'rotate(180deg)'});
	 	$(this).css({'background':'#ffffff'});
	 	$('.myjiuxian').show();
	 })
	$('.hd-n1').mouseleave(function(){
		$('.hd-n1>a').css({'background':'#f2f2f2'});
		$('.myjiuxian').hide();
	 	$('.hd-n1>a>s').css({'transform':'rotate(0deg)'});
		
	})
	 $('.hd-n3>a').mouseenter(function(){
	 	$('.erweima').show();
	 })
	$('.hd-n3').mouseleave(function(){
		
		$('.erweima').hide();
		
	})
	 $('.hd-n6>a').mouseenter(function(){
	 	$(this).find('s:last').css({'transform':'rotate(180deg)'});
	 	$('.hd-n6>a').css({'background':'#ffffff'});
	 	$('.webnav-dropdowm').show();
	 })
	$('.hd-n6').mouseleave(function(){
		$('.hd-n6>a').css({'background':'#f2f2f2'});
		$('.webnav-dropdowm').hide();
	 	$('.hd-n6>a>s').css({'transform':'rotate(0deg)'});
		
		
	})
	 $('.hd-n7>a').mouseenter(function(){
	 	$(this).find('s:last').css({'transform':'rotate(180deg)'});
	 	$('.hd-n7>a').css({'background':'#ffffff'});
	 	$('.kehu-dropdowm').show();
	 })
	$('.hd-n7').mouseleave(function(){
		$('.hd-n7>a').css({'background':'#f2f2f2'});
		$('.kehu-dropdowm').hide();
	 	$('.hd-n7>a>s').css({'transform':'rotate(0deg)'});
		
	})
	
	
	
})