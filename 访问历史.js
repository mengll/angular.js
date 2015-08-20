访问历史 : $ionicHistory
ionic的导航框架会自动维护用户的访问历史栈，我们可以通过服务$ionicHistory管理访问轨迹：

viewHistory() - 返回视图访问历史数据

currentView() - 返回当前视图对象

currentHistoryId() - 返回历史ID

currentTitle([val]) - 设置或读取当前视图的标题

参数val是可选的。无参数调用currentTile()方法则返回当前视图的标题。

backView() - 返回历史栈中前一个视图对象
如果从视图A导航到视图B，那么视图A就是视图B的前一个视图对象。

backTitle() - 返回历史栈中前一个视图的标题
forwardView() - 返回历史栈中的下一个视图对象
currentStateName() - 返回当前所处状态名

goBack() - 切换到历史栈中前一个视图

当然，前提是存在前一个视图。

clearHistory() - 请空历史栈
除了当前的视图记录，clearHistory()将清空应用的全部访问历史

clearCache() - 清空视图缓存
clearCache()方法将每一个ion-nav-view缓存的视图都清空，包括移除DOM及绑定的作用域对象。

nextViewOptions(options) - 设置后续视图切换的选项
nextViewOptions()方法的options参数是一个JSON对象，目前支持的选项字段有：

var options = { 
    disableAnimate : true , // 在后续的转场中禁止动画
    disableBack : true,     //后续的视图将不能回退
    historyRoot : true        //下一个视图将作为历史栈的根节点
};



angular.module("ezApp", ["ionic"])
.config(function($stateProvider,$urlRouterProvider) {
	$stateProvider
	.state("home", {
		templateUrl: "home.html"
	})
	.state("music", {
		templateUrl: "music.html"
	});
})
.controller("ezCtrl",function($scope,$state,$ionicPopover,$ionicHistory){
	$state.go("home");
	$scope.flag = {};
	$scope.go_back = function() {
		$ionicHistory.goBack();
	};
	$scope.show_history = function($event){
		var h = $ionicHistory.viewHistory(),
			hstr = JSON.stringify(h,null,"	"),
			tpl = ["<ion-popover-view>",
					"<ion-header-bar>history</ion-header-bar>",
					"<ion-content>",
					"<pre>",
					hstr,
					"</pre>",
					"</ion-content>",
					"</ion-popover-view>"
				].join("");
		$ionicPopover.fromTemplate(tpl).show($event);	
	};
	$scope.$watch("flag.disableAnimate",function(nv){
		$ionicHistory.nextViewOptions({
			disableAnimate:nv
		})
	});
})


<!DOCTYPE html>
<html ng-app="ezApp">
<head>
	<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no,width=device-width,height=device-height">
	<script src="ionic.bundle.min.js"></script>
	<link rel="stylesheet" type="text/css" href="ionic.min.css">
</head>
<body ng-controller="ezCtrl">
	<!--导航框架之导航栏-->
	<ion-nav-bar class="bar-positive">
		<ion-nav-back-button></ion-nav-back-button>
	</ion-nav-bar>
	<!--导航框架之导航视图-->
	<ion-nav-view></ion-nav-view>
	<script id="home.html" type="text/ng-template">
		<!--导航框架之模板视图-->
		<ion-view view-title="Home">
			<ion-content>
				<ion-list>
				  	<ion-item ui-sref="music" class="item-icon-right">
						Go to music page!
						<i class="icon ion-chevron-right"></i>
					</ion-item>
					<ion-item class="item-divider">$ionicHistory</ion-item>
					<ion-item ng-click="show_history($event)">viewHistory()</ion-item>
					<ion-toggle ng-model="flag.disableAnimate">nextViewOptions()</ion-toggle>
				</ion-list>
			</ion-content>
		</ion-view>
	</script>
	<script id="music.html" type="text/ng-template">
		<!--导航框架之模板视图-->
		<ion-view view-title="Music">
			<ion-content class="padding">
				<a class="button ion ion-home" ui-sref="home">go home</a>
			</ion-content>
		</ion-view>
	</script>
</body>
</html>
