
const groupData = (priceData, high, low) => {
    let goodPriceData = [];
    let greatPriceData = [];
    let lowData = [];
    let highData = [];
    let startDate = 0;
    let endDate = 0;
    priceData.forEach((cronJob) => {
      const time = new Date(cronJob.createdAt);
      goodPriceData.push({
        t: time,
        y: cronJob.avgGoodPrice
      });
      greatPriceData.push({
        t: time,
        y: cronJob.avgGreatPrice
      });
      if (low) {
        lowData.push({
          t: time,
          y: low
        });
      }
      if (high) {
        highData.push({
          t: time,
          y: high
        });
      }
    });

    return [goodPriceData, greatPriceData, lowData, highData]
  }

const generateChartData = (priceHistoryData, high, low) => {
  let plotData = [];
  if (priceHistoryData.length > 1) {
    plotData = groupData(priceHistoryData, high, low);
  }
  let data = {
    datasets: [
      {
        label: 'Good condition',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#87A3BB',
        borderColor: '#87A3BB',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#87A3BB',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#87A3BB',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: plotData[0],
      },
      {
        label: 'Great condition',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#929281',
        borderColor: '#929281',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#929281',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#929281',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: plotData[1],
      }
    ]
  };
  if (plotData[2].length > 0) {
    data.datasets.push(
      {

        fill: false,
        lineTension: 0.1,
        backgroundColor: '#346628',
        borderColor: '#346628',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#346628',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#346628',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: plotData[2],
      }
    );
  }
  if (plotData[3].length > 0) {
    data.datasets.push(
      {

        fill: false,
        lineTension: 0.1,
        backgroundColor: '#346628',
        borderColor: '#346628',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#346628',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#346628',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: plotData[3],
      }
    );
  }
  return data;
}

export default generateChartData;