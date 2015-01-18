(function (angular) {
    'use strict';

    var app = angular.module('polemize');

    app.controller('PageController', function($stateParams, Page) {
        var ctrl = this;

        /**
         * @type {boolean}
         */
        ctrl.loading = true;

        /**
         * @type {object}
         */
        ctrl.page = {};

        /**
         * @returns {$q.promise}
         */
        function loadPage() {
            return Page.fetchOne($stateParams.slug).then(function(page) {
                ctrl.page = page;
            });
        }

        loadPage().then(function() {
            ctrl.loading = false;
        });
    });

}(window.angular));
