'use strict';

angular.module('urbndex').
    controller('QuizCtrl', ['$scope', 'dummy_data', function ($scope, dummy_data) {

        // dummy data
        $scope.model = dummy_data.fetchQuiz();

        angular.forEach($scope.model.choices, function(option) {
            option.rank = Math.random();
        });
    }]);
