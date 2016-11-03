'use strict';

/**
 * @ngdoc function
 * @name ckApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the ckApp
 */
function Home(Config) {
  this.TITLE_HOME = Config.TITLE_HOME;
  this.QUICK_ACTION = Config.QUICK_ACTION;
  this.PARALLAX_URL = Config.PARALLAX_URL;
  this.HERO_URL = Config.HERO_URL;
  this.slides = [
    {
      CAROUSEL_URL:'http://placehold.it/1920x800',
      CAROUSEL_TITLE:'FIRST CAROUSEL TITLE',
      CAROUSEL_TEXT:'First carousel description'
    },
    {
      CAROUSEL_URL: 'http://placehold.it/1920x800',
      CAROUSEL_TITLE: 'SECOND CAROUSEL TITLE',
      CAROUSEL_TEXT: 'SECOND carousel description'
    }
  ];
  this.cards = [
    {
      CARD_URL:'http://placehold.it/800x800',
      CARD_TITLE:'First Title',
      CARD_TEXT:'Any text',
      CARD_LINK:'Some link'
    },
    {
      CARD_URL:'http://placehold.it/800x800',
      CARD_TITLE:'Second Title',
      CARD_TEXT:'Any text',
      CARD_LINK:'Some link'
    },
    {
      CARD_URL:'http://placehold.it/800x800',
      CARD_TITLE:'Third Title',
      CARD_TEXT:'Any text',
      CARD_LINK:'Some link'
    }
  ];

  this.comments = [
    {
      COMMENT_SRC:'Yelp',
      COMMENT_TEXT:'Some comments',
      COMMENT_AUTHOR:'Author'
    },
    {
      COMMENT_SRC:'Facebook',
      COMMENT_TEXT:'Some comments',
      COMMENT_AUTHOR:'Author'
    }
  ];

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
      mult++;

    });

  });
  angular.element('.parallax').parallax();
}
angular.module('tsr-app')
  .controller('HomeCtrl', Home);
