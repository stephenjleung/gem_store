(function() {
  var app = angular.module('store', []);  


  app.controller('StoreController', function($scope) {

    // Build an array of size num for ng-repeat use
    $scope.getNumber = function(num) {
      return new Array(num);
    };

    this.products = gems;
  });

  app.controller('GalleryController', function() {
    this.current = 0;
    this.setCurrent = function(newCurrent) {
      this.current = newCurrent || 0;
    };
  });

  app.controller('PanelController', function() {
    this.tab = 1;
    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

  app.controller('ReviewController', function() {

    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {};
    };


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
    reviews: [
      {
        stars: 5,
        body: "I can't get enough of them Mythrils!",
        author: "mythrillover@gmail.com"
      },
      {
        stars: 1,
        body: "Stupid RNG. Nothing but garbage.",
        author: "saltydude@yahoo.com"
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
    reviews: [
      {
        stars: 5,
        body: "I can't get enough of them Mythrils!",
        author: "mythrillover@gmail.com"
      },
      {
        stars: 1,
        body: "Stupid RNG. Nothing but garbage.",
        author: "saltydude@yahoo.com"
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
    reviews: [
      {
        stars: 5,
        body: "I can't get enough of them Mythrils!",
        author: "mythrillover@gmail.com"
      },
      {
        stars: 1,
        body: "Stupid RNG. Nothing but garbage.",
        author: "saltydude@yahoo.com"
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
    reviews: [
      {
        stars: 5,
        body: "I can't get enough of them Mythrils!",
        author: "mythrillover@gmail.com"
      },
      {
        stars: 1,
        body: "Stupid RNG. Nothing but garbage.",
        author: "saltydude@yahoo.com"
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
      {
        full:'img/1mythril-full.png',
        thumb: 'img/1mythril-thumb.png'
      }
    ],
    reviews: [
      {
        stars: 5,
        body: "I can't get enough of them Mythrils!",
        author: "mythrillover@gmail.com"
      },
      {
        stars: 1,
        body: "Stupid RNG. Nothing but garbage.",
        author: "saltydude@yahoo.com"
      }
    ],
    canPurchase: true,
    soldOut: false

  }

  ];

})();
