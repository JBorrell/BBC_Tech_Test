iPlayerProgrammes.factory('Search', ['$http', function($http){
  var search = {};

  search.query = function(letter, pageNo) {
    return $http({
      url: generateUrl(letter, pageNo),
      method: 'GET'
    });
  }

  function generateUrl(letter, pageNo) {
    return [
      'https://ibl.api.bbci.co.uk//ibl/v1/atoz/',
      letter,
      '/programmes?page=',
      pageNo
    ].join('');
  }

  return search;
}]);
