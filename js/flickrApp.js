(function () {
    'use strict';
    var flickrApp = angular.module('flickrApp', []),
        flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne"//URL for Flickr API;

    flickrAPI = flickrAPI + "?jsoncallback=JSON_CALLBACK"
          + "&tags=space"
          + "&tagmode=all"
          + "&format=json";
        
    flickrApp.controller('flickrAppController', ['$scope', '$http', function ($scope, $http) {
        $scope.value = "some value";


        $http.jsonp(flickrAPI).success(function (data) {
            $scope.data = data;
            $scope.post = data.items;
        }).error(function (data, status, headers, config) {
            console.log('there is an error ');
            console.log(data);
        });

    }]);
})(window.angular);