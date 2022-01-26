$(function(){
	//anchor link
	$('a[href^="#"]').on('click',function(){var speed = 600;var href= $(this).attr("href");var target = $(href == "#" || href == "" ? 'html' : href);if( !$(target).get(0) ){ return false; } var position = target.offset().top;$("html, body").animate({scrollTop:position}, speed, "easeOutQuad");return false;});
	
	//pagetop set
	var topBtn = $('.pagetop');
	//topBtn.hide();
	$(window).on('scroll',function(){var scTp = $(window).scrollTop();(scTp>1200)?topBtn.addClass('show'):topBtn.removeClass('show');});
	
	//メニュー表示非表示
	$('.navigationBtn').on('click', function() {if($(this).hasClass('show')) {$('.navigationBtn, .navigationWrap, .navClose').removeClass('show');}else{$('.navigationBtn, .navigationWrap, .navClose').addClass('show');}});
	//メニュー非表示  >  AnchorLink
	$('.navigationWrap a, .navClose').on('click', function() {if($('.navigationBtn').hasClass('show')) {$('.navigationBtn, .navigationWrap, .navClose').removeClass('show');}});
	
	//Magnific Popup -----image
	//$('.imagePopup').magnificPopup({type: 'image',closeOnContentClick: true,mainClass: 'mfp-img-mobile',image: {verticalFit: true}
	//});
	//Magnific Popup -----youtube
	$('.youtube').magnificPopup({disableOn:767,mainClass:"mfp-fade",removalDelay:160,preloader:false,fixedContentPos:false,type:'iframe',iframe:{patterns:{youtube:{index:'youtube.com',id:'v=',src:'//www.youtube.com/embed/%id%?rel=0&autoplay=1'}}}});
	
	//load event
	jQuery.event.add(window,"load",function() {
		$('#overlay').fadeOut(800);
	});
	
	
	
	
	//スクロールアニメーション
	$(window).scroll(function (){
		$(".fade-in").each(function(){
			var position = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > position - windowHeight + 350){
			$(this).addClass('show');
				
			}
		});
	});
	
	
	
	
	
	
});
