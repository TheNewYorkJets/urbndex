'use strict';

var app = angular.module('urbndex', ['ngCookies', 'ngTouch', 'ngSanitize', 'ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/quizStart', {
        templateUrl: 'app/quizStart/quiz-start.html',
        controller: 'QuizStartCtrl'
      })
      .when('/quiz', {
        templateUrl: 'app/quiz/quiz.html',
        controller: 'QuizCtrl'
      })
      .when('/quizEnd', {
        templateUrl: 'app/quizEnd/quiz-end.html',
        controller: 'QuizEndCtrl'
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
      .when('/challenge', {
        templateUrl: 'app/challenge/challenge.html',
        controller: 'ChallengeCtrl'
      })
      .when('/settings', {
        templateUrl: 'app/settings/settings.html',
        controller: 'SettingsCtrl'
      })
      .otherwise({
        redirectTo: '/urbndex'
      });
  })
;
