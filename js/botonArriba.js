$(document).ready(function(){

	$('.contenedorBtn').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.contenedorBtn').slideDown(300);
		} else {
			$('.contenedorBtn').slideUp(300);
		}
	});

});