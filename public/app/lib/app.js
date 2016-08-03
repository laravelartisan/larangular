/*
var app = angular.module('employeeRecords', [])
    .constant('API_URL', 'http://localhost/angulara/public/api/v1/');*/


var myApp = angular.module('myApp',['ngRoute','ngCookies']);


myApp.config(['$routeProvider','$locationProvider',function ($routeProvider,$locationProvider) {

    $routeProvider.when('/user',{
        templateUrl:'templates/index.html',
        controller:'userController'
    });
    $routeProvider.when('/create',{
        templateUrl:'templates/create-user.html',
        controller:'userController'
    });
    $routeProvider.when('/user/:id/edit',{
        templateUrl:'templates/edit-user.html',
        controller:'userController'
    });

    $routeProvider.otherwise('/');
}]);