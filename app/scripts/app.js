'use strict';

/**
 * @ngdoc overview
 * @name myWebsiteApp
 * @description
 * # myWebsiteApp
 *
 * Main module of the application.
 */
angular
  .module('myWebsiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/responsive', {
        templateUrl: 'views/responsive.html',
        controller: 'RespCtrl',
        controllerAs: 'responsive'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
