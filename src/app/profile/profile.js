'use strict';

angular.module('urbndex').
    controller('ProfileCtrl', ['$scope', '$window', '$routeParams', 'dummy_data', function ($scope, $window, $routeParams, dummy_data) {

        var id = $routeParams.userId || '7';

        // dummy data
        $scope.model = dummy_data.fetchProfile(id);

        $scope.model.related = [
            {
                user: dummy_data.fetchProfile('22')
            },
            {
                user: dummy_data.fetchProfile('14')
            },
            {
                user: dummy_data.fetchProfile('4')
            },
            {
                user: dummy_data.fetchProfile('9')
            },
            {
                user: dummy_data.fetchProfile('11')
            }
        ];

    }]);
