// var service=require('service')

angular.module('avalon', ['ngRoute','ngResource'])

    .config(function ($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: '/views/prepare/index.html',
                controller: 'prepareCtrl'
            })
    })