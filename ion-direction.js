定制视图切换方向 : nav-direction
使用nav-direction指令声明视图转场时的切换方向：

<any ui-sref=".." nav-direction="..">...</any>
目前支持的选项有：

forward - 新视图从右向左进入
back - 新视图从左向右进入
enter -
exit -
swap 

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
	</ion-nav-bar>
	<!--导航框架之导航视图-->
	<ion-nav-view></ion-nav-view>
	<script id="home.html" type="text/ng-template">
		<!--导航框架之模板视图-->
		<ion-view view-title="Home">
			<ion-content>
				<ion-list>
				  	<ion-item ui-sref="music" class="item-icon-right" nav-direction="forward">
						Go to music page!
						<i class="icon ion-ios-arrow-right"></i>
					</ion-item>
				</ion-list>
			</ion-content>
		</ion-view>
	</script>
	<script id="music.html" type="text/ng-template">
		<!-- The title of the ion-view will be shown on the navbar -->
		<ion-view view-title="Music">
			<ion-content>
				<ion-list>
				  	<ion-item ui-sref="home" class="item-icon-right" nav-direction="forward">
						Go to home page!
						<i class="icon ion-ios-arrow-right"></i>
					</ion-item>
				</ion-list>
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
