'use strict';

angular.module('urbndex')
    .directive('countdown', function ($rootScope) {

        return {
            link: function (scope, element, attr) {
                function createCountdown(milliSeconds) {

                    element.countdown((new Date()).getTime() + milliSeconds)
                        .on('update.countdown', function (event) {
                            $(this).html(event.strftime('%S'));
                        })
                        .on('finish.countdown', function (event) {
                            $(this).html('0');
                            console.log('finished');
                        });
                }

                $rootScope.$on('start.countdown', function (event, sec) {
                    var seconds = sec || 10;
                    // element.countdown('start');
                    createCountdown(seconds * 1000);
                });
            }
        };

    });
