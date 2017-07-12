//app.js是整个angularjs 应用程序的入口
//创建应用模块
var yike = angular.module("yike",["ngRoute","Controllers","directives"]);
//定义toggle方法
//$(function(){})
yike.run(["$rootScope",function($rootScope){
	$rootScope.collapsed = false;
	//往$rootScope上绑定toggle方法
	$rootScope.toggle = function(){
		//找到navs 节点 添加collapse 类
		$rootScope.collapsed = !$rootScope.collapsed;		
		//找到dd 节点 改变transform 的值
		var dds = document.querySelectorAll(".navs dd");

		//根据$rootScope.collapsed 的值判断是收起还是打开
		if ($rootScope.collapsed) {
			//遍历所有的dds 将其中的每一个transform 属性改成translate(0);
			for (var i=0;i<dds.length;i++){			
				var dd = dds[i];
				dd.style.transform = "translate(0)";
				//设置每个dd一次入场(动画过渡效果)
				dd.style.transitionDuration = 0.15*(i+1)+"s";
			}
		}else{
			//折起的时候动画
			// for (var i=0;i<dds.length;i++){			
			// 	var dd = dds[i];
			// 	dd.style.transform = "translate(-100%)";
			// 	//设置每个dd一次入场(动画过渡效果)
			// 	dd.style.transitionDuration = 0.2*(dds.length-i)+"s";
			// }
			for (var j=dds.length-1;j>0;j--) {
				dds[j].style.transform = "translate(-100%)";
				dds[j].style.transitionDuration = 0.15*(dds.length-j)+"s";
			}
		}
		
	}
}])

//解决锚点乱码bug
yike.config(function($locationProvider){
	$locationProvider.hashPrefix("");
});
//配置路由
yike.config(["$routeProvider",function($routeProvider){
	//配置路由具体内容
	$routeProvider.when('/today',{
		templateUrl:"./views/today.html",
		controller:"todayCtrl"
	}).when('/older',{
		templateUrl:"./views/older.html"
	})
}]);













