导航视图 : ion-nav-view
在ionic里，我们使用ion-nav-view指令代替AngularUI Route中的 ui-view指令，来进行模板的渲染：

<ion-nav-view>
    <!--模板内容将被插入此处-->
</ion-nav-view>
和ui-view一样，ion-nav-view总是根据状态的变化，来提取对应的模板 并将其在DOM树中渲染。


<body ng-controller="ezCtrl">
	<script id="map.html" type="text/ng-template">
		<ion-header-bar class="bar-positive">
			<h1 class="title">地图</h1>
			<a ui-sref="novel" class="button">小说</a>
		</ion-header-bar>
		<ion-content>
			<img src="img/0021.png">
		</ion-content>
	</script>
	<script id="novel.html" type="text/ng-template">
		<ion-header-bar class="bar-balanced">
			<h1 class="title">小说</h1>
			<a ui-sref="map" class="button">地图</a>
		</ion-header-bar>
		<ion-content>
			<p ng-include="'txt/xiyouji.txt'"></p>
		</ion-content>
	</script>
	<ion-nav-view></ion-nav-view>
</body>

var app = angular.module("ezApp", ["ionic"]);
app.config(function($stateProvider,$urlRouterProvider) {
	$stateProvider
	.state("map", {
		templateUrl: "map.html"
	})
	.state("novel", {
		templateUrl: "novel.html"
	});
})
.controller("ezCtrl",function($scope,$state){
	$state.go("map");
});
