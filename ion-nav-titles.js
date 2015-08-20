定制标题内容 : ion-nav-title
导航栏中默认显示所载入模板视图的view-title属性值，但ionic允许我们使用 ion-nav-title指令，使用任意的HTML片段改变它！

ion-nav-title必须是ion-view的直接后代：

<ion-view>
    <ion-nav-title>
        <!--HTML片段-->
    </ion-nav-title>
</ion-view>

<!DOCTYPE html>
<html ng-app="ezApp">
<head>
	<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no,width=device-width,height=device-height">
	<script src="ionic.bundle.min.js"></script>
	<link rel="stylesheet" type="text/css" href="ionic.min.css">
</head>
<body ng-controller="ezCtrl">
	<!--导航框架之导航栏-->
	<ion-nav-bar>
		<ion-nav-back-button></ion-nav-back-button>
	</ion-nav-bar>
	<!--导航框架之导航视图-->
	<ion-nav-view></ion-nav-view>
	<script id="home.html" type="text/ng-template">
		<!--导航框架之模板视图-->
		<ion-view view-title="Home">
			<!--本视图可见时，ion-nav-title的内容将被载入导航栏作为标题-->
			<ion-nav-title>
				<img src="img/road.png">
			</ion-nav-title>
			<ion-content>
				<!-- The content of the page -->
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
		url: "/",
		templateUrl: "home.html"
	})
	.state("music", {
		url: "/music",
		templateUrl: "music.html"
	});
})
.controller("ezCtrl",function($scope,$state){
	$state.go("home");
});
