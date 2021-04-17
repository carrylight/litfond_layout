$(document).ready(function(){
	$('.lf-doctors__carousel').slick({
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$('.lf-actions__carousel').slick({
		dots: false,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$(".lf-licenses__item-zoom").click(function(){
		var img = $(this).next(".lf-licenses__item-img");
		var src = img.attr('src');

		$("body").append("<div class='lf-licenses__popup'>"+
		"<div class='lf-licenses__popup-bg'></div>"+
		"<img src='"+src+"' class='lf-licenses__popup-img' />"+
		"</div>");

		$(".lf-licenses__popup").fadeIn( "slow" );
		$(".lf-licenses__popup-bg").click(function(){
			$(".lf-licenses__popup").fadeOut("slow");
			setTimeout(function() {
				$(".lf-licenses__popup").remove();
			}, 200);
		});
	});
});