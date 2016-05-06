/**
 * Created by Van on 04-May-16.
 */
var app = angular.module("myApp",["xeditable"]);
app.controller("myCtrl", function($scope, $http){
    $http({
        method: 'GET',
        //url: 'https://api.myjson.com/bins/17ky4'
        url: 'myInfo.json'
    }).success(function(data){
        $scope.myData = data;
    }).error(function(data){
        alert('Lỗi không nhận được dữ liệu từ file JSON!');
    });
    app.run(function(editableOptions) {
        editableOptions.theme = 'default'; // bootstrap3 theme. Can be also 'bs2', 'default'
    });
});

