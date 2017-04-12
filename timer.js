/**
 * 定时请求器
 * @author chemyoo@foxmail.com 
 * @base Jquery插件必需引入，并要在此插件前先引入，这是一个带有定时器的插件，
 * 可优化成只进行数据请求，使功能单一。数据处理可交由回调函数。
 */
(function($)
{
	var extend = $.fn.extend
	({
		startTimer:function(params,callbacks,selectorid)
		{
			var defaults = {url:"timer.action"};
			var options = $.extend({},defaults, params);//将一个空对象做为第一个参数,
			//这样做的好处是所有值被合并到这个空对象上，保护了插件里面的默认值。
			var completed=this.prop("completed",true).prop("completed");
			extend.excute(options,completed,this,callbacks,selectorid);
		},
		excute:function(options,completed,_this,callbacks,selectorid)
		{
			var timest=_this.prop("timers");
			_this.prop("count",0);
			clearInterval(timest);//重新设置定时器
			//console.time(_this.get(0).id+"指令等待下发...");
			function ajaxGetData(){
				if(completed)//如果请求未完成，则不进行下一次请求
				{
					$.ajax({
						url:options.url,
						data:options,
						type:'post',
						dataType:'json',
						timeout : 65*1000, // 超时时间设置为65秒
						success:function(data)
						{
							completed=true;
							var czjg = data.czjg;
							var type = data.type.req6;
							var optype = options['type.req6'];
							console.log("线程运行返回结果是否正确："+(type == optype));
							var count = _this.prop("count",_this.prop("count")+1).prop("count");
							if(count >=7 || czjg != 0)//7分钟后，表示下发失败
							{
								clearInterval(_this.prop("timers"));
								typeof callbacks === 'function' ? callbacks(czjg,selectorid) : "";
								console.log("显示指令下发结果！");
								//console.timeEnd(_this.get(0).id+"指令下发耗时：");
							}
						},
						complete : function(XMLHttpRequest,ststus)
						{
							if(ststus == 'timeout')
							{
								ajax.abort();
								//completed=true;
								console.log("请求超时！");
								_this.prop("count",_this.prop("count")+1);
							}
						},
						error: function(XMLHttpRequest, textStatus, errorThrown) 
						{
							//ajaxErr(XMLHttpRequest, textStatus, errorThrown);
							console.log("网络错误或服务器错误！");
							//console.timeEnd(_this.get(0).id+"指令下发耗时：");
							//clearInterval(_this.prop("timers"));
						}
					});
					completed=false;
				}
				else
				{
					var count = _this.prop("count",_this.prop("count")+1).prop("count");
					if(count>=7)//7分钟后，表示下发失败
					{
						clearInterval(_this.prop("timers"));
						console.log('请求终止');
						typeof callbacks === 'function' ? callbacks(-2,selectorid) : "";
					}
					console.log('上一次请求未返回值：'+count);
					//console.timeEnd(_this.get(0).id+"指令等待耗时：");
				}
			}
			ajaxGetData();
			timest=setInterval(ajaxGetData,1000*67);//67s执行一次
			_this.prop("timer",true);//标识为含定时器的标签
			_this.prop("timers",timest);//定时器
		},
		clearTimer:function()
		{
			//停止定时器
			if(!!this.prop("timer"))//含有定时器
			{
				clearInterval(this.prop("timers"));
			}
		}
	})
})(jQuery);
