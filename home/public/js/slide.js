$(function() {
	      
	      index = 0;
			$('.middle_box .middle_slide ul li').eq(0).show();
			$('.more_img_three ul').eq(0).show();
			
			    function arraw(){
				index++;
				if(index >= 8) {
					index = 0;
				}
				$('.middle_box .middle_slide ul li').eq(index).fadeIn().siblings().fadeOut();
				$('.small_btn li').eq(index).addClass('now').siblings().removeClass('now');
				$('.more_img_three ul').eq(index).fadeIn().siblings().fadeOut();
				
			};

			$('.small_btn li').mouseenter(function() {
				var index1 = $(this).index();
				$(this).addClass('now').siblings().removeClass('now');
				$('.middle_box .middle_slide ul li').eq(index1).fadeIn().siblings().fadeOut();
				index=index1;
			});
	
	     var stoptime = setInterval(function(){
			   arraw();
			}, 2000);
	
			$('.middle_slide').mouseenter(function() {
				clearInterval(stoptime);
			});
			
			$('.middle_box').mouseleave(function() {
				stoptime=setInterval(function(){
					  arraw();
				},2000);
			});
	
           //five-Slide
           $('.five-box .rightnavbox>ul>li').click(function(){
           	var index=$(this).index();
           	$('.five-drop').eq(index).show(1500).siblings().hide(1000);
           	$('.five-box .rightnavbox>ul>li').eq(index).addClass('on-color').siblings().removeClass('on-color');    
           	
           })
            //six-slide
            $('.six-bottom-slide>.circle>ul>li').click(function(){
            	 var width=210;
            	$(this).addClass('on').siblings().removeClass('on');
            	var index=$(this).index();
            	$('.six-bottom-slide>ul').animate({'left':-width*index});
            	
            })
            
             index2=0
        	function six_slide(){
            	 var width=210;
        		if(index2>=3){
        			index2=0;
        			$('.six-bottom-slide>ul').css({'left':0});
        		}
             index2++;
             $('.six-bottom-slide>ul').animate({'left':-width*index2});
           
           if(index2>=3){
        	 $('.six-bottom-slide>.circle>ul>li').eq(0).addClass('on').siblings().removeClass('on');
           }else{
        	 $('.six-bottom-slide>.circle>ul>li').eq(index2).addClass('on').siblings().removeClass('on');
           }
        	}
			
       		 var stoptime1 = setInterval(function() {
				six_slide();//six-slide
			}, 2000);
        
            $('.six-bottom-slide').mouseenter(function(){
				clearInterval(stoptime1);
			})
 
			$('.six-bottom-slide').mouseleave(function() {
				stoptime1 = setInterval(function() {
				six_slide();//six-slide
				}, 2000);
			})
             
			$('.all_sores_nav>ul').mouseenter(function() {
				$(this).find('.Side_navigation').show();
				$(this).css({'border-left':'3px solid #CC0001'});
				$('.all_sores_nav>ul').not($(this)).css({'border-left':'none'});
				$('.Side_navigation').not($(this).find('.Side_navigation')).hide();
				
			})
			$('.all_sores_nav>ul').mouseleave(function() {
				$(this).find('.Side_navigation').hide();
			})

		})