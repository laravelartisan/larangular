<!doctype html>
<html lang="en" ng-app="myApp">
<head>
    <meta charset="UTF-8">
    <title>Single Page Application Using Laravel & Angular Js</title>
    <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }} ">
    <script>
        var base_url = "{{ url('/') }}/";
    </script>
</head>
<body>
    <div class="container" >

        <div ng-view ng-controller="userController">

        </div>
    </div>
<script src="{{ asset('js/jquery.min.js') }}"></script>
<script src="{{ asset('js/bootstrap.min.js') }}"></script>
<script src="{{ asset('app/lib/angular/angular.min.js') }}"></script>
<script src="{{ asset('app/lib/angular/angular-route.min.js') }}"></script>
<script src="{{ asset('app/lib/angular/angular-cookies.min.js') }}"></script>
<script src="{{ asset('app/lib/app.js') }}"></script>
<script src="{{ asset('app/controllers/userController.js') }}"></script>
<script src="{{ asset('app/models/userModel.js') }}"></script>
</body>
</html>