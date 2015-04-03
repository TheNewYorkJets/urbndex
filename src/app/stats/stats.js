'use strict';

angular.module('urbndex').
    controller('StatsCtrl', ['$scope', 'dummy_data', function ($scope, dummy_data) {

        // dummy data
        $scope.model = dummy_data.fetchStats();

        $(".meter > span").each(function() {
            $(this)
                .data("origWidth", $(this).width())
                .width(0)
                .animate({
                    width: $(this).data("origWidth")
                }, 1200);
        });

    }]);
