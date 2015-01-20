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
        'ngMaterial',
        'ui.router',
        'ngSocial',
        'templates',
        'ActiveRecord'
    ]);

}(window.angular));
