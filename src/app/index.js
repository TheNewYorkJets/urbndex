'use strict';

var app = angular.module('urbndex', ['ngCookies', 'ngTouch', 'ngSanitize', 'ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/quiz', {
        templateUrl: 'app/quiz/quiz.html',
        controller: 'QuizCtrl'
      })
      .when('/profile', {
        templateUrl: 'app/profile/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/stats', {
        templateUrl: 'app/stats/stats.html',
        controller: 'StatsCtrl'
      })
      .when('/urbndex', {
        templateUrl: 'app/urbndex/urbndex.html',
        controller: 'UrbnDexCtrl'
      })
      .otherwise({
        redirectTo: '/urbndex'
      });
  })
;
