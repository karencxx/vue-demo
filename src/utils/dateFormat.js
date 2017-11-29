Date.prototype.format = function(format){
	var o = {
		"M+": this.getMonth() + 1,
		"d+": this.getDate(),
		"h+": this.getHours(),
		"m+": this.getMinutes(),
		"s+": this.getSeconds(),
		"q+": Math.floor((this.getMonth() + 3) / 3),
		"S+": this.getMilliseconds()
	}
	var week = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]
	if(/(y+)/.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))
	}
	if(/(w+)/.test(format)){
		format = format.replace(RegExp.$1, week[this.getDay()]);
	}
	for(var k in o){
		if(new RegExp("("+ k + ")").test(format)){
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length))
		}
	}
	return format
}

/**
*	js时间对象的格式化
*	eg: format = "yyyy-MM-dd hh:mm:ss"
*/
export function formatDate(format, pattern) {
	const Format = format ? format instanceof Date ? format : new Date(typeof format == "number" ? format : format.replace(/-/g, "/")) : new Date(),
		  Pattern = pattern || "yyyy-MM-dd hh:mm:ss"

	return Format.format(Pattern)
}

export function formatNow(pattern) {
	const Pattern = pattern || 'yyyy-MM-dd hh:mm:ss'
	return new Date().format(Pattern)
}

export function DateFormat(format) {
	return format ? format instanceof Date ? format : new Date(typeof format == "number" ? format : format.replace(/-/g, "/")) : new Date()	
}

export function formatTime(format) {
	return format ? DateFormat(format).valueOf() :  +new Date
}