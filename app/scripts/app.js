'use strict';

angular
  .module('diagonalLayoutAngularApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/iteration/:index/', {
        templateUrl: 'views/iteration.html',
        controller: 'IterationCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
