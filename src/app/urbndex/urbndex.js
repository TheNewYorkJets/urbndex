'use strict';

angular.module('urbndex').
    controller('UrbnDexCtrl', ['$scope', 'dummy_data', function ($scope, dummy_data) {

        // dummy data
        var m = $scope.model = dummy_data.fetchUrbnDex();

        var a = $scope.action = {
            filterIt: function (value) {
                m.search = value;
            }
        };

    }]);
