(function (angular) {
    'use strict';

    var app = angular.module('polemize');

    app.config(function($mdThemingProvider) {
        //will use the colors from default theme for any color not defined.
        $mdThemingProvider.theme('cyan').primaryColor('cyan');
        $mdThemingProvider.theme('pink').primaryColor('pink');
        $mdThemingProvider.theme('teal').primaryColor('teal');
    });

}(window.angular));
