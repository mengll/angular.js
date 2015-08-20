路由机制 : 状态机
对于视图的路由，ionic没有使用AngularJS的路由模块（ng-route），而是使用 了angular-ui项目的ui-route模块。ionic.bundle.js已经打包了ui-route模块， 所以我们使用时不需要单独引入。

和通常基于URL匹配的路由机制不同，ui-route是基于状态机的导航：

可以认为视图元素ui-view有多个状态，比如：state1/state2/state3。 在任何一个时刻，视图元素只能处于某一状态下。这些状态是由状态机管理的。

在ui-route中的$state服务就是一个状态机实例，在任何时刻，我们可以使用其 go()方法跳转到指定名称的状态。

配置状态机
需要指出的是，状态的划分以及每个状态的元信息（比如模板、url等）是在配置 阶段通过$stateProvider完成的：

angular.module("ezApp",["ionic"])
.config(function($stateProvider){
    $stateProvider.state("state1",{...})
        .state("state2",{...})
        .state3("state3",{...});
});
触发状态迁移
在ui-router中定义的指令ui-sref用来触发状态迁移：

<a ui-sref="state1">Go State 1</a>
当用户点击这个链接时，$state服务将根据状态名state1 找到对应的元信息，提取、编译模板，并将其显示在ui-view指令指定的 视图窗口中。

angular.module("ezApp", ["ionic"])
.config(function($stateProvider,$urlRouterProvider) {
	//配置状态机
	$stateProvider
	.state("home", {
		templateUrl: "home.html"	//内联模板的id
	})
	.state("music", {
		templateUrl: "music.html"	//内联模板的id
	});
})
.controller("ezCtrl",function($scope,$state){
	//切换到状态 : home
	$state.go("home");
});

	<!--视图容器-->
	<div ui-view></div>
	<!--内联模板: home.html-->
	<script id="home.html" type="text/ng-template">
		<div class="bar bar-header bar-positive">
			<h1 class="title">home</h1>
		</div>
		<div class="scroll-content has-header">
			<ul class="list list-inset">
				<li class="item item-icon-right" ui-sref="music">
					Go Music!
					<i class="icon ion-ios-arrow-right"></i>
				</li>
				<li class="item item-icon-right" ui-sref="sport">
					Go Sport!
					<i class="icon ion-ios-arrow-right"></i>
				</li>
			</ul>
		</div>
	</script>
	<!--内联模板: music.html-->
	<script id="music.html" type="text/ng-template">
		<div class="bar bar-header bar-energized">
			<h1 class="title">music</h1>
		</div>
		<div class="scroll-content has-header">
			<ul class="list list-inset">
				<li class="item item-icon-right" ui-sref="home">
					Go Home!
					<i class="icon ion-ios-arrow-right"></i>
				</li>
				<li class="item item-icon-right" ui-sref="sport">
					Go Sport!
					<i class="icon ion-ios-arrow-right"></i>
				</li>
			</ul>
		</div>
	</script>
	
