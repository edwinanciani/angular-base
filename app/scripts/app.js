'use strict';

/**
 * @ngdoc overview
 * @name tsr-app
 * @description
 * # tsr-app
 *
 * Main module of the application.
 */
function Routes($stateProvider,$urlRouterProvider) {
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
      controller: 'HomeCtrl',
      controllerAs:'home'
    })
}

angular
  .module('tsr-app', [
    'ngAnimate',
    'ngAria',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ngMaterial',
    'ui.bootstrap',
    'pascalprecht.translate'
  ])
  .config(Routes);
