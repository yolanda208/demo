/*
 * 颜色参数
 *
 */
var _color = ['light-gray',//'rgb(106, 99, 95)', 		// 浅灰色
			  'dark-gray',//'rgb(64, 59, 56)',  		// 深灰色
			  'pink',//'rgb(215, 112, 117)', 			// 粉红色
			  'gray',//'rgb(106, 99, 95)', 				// 中灰色
			  'light-green',//'rgb(146, 196, 105)', 	// 浅绿色
			  'light-blue'//'rgb(49, 159, 189)' 		// 浅蓝色
			 ],
	// 标题参数
	_title = ['VUI', 'Tips', 'Security', 'Javascript', 'Float'],
	_config = {
		"首页": [],
		"代码规范": [],
		"UI统一": [],
		"API": [],
		"平台支持": [],
		"性能": [],
		"工具": [],
		"手册": []
	},
	_d = document,
	contains,
	wrapper,
	lock,
	isDebug = true, // 是否加载调试功能

	// 位置信息，目前只取到2层共24个子项目
	position = [
	[
		[-1, -1], 
		[-1, 0], 
		[-1, 1], 
		[0, 1],
		[1, 1], 
		[1, 0], 
		[1, -1], 
		[0, -1]
	],
	[
		[-1, -2], 
		[-2, -1], 
		[-1, 2], 
		[2, -1],
		[1, -2], 
		[-2, 1], 
		[1, 2], 
		[2, 1],
		[0, -2], 
		[-2, 0], 
		[0, 2], 
		[2, 0],
		[-2, 2], 
		[2, -2], 
		[2, 2], 
		[-2, -2]
	]
];