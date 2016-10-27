'use strict';

/**
 * @ngdoc function
 * @name ckApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the ckApp
 */
angular.module('tsr-app')
  .controller('HeaderCtrl', function () {
    angular.element(".button-collapse").sideNav()
  });
