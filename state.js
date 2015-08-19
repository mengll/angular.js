//状态机
在单页应用（Single Page App）中，路由的管理是很重要的环节。ionic.js 没有使用AngularJS内置的ng-route模块，而是选择了AngularUI项目 的ui-router模块。

ui-router的核心理念是将子视图集合抽象为一个状态机，导航意味着 状态的切换。在不同的状态下，ionic.js渲染对应的子视图（动态加载的HTML片段） 就实现了路由导航的功能：

angular.module("ezApp",["ionic"])
.config(function($stateProvider){
	//配置状态机的各个状态
	$stateProvider
		.state("state1",{templateUrl:"state1.html"})
		.state("state2",{templateUrl:"state2.html"})
		.state("state3",{templateUrl:"state3.html"});
})
.controller("ezCtrl",function($scope,$state){
	//根据参数切换到指定的状态
	$scope.go = function(state){
		$state.go(state);
	};
});

//考虑到移动应用交互的特点，ionic.js也提供了手势操作的事件，比如：

//hold - 长按
//tap - 敲击
//drag - 拖动
//swipe - 滑动

angular.module("ezApp",["ionic"])
.controller("ezCtrl",function($scope){
	$scope.icon="ion-arrow-expand";
	$scope.onSwipeUp = function(){
		$scope.icon="ion-arrow-up-a";
	};
	$scope.onSwipeDown = function(){
		$scope.icon="ion-arrow-down-a";
	};
	$scope.onSwipeLeft = function(){
		$scope.icon="ion-arrow-left-a";
	};
	$scope.onSwipeRight = function(){
		$scope.icon="ion-arrow-right-a";
	};
});
//常用的标签
<ion-header-bar align-title="center" class="bar-positive">
		<h1 class="title">ion-header-bar</h1>
	</ion-header-bar>
	ion-header-bar指令有两个可选的属性：

align-title - 设置标题文字的对齐方式。允许值：left | right | center，分别对应左对齐、 右对齐和居中对齐。
no-tap-scroll - 当点击标题时，是否将内容区域自动滚动到最开始。允许值：true | false，默认为true。

angular.module("ezApp",["ionic"])
.controller("ezCtrl",function($scope){
  //初始化执行赋值的操作
	$scope.items = [];
	for(var i=0;i<20;i++)
		$scope.items.push("line " + i);
})

//ionic中的标签的使用的

<ion-header-bar class="bar-dark">
		<a class="button button-clear icon ion-cloud"></a>
		<h1 class="title">Hey Jude / The Beatles</h1>
		<a class="button button-clear icon ion-navicon"></a>
</ion-header-bar>
<!--头的部分end-->

	<ion-content>
		<ul class="list card">
			<li class="item item-image">
				<img src="img/beatles.jpg">
			</li>
		</ul>
	</ion-content>
	<!--内容部分end-->
	
	<ion-footer-bar class="bar-dark">
		<div class="button-bar">
			<a class="button button-clear icon ion-ios-loop"></a>
			<a class="button button-clear icon ion-ios-skipbackward"></a>
			<a class="button button-clear icon ion-ios-skipforward"></a>
			<a class="button button-clear icon ion-ios-pause"></a>
			<a class="button button-clear icon ion-ios-volume-high"></a>
		</div>
	</ion-footer-bar>
	<!--结束部分end-->

<!--滚动容器的申请-->

ion-scroll指令声明一个可滚动的容器元素，用户可以按住内容进行拖动：
ion-scroll指令有两个常用的可选属性：

direction - 内容可以滚动的方向。允许值：x|y|xy。默认为 y。
zooming - 是否支持pinch-to-zoom(捏拉缩放)。允许值：true | false。
在使用ion-scroll时，需要显式指定滚动框元素及内容元素 的大小（高度和宽度）：

<ion-scroll class="has-header" zooming="true" direction="y" style="width: 500px; height: 500px">
		<div style="width: 5000px; height: 5000px; background: url('img/0021.png') repeat"></div>
</ion-scroll>

拉动刷新 : ion-refresher
使用指令ion-refresher可以为滚动容器（ion-scroll或ion-content）增加 拉动刷新/pull-to-refresh的功能：

<ion-refresher></ion-refresher>
ion-refresher指令有以下可选的属性：

