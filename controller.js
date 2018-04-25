var app = angular.module('myApp', []);
app.controller('recieptCtrl', function($scope) {
    $scope.price = "1298";
    $scope.drink = "Jack deniels";
    $scope.descriptions="1 fresh beer picher/ 4 domestic drinks";
    $scope.transaction_id=765763712;
    $scope.unique_code='WUOBVU';
    $scope.save_upto=150;
    $scope.binds=function(){
    	return $scope.outlet + " " + $scope.price;
    };
});