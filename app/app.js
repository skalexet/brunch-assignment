const angoview = angular.module('angoview', []);

angoview.controller("angoviewController", ["$scope", function($scope) {
    $scope.index = 0;
    $scope.currentSlide;

    $scope.previousSlide = function() {
        if (!($scope.index <= 0)) {
            $scope.index--;
        } 
    }
    
    $scope.nextSlide = function() {
        if (!($scope.index >= 8)) {
            $scope.index++;
        }
    }
}]);