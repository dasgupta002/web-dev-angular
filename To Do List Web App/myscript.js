var app = angular.module("todoApp", []);
app.controller("todoController", function($scope){
    var todo = [];
	var task = "";
	$scope.sendtoList = function () { 
	   task = $scope.todoTask;
	   todo.push(task);
	   $scope.todoList = todo;
	}   
	$scope.deleteTask = function () {
       $scope.todoList.splice(this.$index, 1);
    }
	$scope.editTask = function () {
	   var newTask = prompt("Edit Task:");
	   $scope.todoList.splice(this.$index, 1, newTask);
	}   
});
