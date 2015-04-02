'use strict';

angular.module('urbndex', ['ngCookies', 'ngTouch', 'ngSanitize', 'ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
