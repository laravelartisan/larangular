myApp.factory('userModel',function ($http) {
    
    var userModel = {};

    userModel.getUser = function () {

        return $http.get(base_url+'user');
    }

    userModel.createUser= function (data) {

       return $http({

            headers:{
                'Content-type':'application/json'
            },
            // url:base_url+'user/create',
            url:base_url+'user',
            method:"post",
            data:{
                username:data.username,
                email:data.email,
                password:data.password
            }
        })
    };
    
    userModel.updateUser= function (id,data) {

        $http({
            url: base_url+'user/'+id,
            method: 'put',
            data:{
                username:data.username,
                email:data.email,
                password:data.password,
            }

        })

    };
    
    userModel.getParamsData = function (id) {
        
        return $http.get(base_url+'user/'+id+'/edit');
    }
    
    
    
    
   return userModel;
});