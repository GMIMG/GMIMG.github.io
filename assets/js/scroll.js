/* global window */
(function (window) {
    'use strict';
    $(function () {
        $(window).scroll(function () {
            var viewportTop = $(window).scrollTop();
            if (viewportTop) {
                $('#back-to-top').show();
            } else {
                // already top: hide
                $('#back-to-top').hide();
            }
        });

    });
}(window));