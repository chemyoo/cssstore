/*!
 * Date: 2018-04-23
 * Author: jianqing.liu
 */
var XhrUtil = {
	/**
	 * 创建XMLRequest对象
	 */
	createXhrObject : function(){
		var msxml_progid = [
			'MSXML2.XMLHTTP.6.0',
			'MSXML3.XMLHTTP',
			'Microsoft.XMLHTTP',//不支持 readyState 3
			'MSXML2.XMLHTTP.3.0'//不支持 readyState 3
		];
		var XMLRequest = null;
		try{
			XMLRequest = new XMLHttpRequest();//标准方法创建
		} catch (e) {
			for(var i = 0, length = msxml_progid.length; i < length; i++){
				try{
					XMLRequest = new ActiveXObject(msxml_progid[i]);
				} catch (e) {
					//输出错误
					console.error(e);
				}
			}
			//输出错误
			console.error(e);
		} finally {
			if(XMLRequest){
				console.info("successfully to create XMLRequest!");
			}
			return XMLRequest;
		}
	},
	/**
	 * 发送请求
	 * @param {String} url
	 * @param {Object} or {Function} data
	 * @param {String} or {Function} method
	 * @param {String} or {Function} type
	 * @param {String} or {Function} async
	 * @param {Function} callback
	 */
	sendRequest : function(url,data,method,type,async,callback){
		if(arguments.length < 2){
			throw new Error('missing parameters: url or calback function!');
		} else if(arguments.length < 6){
			if(typeof arguments[arguments.length - 1] == 'function'){
				callback = arguments[arguments.length - 1];
				arguments[arguments.length - 1] = null;
			}
			if(typeof arguments[arguments.length - 2] == 'boolean'){
				async = arguments[arguments.length - 2];
				arguments[arguments.length - 2] = null;
				break;
			}
		} 
		if(!callback && typeof callback != 'function') {
			throw new Error('missing parameter: callback function!');
		}
		
		var defaults = {method:'get',type:'json',async:true};
		if(method && method instanceof String && '' !== method.trim()){
			defaults.method = method;
		} 
		if(type && type instanceof String && '' !== type.trim()){
			defaults.type = type;
		}
		if(typeof async == 'boolean'){
			defaults.async = async;
		}
		
		var xhr = this.createXhrObject();
		
		var sendData = this.serializeData(data);
		
		if(defaults.method.toLowerCase() == 'get'){
			url += "?" + sendData;
		}
		
		xhr.open(defaults.method, url, defaults.async);//true 为异步
		if(defaults.method.toLowerCase() == 'post'){
			xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		}
		
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4 && xhr.status == 200) {
				var text = null;
				if(defaults.type.toLowerCase() == 'json'){
					text = JSON.parse(xhr.responseText.trim());
				} else {
					text = xhr.responseText.trim();
				}
				callback(text);
			}
		};
		
		if(defaults.method.toLowerCase() == 'post'){
			xhr.send(sendData);
		} else {
			xhr.send();
		}
	},
	serializeData : function(data) {
		var dataStr = "";
		if(data instanceof String ) {
			dataStr += data;
		} else if(data instanceof Object && !this.isEmptyObject(data)){
			for(var key in data){
				dataStr += key + "=" + data[key] + "&"; 
			}
		}
		return dataStr.slice(0,-1);
	},
	isEmptyObject: function( obj ) {
	    var name;
	    for (name in obj) {
	        return false;
	    }
	    return true;
	}	
	 
}

