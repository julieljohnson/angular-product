(function () {
    "use strict";
    angular.module('demoApp')
    .controller('MainController', function (ProductService) { //scope is going out, so best not to use//
        var mainCtrl = this;
        ProductService.getProducts().success(function (data){
            mainCtrl.products = data;
        });
    })

    .controller('AdminController', function (ProductService, $location, $routeParams, _, $rootScope){
        var admin = this;

        ProductService.getProducts().success(function (data) {
            admin.products = data;
        });
        ProductService.singleProducts($routeParams.productId).success(function (data) {
            admin.singleProducts=data;
        });
        admin.currentIndex= $routeParams.productId;

    admin.addProduct = function(newProduct) {
        newProduct.price = parseInt(newProduct.price);
        ProductService.addProduct(newProduct);
        $location.path('/admin');
    };
    admin.deleteProduct= function (id) {
        ProductService.deleteProduct(id);
    };
    admin.updateProduct = function (product) {
        ProductService.updateProducts(product, $routeParams.productId);
        $location.path('/admin');
    };
})

    .controller('CartController', function (CartService) {

       var cart = this;

       cart.items = CartService.getCartProducts();
       cart.total = 0;

       cart.addCartProduct = function (item) {
           CartService.addCartProduct(item);
       };
       cart.removeCartProduct = function (item) {
           CartService.removeCartProduct(item);
       };
       cart.updateTotal = function () {
           cartProducts.total = CartService.calculateTotal();
           return cart.total;
       };
    });
})();
