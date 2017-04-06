$(document).ready(function() {
    daysSelect= document.getElementById('daysSelect');
    var e = document.getElementById("numberDays");
    var monthSet=[1,2,3,4,25,36,44,53,64,51,42,33,24,15,16,17,18,19,20,21,22,23,23,25,26,27,28,29,30,31];
    var xLabels=lastMonth()



      var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [0],
      datasets: [ {
        label: 'stuff',
        data: [0],
        backgroundColor: "rgba(255,153,0,0.4)"
      }]
    }
  });

    daysSelect.onclick = function() {
      var strUser = e.value;
      customSet=[];
      customxLabels=[];

      for (var i=0;i<strUser;i++)
      {
        customSet[strUser-1-i]=monthSet[monthSet.length-1-i];
        customxLabels[strUser-1-i]=xLabels[xLabels.length-1-i]

      }
      var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: customxLabels,
        datasets: [ {
          label: 'stuff',
          data: customSet,
          backgroundColor: "rgba(255,153,0,0.4)"
        }]
      }
    });
      console.log(customSet);
      console.log(customxLabels);
    }

    reset.onclick = function() {
                    var set1=[0,0,0,0,0,0,0];
                    myChart = new Chart(ctx, {
                      type: 'line',
                      data: {
                        labels: [0],
                        datasets: [{
                          label: 'Temperature',
                          data: [0],
                          backgroundColor: "rgba(153,255,51,0.4)"
                        }]
                      }
                    });
              }




});
