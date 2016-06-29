"use strict"

console.log("hola!");
var myApp = angular.module('myApp', []);

<<<<<<< HEAD
myApp.controller('MyController', function ($scope) {
=======
myApp.controller('MyController', function($scope, $http) {
>>>>>>> angular-services
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
    
    $scope.buttonClass = function(){
        if($scope.isFilled()){
            return "enabled";
        }else {
            return "disabled";
        }
    };
    
    $scope.isFilled = function() {
       
        return $scope.name && $scope.age;
        
    };
    
    $scope.addPerson = function() {
        console.log("boton pulsado!");
        
        var person = {
            name : $scope.name,
            age : $scope.age
        };
        $scope.people.push(person);
    };
    
});