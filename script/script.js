(function(){

	var app = angular.module('kb2', ['mgcrea.ngStrap'])
		.config(function ($routeProvider, $locationProvider, $httpProvider){

			$routeProvider.when('/home',
			{
				templateUrl: 'home.html',
				controller: 'homeCtrl'
			});
			$routeProvider.when('/css',
			{
				templateUrl: 'css.html',
				controller: 'cssCtrl'
			});
			$routeProvider.when('/js', 
			{
				templateUrl: 'js.html',
				controller: 'jsCtrl'
			});
			$routeProvider.when('/builder',
			{
				templateUrl: 'builder.html',
				controller: 'builderCtrl'
			});
			$routeProvider.otherwise(
			{
				templateUrl: 'home.html',
				controller: 'homeCtrl'
			});
		});

	

	app.controller('NavCtrl', 
	['$scope', '$location', function ($scope, $location) {  
	  $scope.navClass = function (page) {
	    var currentRoute = $location.path().substring(1) || 'home';
	    return page === currentRoute ? 'active' : '';
	  };
	}]);

	app.controller('homeCtrl', function($scope, $compile) {
	  console.log('inside home controller');

	});

	app.controller('cssCtrl', function($scope, $compile) {
	  console.log('inside css controller');

	});

	app.controller('jsCtrl', function($scope, $compile) {
	  console.log('inside js controller');

	});

	app.controller('builderCtrl', function($scope, $compile) {
	  console.log('inside builder controller');

	});

})();