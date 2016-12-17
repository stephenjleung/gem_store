(function() {
  var app = angular.module('store', []);  


  app.controller('StoreController', function(){
    this.product = gem;
  });

  var gem = {
    name: '1 Mythril',
    price: 0.25,
    description: 'One Mythril'
  }

})();

