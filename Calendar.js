<!--
 var lunarInfo=new Array(
0x04bd8,0x04ae0,0x0a570,0x054d5,0x0d260,0x0d950,0x16554,0x056a0,0x09ad0,0x055d2,
0x04ae0,0x0a5b6,0x0a4d0,0x0d250,0x1d255,0x0b540,0x0d6a0,0x0ada2,0x095b0,0x14977,
0x04970,0x0a4b0,0x0b4b5,0x06a50,0x06d40,0x1ab54,0x02b60,0x09570,0x052f2,0x04970,
0x06566,0x0d4a0,0x0ea50,0x06e95,0x05ad0,0x02b60,0x186e3,0x092e0,0x1c8d7,0x0c950,
0x0d4a0,0x1d8a6,0x0b550,0x056a0,0x1a5b4,0x025d0,0x092d0,0x0d2b2,0x0a950,0x0b557,
0x06ca0,0x0b550,0x15355,0x04da0,0x0a5d0,0x14573,0x052d0,0x0a9a8,0x0e950,0x06aa0,
0x0aea6,0x0ab50,0x04b60,0x0aae4,0x0a570,0x05260,0x0f263,0x0d950,0x05b57,0x056a0,
0x096d0,0x04dd5,0x04ad0,0x0a4d0,0x0d4d4,0x0d250,0x0d558,0x0b540,0x0b5a0,0x195a6,
0x095b0,0x049b0,0x0a974,0x0a4b0,0x0b27a,0x06a50,0x06d40,0x0af46,0x0ab60,0x09570,
0x04af5,0x04970,0x064b0,0x074a3,0x0ea50,0x06b58,0x055c0,0x0ab60,0x096d5,0x092e0,
0x0c960,0x0d954,0x0d4a0,0x0da50,0x07552,0x056a0,0x0abb7,0x025d0,0x092d0,0x0cab5,
0x0a950,0x0b4a0,0x0baa4,0x0ad50,0x055d9,0x04ba0,0x0a5b0,0x15176,0x052b0,0x0a930,
0x07954,0x06aa0,0x0ad50,0x05b52,0x04b60,0x0a6e6,0x0a4e0,0x0d260,0x0ea65,0x0d530,
0x05aa0,0x076a3,0x096d0,0x04bd7,0x04ad0,0x0a4d0,0x1d0b6,0x0d250,0x0d520,0x0dd45,
0x0b5a0,0x056d0,0x055b2,0x049b0,0x0a577,0x0a4b0,0x0aa50,0x1b255,0x06d20,0x0ada0,
/*2050-2100*/
0x14b63,0x09370,0x049f8,0x04970,0x064b0,0x168a6,0x0ea50,0x06b20,0x1a6c4,0x0aae0,
0x0a2e0,0x0d2e3,0x0c960,0x0d557,0x0d4a0,0x0da50,0x05d55,0x056a0,0x0a6d0,0x055d4,
0x052d0,0x0a9b8,0x0a950,0x0b4a0,0x0b6a6,0x0ad50,0x055a0,0x0aba4,0x0a5b0,0x052b0,
0x0b273,0x06930,0x07337,0x06aa0,0x0ad50,0x14b55,0x04b60,0x0a570,0x054e4,0x0d160,
0x0e968,0x0d520,0x0daa0,0x16aa6,0x056d0,0x04ae0,0x0a9d4,0x0a2d0,0x0d150,0x0f252,0x0d520)
 
var solarMonth=new Array(31,28,31,30,31,30,31,31,30,31,30,31);
var Animals=new Array("鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪");

var Gan=new Array("甲","乙","丙","丁","戊","己","庚","辛","壬","癸"); 
var Zhi=new Array("子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"); 

