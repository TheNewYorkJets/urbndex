'use strict';

angular.module('urbndex').
    controller('ProfileCtrl', ['$scope', 'dummy_data', function ($scope, dummy_data) {

        // dummy data
        $scope.model = dummy_data.fetchProfile();

    }]);
