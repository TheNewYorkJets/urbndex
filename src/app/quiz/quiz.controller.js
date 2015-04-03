'use strict';

angular.module('urbndex').
    controller('QuizCtrl', function ($scope, $timeout, $rootScope, dummy_data) {
        // some of these logics can be separated out into a 'question' controller

        $scope.model = {

            // these values needs to be reset for each question
            each: {
                revealDetails: false,
                chosenAnswer: '',
                gotItRight: false
            },

            totalCount: 5,

            // for storing question fetched from service
            questionsArr: [],

            // array of boolean for tracking question
            tracker: []
        };

        $scope.action = {
            chooseAnswer: function (choice) {
                var gotItRight;

                if(!$scope.model.each.chosenAnswer) {
                    gotItRight = $scope.action.checkRightAnswer(choice);

                    $scope.model.each.chosenAnswer = choice;
                    $scope.model.each.gotItRight = gotItRight;

                    trackQuestion(gotItRight);

                    // stop timer after choosing
                    $rootScope.$emit('stop.countdown');

                    $timeout(function () {
                        // after revealing answer for 2 seconds
                        // show revealDetails
                        revealDetails();
                    }, 2000);
                }
            },
            resetQuiz: function () {
                resetQuiz();
            },
            checkRightAnswer: function (choice) {
                return choice.name === $scope.model.question.answer.name;
            }
        };

        function trackQuestion (result) {
            $scope.model.tracker.push(result);
        }

        function timesUp () {
            console.log('times up');
            $scope.$apply(function () {
                trackQuestion(false);
                revealDetails();
            });
        }

        function revealDetails () {
            $scope.model.each.revealDetails = true;
        }

        function getQuestions () {
            var i;

            for(i = 0; i < $scope.model.totalCount; i++) {
                $scope.model.questionsArr.push(dummy_data.fetchQuiz());
            }

            console.log($scope.model.questionsArr);

        }

        function setNextQuestion () {
            console.log($scope.model.tracker);
            $scope.model.question = $scope.model.questionsArr[$scope.model.tracker.length];
        }

        function resetQuiz () {
            if($scope.model.tracker.length >= $scope.model.totalCount) {
                // show end screen
            } else {
                $scope.model.each.revealDetails = false;
                $scope.model.each.chosenAnswer = '';
                $scope.model.each.gotItRight = false;
                

                setNextQuestion();
                init();

            }
        }

        function init () {

            // start timer after fetching data
            $rootScope.$emit('start.countdown');
        }
        
        // fetch data
        getQuestions();
        $timeout(function () {
            setNextQuestion();
            init();
        }, 0);

        $rootScope.$on('finish.countdown', timesUp);

    });
