(function (angular) {
    'use strict';

    var app = angular.module('polemize');

    app.controller('QuestionsShowController', function(Question, $stateParams) {
        var ctrl = this;

        this.question = {};

        Question.fetchOne($stateParams.slug).then(function(question) {
            ctrl.question = question;
        });
    });

}(window.angular));
