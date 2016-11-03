'use strict';

/**
 * @ngdoc function
 * @name ckApp.Constant:Config
 * @description
 * # Config
 * Constant of the ckApp
 */
angular.module('tsr-app')
  .constant('Config',{
    API:'',
    // Name your brand
    BRAND_NAME: 'Clean Key',
    BRAND_SLOGAN:'Something like that',
    BRANDLOGO_URL:'',

    // You can put any social network. lowercase* SOCIAL_NETWORK:'facebook'
    SOCIAL_NETWORKS:[
      {
        SOCIAL_NETWORK:'facebook',
        SOCIAL_URL:'https://www.facebook.com'
      },
      {
        SOCIAL_NETWORK:'twitter',
        SOCIAL_URL:'https://www.twitter.com'
      },
      {
        SOCIAL_NETWORK:'linkedin',
        SOCIAL_URL:'https://www.linkedin.com'
      }
    ],
    // Quick action button
    QUICK_ACTION:'Ask for your KEY',

    // Home page
    HERO_URL:'http://lorempixel.com/800/800/city/',
    HERO_TITLE:'We can clean you house',
    TITLE_HOME:'How we work',
    TITLE_COLORED_SECTION:'Comments',
    PARALLAX_URL:'http://lorempixel.com/1420/1024/sports/'
  });
