'use strict';

angular.module('urbndex').
    controller('QuizCtrl', function ($scope, $timeout, $rootScope, dummy_data) {


        $scope.model = {
            revealDetails: false,
            chosenAnswer: ''
        };

        $scope.action = {
            chooseAnswer: function (choice) {
                if($scope.model.chosenAnswer) {
                    alert('you only get to choose once');
                } else {
                    $scope.model.chosenAnswer = choice;

                    $timeout(function () {
                        // after revealing answer for 2 seconds
                        // show revealDetails

                        $scope.model.revealDetails = true;
                    }, 4000);
                }
            },
            resetQuiz: function () {
                console.log('reset');
            },
            checkRightAnswer: function (choice) {
                return choice.name === $scope.model.question.answer;
            }
        };

        function init () {

            // start timer after fetching data
            $rootScope.$emit('start.countdown');

            angular.forEach($scope.model.choices, function(option) {
                option.rank = Math.random();
            });
        }
        
        // fetch data
        $timeout(function () {
            $scope.model.question = dummy_data.fetchQuiz();

            init();
        }, 0);

    });
