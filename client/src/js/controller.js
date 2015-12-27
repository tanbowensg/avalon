angular.module('avalon')
	.controller('indexCtrl', [
		'$scope', 
		'service',
		'$http',
		function ($scope,service,$http) {
			 $http.defaults.useXDomain = true;
			$scope.test=service.test
			$scope.joinGame=service.joinGame
		}
	])

