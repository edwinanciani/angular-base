'use strict';

/**
 * @ngdoc function
 * @name ckApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the ckApp
 */
function HeaderCtrl(Config) {
  angular.element(".button-collapse").sideNav();
  this.QUICK_ACTION = Config.QUICK_ACTION;
  this.BRAND_NAME = Config.BRAND_NAME;
}
angular.module('tsr-app')
  .controller('HeaderCtrl',HeaderCtrl);