on-refresh - 当用户向下拉动足够的距离并松开时，执行此表达式
on-pulling - 当用户开始向下拉动时，执行此表达式
pulling-text - 当用户向下拉动时，显示此文本
pulling-icon - 当用户向下拉动时，显示此图标
refreshing-icon - 当用户向下拉动并松开后，显示的等待图标。ionic推荐使用spinner 代替这个属性
spinner - 和refreshing-icon的作用一样，但spinner是基于SVG的动画
disable-pulling-rotation - 禁止下拉图标旋转动画
注意在刷新完毕后，应当使用作用域的$broadcast()方法通知框架：

$scope.$broadcast("scoll.refreshComplete")

		<ion-refresher
			pulling-text="Pull to refresh..."
			on-refresh="doRefresh()">
		</ion-refresher>
		
angular.module("ezApp", ["ionic"])
.controller("ezCtrl", function($scope) {
	$scope.items = [];
	var base = 1;
	$scope.doRefresh = function() {
		for(var i=0;i<10;i++,base++)
			$scope.items.unshift(["item ",base].join(""));
		// Stop the ion-refresher from spinning
		$scope.$broadcast("scroll.refreshComplete");
	};
});

滚动刷新 : ion-infinite-scroll
使用ion-infinite-scroll指令可以为滚动容器（ion-scroll或ion-content）增加 滚动刷新功能：

<ion-infinite-scroll on-infinite="">...</ion-infinite-scroll>
ion-infinite-scroll指令有如下属性：

on-infinite - 必须。当滚动到底部时执行此表达式
distance - 可选。距底部距离百分比。当距离底部超过此数值时，执行on-infinite。默认为1%
icon - 可选。载入时显示的图标。默认是ion-load-d。ionic推荐使用spinner代替icon属性
spinner - 可选。载入时的spinner。默认是ionSpinner
immediate-check - 可选。是否在载入时立即检查滚动框范围

	<ion-content>
		<ul class="list">
			<li class="item"  ng-repeat="item in items">{{item}}</li>
		</ul>
		<ion-infinite-scroll on-infinite="load_more();" icon="ion-load-a" >
		</ion-infinite-scroll>
	</ion-content>
	
	angular.module("ezApp",["ionic"])
.controller("ezCtrl",function($scope,$timeout){
	$scope.items = [];
	var base = 0;
	$scope.load_more = function(){
		$timeout(function(){
			for(var i=0;i<10;i++,base++)
				$scope.items.push(["item ",base].join(""));
			$scope.$broadcast("scroll.infiniteScrollComplete");
		},500);
	};
});


脚本接口 : $ionicScrollDelegate
可以使用服务$ionicScrollDelegate，通过脚本控制滚动容器（ion-scroll或ion-content）。 $ionicScrollDelegate服务提供的常用方法如下：

resize()
重新计算容器尺寸。当父元素大小变化时，应当调用此方法

scrollTop([shouldAnimate])
滚动到内容顶部。shouldAnimate参数为true|false，表示是否使用动画展示滚动过程

scrollBottom([shouldAnimate])
滚动到内容底部。shouldAnimate参数为true|false，表示是否使用动画展示滚动过程

scrollTo(left,top[,shouldAnimate])
滚动到指定位置。left和top分别表示要滚动到的x坐标和y坐标

scrollBy(left,top[,shouldAnimate])
滚动指定偏移量。left和top分别表示要滚动的x偏移量和y偏移量

getScrollPosition()
读取当前视图位置。返回值为一个JSON对象，具有left和top属性，分别表示x和y坐标

	<ion-header-bar class="bar-positive">
		<h1 class="title">$ionicScrollDelegate</h1>
	</ion-header-bar>
	<ion-content>
		<ul class="list">
			<li class="item"  ng-repeat="item in items">{{item}}</li>
		</ul>
	</ion-content>
	<ion-footer-bar class="bar-positive">
		<a class="button" ng-click="gotop();">GO TOP!</a>
		<a class="button" ng-click="gobottom();">GO BOTTOM!</a>
	</ion-footer-bar>
	
	angular.module("ezApp",["ionic"])
.controller("ezCtrl",["$scope","$ionicScrollDelegate",function($scope,$ionicScollDelegate){
	$scope.items = [];
	for(var i=0;i<100;i++)
		$scope.items.push(["item ",i+1].join(""));
	$scope.gotop = function(){
		$ionicScollDelegate.scrollTop(true);
	}
	$scope.gobottom = function(){
		$ionicScollDelegate.scrollBottom(true);
	}
}]);
