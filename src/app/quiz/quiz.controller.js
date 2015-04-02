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
                    $scope.model.gotItRight = choice.name === $scope.model.question.name;

                    $timeout(function () {
                        // after revealing answer for 2 seconds
                        // show revealDetails
                        revealDetails();
                    }, 2000);

                    // stop timer after choosing
                    $rootScope.$emit('stop.countdown');
                }
            },
            resetQuiz: function () {
                resetQuiz();
            },
            checkRightAnswer: function (choice) {
                return choice.name === $scope.model.question.answer;
            }
        };

        function revealDetails () {
            console.log('here');
            $scope.$apply(function () {
                $scope.model.revealDetails = true;
            });
        }

        function getQuestion () {
            $scope.model.question = dummy_data.fetchQuiz();
        }

        function resetQuiz () {
            $scope.model = {
                revealDetails: false,
                chosenAnswer: '',
                gotItRight: false
            };

            getQuestion();
            init();
        }

        function init () {

            // start timer after fetching data
            $rootScope.$emit('start.countdown');

            angular.forEach($scope.model.question.choices, function(option) {
                option.rank = Math.random();
            });
        }
        
        // fetch data
        $timeout(function () {
            getQuestion();
            init();
        }, 0);

        $rootScope.$on('finish.countdown', revealDetails);

    });
