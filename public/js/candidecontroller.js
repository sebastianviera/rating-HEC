"use strict";
(function(){
	var candidatecontroller = function($rootScope, $routeParams, $scope, $http){
		var candiateIndex = $routeParams.candiateIndex;
		$rootScope.candide = $rootScope.candidateList[parseInt(candiateIndex)];
		$scope.hoveringOver = function(value) {
			    $scope.overStar = value;
			    $scope.percent = 100 * (value / 7);
  			};
  		 $scope.ratingStates = [
							    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
							    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
							    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
							    {stateOn: 'glyphicon-heart'},
							    {stateOff: 'glyphicon-off'}
  								];
  		// saving individual candidate information
  		$scope.save = function(){
  			$rootScope.candide.overAllRate = (1/3) * (parseInt($rootScope.candide.subrates.item1) + parseInt($rootScope.candide.subrates.item2) + parseInt($rootScope.candide.subrates.item3));
  			$rootScope.candidateList[parseInt(candiateIndex)] = $rootScope.candide;
  			$http.put('/candide/' + $rootScope.candidateList[parseInt(candiateIndex)]._id, $rootScope.candide)
  		}

	};

	candidatecontroller.$inject = ['$rootScope', '$routeParams', '$scope', '$http'];
	angular.module('ratingApp').controller('candidatecontroller', candidatecontroller);
}());