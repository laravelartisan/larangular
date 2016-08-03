<!DOCTYPE html>
<html lang="en">
<head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="<?= asset('css/bootstrap.min.css') ?>">

</head>
<body ng-app="crud" ng-controller="userController">
<script src="<?= asset('js/jquery.min.js') ?>"></script>
<script src="<?= asset('js/bootstrap.min.js') ?>"></script>
<script src="<?= asset('app/lib/angular/angular.min.js') ?>"></script>
<script src="<?= asset('app/controllers/userController.js') ?>"></script>
<div class="container">
    <h2>Add User</h2>
<form ng-submit="insertUser(user);">
        <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" ng-model="user.username" class="form-control" id="username" placeholder="Enter Username">
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" ng-model="user.email" class="form-control" id="email" placeholder="Enter email">
        </div>
        <div class="form-group">
            <label for="pwd">Password:</label>
            <input type="password" ng-model="user.password" class="form-control" id="pwd" placeholder="Enter password">
        </div>

        <button  class="btn btn-default">Submit</button>
</form>
</div>
<div ng-repeat="detail in details">
    {{ detail.username}}

</div>
</body>
</html>
