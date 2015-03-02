(function () {
  "use strict";
  angular.module('demoApp')
    .factory('ShoesService', function () {
      var Shoes = [
        {
          picture: "images/shoe1.jpg",
          title: "shoe1",

        },
        {
          picture: "images/shoe2.jpg",
          title: "shoe2",

        },
        {
          picture: "images/shoe3.jpg",
          title: "shoe3",

        },
        {
          picture: "images/shoe4.jpg",
          title: "she4",

        },
        {
        picture: "images/shoe5.jpg",
        title: "shoe5",

      },
      {
        picture: "images/shoe6.jpg",
        title: "shoe6",

      }

      ];

      var shoesBag = [

      ];

      var getShoes = function () {
        return Shoes;
      };

      var addShoe = function (newShoe) {
        Shoes.push(newShoe);
      };

      var getShoesBag = function () {
        return shoesBag;
      };
      var addShoeBag = function (newShoeBag) {
        shoesBag.push(newShoeBag);
      };

      var removeShoeBag = function (shoeBag) {
        shoesBag.pop(shoeBag);
      };


      return {
        getShoes: getShoes,
        addShoe: addShoe,
        getShoesBag: getShoesBag,
        addShoeBag: addShoeBag,
        removeShoeBag: removeShoeBag,
        // getTotalPriceOfCartProducts: getTotalPriceOfCartProducts
      };
    });

})();
