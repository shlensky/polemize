(function (angular) {
    'use strict';

    var app = angular.module('polemize');

    app.factory('Question', function (Model) {
        return Model({
            $urlRoot: '/questions',

            $constructor: function Question() {
                this.$initialize.apply(this, arguments)
            }
        });
    });

}(window.angular));
