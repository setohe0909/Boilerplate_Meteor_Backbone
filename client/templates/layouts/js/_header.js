
 oHeader = {

	openMainMenu: function() {
		var navMain = $('#nav-main');
		if (!(navMain.hasClass('slide'))) {
			navMain.addClass('slide');
		}
		var mainMenu = $('#menu-main');
		mainMenu.fadeIn(300).addClass('active');
		$('#menu-btn').addClass('active');
		
		var maxHeight = $(window).height() - 90;
		mainMenu.css('max-height',maxHeight);
		
		var time = 10;
		$('#menu-main a.link-block span, #menu-main .link-content, #menu-main .link-container.raptor .menu-roundel').each(function() {
			var title = $(this);
			setTimeout(function() {
				title.addClass('animated fadeInDown');
			}, time);
			time += 55;
		});
	},

	closeMainMenu: function() {
		$('#menu-main').fadeOut(600).removeClass('active');
		$('#menu-btn').removeClass('active');
	},

};

Template._header.events({
	'click #menu-btn': function(event, template) {
		event.preventDefault();
		console.log("hello");

		var mainMenu = $('#menu-main');
		if (mainMenu.hasClass('active')) {
			oHeader.closeMainMenu();
		}
		else {
			oHeader.openMainMenu();
		}
	}
});
