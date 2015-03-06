angular
  .module('autocompleteDemo', ['ngMaterial'])
  .factory('WorkerService', WorkerService)
  .constant('WebWorker', Worker)
  .controller('DemoCtrl', DemoCtrl);

function WorkerService(WebWorker, $q){
  if(!WebWorker){
    return null;
  }

  function executeTask(taskUrl){
    var deferred = $q.defer();
    var worker = new WebWorker(taskUrl);
    var data = [2000, 9999];
    worker.postMessage(data);
    worker.onmessage = function(result){
      console.log('onmessage', result.data);
      deferred.resolve(result.data);
    };
    return deferred.promise;
  }

  return {
    executeTask: executeTask
  }
}

function DemoCtrl ($timeout, $q, WorkerService) {
  var self = this;
  // list of `state` value/display objects
  self.states        = loadAll();
  self.selectedItem  = null;
  self.searchText    = null;
  self.querySearch   = querySearch;
  self.simulateQuery = false;
  self.isDisabled    = true;
  self.startCalculation = startCalculation;
  // ******************************
  // Internal methods
  // ******************************
  /**
   * Search for states... use $timeout to simulate
   * remote dataservice call.
   */

  function querySearch (query) {
    var results = query ? self.states.filter( createFilterFor(query) ) : [],
      deferred;
    if (self.simulateQuery) {
      deferred = $q.defer();
      $timeout(function () {
          deferred.resolve( results );
        },
        Math.random() * 1000, false
      );
      return deferred.promise;
    } else {
      return results;
    }
  }
  /**
   * Build `states` list of key/value pairs
   */
  function loadAll() {
    var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';
    return allStates.split(/, +/g).map( function (state) {
      return {
        value: state.toLowerCase(),
        display: state
      };
    });
  }
  /**
   * Create filter function for a query string
   */
  function createFilterFor(query) {
    var lowercaseQuery = angular.lowercase(query);
    return function filterFn(state) {
      return (state.value.indexOf(lowercaseQuery) === 0);
    };
  }

  function startCalculation(){
    WorkerService.executeTask('task.js').then(function(result){
      console.log('startCalculation result', result);
    });
  }
}