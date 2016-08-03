myApp.controller('userController',['$scope','$http','$location','$routeParams',function ($scope,$http,$location,$routeParams) {

    getUser();

   function getUser () {
       $http.get(base_url+'user').success(function(data){
// Stored the returned data into scope
           $scope.users = data;
       });
   }

    if ($routeParams.id) {

        // alert(base_url+'user/'+id+'/edit');
         $http.get(base_url+'user/'+$routeParams.id+'/edit').success(function (data) {

            $scope.user = data;
             console.log($scope.user);
        });
    }
    angular.extend($scope,{
        createUser: function (userForm) {

            $http({

                headers:{
                    'Content-type':'application/json'
                },
                // url:base_url+'user/create',
                url:base_url+'user',
                method:"post",
                data:{
                    username:$scope.user.username,
                    email:$scope.user.email,
                    password:$scope.user.password
                }
            }).success(function (response) {

                console.log(response);
                // $location.path('/create');
                location.reload();

            }).error(function (data, status, headers) {

                console.log(data, status, headers);
                alert('login error');
            });
        },
        editUser:function (id) {

         $location.path('user/'+id+'/edit');
        },
        
        updateUser: function (id) {
            
            $http({
                url: base_url+'user/'+id,
                method: 'put',
                data:{
                    username:$scope.user.username,
                    email:$scope.user.email,
                    password:$scope.user.password,
                }
                
            }).success(function (response) {
                console.log(response);

                location.reload();
            }).error(function (data, status, headers) {
                console.log(data, status, headers);
                
            })
           
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