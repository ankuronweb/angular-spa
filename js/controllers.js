testAppControllers.controller('OrgController', ['$scope', 'githubFactory', function($scope, githubFactory){

	var getOrg = function(){
		githubFactory.getOrgData()
			.success(function(data){
				$scope.collection = data;
			})
			.error(function(err){
				console.log(err);
			});
	};

	getOrg();

}]);

testAppControllers.controller('RepoController', ['$scope', 'githubFactory', function($scope, githubFactory){

	var getOrgRepos = function(){
		githubFactory.getOrgRepos()
			.success(function(data){
				$scope.collection = data;
			})
			.error(function(err){
				console.log(err);
			});
	};

	getOrgRepos();

}]);

testAppControllers.controller('EditDetailsController', ['$scope', 'githubFactory', function($scope, githubFactory){

	$scope.createGist = function(){

		var params = {
				description: $scope.description,
				public: true,
				files : {}
			};

		params.files[$scope.filename] = {content: $scope.content};

		githubFactory.createGist(params)
			.success(function(data){
				$scope.showTable = true
				$scope.dataDescription = data.description,
				$scope.dataFilename = data.files[$scope.filename].filename,
				$scope.dataContent = data.files[$scope.filename].content
			})
			.error(function(err){
				alert(err.message);
			});
	};

}]);