'use strict';

angular.module('myApp',[])
    .service('dataService', dataService())
    .controller('homeController', homeController())
    .component('progressBar', progressBar());