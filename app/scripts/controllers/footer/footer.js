'use strict';

/**
 * @ngdoc function
 * @name ckApp.controller:FooterCtrl
 * @description
 * # FooterCtrl
 * Controller of the ckApp
 */
function FooterCtrl(Config) {
  angular.element(".button-collapse").sideNav();
  this.socials = Config.SOCIAL_NETWORKS;
  this.BRAND_NAME = Config.BRAND_NAME;
}
angular.module('tsr-app')
  .controller('FooterCtrl',FooterCtrl);
