模板视图 : ion-view
尽管在模板视图中可以随便写HTML，但是，在ionic中，我们总是使用指令ion-view来 作为模板视图内容的容器，这是为了与ionic的导航框架保持兼容：

<script id="..." type="text/ng-template">
    <ion-view>
        <!--模板视图内容-->
    </ion-view>
</script>
ion-view指令有一些可选的属性：

view-title - 视图标题文字
模板被载入导航视图ion-nav-view显示时，这个属性值将显示在导航栏ion-nav-bar中

cache-view - 是否对这个模板视图进行缓存
允许值为：true | false，默认为true

hide-back-button -是否隐藏导航栏中的返回按钮
当模板被载入导航视图时，如果之前有其他的模板，那么在导航栏ion-nav-bar上默认会自动 显示返回按钮（使用指令ion-nav-back-button定义）。点击该按钮将返回前一个模板。

hide-back-button的允许值为：true | false ，默认为false

注意：必须在导航栏中显式地声明返回按钮，否则即使将hide-back-button属性设为false， 这个按钮也不会出现:-)

hide-nav-bar - 是否隐藏导航栏
允许值为：true | false ,默认为false


<!DOCTYPE html>
<html ng-app="ezApp">
<head>
	<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no,width=device-width,height=device-height">
	<script src="ionic.bundle.min.js"></script>
	<link rel="stylesheet" type="text/css" href="ionic.min.css">
</head>
<body ng-controller="ezCtrl">
	<!--导航框架之导航栏-->
	<ion-nav-bar class="bar-positive"></ion-nav-bar>
	<!--导航框架之导航视图-->
	<ion-nav-view></ion-nav-view>
	<!--内联模板：home.html-->
	<script id="home.html" type="text/ng-template">
		<!-- 导航框架之模板视图 -->
		<ion-view view-title="Home">
			<ion-content>
				<ion-list type="list-inset">
				  	<ion-item ui-sref="music" class="item-icon-right">
						Go to music page!
						<i class="icon ion-ios-arrow-right"></i>
					</ion-item>
				</ion-list>
			</ion-content>
		</ion-view>
	</script>
	<!--内联模板：music.html-->
	<script id="music.html" type="text/ng-template">
		<!-- ion-view 的title 属性值将显示在导航栏中 -->
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

