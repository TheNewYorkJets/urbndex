'use strict';

angular.module('urbndex')
    .directive('countdown', function () {

        return {
            link: function (scope, element, attr) {
                element.countdown((new Date()).getTime() + 10000)
                    .on('update.countdown', function (event) {
                        $(this).html(event.strftime('%S'));
                    })
                    .on('finish.countdown', function (event) {
                        $(this).html('0');
                        console.log('finished');
                    });
            }
        };

    });