var solarTerm = new Array("小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至");
var sTermInfo = new Array(0,21208,42467,63836,85337,107014,128867,150921,173149,195551,218072,240693,263343,285989,308563,331033,353350,375494,397447,419210,440795,462224,483532,504758);
var nStr1 = new Array('日','一','二','三','四','五','六','七','八','九','十');
var nStr2 = new Array('初','十','廿','卅');
//公历节日
var sFtv = new Array(
"0101 <font color='red'>元旦</font>",
"0214 情人节",
"0308 妇女节",
"0312 植树节",
"0315 消费者权益日",
"0401 愚人节",
"0501 <font color='red'>劳动节</font>",
"0504 青年节",
"0512 护士节",
"0601 儿童节",
"0701 建党节",
"0801 建军节",
"0910 教师节",
"0928 孔子诞辰",
"1001 <font color='red'>国庆节</font>",
"1006 老人节",
"1024 联合国日",
"1224 平安夜",
"1225 圣诞节")
//农历节日
var lFtv = new Array(
"0101 春节",
"0115 元宵节",
"0505 端午节",
"0707 七夕",
"0715 中元节",
"0815 中秋节",
"0909 重阳节",
"1208 腊八节",
"1224 小年")
//返回农历y年的总天数
function lYearDays(y) {
   var i, sum = 348;
   for(i=0x8000; i>0x8; i>>=1)sum+=(lunarInfo[y-1900]&i)?1:0;
   return(sum+leapDays(y));
}
//返回农历y年闰月的天数
function leapDays(y) {
   if(leapMonth(y))  return((lunarInfo[y-1900] & 0x10000)? 30: 29);
   else return(0);
}
//判断y年的农历中那个月是闰月,不是闰月返回0
function leapMonth(y){
   return(lunarInfo[y-1900]&0xf);
}
//返回农历y年m月的总天数
function monthDays(y,m){
   return((lunarInfo[y-1900]&(0x10000>>m))?30:29);
}

