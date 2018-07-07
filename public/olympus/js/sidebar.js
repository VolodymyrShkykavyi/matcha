(function () {
    var $sidebar = $('.fixed-sidebar');

    // Toggle aside panels
    $(".js-sidebar-open").on('click', function () {
        var mobileWidthApp = $('body').outerWidth();
        if (mobileWidthApp <= 560) {
            $(this).closest('body').find('.popup-chat-responsive').removeClass('open-chat');
        }

        $(this).toggleClass('active');
        $(this).closest($sidebar).toggleClass('open');
        return false;
    });

    // Close on "Esc" click
    $(window).keydown(function (eventObject) {
        if (eventObject.which == 27 && $sidebar.is(':visible')) {
            $sidebar.removeClass('open');
        }
    });

    // Close on click outside elements.
    $(document).on('click', function (event) {
        if (!$(event.target).closest($sidebar).length && $sidebar.is(':visible')) {
            $sidebar.removeClass('open');
        }
    });
})();
