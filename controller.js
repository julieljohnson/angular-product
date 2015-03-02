(function () {
    "use strict";
    angular.module('demoApp')
    .controller('MainController', function (ShoesService, $scope, $routeParams, $location) { //scope is going out, so best not to use//
        var mainCtrl = this;

        mainCtrl.shoes = ShoesService.getShoes();

        mainCtrl.shoesBag = ShoesService.getShoesBag();

        // mainCtrl.singleItem = ShoesService.getShoes($routeParams.shoesIndex);

        mainCtrl.addShoe = function (newShoe) {
          ShoesService.addShoe(newShoe);
          $scope.newShoe = {};
        };

        mainCtrl.addShoesBag = function (newShoesBag) {
            ShoesService.addShoesBag(newShoesBag);
            $scope.newShoesBag = {};
        };

        mainCtrl.removeShoesBag = function (shoesBag) {
            ShoesService.removeShoesBag(shoesBag);
            $scope.removeShoesBag = {};
        };

        // mainCtrl.getSingleItem = function(index) {
        //
        // };

        // mainCtrl.deleteItem= function(index) {
        //     ShoesService.deleteShoes(index)
        // };

        // mainCtrl.login = function (username) {
        //     if(username === 'julie') {
        //         $location.path('/main');
        //     }
        // }

    });

})();























// (function () {
//   "use strict";
//   angular.module('demoApp')
//     .controller('MainController', function (SuperHerosService, $scope) {
//         var mainCtrl = this;
//
//         mainCtrl.superheros = SuperHerosService.getHeros();
//
//         mainCtrl.alertMe = function () {
//           alert("Hi from mainCtrl");
//         };
//
//         mainCtrl.addSuperHero = function (newHero) {
//           SuperHerosService.addHero(newHero);
//           $scope.newHero = {};
//         };
//
//     });
//
// })();
