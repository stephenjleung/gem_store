(function() {
  var app = angular.module('store', []);  


  app.controller('StoreController', function($scope){

    $scope.getNumber = function(num) {
      return new Array(num);
    }

    this.products = gems;
  });

  var gems = [
  {
    name: '5 Mythril',
    mythrilCount: 5,
    price: 1.00,
    description: 'Five Mythril',
    images: [
      {
        full:'img/1mythril-full.png',
        thumb: 'img/1mythril-thumb.png'
      }
    ],
    canPurchase: true,
    soldOut: false    
  },
  {
    name: '15 Mythril',
    mythrilCount: 15,
    price: 2.50,
    description: 'Fifteen Mythril',
    images: [
      {
        full:'img/1mythril-full.png',
        thumb: 'img/1mythril-thumb.png'
      }
    ],
    canPurchase: true,
    soldOut: false
  },
  {
    name: '25 Mythril',
    mythrilCount: 25,
    price: 3.50,
    description: 'Twenty Five Mythril',
    images: [
      {
        full:'img/1mythril-full.png',
        thumb: 'img/1mythril-thumb.png'
      }
    ],
    canPurchase: true,
    soldOut: false    
  },
  {
    name: '50 Mythril',
    mythrilCount: 50,
    price: 6.00,
    description: 'Fifty Mythril',
    images: [
      {
        full:'img/1mythril-full.png',
        thumb: 'img/1mythril-thumb.png'
      }
    ],
    canPurchase: true,
    soldOut: false    
  },
  {
    name: '100 Mythril',
    mythrilCount: 100,
    price: 10.00,
    description: 'One Hundred Mythril',
    images: [
      
    ],
    canPurchase: true,
    soldOut: false

  }

  ];

})();

