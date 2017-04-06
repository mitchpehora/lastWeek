

function lastMonth()
{

  var pastMonthDates=[];
  var pastMonthDays=[];
  var pastMonthMonths=[];

  var xLabels=[];

  todayInfo= new Date();
  yearToday=todayInfo.getFullYear()
  dayToday=todayInfo.getDay()
  monthToday=todayInfo.getMonth()
  dateToday=todayInfo.getDate();
  lastMonth=monthToday-1
  daysLastMonth=31
  var daysIntoLastMonth=daysLastMonth;

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
  for (var i=0;i<31;i++)
  {
    pastMonthDates[30-i]=dateToday-i;
    pastMonthDays[30-i]=dayToday-i;
    pastMonthMonths[30-i]=monthToday+1



    if(pastMonthDates[30-i]<=0)
    {
      pastMonthDates[30-i]=daysIntoLastMonth;
      daysIntoLastMonth-=1;
    }


if(pastMonthDays[30-i]<0)
{
  do{
    pastMonthDays[30-i]+=7;
  }while (pastMonthDays[30-i]<0);
  pastMonthMonths[30-i]=monthToday;
}

if (pastMonthDays[30-i]==6)
{pastMonthDays[30-i]='Saturday';}

if (pastMonthDays[30-i]==5)
{pastMonthDays[30-i]='Friday ';}

if (pastMonthDays[30-i]==4)
{pastMonthDays[30-i]='Thursday';}

if (pastMonthDays[30-i]==3)
{pastMonthDays[30-i]='Wednesday';}

if (pastMonthDays[30-i]==2)
{pastMonthDays[30-i]='Tuesday';}

if (pastMonthDays[30-i]==1)
{pastMonthDays[30-i]='Monday';}

if (pastMonthDays[30-i]==0)
{pastMonthDays[30-i]='Sunday';}

    xLabels[30-i]=pastMonthDays[30-i]+' ('+pastMonthMonths[30-i]+' - '+pastMonthDates[30-i]+')'
    
  }

  return xLabels;
}
