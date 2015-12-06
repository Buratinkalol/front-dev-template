'use strict';
var mainApp = angular.module('mainApp', ['ngRoute']);
mainApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'index.html',
                controller: 'mainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode(true);
    }]);
mainApp.controller('mainCtrl', function ($scope) {
    $scope.testVar = "test";
});