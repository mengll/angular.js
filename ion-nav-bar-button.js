回退按钮 : ion-nav-back-button
你可能已经注意到前一节的示例中，当切换到小说页时，无处可去了！

好在ionic的指令ion-nav-back-button指令可以自动地让你回退到前一个视图：

<ion-nav-bar>
    <ion-nav-back-button></ion-nav-back-button>
</ion-nav-bar>
当视图切换时，回退按钮会自动出现在导航条中，并显示前一个视图 的标题。点击回退按钮将返回前一个视图。

示例中的代码在上一节的基础上增加了回退按钮，切换到小说页再看看！

定制样式
我们可以定制回退按钮的图标、文本和样式：

<ion-nav-back-button class="button-clear">
    <i class="icon ion-ios-arrow-back"></i> 返回
</ion-nav-back-button>


<!DOCTYPE html>
<html ng-app="ezApp">
<head>
	<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no,width=device-width,height=device-height">
	<script src="ionic.bundle.min.js"></script>
	<link rel="stylesheet" type="text/css" href="ionic.min.css">
</head>
<body ng-controller="ezCtrl">
	<!--导航框架之导航栏-->
	<ion-nav-bar align-title="left" class="bar-positive">
		<ion-nav-back-button></ion-nav-back-button>
	</ion-nav-bar>
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
