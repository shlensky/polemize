(function (angular) {
    'use strict';

    var app = angular.module('polemize');

    app.factory('Session', function ($q, $mdDialog, Model) {
        var Session = Model({
            $url: function() { return '/session' },

            $constructor: function Session() {
                this.$initialize.apply(this, arguments)
            }
        });

        Session.currentUser = function() {
            return Session.fetchOne().then(function(user) {
                if (user.name) {
                    return user;
                } else {
                    return $mdDialog.show({
                        templateUrl: 'common/login.html'
                    });
                }
            });
        };

        return Session;
    });

}(window.angular));
