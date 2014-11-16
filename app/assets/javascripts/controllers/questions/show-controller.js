(function (angular) {
    'use strict';

    var app = angular.module('polemize');

    app.controller('QuestionsShowController', function($stateParams, Question, Vote) {
        var ctrl = this;

        /**
         * @type {boolean}
         */
        ctrl.loading = true;

        /**
         * @type {object}
         */
        ctrl.question = {};

        /**
         * @returns {$q.promise}
         */
        function loadQuestion() {
            return Question.fetchOne($stateParams.slug).then(function(question) {
                ctrl.question = question;
            });
        }

        /**
         * @type {object}
         */
        ctrl.vote = {};

        /**
         * @returns {$q.promise}
         */
        function loadVote() {
            return ctrl.question.$fetchVote().then(function(vote) {
                ctrl.vote = vote || new Vote();
                ctrl.vote.$question = ctrl.question;
            });
        }

        /**
         * @attributes {object}
         * @returns {$q.promise}
         */
        ctrl.saveVote = function(attributes) {
            return ctrl.vote.$save(attributes).then(function() {
                ctrl.question.$fetch();
            });
        };

        loadQuestion().then(loadVote).then(function() {
            ctrl.loading = false;
        });
    });

}(window.angular));
