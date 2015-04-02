'use strict';

angular.module('urbndex')
    .controller('QuizCtrl', function ($scope) {

        // dummy data
        $scope.quizData = {
                'photoSrc': 'https://placekitten.com/g/200/300',
                'answer': 'matt lavinia',
                'choices': [
                    { 
                        'name': 'Steve Miller',
                    },
                    { 
                        'name': 'Matt Lavinia',
                    },
                    { 
                        'name': 'Theresa Maida',
                    },
                    { 
                        'name': 'Kay Nothstein',
                    },
                ]
            };

        console.log('quiz controller loaded');

        

        angular.forEach($scope.quizData.choices, function(option) {
            option.rank = Math.random();
        });
    });
