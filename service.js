angular.module('myApp').service('mainService', function ($http) {

  this.getData = function (searchTerm) {
    return $http({
        method: 'JSONP',
        url: 'https://api.instagram.com/v1/tags/' + searchTerm + '/media/recent?client_id=ab31057e67224170ad5709c5293b17c6&callback=JSON_CALLBACK'
      })
      .then(function (response) {
        console.log(response);
        var slimResults = (response.data.data);
        /*console.log(slimResults);*/
        /*var imageURLS = [];*/
        /*  slimResults.forEach(function (obj) {
            imageURLS.push(obj.images['standard_resolution'].url);
          });*/
        /*return imageURLS;*/
        return slimResults;
      }, function (err) {
        console.log('error');
      });
  }

});