iPlayerProgrammes.factory('Search', ['$http', function($http){
  var queryUrl = 'https://ibl.api.bbci.co.uk//ibl/v1/atoz/a/programmes?page=2';
  return {
    query: function() {
      return $http({
        url: queryUrl,
        method: 'GET'
        // params: {
        //   'q': searchTerm
        // }
      });
    }
  }
}]);
