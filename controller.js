//模块的绑定的实现
  <div ng-app="myApp">
//创建应用
  var app = angular.module("myApp", []); 
      
      app.controller('firstController',['$scope',function($scope){//当前的控制器的作用域
              $scope.name='mll';
              $scope.age = 24;
          }]);
//带有主作用域的调用方法

  app.controller('secondController',['$scope','$rootScope',function($scope,$rootScope){
         $scope.name='mll';
          $rootScope.age='30'; //相当于声明了一个全局的变量
     }]);
//angular 中的run 表示的是初始化主作用域
  app.run(['$rootScope',function($rootScope){ //run root scope 主库的作用 视图的模块的实现
              $rootScope.sex='男';
      }]);
      
//watch 监控Model的数据变化
      var app = angular.module("myApp", []);
          app.controller('firstController',function($scope){
                // $scope.name='fasdfds';
                  $scope.iphone = {
                      money : 5,
                      num : 1,
                      fre : 10
                  };
                  $scope.sum=function(){
                      return $scope.iphone.money * $scope.iphone.num;
                  };

              $scope.$watch($scope.sum,function(newValue,oldValue){

                 console.log(newValue);
                 console.log(oldValue);
                  $scope.iphone.fre=newValue>=100 ? 0:10; //动态改变fre的数据
              });

          });
          
Scope 提供$apply 方法传播 Model 的变化

$apply 方法使用情景：
  AngularJS 外部的控制器（ DOM 事件、外部的回调函数如 jQuery UI 空间等）调用了 AngularJS 函数之
  后，必须调用$apply。在这种情况下，你需要命令 AngularJS 刷新自已（模型、视图等）， $apply 就是
  用来做这件事情的。
  
$apply 方法注意事项：
  只要可以，请把要执行的代码和函数传递给$apply 去执行，而不要自已执行那些函数然后再调用$apply。
  例如，你应该像下面这样来执行你的代码：   
  
          <div ng-controller="firstController" ng-click="show();">
            {{name}} {{age}}
          </div>

      </div>
      <script type="text/javascript">
          var app = angular.module("myApp", []);
          app.controller('firstController',function($scope,$timeout){
              //  $timeout 是angular中的内置的定时器 会立刻的更新model的数据
             setTimeout(function(){
                 $scope.$apply(function(){
                   $scope.name='1111'; //立刻的更新模板上的数据 外部的函数调用的时候想立刻更新model的数据可以使用
                 });
                    $scope.name='1234'; //会跟随下面的变量的更新改变model的数据 （个人感觉是在异步函数中使用）
             },2000);

              $timeout(function(){
                  $scope.age='50';

              },3000);

              $scope.name='张三';
              $scope.age='10';

              $scope.show=function(){
                  $scope.name='点击后的name'; //这里会立刻的更新当前的model中的数据
              }

          });
      </script>
