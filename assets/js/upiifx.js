 (function(){
  var dz=angular.module('upii',[]);
  dz.controller('CTRL', ['$scope','$http', function($scope,$http){
                         var ctrl=this;
                         $http.get('http://ssupii.azurewebsites.net/z/s').
                         success(function(data, status, headers, config) {
                                 data='{"a":"a","sch":'+data+'}';
                                 var a=JSON.parse(data);
                                 $scope.data=a;
                                 }).
                         error(function(data, status, headers, config) {
                               });
                         ctrl.bOnClick=function(text){
                         $scope.title=text;
                         }
                         
                         }]);
  })();