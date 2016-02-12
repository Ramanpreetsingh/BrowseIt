var myAppControllers = angular.module('myAppControllers',[]);

myAppControllers.controller('MovieListCtrl',function($scope,$http)
{
    $scope.$watch('query',function()
    {
        fetch();
    });

    $scope.query = "";

    function fetch()
    {
        $http.get("http://www.omdbapi.com/?t=" + $scope.query + "&y=&plot=short&r=json").success(function(data)
        {
            $scope.movies = data;
        })
    }

});

myAppControllers.controller('RelatedMoviesListCtrl',function($scope,$http,$routeParams)
{
    $scope.requery = $routeParams.Title;

    $scope.$watch('requery',function()
    {
        fetch();
    });

    function fetch()
    {
        $http.get("http://www.omdbapi.com/?s=" + $scope.requery).success(function(data)
        {
            $scope.relatedMovies = data["Search"];
        });
    }
});




