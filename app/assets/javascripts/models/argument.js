(function (angular) {
    'use strict';

    var app = angular.module('polemize');

    app.factory('Argument', function (Model) {
        var Argument = Model({
            $url: function() {
                var urlRoot = '/questions/' + this.$question.slug + '/arguments';
                if (this.id) {
                    return urlRoot + '/' + this.id;
                } else {
                    return urlRoot;
                }
            },

            $constructor: function Argument() {
                this.$initialize.apply(this, arguments)
            }
        });

        return Argument;
    });

}(window.angular));
