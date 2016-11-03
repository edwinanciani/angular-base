'use strict';

/**
 * @ngdoc function
 * @name ckApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ckApp
 */
angular.module('tsr-app')
  .controller('MainCtrl', function ($scope,Config) {
    $scope.BRAND_NAME = Config.BRAND_NAME;
  });
