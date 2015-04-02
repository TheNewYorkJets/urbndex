'use strict';

angular.module('urbndex').
    controller('StatsCtrl', ['$scope', 'dummy_data', function ($scope, dummy_data) {

        // dummy data
        $scope.model = dummy_data.fetchStats();

    }]);
