'use strict';

angular.module('urbndex').
    controller('NavbarCtrl', ['$scope', 'dummy_data', function ($scope, dummy_data) {

    // dummy data
    $scope.model = dummy_data.fetchProfile('7');

    var a = $scope.action = {
        showHide: function () {
            $('.hamburger-menu').toggle();
        },

        reRoute: function (route) {
            $('.hamburger-menu').toggle();
            window.location = "/#/" + route;
        }
    };

    $(document).mouseup(function (e) {
        var container = $(".hamburger-menu");

        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            container.hide();
        }
    });

  }]);
