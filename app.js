(function () {
  "use strict";

  angular.module('demoApp', [
    'ngRoute'
  ])

  .config(function ($routeProvider) {
    $routeProvider

      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/bag', {
          controller: 'MainController as mainCtrl'
      })

  });



})();



//(); IIFE- immediatley invoked function execution. this is just javascript. if its written without the call back function it would look like this ()(); basically taking this and making it annoyn. defined. making sure nothing is leaked int he global scope, everything is protected//
