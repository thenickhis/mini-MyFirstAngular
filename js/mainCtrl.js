
angular.module('friendsList').controller('mainCtrl',function($scope){
	$scope.friends = ["Nick","Devon","Ben"];
	$scope.addFriend = function() {
		$scope.friends.push($scope.newFriend);
		$scope.newFriend = "";
	};
});