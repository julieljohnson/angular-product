(function () {
  "use strict";

  angular.module('demoApp', [
    'ngRoute'
  ])

  .config(function ($routeProvider) {
    $routeProvider
    .when('/', {
       templateUrl: 'cart-feature/main.html',
       controller: 'MainController as mainCtrl'
    })
    .when('/cart', {
       templateUrl: 'cart-feature/cart.html',
       controller: 'CartController as cart'
    })
    .when('/admin', {
       templateUrl: 'cart-feature/admin.html',
       controller: 'AdminController as admin'
    })
    .when('/admin/new', {
       templateUrl: 'cart-feature/newProduct.html',
       controller: 'AdminController as admin'
    })
    .when('/admin/edit/:productId', {
       templateUrl: 'cart-feature/editProduct.html',
       controller: 'AdminController as admin'
    })
    .when('/admin/detail/:productID', {
       templateUrl: 'cart-feature/productDetail.html',
       controller: 'AdminController as admin'
    })


})
.constant('_', _)
})();
