(function(angular) {
    'use strict';

    var app = angular.module('polemize');

    app.config(function($httpProvider) {
        $httpProvider.interceptors.push(function($q, $injector) {
            return {
                responseError: function(response) {
                    var $mdToast = $injector.get('$mdToast');

                    var data = response.data;
                    if (!_.isObject(data)) data = {};

                    if (_.contains([404, 422], response.status) && data.details) {
                        $mdToast.show(
                            $mdToast.simple().content(data.details).hideDelay(30000)
                        );
                    }

                    return $q.reject(response);
                }
            };
        });
    });

}(window.angular));
