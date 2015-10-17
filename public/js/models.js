'use strict';

var app = angular.module('APP_NAME');

app.factory('auth', function($window, $http, localStorageKey) {
  var auth = {};

  auth.saveToken = function (token){
    $window.localStorage[localStorageKey] = token;
  };

  auth.getToken = function (){
    return $window.localStorage[localStorageKey];
  }

  auth.isLoggedIn = function(){
    var token = auth.getToken();

    if(token){
      var payload = JSON.parse($window.atob(token.split('.')[1]));
      console.log("models.js: PAYLOAD:", payload);
      return payload.exp > Date.now() / 1000;
    } else {
      return false;
    }
  };

  auth.currentUser = function(){
    if(auth.isLoggedIn()){
      var token = auth.getToken();
      var payload = JSON.parse($window.atob(token.split('.')[1]));

      return payload.username;
    }
  };

  auth.register = function(user){
    return $http.post('/users/register', user).success(function(data){
      auth.saveToken(data.token);
    });
  };

  auth.login = function(user){
    return $http.post('/users/login', user).success(function(data){
      auth.saveToken(data.token);
    });
  };

  auth.logout = function(){
    console.log("clicked!");
    $window.localStorage.removeItem(localStorageKey);
  };

  auth.object = function(){
    if(auth.isLoggedIn()){
      var token = auth.getToken();
      var payload = JSON.parse($window.atob(token.split('.')[1]));
      if (!payload.symbol) {payload.symbol = '\u2660';}
      return {
        level: payload.level,
        achievements: payload.achievements,
        symbol: payload.symbol
      };
    }
  };

  auth.offBed = function(){

  }


  return auth;
});