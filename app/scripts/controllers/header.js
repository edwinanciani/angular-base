'use strict';

/**
 * @ngdoc function
 * @name ckApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the ckApp
 */
angular.module('ckApp')
  .controller('HeaderCtrl', function () {
    angular.element(".button-collapse").sideNav()
  });
