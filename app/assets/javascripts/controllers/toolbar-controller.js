(function (angular) {
    'use strict';

    var app = angular.module('polemize');

    app.controller('ToolbarController', function($rootScope, $mdSidenav) {
        var ctrl = this;

        ctrl.toggleSidebar = function() {
            $mdSidenav('left').toggle();
        };

        // Close sidebar when page changed
        $rootScope.$on('$stateChangeStart', function(){
            $mdSidenav('left').close();
        });
    });

}(window.angular));
