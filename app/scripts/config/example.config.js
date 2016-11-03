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
    BRAND_NAME: '',
    BRAND_SLOGAN:'',
    BRANDLOGO_URL:'',

    // You can put any social network. lowercase* SOCIAL_NETWORK:'facebook'
    SOCIAL_NETWORKS:[
      {
        SOCIAL_NETWORK:'',
        SOCIAL_URL:''
      }
    ],
    // Quick action button
    QUICK_ACTION:'',

    // Home page
    HERO_URL:'',
    HERO_TITLE:'',
    TITLE_HOME:'',
    TITLE_COLORED_SECTION:'',
    PARALLAX_URL:''
  });
