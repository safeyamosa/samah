'use strict';

(function () {
    var app = angular.module("addressBookApp", ['ngRoute', 'angular-loading-bar']);
    app.config(function ($routeProvider) {
        $routeProvider
        .when("/Contact", {
            templateUrl: 'app/views/Contact.html',
            controller: "ContactCtrl"
        })
        .otherwise({ redirectTo: "/Contact" })
    });
}());
