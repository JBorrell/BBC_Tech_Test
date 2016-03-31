iPlayerProgrammes.factory('Search', ['$http', function($http){
  var queryUrl = 'https://ibl.api.bbci.co.uk//ibl/v1/atoz/a/programmes';
  return {
    query: function(pageNo) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'page': pageNo
        }
      });
    }
  }
}]);
