angular.module('modal',[])
	.controller('listController',['$scope',function($scope){
		$scope.list = [];
		for (var i = 0; i < 30; i++) {
			$scope.list.push({'id':(i+1),'name':'name'+(i+1),'imageUrl':'http://cdn.snsimg.carview.co.jp/carlife/images/User/2192612/p1s.jpg'});
		};
	}])
	;

