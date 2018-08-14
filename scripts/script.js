var app = angular.module("myModule", []);

app.controller("firstController", function($scope) {
	$scope.message = "Angular demo";
});


app.controller("dataController", function($scope){

		var listEmployees = [
		{ firstName: "Pravin",lastName: "Malkar",gender: "Male", salary: 95000},
		{ firstName: "Juhi", lastName: "Ichale",gender: "Female", salary: 65000},
		{ firstName: "Aryan", lastName: "Patil",gender: "Male", salary: 98000}
		];
		$scope.employees = listEmployees;
});