"use strict"

console.log("hola!");
var myApp = angular.module('myApp', []);

myApp.controller('MyController', function($scope, $http) {
    $scope.message = "Hello, its me";
});