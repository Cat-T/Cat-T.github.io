$(function(){
	$('input').each(function(index, input) {
		var $input = $(input)
		
		$input.on('mouseover', function() {
			$(this).siblings('.tooltip').css({display: 'block'});
		})
		
		$input.on('mouseout', function() {
			$(this).siblings('.tooltip').css({display: 'none'})
		})
	})
	
	$('button').on('click', function() {
		$('.tooltip').css({display:'block'});
	})
});