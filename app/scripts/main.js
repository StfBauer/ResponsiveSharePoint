// jshint devel:true
var polyfillBurger = polyfillBurger || {};

(function($) {

    'use strict';

    // Used from devices that doesn't handle focus / hover event properly
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


    // return the current page mode
    // BROWSE or DESIGN
    var detectPageMode = function() {
        return $('input#MSOSPWebPartManager_DisplayModeName').val().toUpperCase();
    };

    var mediaPlayerFix = function() {

        // Check if page is in browse or design mode
        var curPageMode = detectPageMode();
        // If it is not browse mode do nothing
        if (curPageMode !== 'BROWSE') {
            return;
        }
        // Query for media player container
        var mediaPlayers = $('.mediaPlayerContainer');

        // check if media player exists on page
        if (mediaPlayers.length !== 0) {

            // loop over all media players
            mediaPlayers.each(function() {

                // get current player element
                var curElement = $(this);

                // remove inline styles from parent element  
                curElement.parent().removeAttr('style');

            });

        }
    };

    $(document).ready(function() {
        polyfillBurger('.ms-core-listMenu-horizontalBox');
        mediaPlayerFix();
    });

}(jQuery));