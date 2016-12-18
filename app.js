(function() {
  var app = angular.module('store', []);  


  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
  {
    name: '1 Mythril',
    price: 0.25,
    description: 'One Mythril',
    canPurchase: true,
    soldOut: false
  },
  {
    name: '5 Mythril',
    price: 1.00,
    description: 'Five Mythril',
    canPurchase: true,
    soldOut: false
  },
  {
    name: '15 Mythril',
    price: 2.50,
    description: 'Fifteen Mythril',
    canPurchase: true,
    soldOut: false
  }

  ];

})();

