$(function(){
	
	
	$('.topicsBox').slick({
		autoplay:true,
		autoplaySpeed: 5000,
		slidesToShow: 2,
		arrows: true,
		prevArrow: '<a class="slick-prev"></a>',
		nextArrow: '<a class="slick-next"></a>',
		responsive: [{
			breakpoint: 769, settings: {
				slidesToShow: 1,
			}
		}]
	});
	$('.characterList').slick({
		slidesToShow: 1,
		arrows: true,
		prevArrow: '<a class="slick-prev"></a>',
		nextArrow: '<a class="slick-next"></a>',
	});
	
	var slider = ".characterList";
	
	$('.characterNav li').on('click',function(){
		var index = $(this).attr("data-index");
		$(slider).slick("slickGoTo",index,false);
		
	});
	
	$(slider).on('afterChange', function(slick, currentSlide, nextSlide) {
		$('.slick-slide').each(function(){
			if ($(this).attr("data-slick-index") == nextSlide) {
				var id = $(this).attr("id");
				
				$('.characterTxtBox').attr('id',id).dequeue();
				$('.txtBox').animate({opacity : 0}, 0);
				$('.txtBox').each(function(){
					if ($(this).attr("id") == id) {
						$(this).animate({opacity : 1}, 200);
					}
				});
			}
		});
	});
	
	
	
	$(window).on('load resize', function() {
		txtBox();
		newsTop();
		
		/*var wW = $(window).width();
		if(wW >= 769){
			$('#top').ripples({resolution: 400});
			var $el = $('#top');
			var x = Math.random() * $el.outerWidth();
			var y = Math.random() * $el.outerHeight();
			var dropRadius = 20;
			var strength = 0.04 + Math.random() * 0.04;
			$el.ripples('drop', x, y, dropRadius, strength);
		}else {
			$('#top').ripples('destroy');
		}*/
		
	});
	
	jQuery.event.add(window,"load",function() {
		/*footerRipples();*/
		$('#story').ripples({resolution: 600,interactive: false});
		setInterval(function() {
			storyRipples();
		}, 1500);
	});
	
	function txtBox(){
		$(".txtBox").removeClass("on");
		var tH = 0; var tH01 = 0;
		$(".txtBox").each(function(){
			tH01 = $(this).find(".name").height() + $(this).find(".txt").height();
			if (tH < tH01){tH = tH01;}
		});
		$(".txtBox").css({'height':tH+'px'}).addClass("on");
	}
	
	
	
	function newsTop(){
		var wW = $(window).width();
		var hT = 0;
		if(wW >= 1200){
			hT = wW/8;
			$('.maskTop').css({'margin-top': -hT +'px'});
		}else {
			$('.maskTop').css({'margin-top':''});
		}
		if(wW <= 768){
			hT = wW/6;
			$('.maskTop').css({'margin-top': -hT +'px'});
		}
		if(wW >= 400 && wW <= 768){
			hT = wW/4;
			$('.adjust').css({'padding-top': hT +'px'});
			$('.adjust').css({'padding-bottom': hT +'px'});
		}else {
			$('.adjust').css({'padding-top':''});
			$('.adjust').css({'padding-bottom':''});
		}
		
	}
	function storyRipples(){
		var $el = $('#story');
		var x = Math.random() * $el.outerWidth();
		var y = Math.random() * $el.outerHeight();
		var dropRadius = 20;
		var strength = 0.04 + Math.random() * 0.04;
		$el.ripples('drop', x, y, dropRadius, strength);
	}
	/*function footerRipples(){
		$('.footerWrap').ripples({resolution: 400});
		var $el = $('.footerWrap');
		var x = Math.random() * $el.outerWidth();
		var y = Math.random() * $el.outerHeight();
		var dropRadius = 30;
		var strength = 0.04 + Math.random() * 0.04;
		$el.ripples('drop', x, y, dropRadius, strength);
	}*/
	
});