//算出当前月第一天的农历日期和当前农历日期下一个月农历的第一天日期
function Dianaday(objDate) {
   var i, leap=0, temp=0;
   var baseDate = new Date(1900,0,31);
   var offset   = (objDate - baseDate)/86400000;
   this.dayCyl = offset+40;
   this.monCyl = 14;
   for(i=1900; i<2101 && offset>0; i++) {
      temp = lYearDays(i)
      offset -= temp;
      this.monCyl += 12;
   }
   if(offset<0) {
      offset += temp;
      i--;
      this.monCyl -= 12;
   }
   this.year = i;
   this.yearCyl=i-1864;
   leap = leapMonth(i); //闰哪个月
   this.isLeap = false;
   for(i=1; i<13 && offset>0; i++) {
      if(leap>0 && i==(leap+1) && this.isLeap==false){	//闰月
          --i; this.isLeap = true; temp = leapDays(this.year);}
      else{
         temp = monthDays(this.year, i);}
      if(this.isLeap==true && i==(leap+1)) this.isLeap = false;	//解除闰月
      offset -= temp;
      if(this.isLeap == false) this.monCyl++;
   }
   if(offset==0 && leap>0 && i==leap+1)
      if(this.isLeap){ this.isLeap = false;}
      else{this.isLeap=true;--i;--this.monCyl;}
   if(offset<0){offset+=temp;--i;--this.monCyl;}
   this.month=i;
   this.day=offset+1;
}
//返回公历y年m+1月的天数
function solarDays(y,m){
   if(m==1)
      return(((y%4==0)&&(y%100!=0)||(y%400==0))?29:28);
   else
      return(solarMonth[m]);
}
//记录公历和农历某天的日期
function calElement(sYear,sMonth,sDay,week,lYear,lMonth,lDay,isLeap) {
      this.isToday = false;
      //公历
      this.sYear = sYear;
      this.sMonth = sMonth;
      this.sDay = sDay;
      this.week = week;
      //农历
      this.lYear = lYear;
      this.lMonth = lMonth;
      this.lDay = lDay;
      this.isLeap = isLeap;
	  //节日记录
      this.lunarFestival = ''; //农历节日
      this.solarFestival = ''; //公历节日
      this.solarTerms = ''; //节气
}
//返回某年的第n个节气为几日(从0小寒起算)
function sTerm(y,n) {
   var offDate = new Date((31556925974.7*(y-1900)+sTermInfo[n]*60000)+Date.UTC(1900,0,6,2,5));
   return(offDate.getUTCDate())
}
//保存y年m+1月的相关信息
var fat=mat=9;
var eve=0;
function calendar(y,m) {
   fat=mat=0;
   var sDObj,lDObj,lY,lM,lD=1,lL,lX=0,tmp1,tmp2;
   var lDPOS = new Array(3);
   var n = 0;
   var firstLM = 0;
   sDObj = new Date(y,m,1);	//当月第一天的日期
   this.length = solarDays(y,m);    //公历当月天数
   this.firstWeek = sDObj.getDay();    //公历当月1日星期几
   if ((m+1)==5){fat=sDObj.getDay()}
   if ((m+1)==6){mat=sDObj.getDay()}
   for(var i=0;i<this.length;i++) {
      if(lD>lX) {
         sDObj = new Date(y,m,i+1);    //当月第一天的日期
         lDObj = new Dianaday(sDObj);     //农历
         lY = lDObj.year;           //农历年
         lM = lDObj.month;          //农历月
         lD = lDObj.day;            //农历日
         lL = lDObj.isLeap;         //农历是否闰月
         lX = lL? leapDays(lY): monthDays(lY,lM); //农历当月最後一天
         if (lM==12){eve=lX}
		 if(n==0) firstLM = lM;
         lDPOS[n++] = i-lD+1;
      }
      this[i] = new calElement(y,m+1,i+1,nStr1[(i+this.firstWeek)%7],lY,lM,lD++,lL);
	  if((i+this.firstWeek)%7==0){
	     this[i].color = 'red';  //周日颜色
	  }
   }
   //节气
   tmp1=sTerm(y,m*2)-1;
   tmp2=sTerm(y,m*2+1)-1;
   this[tmp1].solarTerms = solarTerm[m*2];
   this[tmp2].solarTerms = solarTerm[m*2+1];
   if((this.firstWeek+12)%7==5)	//黑色星期五
      this[12].solarFestival += '黑色星期五';
   if(y==tY && m==tM) this[tD-1].isToday = true;	//今日
}
//用中文显示农历的日期
function cDay(d){
   var s;
   switch (d) {
      case 10:
         s = '初十'; break;
      case 20:
         s = '廿十'; break;
         break;
      case 30:
         s = '三十'; break;
         break;
      default :
         s = nStr2[Math.floor(d/10)];
         s += nStr1[d%10];
   }
   return(s);
}
//在表格中显示公历和农历的日期,以及相关节日
var cld;
var animal=null;
function drawCld(SY,SM) {
   var TF=true;
   var p1=p2="";
   var i,sD,s,size;
   cld = new calendar(SY,SM);
   if(SM<1)
   {
	   animal=Animals[(SY-1-4)%12];
   }
   else
   {
   	   animal=Animals[(SY-4)%12];
   }
	   
   GZ.innerHTML = '&nbsp;&nbsp;<font color="#FFCC33">☆'+getTGDZ()+'·'+animal+'年☆</font>&nbsp;&nbsp;';	//生肖
   for(i=0;i<42;i++) { 
      try
	  {
		  sObj=eval('SD'+ i);
		  lObj=eval('LD'+ i);
		  sObj.className = '';
	  }
	  catch(e)
	  {
		  throw new Error("人长大了就会像这个变量一样，找不到对象");
		  return;
	  }
      sD = i - cld.firstWeek;
      if(sD>-1 && sD<cld.length) { //日期内
         sObj.innerHTML = sD+1;
		 if(cld[sD].isToday){ sObj.style.color ='blue';lObj.style.color ='blue';} //今日颜色
		 else{sObj.style.color = '';lObj.style.color ='';}
         if(cld[sD].lDay==1){ //显示农历月
		 var tempmonth=cld[sD].lMonth;
		 switch(tempmonth)
		 {
			 case 1:tempmonth="一";break;
			 case 2:tempmonth="二";break;
			 case 3:tempmonth="三";break;
			 case 4:tempmonth="四";break;
			 case 5:tempmonth="五";break;
			 case 6:tempmonth="六";break;
			 case 7:tempmonth="七";break;
			 case 8:tempmonth="八";break;
			 case 9:tempmonth="九";break;
			 case 10:tempmonth="十";break;
			 case 11:tempmonth="十一";break;
			 case 12:tempmonth="十二";break;
			 default:tempmonth="Error";
		 }
		   lObj.innerHTML = '<b>'+(cld[sD].isLeap?'闰':'') + tempmonth + '月'/* + (monthDays(cld[sD].lYear,cld[sD].lMonth)==29?'':'')*/+'</b>';
         }
		 else{lObj.innerHTML = cDay(cld[sD].lDay);}	//显示农历日
		var Slfw=Ssfw=Stfw=null;
		s=cld[sD].solarFestival;
		for (var ipp=0;ipp<lFtv.length;ipp++){	//农历节日
			if (parseInt(lFtv[ipp].substr(0,2))==(cld[sD].lMonth)){
				if (parseInt(lFtv[ipp].substr(2,4))==(cld[sD].lDay)){
					lObj.innerHTML="<font color='red'>"+lFtv[ipp].substr(5)+"</font>";
					Stfw="<font color='red'>"+lFtv[ipp].substr(5)+"</font>";
				}
			}
			if (12==(cld[sD].lMonth)){	//判断是否为除夕
				if (eve==(cld[sD].lDay)){lObj.innerHTML="<font color='red'>除夕</font>";Stfw="<font color='red'>除夕</font>";}
			}
		}
		for (var ipp=0;ipp<sFtv.length;ipp++){	//公历节日
			if (parseInt(sFtv[ipp].substr(0,2))==(SM+1)){
				if (parseInt(sFtv[ipp].substr(2,4))==(sD+1)){
					lObj.innerHTML=sFtv[ipp].substr(5);
					Ssfw=sFtv[ipp].substr(5);
				}
			}
		}
	    if ((SM+1)==5){	//母亲节
			if (fat==0){
				if ((sD+1)==7){Ssfw="母亲节";lObj.innerHTML="<font color='red'>母亲节</font>"}
			}
			else if (fat<9){
				if ((sD+1)==((7-fat)+8)){Ssfw="母亲节";lObj.innerHTML="<font color='red'>母亲节</font>"}
			}
		}
	    if ((SM+1)==6){	//父亲节
			if (mat==0){
				if ((sD+1)==14){Ssfw="父亲节";lObj.innerHTML="<font color='red'>父亲节</font>"}
			}
			else if (mat<9){
				if ((sD+1)==((7-mat)+15)){Ssfw="父亲节";lObj.innerHTML="<font color='red'>父亲节</font>"}
			}
		 }
		 if (s.length<=0){	//设置节气的颜色
			s=cld[sD].solarTerms;
            if(s.length>0) s = s.fontcolor('limegreen');		
		 }
		 if(s.length>0) {lObj.innerHTML=s;Slfw=s;}	//节气
		 if(Slfw!=null && Stfw!=null && Ssfw!=null)
		 {
			 lObj.innerHTML=Slfw+"/"+Stfw+"/"+Ssfw;
		 }
		 else if ((Slfw!=null)&&(Ssfw!=null)){
			lObj.innerHTML=Slfw+"/"+Ssfw;
		 }else if(Slfw!=null && Stfw!=null)
		 {
			 lObj.innerHTML=Slfw+"/"+Stfw;
		 }else if(Ssfw!=null && Stfw!=null)
		 {
			 lObj.innerHTML=Ssfw+"/"+Stfw;
		 }
      }
      else { //非日期
         sObj.innerHTML = '';
         lObj.innerHTML = '';
      }
   }
}
//在下拉列表中选择年月时,调用自定义函数drawCld(),显示公历和农历的相关信息
function nextmonth() {
   var y,m;
   y=CLD.SY.selectedIndex+1900;
   m=CLD.SM.selectedIndex+1;
   var mselected=document.getElementById('month');
   var yselected=document.getElementById('year');
   if(mselected.length==m)
   {
	   	m=0;
		y=y+1;
   		mselected.selectedIndex=0;
		yselected.selectedIndex=y-1900;
   }
   else
    	mselected.selectedIndex=m;
   drawCld(y,m)
}
function lastmonth() {
   var y,m;
   y=CLD.SY.selectedIndex+1900;
   m=CLD.SM.selectedIndex-1;
   var mselected=document.getElementById('month');
   var yselected=document.getElementById('year');
   if(m==-1)
   {
		m=mselected.length-1;
		y=y-1;
   		mselected.selectedIndex=m;
		yselected.selectedIndex=y-1900;
   }
   else
    	mselected.selectedIndex=m;
   drawCld(y,m)
}
function getyear(year)
{
   var y,m;
   y=CLD.SY.selectedIndex+year+1900;
   m=CLD.SM.selectedIndex;
   var yselected=document.getElementById('year');
   if(y==yselected.length+1900)
   {
   		yselected.selectedIndex=0;
		y=1900;
   }
   else if(y==1899)
   {
		yselected.selectedIndex=yselected.length-1;
		y=yselected.length+1900-1;
   }
   yselected.selectedIndex=y-1900;
   drawCld(y,m)
}
function changeCld(y,m) {
   var y,m;
   y=CLD.SY.selectedIndex+1900;
   m=CLD.SM.selectedIndex;
   drawCld(y,m);
}
//得到农历干支年
function getTGDZ()
{
   var year,month;
   year=CLD.SY.selectedIndex+1900;
   month=CLD.SM.selectedIndex;
   if(month<1)
   {
   		return Gan[(year-1-4)%10]+Zhi[(year-1-4)%12];
   }
   else
   {
	   return Gan[(year-4)%10]+Zhi[(year-4)%12];
   }
}
//用自定义变量保存当前系统中的年月日
var Today = new Date();
var tY = Today.getFullYear();
var tM = Today.getMonth();
var tD = Today.getDate();
//打开页时,在下拉列表中显示当前年月,并调用自定义函数drawCld(),显示公历和农历的相关信息
function initial() {
   CLD.SY.selectedIndex=tY-1900;
   CLD.SM.selectedIndex=tM;
   drawCld(tY,tM);
   getcurrenttime();
   //alert(getTGDZ());
}
/*日期时间格式化*/
Date.prototype.format = function(format) 
{
		if (isNaN(this)) return '';
		var o = {
			'M+': this.getMonth() + 1,
			'd+': this.getDate(),
			'h+': this.getHours(),
			'm+': this.getMinutes(),
			's+': this.getSeconds(),
			'S': this.getMilliseconds(),
			'W': ["日", "一", "二", "三", "四", "五", "六"][this.getDay()],
			'q+': Math.floor((this.getMonth() + 3) / 3)
		};
		if (format.indexOf('am/pm') >= 0) {
			format = format.replace('am/pm', (o['h+'] >= 12) ? '下午' : '上午');
			if (o['h+'] >= 12) o['h+'] -= 12;
		}
		if (/(y+)/.test(format)) {
			format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
		}
		for (var k in o) {
			if (new RegExp("(" + k + ")").test(format)) {
				format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
			}
		}
		return format;
}
var oldday=null;
var day=null;
var time=null;
var showtime=null;
function getcurrenttime() 
{
  	time = new Date();
	showtime=time.format("yyyy年MM月dd日 hh:mm:ss");
	document.getElementById('time').innerHTML="<font size=+2 color='brown'>北京</font><font color=blue size=+2>时间："+showtime+"</font>";
	var y,m;
	day=time.getDate();
	var mselected=document.getElementById('month');
	if(day!=tD)//2015-12-31 23:59:59 day=31;td=31;下一秒，2016-1-1，day=1;td=31;
	{
		tD=day;
		tY=time.getFullYear();
		tM=time.getMonth();
		getNowadays();
	}
	var showtime=setTimeout(getcurrenttime,500);
}
function getNowadays()
{
	CLD.SY.selectedIndex=tY-1900;
   	CLD.SM.selectedIndex=tM;
	drawCld(tY,tM);
}
//-->
