function homeController() {
    'use strict';

    return ['$scope', 'dataService', function($scope, dataService) {
        $scope.fetchConfig = function() {
            return dataService.fetch().then(function(data) {
                $scope.progressBarConfig = data.data.lightbox;
            });
        };

        $scope.reset = function() {
            return $scope.fetchConfig();
        };

        $scope.fetchConfig();
    }];
}
