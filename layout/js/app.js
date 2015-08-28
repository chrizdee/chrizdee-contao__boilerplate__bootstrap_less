$j = jQuery.noConflict(); 
$j(document).ready(function() {

	/*
	$j('.flexslider').flexslider({
		prevText: "", 
		nextText: "",
		controlNav: false,
		start: function(){
			// Timed Animation
			$j('.flexslider .show_10').hide();
			$j('.flexslider .show_20').hide();
			$j('.flexslider .show_30').hide();
			$j('.flexslider .show_40').hide();
			$j('.flexslider .show_50').hide();
		},  
		after: function(slider){
			console.log("currentSlide: " + slider.currentSlide);
			// Timed Animation
			$j('.flexslider .flex-active-slide .show_10').fadeIn('slow');
			$j('.flexslider .flex-active-slide .show_20').delay(200).fadeIn('slow');
			$j('.flexslider .flex-active-slide .show_30').delay(400).fadeIn('slow');
			$j('.flexslider .flex-active-slide .show_40').delay(600).fadeIn('slow');
			$j('.flexslider .flex-active-slide .show_50').delay(600).fadeIn('slow');
		}
	});
	*/

	$j('#show_search_form').click(function(){
		if ($j(this).hasClass('active'))
		{
			$j('#search_form').slideUp('fast');
			$j(this).removeClass('active');
		} else {
			$j(this).addClass('active');
			$j('#search_form').slideDown('fast');
		}
	});

	/*
	$j('.contact_slideinbox .btn').click(function(){
		showCallBack();
	});

	$j('.contact_slideinbox .close').click(function(){
		$j('.contact_slideinbox .box').slideUp('fast');
	})

	$j('#search_form input.text').attr('placeholder', 'Suchbegriff ...');

	if ($j('#header #map').length > 0)
	{
		$j('#container').css('margin-top', '50px');
	}
	*/

});

function showCallBack()
{
	$j('.contact_slideinbox .box').slideDown('fast');
}