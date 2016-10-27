'use strict';

/**
 * @ngdoc overview
 * @name ckappApp
 * @description
 * # ckappApp
 *
 * Main module of the application.
 */
angular
  .module('tsr-app', [
    'ngAnimate',
    'ngAria',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ngMaterial'
  ])
  .config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
      .state('app', {
        url: "",
        templateUrl:'views/main.html',
        controller: 'MainCtrl',
        abstract:true
      })
      .state('app.main', {
        url: "/",
        templateUrl:'views/home/home.html',
        controller: 'HomeCtrl'
      })
  });
