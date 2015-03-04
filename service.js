(function () {
  "use strict";
  angular.module('demoApp')
    .factory('ProductService', function ($http, $rootScope) {

        var url = 'http://tiy-fee-rest.herokuapp.com/collections/ngserverjulie';


    //   var Products = [
    //     {
    //       picture: "images/product1.jpg",
    //       title: "product1",
    //       description: "",
    //       price: "$100.00",
      //
    //     },
    //     {
    //       picture: "images/product2.jpg",
    //       title: "product2",
    //       description: "",
    //       price: "$200.00",
      //
    //     },
    //     {
    //       picture: "images/product3.jpg",
    //       title: "product3",
    //       description: "",
    //       price: "$400.00",
      //
    //     },
    //     {
    //       picture: "images/product4.jpg",
    //       title: "she4",
    //       description: "",
    //       price: "$1.00",
      //
    //     },
    //     {
    //     picture: "images/product5.jpg",
    //     title: "product5",
    //     description: "",
    //     price: "$2.00",
      //
    //   },
    //   {
    //     picture: "images/product6.jpg",
    //     title: "product6",
    //     description: "",
    //     price: "$50.00",
      //
    //   }
      //
    //   ];

    //   var productsBag = [
      //
    //   ];

      var getProducts = function () {
        // return Products;
        return $http.get(url);
      };
      var addProduct = function (product) {
        // Products.unshift(newProduct);
        $http.post(url, product);
        $rootScope.$broadcast('product:created')
      };
      var updateProducts= function(product, id) {
          $http.put(url + '/' + id, product);
          $rootScope.$broadcast('product:updated');
      };
      var getSingleProducts= function(id) {
          return $http.get(url + '/' + id);
      };
      var deleteProduct = function (id) {
        $http.delete(url + '/' + id);
        $rootScope.$broadcast('product:deleted');
      };

    return {
      getProducts: getProducts,
      addProduct: addProduct,
      deleteProduct: deleteProduct,
      singleProducts: getSingleProducts,
      updateProducts: updateProducts,
    };
    })



    .factory('CartService', function(_) {
        var cart = [];

        var addCartProduct=function (newCartProduct) {
            cart.push(newCartProduct);
        };
        var getCartProducts= function () {
            return cart;
        };
        var removeCartProduct = function (item) {
            var index = cart.indexOf(item);
            cart.splice(index,1);
        };
        var getTotalPriceOfCartProducts= function () {
            if(!cart.length) return 0;
            return _.pluck(cart, 'price').reduce(function(memo,num){
                return memo + num;
            });
        };

        return {
            getCartProducts: getCartProducts,
            addCartProduct: addCartProduct,
            getTotalPriceOfCartProducts: getTotalPriceOfCartProducts,
            removeCartProduct: removeCartProduct,
        };
    });
})();
