        var app = angular.module("myApp", []);
          app.controller('firstController',['$scope',function($scope){
              $scope.name='zhangsan';
              $scope.arr=[1,2,3];



             $scope.isArray=angular.isArray($scope.arr); //调用框架里面的方法        
             $scope.name1=angular.uppercase($scope.name);



              $scope.a='111';
             $scope.b='111';

             $scope.eq=angular.equals($scope.a,$scope.b);


             $scope.a={name:'张三'};
              $scope.b={age:10};

              $scope.c=angular.extend($scope.b,$scope.a);

             console.log($scope.b);




              var json = {"name":"hello","age":"20"};

              console.log(json);

              $scope.json=angular.toJson(json);

              $scope.json=angular.toJson(json,true);

             console.log($scope.json);




             var json = '{"name":"hello","age":"20"}';

              console.log(json);

              //  $scope.json=angular.toJson(json);

              $scope.json=angular.fromJson(json);
              console.log($scope.json);



              $scope.a={name:'张三'};
              $scope.b={age:10};

              $scope.c=angular.copy($scope.a,$scope.b);

              console.log($scope.a);
              console.log($scope.b);



              var json = {"name":"hello","age":"20","sex":'男'};
//
              angular.forEach(json,function(val,key){
//
//                    //console.log(val);
//                  console.log(key);
              });


              var json = {"name":"hello","age":"20","sex":'男'};
//
//
              var results=[];
//
              angular.forEach(json,function(val,key){
//                  //console.log(val);
//                //  console.log(key);
                  this.push(key+'--'+val);
//
//
              },results);
//
//              console.log(results);

              //绑定对象，作为函数的上下文

              var self={name:'张三'};
//
              var f=angular.bind(self,function(age){
//
                        $scope.info=this.name+' is '+age;
//
                        console.log($scope.info);
//              });
              f(30);
//
              var f=angular.bind(self,function(age){
//
                  $scope.info=this.name+' is '+age;
//
//                  console.log($scope.info);
              },10);
              f();
