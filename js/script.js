$(document).ready(function(){
	// 네비게이션-pc
	$('li.menu_more').on('click',function(){
		$('div.sub_depth2_bg').removeClass('on');
		$(this).children('div').addClass('on');
	});
	$('li.sub_dep2').on('mouseover',function(){
		if($(this).children('ul')){
			$('li.sub_dep2').removeClass('on');
			$(this).addClass('on');
			$(this).children('ul').stop().slideDown();
		}else{
			$(this).children('ul').stop().slideDown();
		}
	});
	$('li.sub_dep2').on('mouseout',function(){
		$(this).children('ul').stop().slideUp();
	});
	
	$('.mb_nav_btn').on('click', function(){
		var $winW = $(window).width();
	
		if($winW < 1025){
			$('.user_joinus').removeClass('offTbnav');
			$('.aside_set').removeClass('offTbnav');
			$('.closepop').removeClass('offTbnav');
			$('.tb_nav.forTb').removeClass('offTbnav');
		}
	});
	$('.closepop').on('click', function(){
		$('.tb_nav').addClass('offTbnav');
		$('.user_joinus').addClass('offTbnav');
		$('.aside_set').addClass('offTbnav');
		$('.closepop').addClass('offTbnav');

	});
	
	
	//메인이미지
	$(window).on('resize', function(){
		var $winW = $(window).width();

		if($winW > 1024){
			$('ul.img_list').removeClass('on');
			$('ul.img_list.pcSlide').addClass('on');
		}else if(1025 > $winW > 768){
			$('ul.img_list').removeClass('on');
			$('ul.img_list.tbSlide').addClass('on');
		}else if($winW < 769){
			$('ul.img_list').removeClass('on');
			$('ul.img_list.mbSlide').addClass('on');
		}
	});

	winSize();
	function winSize(){
		var $winW = $(window).width();

		if($winW > 1024){
			$('ul.img_list').removeClass('on');
			$('ul.img_list.pcSlide').addClass('on');
			$('ul.img_list.pcSlide.on').bxSlider({
				auto:true,
				speed: 800,
				pause: 3200,
				autoControls: false,
				controls: true, // prev/next 버튼 노출 여부
				pager: true, // 블릿버튼
				responsive: false,
			});
			
			$('ul.indicator').removeClass('on');
		}else if(769 <= $winW < 1025){
			$('ul.img_list').removeClass('on');
			$('ul.img_list.tbSlide').addClass('on');

			setInterval(function(){
				$('ul.img_list.tbSlide li:first-child').fadeOut().next().fadeIn().end().appendTo('ul.img_list.tbSlide');
			}, 3000);
		}else if($winW <= 768){
			$('ul.img_list').removeClass('on');
			$('ul.img_list.mbSlide').addClass('on');

			setInterval(function(){
				$('ul.img_list.mbSlide li:first-child').fadeOut().next().fadeIn().end().appendTo('ul.img_list.mbSlide');
			}, 3000);
		}
	}


	//퀵메뉴
	$('div.quick').smoothScroll();

	if($(document).scrollTop() < 500) {
		$('div.quick').addClass('hide');
	}else{
		$('div.quick').removeClass('hide');
	}

	// $(window).scroll(function(){
	// 	if($(document).scrollTop() < 500){
	// 		$('div.quick').addClass('hide');
	// 	}else{
	// 		$('div.quick').removeClass('hide');
	// 	}
	// });
});