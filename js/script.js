$(document).ready(function(){
	// 네비게이션
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

	var $imgs = $('ul.img_list>li').length;
	var winWidth = $(window).width();

//	$('ul.img_list').css('width', $imgs*winWidth);
//	$('ul.img_list>li').css('width',winWidth);

	$('ul.img_list').bxSlider({
		mode:'horizontal',
		auto:true,
		pager: false,
        autoControls: true
	});

	// $('ul.indicator>li').on('click', function(){
	// 	var slideImg = $('ul.img_list li');
	// 	var winWidth = $(window).width();
	// 	var onIndicator = $(this).index();

	// 	$('ul.img_list').stop().animate({marginLeft:'-'+ onIndicator * winWidth}, 600);
	// 	$('.indicator > li').removeClass('on');
	// 	$(this).addClass('on');
	// });

	$('div.quick').smoothScroll();

	if($(document).scrollTop() < 300) {
		$('div.quick').addClass('hide');
	}else{
		$('div.quick').removeClass('hide');
	}
	$(window).scroll(function(){
		if($(document).scrollTop() < 300){
			$('div.quick').addClass('hide');
		}else{
			$('div.quick').removeClass('hide');
		}
	});



});