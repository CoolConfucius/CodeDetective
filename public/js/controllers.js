'use strict';

var app = angular.module('APP_NAME');

app.controller('secretCtrl', function($scope, $state, auth) {
  if(!auth.isLoggedIn()){
    return $state.go('home');
  }

});

app.controller('homeCtrl', function($scope, $state, $http, auth) {
// console.log(auth.currentUser());
// Profile Ctrl
  if(auth.isLoggedIn()){
    $scope.username = auth.currentUser(); 
    $scope.level = auth.object().level; 
    $scope.achievements = auth.object().achievements; 
    $scope.symbol = auth.object().symbol; 
  } else {
    $scope.symbol = '\u2660';    
  }

  //Symbol Ctrl 
  $scope.selectSuitStage = true; 
  $scope.selectSuit = function(suit){
    switch(suit) {
      case 'spades':
        $scope.symbol = '\u2660';
        break;
      case 'clubs':
        $scope.symbol = '\u2663';
        break;
      case 'hearts':
        $scope.symbol = '\u2665';
        break;
      case 'diams':
        $scope.symbol = '\u2666';
        break;
      case 'spades2':
        $scope.symbol = '\u2664';
        break;
      case 'clubs2':
        $scope.symbol = '\u2667';
        break;
      case 'hearts2':
        $scope.symbol = '\u2661';
        break;
      case 'diams2':
        $scope.symbol = '\u2662';
        break;
      default:
        $scope.symbol = '\u2660';
    }
    console.log("you selected ", $scope.symbol); 
  };

  // $scope.save(){
  //   $http.post('users/save', data, function(err, data){

  //   });
  // };

  // $scope.save(){
  //   $http.post('users/load', data, function(err, data){

  //   });
  // };


  //General Level Ctrl
  $scope.auth = auth.isLoggedIn();
  if ($scope.auth) {
    $scope.username = auth.currentUser(); 
    if (auth.object().symbol) {
     switch(auth.object().symbol) {
      case 'spades':
        $scope.symbol = '\u2660';
        break;
      case 'clubs':
        $scope.symbol = '\u2663';
        break;
      case 'hearts':
        $scope.symbol = '\u2665';
        break;
      case 'diams':
        $scope.symbol = '\u2666';
        break;
      case 'spades2':
        $scope.symbol = '\u2664';
        break;
      case 'clubs2':
        $scope.symbol = '\u2667';
        break;
      case 'hearts2':
        $scope.symbol = '\u2661';
        break;
      case 'diams2':
        $scope.symbol = '\u2662';
        break;
      default:
        $scope.symbol = '\u2660';
    }     
    } else {
      $scope.symbol = '\u2660';
    }
  }

  //Wakingup Ctrl
  // $scope.wakingup = [false, false, ]
  $scope.wakingup1 = false; 
  $scope.wakingup2 = false; 
  $scope.wakingup3 = false; 
  $scope.wakingup4 = false; 
  $scope.wakingup5 = false;
  $scope.wakingup6 = false;
  $scope.wakingupAll = function(){
    $scope.wakingup1 = true; 
    $scope.wakingup2 = true; 
    $scope.wakingup3 = true; 
    $scope.wakingup4 = true; 
    $scope.wakingup5 = true;
    $scope.wakingup6 = true;
  };
  $scope.yourName = function(){
    console.log($scope.name);
    if ($scope.name) {
      $scope.wakingup1 = true; 
    };
    $scope.wakingup1 = true; 
  };
  $scope.yourAge = function(){
    if($scope.age){
      $scope.wakingup2 = true; 
    }
    $scope.wakingup2 = true; 
  };
  $scope.simplemath = function(){
    // if ($scope.sum !== 10){
    //   alert("The sum isn't right. Try again.")
    // } else if ($scope.difference !== 4){
    //   alert("The difference isn't right. Try again.")
    // } else if ($scope.product !== 12){
    //   alert("The product isn't right. Try again.")
    // } else if ($scope.quotient !== 3){
    //   alert("The quotient isn't right. Try again.")
    // } else if ($scope.mod !== 3){
    //   alert("The remainder after division isn't right. Try again.")
    // } else {
    //   $scope.wakingup3 = true;       
    // }
    $scope.wakingup3 = true; 
  };
  $scope.simplebool = function(){
    // if ($scope.equal) {
    //   alert("The first one should return false!");
    // } else if (!$scope.unequal) {
    //   alert("The second one should return true! It's true that 12 is not equal to 4.")
    // } else if (!$scope.gt) {
    //   alert("The third one should return true!")
    // } else if ($scope.lt) {
    //   alert("The fourth one should return false!")
    // } else if (!$scope.gt) {
    //   alert("The fifth one should return true!")
    // } else if (!$scope.gt) {
    //   alert("The sixth one should return true!")
    // } else {
    //   $scope.wakingup4 = true; 
    // }
    $scope.wakingup4 = true; 
  }; 
  $scope.stringcompare = function(){
    // if (!$scope.equalStrings) {
    //   alert("The first one should return true! The two strings are the same!");
    // } else if ($scope.unequalStrings) {
    //   alert("The second one should return false! The strings are different!")
    // } else if (!$scope.caseStrings) {
    //   alert("The third one should return true! It's true that the strings are not equal because case counts!")
    // } else {
    //   $scope.wakingup5 = true; 
    // }
    $scope.wakingup5 = true; 
  }; 
  $scope.stringlength = function(){
    alert("39");
    $scope.wakingup6 = true; 
  }; 

  //Client Ctrl
  $scope.client1 = false; 
  $scope.client2 = false; 
  $scope.client3 = false; 
  $scope.client5 = false;
  $scope.client6 = false;
  $scope.simplevars = function(){
    if ($scope.vars !== "A string 15 another string150 and third string!"){
      alert("Watch out for spaces and make sure your arithmetic is right.")
    }
    $scope.client1 = true; 
  };
  $scope.rookB = function(){
    if (!$scope.rookB1) {
      alert("The longer string is longer than the shorter string.");
    } else if ($scope.rookB2 !== "a"){
      alert("index 0 means the first letter. What is the first letter?");
    } else if ($scope.rookB3 !== "t" || $scope.rookB4 !== "s" || $scope.rookB5 !== "b"){
      alert("try again.");
    } else {
      $scope.client2 = true; 
    }

    $scope.client2 = true; 
  };



});

























