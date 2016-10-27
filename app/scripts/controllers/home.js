'use strict';

/**
 * @ngdoc function
 * @name ckApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the ckApp
 */
angular.module('ckApp')
  .controller('HomeCtrl', function () {
    angular.element('.carousel.carousel-slider').carousel({full_width: true});
    angular.element('.carousel-quotes').carousel({full_width: true});
    angular.element('.parallax').parallax();

    $(window).scroll( function(){

      /* Check the location of each desired element */
      var mult = 2;
      $('.hideme').each( function(i){
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_object ){

          $(this).animate({'opacity':'1'},500*mult);
        }
        mult++

      });

    });
  });
