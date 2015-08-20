导航栏脚本接口 : $ionicNavBarDelegate
服务$ionicNavBarDelegate提供了控制导航栏的脚本接口：

align([direction]) - 标题对齐方式。
参数direction是可选的，允许值为：left | right | center，缺省值为center。

showBackButton([show]) - 是否显示回退按钮
参数show是可选的，允许值为：true | false，缺省值为true。

showBar(show) - 是否显示导航栏
参数show的允许值为：true | false 。

title(title) - 设置导航栏标题
参数title为HTML字符串。

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
					<ion-item class="item-divider">$ionicNavBarDelegate</ion-item>
					<ion-toggle ng-model="flag.shouldSetTitle">title()</ion-toggle>
					<ion-toggle ng-model="flag.shouldShowBar">showBar()</ion-toggle>
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
.controller("ezCtrl",function($scope,$state,$interval,$ionicNavBarDelegate){
	$state.go("home");
	$scope.flag = {
		shouldSetTitle : false,
		shouldShowBar : true
	};
	$scope.$watch("flag.shouldSetTitle",function(nv){
		if(nv) $ionicNavBarDelegate.title("<i style='color:red'>▂▃▅▆█</i>");
		else $ionicNavBarDelegate.title("Home");
	});
	$scope.$watch("flag.shouldShowBar",function(nv){
		$ionicNavBarDelegate.showBar(nv);
	})
})
