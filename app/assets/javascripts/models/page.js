(function (angular) {
    'use strict';

    var app = angular.module('polemize');

    app.factory('Page', function (Model) {
        var Page = Model({
            $urlRoot: '/pages',
            $idAttribute: 'slug',

            $constructor: function Page() {
                this.$initialize.apply(this, arguments)
            }
        });

        return Page;
    });

}(window.angular));
