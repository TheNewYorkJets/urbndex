'use strict';

angular.module('urbndex').
    controller('NavbarCtrl', ['$scope', 'dummy_data', function ($scope, dummy_data) {

    // dummy data
    $scope.model = dummy_data.fetchProfile('7');

    var a = $scope.action = {
        showHide: function () {
            console.log('toggle');
            $('.hamburger-menu').toggle();
        },

        reRoute: function (route) {
            $('.hamburger-menu').toggle();
            window.location = "/#/" + route;
        }
    };
  }]);
