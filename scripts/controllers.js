//放所有的控制器---专门用于管理控制器
//将所有的控制器整体定义成一个控制器模块
var Controllers =angular.module("Controllers",[]);

Controllers.controller("navController",["$scope",function($scope){
	//模拟模型层数据
	$scope.navs = [
		{link:"#/today",icon:"icon-home",text:"今日一刻"},
		{link:"#/order",icon:"icon-file-empty",text:"往期内容"},
		{link:"#/author",icon:"icon-pencil",text:"热门作者"},
		{link:"#/category",icon:"icon-menu",text:"栏目浏览"},
		{link:"#/favourite",icon:"icon-heart",text:"我的喜欢"},
		{link:"#/settings",icon:"icon-cog",text:"设置"}
	]

}]);












