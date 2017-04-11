(function (angular) {
    'use strict';

    var app = angular.module('polemize');

    app.controller('QuestionsShowController', function($stateParams, $window, $mdDialog, Question, Vote, Session) {
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
         * @type {string}
         */
        ctrl.currentUrl = $window.location.href;

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
            Session.currentUser().then(function() {
                return ctrl.vote.$save(attributes).then(function() {
                    ctrl.question.$fetch();
                });
            });
        };

        ctrl.addArgument = function(attributes) {
            Session.currentUser().then(function() {
                $mdDialog.show({
                    templateUrl: 'questions/add-argument.html',
                    controllerAs: 'modalCtrl',
                    controller: ['$mdDialog', 'Argument', function($mdDialog, Argument) {
                        var modalCtrl = this;

                        modalCtrl.argument = new Argument(attributes);
                        modalCtrl.argument.$question = ctrl.question;

                        modalCtrl.cancel = function() {
                            $mdDialog.cancel();
                        };

                        modalCtrl.save = function() {
                            modalCtrl.argument.$save().then(function() {
                                $mdDialog.hide(modalCtrl.argument);
                            });
                        };
                    }]
                }).then(function() {
                    ctrl.question.$fetch();
                });
            });
        };

        ctrl.recalcDecision = function() {
            var prosCount = _.filter(ctrl.question.pros, '$checked').length;
            var consCount = _.filter(ctrl.question.cons, '$checked').length;

            ctrl.won = prosCount > consCount;
            ctrl.lost = prosCount < consCount;
            ctrl.draw = prosCount === consCount;
        };

        loadQuestion().then(loadVote).then(function() {
            ctrl.loading = false;
        });
    });

}(window.angular));
