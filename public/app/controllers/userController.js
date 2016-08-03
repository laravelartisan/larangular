myApp.controller('userController',['$scope','$http','$location','$routeParams','userModel',function ($scope,$http,$location,$routeParams,userModel) {

    userModel.getUser().success(function (data) {
        $scope.users = data;
    });

    if ($routeParams.id) {

         userModel.getParamsData($routeParams.id).success(function (data) {

             $scope.user =data;
         });
    }
    angular.extend($scope,{
        createUser: function (userForm) {

            var data= {

                username:$scope.user.username,
                email:$scope.user.email,
                password:$scope.user.password
                
            };
            userModel.createUser(data).success(function (data) {

                $scope.sm = true;
               
                location.reload();
            });

        },
        editUser:function (id) {

         $location.path('user/'+id+'/edit');
        },
        
        updateUser: function (id) {

               var  data ={
                    username:$scope.user.username,
                    email:$scope.user.email,
                    password:$scope.user.password
                };
                
            userModel.updateUser(id,data).success(function (response) {

                 console.log(response);

                location.reload();
            }).error(function (error) {
                 alert(error);
            });
           
        },
        
        deleteUser: function (id) {
            
            $http({
                url:base_url+'user/'+id,
                method:'delete',
                
            }).success(function (response) {
                
                console.log(response);
                location.reload();
            }).error(function (data, status, headers) {
                
                console.log(data,status,headers);
            });
        }
    });


}]);