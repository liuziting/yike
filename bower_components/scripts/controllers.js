//放所有的控制器---专门用于管理控制器
//将所有的控制器整体定义成一个控制器模块
angular.module("Controllers",[])
.controller("navController",["$scope",function($scope){
	//模拟模型层数据
	$scope.navs = [
		{link:"#/today",icon:"icon-home",text:"今日一刻"},
		{link:"#/older",icon:"icon-file-empty",text:"往期内容"},
		{link:"#/author",icon:"icon-pencil",text:"热门作者"},
		{link:"#/category",icon:"icon-menu",text:"栏目浏览"},
		{link:"#/favourite",icon:"icon-heart",text:"我的喜欢"},
		{link:"#/settings",icon:"icon-cog",text:"设置"}
	];

}])
//今日一刻的控制器
.controller("todayCtrl",["$scope","$filter","$http","$rootScope",function($scope,$filter,$http,$rootScope){
	//获取今天的时间2017-7-11
	var today = $filter("date")(new Date,"yyyy-MM-dd");
	$scope.time = today;  
	$rootScope.loading = false;
	$http({
		url:"./api/today.php",//请求地址从后台发送 解决跨域问题
		method:"get",
		params:{today:today}
	}).then(function(result){
		$rootScope.loading = true;
		//console.log("返回",result);
		//Object {data: Object, status: 200, config: Object, statusText: "OK"}
		//将数据放到模型层
		$scope.time = result.data.date;//日期
		$scope.posts = result.data.posts;//当天的所有数据
	})
	
}])












