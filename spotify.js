"use strict"

console.log("hola!");
var spotifyApp = angular.module('spotifyApp', []);

spotifyApp.controller('MySpotifyController', function($scope, $http) {
    $scope.message = "Hello, its me";
    $scope.search = function (){
        $http({
  method: 'GET',
  url: 'https://api.spotify.com/v1/search',
  params: {type: 'artist', q: $scope.artist}
  
}).then(function successCallback(response) {
    console.log("OK!", response.data);
            $scope.artists= response.data.artists.items;
  }, function errorCallback(response) {
    console.log("ERROR!")
  });
    };
});