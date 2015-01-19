testAppServices.factory('githubFactory', ['$http', function($http){

	var baseURL = "https://api.github.com";
	var githubFactory = {};

	githubFactory.getOrgData = function(){
		return $http.get(baseURL + '/orgs/octokit');
	}

	githubFactory.getOrgRepos = function(){
		return $http.get(baseURL + '/orgs/octokit/repos');
	}

	githubFactory.createGist = function(params){
		return $http.post(baseURL + '/gists', params);
	}

	return githubFactory;

}]);