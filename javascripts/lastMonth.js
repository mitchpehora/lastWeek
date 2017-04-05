

function lastMonth()
{
var xLabels=[0]*30;

todayInfo= new Date();
yearToday=todayInfo.getFullYear()
dayToday=todayInfo.getDay()
monthToday=todayInfo.getMonth()
dateToday=todayInfo.getDate();
lastMonth=monthToday-1
daysLastMonth=31

if (monthToday == 4 || monthToday == 6 || monthToday == 9 || monthToday == 12)
{
  daysLastMonth = 30
}

if (monthToday==2)
{
  daysLastMonth=28
}

if (monthToday==2 && yearToday%4 ==0)
{
  daysLastMonth=29
}


for (var i=length.lastMonth;i<=0;i--)
{
  xLabels[i]=dateToday-i;
}



lastMonthArray=xLabels;
return lastMonthArray;
}

var myArray=lastMonth()

for (var i = 0; i < length.myArray; i++)
{
console.log(myArray[i]);
}
