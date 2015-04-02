'use strict';

angular.module('urbndex')
    .controller('QuizCtrl', function ($scope) {

        // dummy data
        $scope.quizData = [
            {
                'photoSrc': 'https://placekitten.com/g/200/300',
                'answer': 'matt lavinia',
                'choices': [
                    'Steve Miller',
                    'Theresa Maida',
                    'matt lavinia',
                    'Kay nothstein'
                ]
            }
        ];

        

        // angular.forEach($scope.awesomeThings, function(awesomeThing) {
        //     awesomeThing.rank = Math.random();
        // });
    });
