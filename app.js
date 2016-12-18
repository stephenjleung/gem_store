(function() {
  var app = angular.module('store', []);  


  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
  {
    name: '5 Mythril',
    price: 1.00,
    description: 'Five Mythril',
    images: [
      {
        full:'img/1mythril.png'
      }
    ],
    canPurchase: true,
    soldOut: false
  },
  {
    name: '15 Mythril',
    price: 2.50,
    description: 'Fifteen Mythril',
    images: [
      {
        full:'img/1mythril.png'
      }
    ],
    canPurchase: true,
    soldOut: false
  },
  {
    name: '25 Mythril',
    price: 3.50,
    description: 'Twenty Five Mythril',
    images: [
      {
        full:'img/1mythril.png'
      }
    ],
    canPurchase: true,
    soldOut: false
  },
  {
    name: '50 Mythril',
    price: 6.00,
    description: 'Fifty Mythril',
    images: [
      {
        full:'img/1mythril.png'
      }
    ],
    canPurchase: true,
    soldOut: false
  }

  ];

})();

