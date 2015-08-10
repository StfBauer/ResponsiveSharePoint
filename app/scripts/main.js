// jshint devel:true
var polyfillBurger = polyfillBurger || {};

(function($) {
    
    'use strict';

    polyfillBurger = function(element) {

        // show burger event definition
        var showHideBurger = function(event) {
            event.preventDefault();
            
            if ($(this).hasClass('showBurger')) {
                $(this).removeClass('showBurger');
            
            } else {
                $(this).addClass('showBurger');
            
            }
        };

        // request element with burger
        var burger = $(element);

        // check if burger exists
        if (burger !== undefined &&
            burger.length !== 0) {

            // register burger menu
            burger.on('click', showHideBurger);
            burger.each(function(index, el) {
                $(el).on('click', showHideBurger);
            });

        }

    };


    $(document).ready(function() {
        polyfillBurger('.ms-core-listMenu-horizontalBox');
    });

}(jQuery));