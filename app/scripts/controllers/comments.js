'use strict';

/**
 * @ngdoc function
 * @name ckApp.controller:CommentsCtrl
 * @description
 * # CommentsCtrl
 * Controller of the ckApp
 */
angular.module('tsr-app')
  .controller('CommentsCtrl', function ($scope,Config) {
    $scope.TITLE_COLORED_SECTION = Config.TITLE_COLORED_SECTION;
  });
