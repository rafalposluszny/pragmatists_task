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
                $('#modalError').modal('show');
            });

        $scope.modalCreate = function () {
            $scope.newUser = null;
            $('#modalCreate').modal('show');
        };

        $scope.addUser = function () {
            $scope.people.push($scope.newUser);
            $('#modalCreate').modal('hide');
            console.log($scope.newUser)
        };

        $scope.modalEdit = function (person) {
            $scope.editedUser = angular.copy(person);
            $scope.id = $scope.people.indexOf(person);
            $('#modalEdit').modal('show');
        };

        $scope.saveUser = function () {
            $scope.people[$scope.id] = $scope.editedUser;
            $('#modalEdit').modal('hide');
        };

        $scope.removeUser = function (person) {
            var position = $scope.people.indexOf(person);
            $scope.people.splice(position,1);
        };

    }
}) ();