视图特定按钮 : ion-nav-buttons
在ionic的导航框架中，导航栏是公共资源。那么，如果我们需要在不同的 状态下（即载入不同的模板视图），在导航栏上显示一些不同的按钮，该怎么办？

答案是，在ion-view指令声明的元素内使用ion-nav-buttons指令 添加一组按钮，ionic的导航框架看到这个指令时，就会自动地将这些按钮 安置到导航栏中。

指令ion-nav-buttons必须是指令ion-view的直接后代：

<ion-view>
    <ion-nav-buttons>
        <!--按钮定义-->
    </ion-nav-buttons>
</ion-view>
ion-nav-buttons指令有一个属性用于声明这些按钮在导航栏中的位置：

side - 在导航条的那一侧放置按钮。允许值：primary | secondary | left | right
primary和secondary是平台相关的。比如在iOS上，primary被映射到左边，而secondary 被映射到最右边，但是在Android上，primary和secondary都在最右侧。

left和right则明确地声明是在左侧还是右侧，与平台无关。

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
			<!--本视图可见时，ion-nav-buttons将被导航框架载入导航栏-->
			<ion-nav-buttons side="left">
				<button class="button" ng-click="doSomething()">
					Login
				</button>
			</ion-nav-buttons>
			<ion-content>
				<ion-list>
				  	<ion-item ui-sref="music" class="item-icon-right">
						Go to music page!
						<i class="icon ion-chevron-right"></i>
					</ion-item>
				</ion-list>
			</ion-content>
		</ion-view>
	</script>
	<script id="music.html" type="text/ng-template">
		<!--导航框架之模板视图-->
		<ion-view view-title="Music">
			<!--本视图可见时，ion-nav-buttons将被导航框架载入导航栏-->
			<ion-nav-buttons side="right">
				<button class="button" ng-click="doSomething()">
					Play
				</button>
			</ion-nav-buttons>
			<ion-content class="padding">
			  	<!-- The content of the page -->
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
