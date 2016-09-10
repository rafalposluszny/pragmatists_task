'use strict';

(function () {
    var app = angular.module('UserList', []);
    app.controller('BaseController', BaseControllerCtrl);
    
    function BaseControllerCtrl ($scope, $http) {
        $scope.people = [];
        
        $http.get('data/user-data.json')
            .success(function (response) {
                $scope.people = response;
            })
    }
}) ();