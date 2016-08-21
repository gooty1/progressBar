function dataService() {
    'use strict';

    return ['$http', function($http) {
        this.fetch = function() {
            return $http.get('data.json').then(function(data) {
                return data.data;
            });
        }
    }];
}
