angular.module('APP')
.factory('CatalogService', function(){
  'use strict'
  var catalogService = {};
  var _fallbackImageUrl = 'http://baconmockup.com/';

  catalogService.getCatalog = function(){
    return [
        {title: 'Item Title #1', cost: 5, id: 1,  img: 'product.png', rating:1, onSale: false},
        {title: 'Item Title #2', cost: 10, id: 2,  img: 'product2.png', rating:3, onSale: false},
        {title: 'Item Title #3', cost: 15, id: 3,  img: 'product3.png', rating:5, onSale: false},
        {title: 'Item Title #4', cost: 125, id: 4,  img: 'product4.png', rating:4, onSale: false},
        {title: 'Item Title #5', cost: 25, id: 5,  img: 'product.png', rating:2, onSale: false},
        {title: 'Item Title #6', cost: 75, id: 6,  img: 'product.png', rating:3, onSale: false},
        {title: 'Item Title #7', cost: 16, id: 7,  img: 'product7.png', rating:1, onSale: false},
        {title: 'Item Title #8', cost: 21, id: 8,  img: 'product8.png', rating:1, onSale: false},
        {title: 'Item Title #9', cost: 23, id: 9,  img: 'product9.png', rating:3, onSale: false},
        {title: 'Item Title #10', cost: 66, id: 10,  img: 'product.png', rating:4, onSale: false}
      ];
  }

  catalogService.fallbackImageUrl = function(){ return _fallbackImageUrl; }

  return catalogService;
});
