敲击 : on-tap
在屏幕上快速点击一次（停留时间不超过250ms），将触发on-tap事件：
可以在任何元素上使用这个指令挂接事件监听函数：

<any on-tap="...">...</any>

<!DOCTYPE html>
<html ng-app="ezApp">
<head>
	<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no,width=device-width,height=device-height">
	<script src="ionic.bundle.min.js"></script>
	<link rel="stylesheet" type="text/css" href="ionic.min.css">
</head>
<body  ng-controller="ezCtrl">
	<ion-header-bar class="bar-positive">
		<h1 class="title">on-tap</h1>
	</ion-header-bar>
	<ion-content>
		<ion-list ng-repeat="item in items">
			<ion-item on-tap="show(item);">
				{{item}}
				<ion-reorder-button class="ion-navicon"></ion-reorder-button>
			</ion-item>
		</ion-list>
	</ion-content>
</body>
</html>

angular.module("ezApp",["ionic"])
.controller("ezCtrl",function($scope, $ionicPopup) {
	$scope.items=["England","Japan","India","Russian"];
	$scope.show = function(item){
		$ionicPopup.alert({	
			title : "警告!",
			template : "为什么要敲 "+ item + "?"
		});
	};
});

双击 : on-double-tap
在屏幕上快速敲击两次，将触发on-double-tap事件：

gesture-tap

可以在任何元素上使用这个指令挂接事件监听函数：

<any on-double-tap="...">...</any>

双击 : on-double-tap
在屏幕上快速敲击两次，将触发on-double-tap事件：

gesture-tap

可以在任何元素上使用这个指令挂接事件监听函数：

<any on-double-tap="...">...</any>


按下/松开 on-touch/on-release
在屏幕上按下手指或鼠标键时，会立即触发on-touch事件；当手指抬起或鼠标键松开时， 会立即触发on-release事件。

可以在任何元素上挂接响应的事件监听函数：

<any on-touch="..." on-release="...">...</any>

<body  ng-controller="ezCtrl">
	<ion-header-bar class="bar-positive" ng-class="[style]" 
			on-touch="style='bar-assertive'" on-release="style='bar-positive'">
		<h1 class="title">on-touche/on-release</h1>
	</ion-header-bar>
	<ion-content>
		<img src="img/0021.png">
	</ion-content>
</body>

拖拽 : on-drag
在屏幕上按住并移动时，触发on-drag拖拽事件：

gesture-drag

根据运动方向的不同，可以细分为以下几种事件：

on-drag - 向所有方向拖动时都触发此事件
on-drag-up - 向上拖动时触发此事件
on-drag-down - 向下拖动时触发此事件
on-drag-left - 向左拖动时触发此事件
on-drag-right - 向右拖动时触发此事件
可以在任意元素上使用这些指令挂接对应的事件监听函数：

<any on-drag="...">...</any>

<!DOCTYPE html>
<html ng-app="ezApp">
<head>
	<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no,width=device-width,height=device-height">
	<script src="ionic.bundle.min.js"></script>
	<link rel="stylesheet" type="text/css" href="ionic.min.css">
</head>
<body  ng-controller="ezCtrl">
	<ion-header-bar class="bar-positive">
		<h1 class="title">on-drag</h1>
	</ion-header-bar>
	<div class="scroll-content has-header padding">
		<img src="img/baymax.png" on-touch="onTouch($event)" on-drag="onDrag($event);">
	</div>
</body>
</html>


angular.module("ezApp",["ionic"])
.controller("ezCtrl",function($scope) {
	var ox,oy;
	$scope.onTouch = function($event){
		ox = $event.target.offsetLeft;
		oy = $event.target.offsetTop;
	};
	$scope.onDrag = function($event){
		var el = $event.target,
			dx = $event.gesture.deltaX,
			dy = $event.gesture.deltaY;
		el.style.left = ox + dx + "px";
		el.style.top = oy + dy + "px";
	};
});


划动 : on-swipe
在屏幕上按住并快速拖动时，将触发on-swipe划动事件：

gesture-swipe

根据划动方向的不同，可细分为以下指令：

on-swipe - 向任何方向的划动都触发事件
on-swipe-up - 向上划动时触发事件
on-swipe-down - 向下划动时触发事件
on-swipe-left - 向左划动时触发事件
on-swipe-right - 向右划动时触发事件
可以在任何元素上使用这些指令挂接事件监听函数：

<!DOCTYPE html>
<html ng-app="ezApp">
<head>
	<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no,width=device-width,height=device-height">
	<script src="ionic.bundle.min.js"></script>
	<link rel="stylesheet" type="text/css" href="ionic.min.css">
</head>
<body ng-controller="ezCtrl">
	<div class="scroll-content padding" 
		on-swipe-up="onSwipeUp()" 
		on-swipe-down="onSwipeDown()"
		on-swipe-left="onSwipeLeft()" 
		on-swipe-right="onSwipeRight()">
		<p class="padding">按住鼠标快速划！</p>
		<i class="icon {{icon}}"></i>
	</div>
</body>
</html>


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


脚本接口 : $ionicGesture
除了使用之前介绍的特定指令实现手势事件的监听，也可以使用$ionicGesture服务 注册/解除手势事件监听：

on(eventType,callback,$element,options) - 注册手势事件监听函数
参数eventType是支持的事件类型，参看下面介绍；参数callback指定监听函数； 参数$element是要绑定事件的jqLite元素。

on()方法返回的是一个ionic.gesture对象，可供解除监听用。

off(gesture,eventType,callback) - 解除手势事件监听函数
参数gesture是on()方法返回的结果对象，参数callback是要移除的监听函数。

$ionicGesture服务支持的事件类型有：

hold, tap, doubletap, drag, dragstart, dragend, dragup, dragdown, dragleft, dragright, swipe, swipeup, swipedown, swipeleft, swiperight, transform, transformstart, transformend, rotate, pinch, pinchin, pinchout, touch, release

<!DOCTYPE html>
<html ng-app="ezApp">
<head>
	<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no,width=device-width,height=device-height">
	<script src="ionic.bundle.min.js"></script>
	<link rel="stylesheet" type="text/css" href="ionic.min.css">
</head>
<body  ng-controller="ezCtrl">
	<ion-header-bar class="bar-positive">
		<h1 class="title">$ionicGesture</h1>
	</ion-header-bar>
	<ion-content class="padding">
		<button class="button" id="test">test</button>
	</ion-content>
</body>
</html>

angular.module("ezApp",["ionic"])
.controller("ezCtrl",function($scope,$ionicGesture,$ionicPopup) {
	var el = document.querySelector("#test");
	$ionicGesture.on("tap",function(){
		$ionicPopup.alert({
			title : "提醒",
			template : "这个监听是用$ionicGesture服务注册的！"
		})
	},angular.element(el));
});
