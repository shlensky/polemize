(function (angular) {
    'use strict';

    var app = angular.module('polemize');

    app.factory('Model', function(ActiveRecord) {
        var baseModel = {
            $sync: function(operation, model, options) {
                options = options || {};
                options.headers = options.headers || {};

                options.headers['Accept'] = 'application/json';
                options.url = (options.url || model.$url()) + '.json';

                if (options.data) {
                    options.data = _.pick(options.data, function(value, key) {
                        return key.charAt(0) != '$';
                    });
                }

                return ActiveRecord.sync.apply(this, [operation, model, options]);
            }
        };

        return function(model) {
            var extended = angular.extend({}, baseModel, model);
            return ActiveRecord.extend(extended);
        };
    });
}(window.angular));
