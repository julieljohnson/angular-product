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
    .when('/cart', {
       templateUrl: 'views/cart.html',
       controller: 'CartController as cart'
    })
    .when('/admin', {
       templateUrl: 'views/admin.html',
       controller: 'AdminController as admin'
    })
    .when('/admin/new', {
       templateUrl: 'views/newProduct.html',
       controller: 'AdminController as admin'
    })
    .when('/admin/edit/:productId', {
       templateUrl: 'views/editProduct.html',
       controller: 'AdminController as admin'
    })
    .when('/admin/detail/:productID', {
       templateUrl: 'views/productDetail.html',
       controller: 'AdminController as admin'
    })


})
.constant('_', _)
})();



// //(); IIFE- immediatley invoked function execution. this is just javascript. if its written without the call back function it would look like this ()(); basically taking this and making it annoyn. defined. making sure nothing is leaked int he global scope, everything is protected//
