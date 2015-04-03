'use strict';

angular.module('urbndex').
    controller('ProfileCtrl', ['$scope', '$window', '$routeParams', 'dummy_data', function ($scope, $window, $routeParams, dummy_data) {

        var id = $routeParams.userId || '';

        // dummy data
        $scope.model = dummy_data.fetchProfile(id);

    }]);
