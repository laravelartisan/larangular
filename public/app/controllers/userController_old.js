angular
    .module('crud',[])
    .constant('API_URL', 'http://localhost:8000/')
    .controller('userController',function ($scope,$http,API_URL) {

        getInfo();

        function getInfo() {
// Sending request to EmpDetails.php files
            $http.get(API_URL).success(function (data) {
// Stored the returned data into scope
                $scope.details = data;
                // location.reload();
            });
        }
        $scope.insertUser = function(user){

            $scope.user = user;
            var url = API_URL + "insert";
            $http.post(

                 url,
                // data: $.param($scope.user),
                 {
                    'username':user.username,
                    'email':user.email,
                    'password':user.password
                }

            ).success(function(response) {
                // console.log(response);

                if(response == true){
                    getInfo();
                }
                // location.reload();
            }).error(function(response) {
                console.log(response);
                alert('This is embarassing. An error has occured. Please check the log for details');
            });
        }
    });