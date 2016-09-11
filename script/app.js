'use strict';

(function () {
    var app = angular.module('UserList', []);
    app.controller('BaseController', BaseControllerCtrl);
    
    function BaseControllerCtrl ($scope, $http) {
        $scope.people = [];
        $scope.newName = '';
        $scope.newEmail = '';
        
        $http.get('data/user-data.json')
            .then(function successCallback(response) {
                $scope.people = response.data;
            }, function errorCallback(response) {
                $scope.status = response.status;
                $scope.statusText = response.statusText;
                $('#modalError').modal('show');
            });

        $scope.modalAction = function () {
            $scope.newName = '';
            $scope.newEmail = '';
            $('#modalAction').modal('show');
        };

        $scope.addUser = function () {
            $scope.people.push({name: $scope.newName, email: $scope.newEmail});
        };

        $scope.removeUser = function (person) {
            var position = $scope.people.indexOf(person);
            $scope.people.splice(position,1);
        };

    }
}) ();