(function (angular) {
    'use strict';

    var app = angular.module('polemize');

    app.factory('Vote', function (Model) {
        var Vote = Model({
            $url: function() {
                var urlRoot = '/questions/' + this.$question.slug + '/votes';
                if (this.id) {
                    return urlRoot + '/' + this.id;
                } else {
                    return urlRoot;
                }
            },

            $constructor: function Vote() {
                this.$initialize.apply(this, arguments)
            }
        });

        return Vote;
    });

}(window.angular));
