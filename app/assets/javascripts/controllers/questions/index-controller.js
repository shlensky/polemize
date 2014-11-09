(function (angular) {
    'use strict';

    var app = angular.module('polemize');

    app.controller('QuestionsIndexController', function(Question) {
        var ctrl = this;

        this.questions = [];

        Question.fetchAll().then(function(questions) {
            ctrl.questions = questions;
        });
    });

}(window.angular));
