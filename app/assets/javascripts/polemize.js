(function (angular) {
    'use strict';

    /**
     * @ngdoc overview
     * @name polemize
     * @description
     * Main module of the application.
     */
    angular.module('polemize', [
        'ngSanitize',
        'ui.router',
        'templates',
        'ActiveRecord'
    ]);

}(window.angular));
