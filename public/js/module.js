'use strict';

var app = angular.module('APP_NAME', ['ui.router', 'ui.bootstrap']);

app.constant('localStorageKey', 'cades-passport-test');
// app.constant('symbol', '\u2660');

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home', { url: '/', templateUrl: '/html/general/home.html', controller: 'homeCtrl' })
    
    .state('users', { abstract: true, templateUrl: '/html/users/users.html'})
    .state('users.login', { url: '/login', templateUrl: '/html/users/form.html', controller: 'usersCtrl'})
    .state('users.register', { url: '/register', templateUrl: '/html/users/form.html', controller: 'usersCtrl'})
  
    .state('secret', { url: '/secret', templateUrl: '/html/secret.html', controller: 'secretCtrl' })


    .state('profile', { url: '/profile', templateUrl: '/html/profile.html', controller: 'homeCtrl' })
    .state('wakingup', { url: '/wakingup', templateUrl: '/html/wakingup.html', controller: 'homeCtrl' })
    .state('client', { url: '/client', templateUrl: '/html/client.html', controller: 'homeCtrl' })
  $urlRouterProvider.otherwise('/');
});
