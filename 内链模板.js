内联模板 : script
可能你没有注意过，HTML中常用的script标签在AngularJS中被重新定义了： 除了原来的脚本声明功能之外，如果script元素的type属性 定义为text/ng-template，则被称为内联模板。例如：

<script type="text/ng-template" id="a.html">
    <p>This is the content of the template.</p>
</script>
内联模板在单页应用（SAP）开发中非常有用。SAP应用通常需要通过AJAX 从后台载入众多的HTML片段，这些HTML片段都用文件存放的话，看起来、想起来 都很不爽。使用内联模板，就可以把这些零散的HTML片段模板都集中在一个 文件里，维护和开发的感觉都会好很多。

AngularJS在编译时会将内联模板的id属性值和其内容，分别作为key 和value，存入$templateCache管理的hash表中:

inline-template

使用内联模板
内联模板的使用，常见的有几种情况。

使用ng-include指令
可以利用ng-include指令在HTML中直接使用内联模板，例如：

<div ng-include="'a.html'"></div>
注意：其中a.html是一个字符串常量，需要使用单引号包裹起来。

使用$templateCache服务
也可以直接使用$templateCache服务的方法get()从模板缓存中读出 其内容：

var partial = $templateCache.get("a.html");
使用$http服务
还有一种常见的用法是使用$http服务时指定cache参数，这将直接从$templateCache 中取出模板，而不必进行网络访问：

$http.get("a.html",{cache:$templateCache})
.success(function(d,s){..})
.error(function(d,s){...});


angular.module("ezApp", ["ionic"])
.controller("ezCtrl",function($scope,$http,$templateCache){
	$scope.load = function(){
		$http.get("home.html",{cache:$templateCache})
			.success(function(data,status){
				var el = document.querySelector("#container");
				angular.element(el).html(data);
			})
			.error(function(data,status){})
	};

	$scope.load();
});
