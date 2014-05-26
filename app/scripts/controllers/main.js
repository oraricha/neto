'use strict';

angular.module('oraricha.Netomedia')

	.controller('MainCtrl', function($scope, $location, version, dbService) {

		$scope.$path = $location.path.bind($location);
		$scope.version = version;

		$scope.currentPage = 1;
		$scope.numPerPage = 10;
		$scope.maxSize = 5;

		$scope.pagesAmount = function() {

		};

		$scope.items = dbService.items;

	});
