//program to create digital clock.

function clockFun()
{
	//get current date
	var date= new Date();
	var getHrs= date.getHours();
	var getMin= date.getMinutes();
	var getSec= date.getSeconds();
	var day= days[date.getDay()];
	
	// console.log(getHrs,getMin,getSec);

	//get elements from HTML
	var currentHrs=document.getElementById("h");
	var currentMin=document.getElementById("m");
	var currentSec=document.getElementById("s");
	var currentTime=document.getElementById("localtime");
	var currentDay=document.getElementById("day");
	
	//to set time am or pm with ternary operator
	var zone= getHrs >= 12 ? "PM": "AM";
	getHrs=getHrs?getHrs:12;
	getHrs>12?getHrs=getHrs-12:'';
	getSec=getSec<10?"0"+getSec:getSec;
	getMin=getMin<10?"0"+getMin:getMin;
	getHrs=getHrs<10?"0"+getHrs:getHrs;
			
			
	//content for DOM
	currentHrs.innerHTML=getHrs;
	currentMin.innerHTML=getMin;
	currentSec.innerHTML=getSec;
	currentDay.innerHTML=day;
	currentTime.innerHTML=zone;
	
}
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
setInterval(clockFun,1000);

