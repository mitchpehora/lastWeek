$(document).ready(function() {
labelsArray=lastMonth();
var monthSet=[1,2,3,4,25,36,44,53,64,51,42,33,24,15,16,17,18,19,20,21,22,23,23,25,26,27,28,29,30,31];

    function backXDays(labelsArray,dataArray,daysBack)
    {
      for (var i=0;i<daysBack;i++)
      {
        customSet=[];
        customxLabels=[];
        returnArray=[customSet,customxLabels];
        customSet[daysBack-1-i]=dataArray[dataArray.length-1-i];
        customxLabels[daysBack-1-i]=labelsArray[labelsArray.length-1-i];



      }

      return returnArray;
    }
    console.log(backXDays(labelsArray,monthSet,10)[0])
    console.log(backXDays(labelsArray,monthSet,10)[1])
});
