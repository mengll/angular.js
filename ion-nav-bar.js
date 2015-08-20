导航栏 : ion-nav-bar
ion-nav-bar指令用来声明一个居于屏幕顶端的导航栏，它的内容随导航视图 的状态变化而自动同步变化：

<ion-nav-bar></ion-nav-bar>
ion-nav-bar有以下可选的属性：

align-title - 标题对齐方式
允许值为： left | right | center。默认为center，居中对齐

no-tap-scroll - 点击导航栏时是否将内容滚动到顶部。
允许值为：true | false。默认为true，这意味着如果视图中的内容下拉很长，那么在任何时刻 点击导航栏都可以立刻回到内容的开头部分。


<!DOCTYPE html>
<html ng-app="ezApp">
<head>
	<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no,width=device-width,height=device-height">
	<script src="ionic.bundle.min.js"></script>
	<link rel="stylesheet" type="text/css" href="ionic.min.css">
</head>
<body ng-controller="ezCtrl">
	<!--导航框架之导航栏-->
	<ion-nav-bar align-title="left" class="bar-positive"></ion-nav-bar>
	<!--导航框架之导航视图-->
	<ion-nav-view></ion-nav-view>
	<script id="home.html" type="text/ng-template">
		<!--导航框架之模板视图-->
		<ion-view view-title="Home">
			<ion-content>
				<ion-list type="card">
				  	<ion-item ui-sref="music" class="item-icon-right">
						音乐
						<i class="icon ion-ios-arrow-right"></i>
					</ion-item>
				  	<ion-item ui-sref="novel" class="item-icon-right">
						小说
						<i class="icon ion-ios-arrow-right"></i>
					</ion-item>
				</ion-list>
			</ion-content>
		</ion-view>
	</script>
	<script id="music.html" type="text/ng-template">
		<!-- ion-view 的title 属性值将显示在导航栏中 -->
		<ion-view view-title="Music">
			<ion-content class="padding">
				<a class="button ion ion-home" ui-sref="home">go home</a>
			</ion-content>
		</ion-view>
	</script>
	<script id="novel.html" type="text/ng-template">
		<ion-view title="Novel">
			<ion-content>
				<p ng-include="'txt/xiyouji.txt'"></p>
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
	})
	.state("novel", {
		templateUrl: "novel.html"
	});
})
.controller("ezCtrl",function($scope,$state){
	$state.go("home");
});
