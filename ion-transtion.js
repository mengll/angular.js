定制视图切换方式 : nav-transition
视图切换时的动画转场方式，可以使用nav-transition指令声明：

<any ui-sref=".." nav-transition="..">...</any>
目前支持的转场方式有三种：

android - android模拟
ios - ios模拟
none - 取消转场动画

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
				  	<ion-item ui-sref="music" class="item-icon-right" nav-transition="ios">
						Go to music page!
						<i class="icon ion-ios-arrow-right"></i>
					</ion-item>
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


var app = angular.module("ezApp", ["ionic"]);
app.config(function($stateProvider,$urlRouterProvider) {
	$stateProvider
	.state("home", {
		templateUrl: "home.html"
	})
	.state("music", {
		templateUrl: "music.html"
	});
})
.controller("ezCtrl",function($scope,$state){
	$state.go("home");
});
