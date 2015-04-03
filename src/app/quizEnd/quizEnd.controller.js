'use strict';

angular.module('urbndex').
    controller('QuizEndCtrl', function ($scope, $timeout, $rootScope, dummy_data) {
        console.log('QuizEndCtrl');

        $timeout(function () {
            console.log(new Date('04/04/2015'));
            $rootScope.$emit('start.countdown', new Date('04/04/2015'), '%H:%M:%S');
        }, 0);
        


    });
