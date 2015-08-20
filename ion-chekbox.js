复选按钮 : ion-checkbox
ionic的复选按钮脱胎于HTML标准的checkbox元素，可以在一组选项中 同时选中多个：

使用ion-checkbox指令声明复选按钮元素：

<ion-checkbox>...</ion-checkbox>
与标准的checkbox相比，使用ionic的ion-checkbox有几个优势：

样式更美观，与移动端的UI更匹配
支持数据绑定。使用可选的ng-model属性，可以直接将选中状态绑定到作用域上的变量
直接使用文本子元素作为标签
	<ion-content>
		<ion-list>
			<ion-checkbox  ng-repeat="item in items" ng-model="item.selected">
				{{item.label}} : {{item.selected}}
			</ion-checkbox>
		</ion-list>
	</ion-content>
	
angular.module("ezApp",["ionic"])
.controller("ezCtrl",function($scope){
	$scope.items = [
		{label:"HTML5",selected:true},
		{label:"CSS3"},
		{label:"ECMAScript6"}
	];
});

//单选按钮

单选按钮 ：ion-radio
和复选按钮类似，ionic的单选按钮脱胎于HTML标准的radio元素，用来在一组互斥的 选项中进行选择：
使用ion-radio声明单选按钮元素：

<ion-radio>...</ion-radio>
和HTML的radio相比，ion-radio的改进也是明显的：

与移动端的UI更匹配
使用可选的ng-model属性，实现与作用域变量的数据绑定
使用可选的ng-value属性，可以使用作用域变量设置单选按钮对应的值

	<div class="list">
			<div class="item item-divider">Your choice : {{ret.choice}}</div>
			<ion-radio ng-repeat="item in items" 
					   ng-model="ret.choice" ng-value="item">
				{{item}}
			</ion-radio>
		</div>
		
	angular.module("ezApp",["ionic"])
.controller("ezCtrl",function($scope){
	$scope.items=["HTML5","ES6","CSS3"];
	$scope.ret = {choice:"CSS3"};
});


开关按钮 : ion-toggle
开关和复选按钮的作用一致，都是从一组选项中进行多重选择。

在ionic中，使用ion-toggle指令声明开关元素：

<ion-toggle></ion-toggle>
ion-toggle有两个可选的属性：

ng-model - 模型变量
和复选按钮一样，开关按钮也可以使用可选的ng-model属性实现与作用域变量 的双向绑定。

toggle-class - 样式类
可以使用可选的toggle-class属性为开关按钮声明额外的样式。比如：toggle-{color} 用来声明配色方案。

	<ion-content>
		<ion-list>
			<div class="item item-divider">前端技术</div>
			<ion-toggle ng-repeat="item in items" ng-model="item.selected">{{item.text}} / {{item.selected}}</ion-toggle>
		</ion-list>
	</ion-content>
	
	angular.module("ezApp",["ionic"])
.controller("ezCtrl",function($scope){
	$scope.items=[
		{text:"HTML5"},
		{text:"ECMAScript6",selected:true},
		{text:"CSS3",selected:true}
	];
});


等待指示器 : ion-spinner
当App在进行耗时地处理时，给用户一个明显的提示反馈，可以营造良好的体验。

ionic的spinner使用SVG和JavaScript实现，因此可以缩放、添加样式并具有动画效果。

使用ion-spinner指令声明spinner对象：

<ion-spinner></ion-spinner>
ion-spinner的icon属性是可选的，用来指定SVG图标名称。请注意，这里的名称不是 ionioncs的图标名称。当前支持的SVG图标名称请参见示例代码。

ionic的预置样式类：spinner-{color}可以用来声明配色方案，也可以 自定义样式，比如设置大小等：

.spinner svg{
    width: 28px;
    height: 28px;
    stroke: #444;
    fill: #444;
} 


<ion-content>
		<ion-list>
			<ion-item ng-repeat="item in items" >
				<ion-spinner icon="{{item}}"></ion-spinner>
				{{item}}
			</ion-item>
		</ion-list>
	</ion-content>
	
	angular.module("ezApp",["ionic"])
.controller("ezCtrl",function($scope){
	$scope.items = ["android","ios","ios-small","bubbles","circles",
		"crescent","dots","lines","ripples","spiral"];
});

