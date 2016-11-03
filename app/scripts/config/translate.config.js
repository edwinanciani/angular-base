'use strict';

/**
 * @ngdoc function
 * @name ckApp.Translate:Config
 * @description
 * # Config
 * Translate of the ckApp
 */
function Translate($translateProvider) {
  $translateProvider.useStaticFilesLoader({
    prefix: '/languages/',
    suffix: '.json'
  });
  $translateProvider.preferredLanguage('EN');
  $translateProvider.useSanitizeValueStrategy('escape');
}
angular.module('tsr-app')
  .config(['$translateProvider', Translate]);
