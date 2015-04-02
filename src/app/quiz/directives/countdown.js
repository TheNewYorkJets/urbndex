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
                            $rootScope.$emit('finish.countdown');
                        });
                }

                $rootScope.$on('start.countdown', function (event, sec) {
                    var seconds = sec || 3;
                    // element.countdown('start');
                    createCountdown(seconds * 1000);
                });

                $rootScope.$on('stop.countdown', function (event) {
                    element.countdown('stop');
                    element.html('0');
                });
            }
        };

    });
