jQuery(document).ready(function($) {
		

	var mainmenu = $('.main-menu');

    if ( mainmenu.length ) {

        var itemSelector    = '.main-menu__item',
            btnSelector     = '.main-menu__btn',
            contentSelector = '.sub-menu',
            activeClass     = 'active';

        mainmenu.each(function() {
            var el       = $(this),
                btn      = el.find(btnSelector),
                items    = el.find(itemSelector),
                contents = el.find(contentSelector);

            btn.on('click', function(event) {
                event.preventDefault();

                var currentBtn = $(this),
                    item       = currentBtn.parent(itemSelector),
                    content    = currentBtn.siblings(contentSelector);

                if ( item.hasClass(activeClass) ) {
                    item.removeClass(activeClass);
                    content.slideUp(200);
                } else {
                    items.removeClass(activeClass);
                    contents.slideUp(200);
                    item.addClass(activeClass);
                    content.slideDown(200);
                }
            });
        });
    }

	$(".js-menu-mobile").click(function(){
		$(".main-menu").addClass("active");
		$(".menu-button").addClass("active");
		$(".js-menu-mobile>p").css("display", "none");
		$(".js-menu-close").css("display", "block");
		return false;
	});
	$(".js-menu-close").click(function(){
		$(".main-menu").removeClass("active");
		$(".menu-button").removeClass("active");
		$(".js-menu-mobile>p").css("display", "block");
		$(".js-menu-close").css("display", "none");
		return false;
	});


    btn.on('click', function(event) {
        var width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
        if(width>767) return;
    });

});