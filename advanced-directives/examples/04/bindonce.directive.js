angular.module('App')
.directive('bindOnce', function(){
  return {
    scope: true,
    restrict: 'E',
    templateUrl: 'bindonce.tpl.html',
    controller: ['$scope', function($scope){
      var numItems = 5;
      this.invoiceItems = [];
      this.items = []
      for(var i = 0; i<numItems; i++){
        this.invoiceItems.push({
          id: i,
          title: "Item #" + (i+1),
          price: Math.floor(Math.random() * (25 - 5 + 1)) + 5,
          qty: Math.floor(Math.random() * 5 + 1)
        })
      }

      $scope.alertWatchers = function(id){
        alert('There are ' + getWatchers(document.getElementById(id)).length + ' watchers')
      }

      $scope.updateInvoiceItems = function(items){
        //items.forEach(function(item, i){
        //  item.title = item.title + ' updated';
        //});
        items.push({title: 'new title 1', price: 1000, qty: 32});
        items.push({title: 'new title 2', price: 100, qty: 2});
      }

    }],
    controllerAs: 'invoice'
  };
})
