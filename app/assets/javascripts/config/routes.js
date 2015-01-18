(function (angular) {
    'use strict';

    var app = angular.module('polemize');

    app.config(function ($locationProvider, $stateProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('root', {
                url: '/',
                templateUrl: 'questions/index.html'
            })
            .state('page', {
                url: '/pages/:slug',
                templateUrl: 'pages/show.html'
            })
            .state('questions', {
                url: '/questions',
                abstract : true,
                template : '<ui-view/>'
            })
            .state('questions.show', {
                url: '/:slug',
                templateUrl: 'questions/show.html'
            });
    });

}(window.angular));
