(function (angular) {
    'use strict';

    var app = angular.module('polemize');

    app.config(function($compileProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|mailto|skype):/);
    });

}(window.angular));
