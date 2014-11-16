(function (angular) {
    'use strict';

    var app = angular.module('polemize');

    app.factory('Question', function (Model, Vote) {
        var Question = Model({
            $urlRoot: '/questions',
            $idAttribute: 'slug',

            $constructor: function Question() {
                this.$initialize.apply(this, arguments)
            },

            $fetchVote: function() {
                var url = this.$url() + '/votes';
                return Vote.fetchAll({url: url}).then(function(votes) {
                    return votes[0];
                });
            },

            $totalVotes: function() {
                return (this.pro_votes_count + this.con_votes_count);
            },

            $proVotesPercentage: function() {
                return this.pro_votes_count / this.$totalVotes() * 100;
            },

            $conVotesPercentage: function() {
                return this.con_votes_count / this.$totalVotes() * 100;
            }
        });

        return Question;
    });

}(window.angular));