app.controller('navCtrl', function($scope, $state, auth) {
  console.log("AUTH",auth);
  console.log(auth.isLoggedIn);
  console.log(auth.isLoggedIn());
  $scope.logout = function(){
    auth.logout();  
    $state.go('home');
  }
  $scope.auth = auth.isLoggedIn();
  if ($scope.auth) {
    $scope.username = auth.currentUser(); 
    if (auth.object().symbol) {
     switch(auth.object().symbol) {
      case 'spades':
        $scope.symbol = '\u2660';
        break;
      case 'clubs':
        $scope.symbol = '\u2663';
        break;
      case 'hearts':
        $scope.symbol = '\u2665';
        break;
      case 'diams':
        $scope.symbol = '\u2666';
        break;
      case 'spades2':
        $scope.symbol = '\u2664';
        break;
      case 'clubs2':
        $scope.symbol = '\u2667';
        break;
      case 'hearts2':
        $scope.symbol = '\u2661';
        break;
      case 'diams2':
        $scope.symbol = '\u2662';
        break;
      default:
        $scope.symbol = '\u2660';
    }     
    } else {
      $scope.symbol = '\u2660';
    }
  }
});

app.controller('usersCtrl', function($scope, $state, auth) {
  // $scope.unicode = '\u2660';  
  $scope.currentState = $state.current.name.split('.')[1].toUpperCase();
  $scope.submit = function(user) {

    if ($scope.currentState === 'LOGIN') {
      // do login stuff
      auth.login(user).success(function(res){
        console.log('ok:', res);
        $state.go('home');
      }).error(function(res){
        $scope.user = {}; 
        console.log("error:", res);
        alert("error:", res);
      });
    } else {
      // do register stuff
      auth.register(user).success(function(res){
        console.log('ok:', res);
        console.log('controllers.js user:', user);
        alert("You earned the achievemnt: Get off your bed!");

        $state.go('client');
      }).error(function(res){
        $scope.user = {}; 
        console.log("error:", res);
        alert("error:", res);
      });
    }


    // //profile
    // $scope.username = auth.currentUser(); 
    // console.log('AUTH:', auth);
    // console.log('SCOPE', $scope);
    // console.log('State', $state);

  };
});