angular.module('avalon')
	.controller('prepareCtrl', [
		'$scope', 
		'service',
		'$http',
		function ($scope,service,$http) {
			$scope.test=service.test
			$scope.joinGame=service.joinGame
		}
	])

