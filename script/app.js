'use strict';

(function () {
    var app = angular.module('UserList', []);
    app.controller('BaseController', BaseControllerCtrl);
    
    function BaseControllerCtrl ($scope, $http) {
        $scope.people = [];
        
        $http.get('data/user-data.json')
            .then(function successCallback(response) {
                $scope.people = response.data;
            }, function errorCallback(response) {
                $scope.status = response.status;
                $scope.statusText = response.statusText;
                $('#popoverError').modal('show');
            });

    }
}) ();