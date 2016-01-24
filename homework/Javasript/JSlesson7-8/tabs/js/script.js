$(function() {
	
	var $tabs = $('<div class="tabs"></div>');
	var $menu = $('<ul class="menu"></ul>');
	var $tab1 = $('<li class="tabButtons tab1"></li>');
  var $tab2 = $('<li class="tabButtons tab2"></li>');
  var $tab3 = $('<li class="tabButtons tab3"></li>');
	
	var $link1 = $('<a class="link" href="">Nunc tincidunt</a>');
	var $link2 = $('<a class="link" href="">Proin dolor</a>');
	var $link3 = $('<a class="link" href="">Aenean lacinia</a>');
	
	var $content1 = $('<div class="tabContent">Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.</div>');
	var $content2 = $('<div class="tabContent">Morbi tincidunt, dui sit amet facilisis feugiat, odio metus gravida ante, ut pharetra massa metus id nunc. Duis scelerisque molestie turpis. Sed fringilla, massa eget luctus malesuada, metus eros molestie lectus, ut tempus eros massa ut dolor. Aenean aliquet fringilla sem. Suspendisse sed ligula in ligula suscipit aliquam. Praesent in eros vestibulum mi adipiscing adipiscing. Morbi facilisis. Curabitur ornare consequat nunc. Aenean vel metus. Ut posuere viverra nulla. Aliquam erat volutpat. Pellentesque convallis. Maecenas feugiat, tellus pellentesque pretium posuere, felis lorem euismod felis, eu ornare leo nisi vel felis. Mauris consectetur tortor et purus.</div>');
	var $content3 = $('<div class="tabContent">Mauris eleifend est et turpis. Duis id erat. Suspendisse potenti. Aliquam vulputate, pede vel vehicula accumsan, mi neque rutrum erat, eu congue orci lorem eget lorem. Vestibulum non ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sodales. Quisque eu urna vel enim commodo pellentesque. Praesent eu risus hendrerit ligula tempus pretium. Curabitur lorem enim, pretium nec, feugiat nec, luctus a, lacus. Duis cursus. Maecenas ligula eros, blandit nec, pharetra at, semper at, magna. Nullam ac lacus. Nulla facilisi. Praesent viverra justo vitae neque. Praesent blandit adipiscing velit. Suspendisse potenti. Donec mattis, pede vel pharetra blandit, magna ligula faucibus eros, id euismod lacus dolor eget odio. Nam scelerisque. Donec non libero sed nulla mattis commodo. Ut sagittis. Donec nisi lectus, feugiat porttitor, tempor ac, tempor vitae, pede. Aenean vehicula velit eu tellus interdum rutrum. Maecenas commodo. Pellentesque nec elit. Fusce in lacus. Vivamus a libero vitae lectus hendrerit hendrerit.</div>');


	$('body').append($tabs);
	$('.tabs').append($menu);
	$('.menu').append($tab1);
	$('.menu').append($tab2);
	$('.menu').append($tab3);
	$('.tab1').append($link1);
	$('.tab2').append($link2);
	$('.tab3').append($link3);
	$('.tabs').append($content1);
	$('.tabs').append($content2);
	$('.tabs').append($content3);

	var $tabButtons = $('.tabButtons');
	var $tabContent = $('.tabContent');
	
	$tabButtons.on('click', switchTab);
	
	function switchTab(e) {
		var index = $(this).index();

		e.preventDefault();

		$tabContent.hide();
		$tabContent.eq(index).show();
		
		$tabButtons.eq(index).addClass('active').siblings().removeClass('active');
	}
	
	$tabContent.first().show();

});