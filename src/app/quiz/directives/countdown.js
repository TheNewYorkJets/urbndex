'use strict';

angular.module('urbndex')
    .directive('countdown', function ($rootScope) {

        return {
            link: function (scope, element, attr) {
                function createCountdown(time, format) {
                    element.countdown(time)
                        // remove previous event binding
                        .off('.countdown')
                        .on('update.countdown', function (event) {
                            $(this).html(event.strftime(format));
                        })
                        .on('finish.countdown', function (event) {
                            $(this).html('0');
                            $rootScope.$emit('finish.countdown');
                        });
                }

                console.log('bind');
                $rootScope.$on('start.countdown', function (event, _time, _format) {
                    var time = _time || (new Date()).getTime() + 10000;
                    var format = _format || '%S';

                    createCountdown(time, format);
                });

                $rootScope.$on('stop.countdown', function (event) {
                    element.countdown('stop');
                    element.html('0');
                });
            }
        };

    });
