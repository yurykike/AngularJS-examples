"use strict"

console.log("hola!");
var myApp = angular.module('myApp', []);

myApp.controller('MyController', function($scope) {
    $scope.message = "Hello, its me";
});