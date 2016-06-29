"use strict"

console.log("hola!");
var myApp = angular.module('myApp', []);

myApp.controller('MyController', function ($scope) {
    $scope.message = "Hello, its me";
    $scope.people = [
        {
            name: "Peter"
            , age: 20
        }
        , {
            name: "Jeny"
            , age: 25
        }
        , {
            name: "George"
            , age: 15
        }
    ];
    
    $scope.addPerson = function() {
        console.log("boton pulsado!");
        
        var person = {
            name : $scope.name,
            age : $scope.age
        };
        $scope.people.push(person);
    };
});