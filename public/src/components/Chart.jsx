import React from 'react';
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { submitSearch, setResultsPage } from '../actions/main_a.jsx';

const mapStateToProps = state => {
  return {
    priceHistoryData: state.priceHistory.data,
    searchQuery: state.priceHistory.searchQuery
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

let Chart = ({ priceHistoryData, searchQuery }) => {
  const groupData = (priceData) => {

    const mapPriceData = (priceData) => {
      return priceData.map((item) => {
        return {
          t: new Date(item.listingInfo[0].endTime[0]),
          y: Number(item.sellingStatus[0].convertedCurrentPrice[0].__value__)
        }
      });
    }
    let goodConditionData = mapPriceData(priceData.filter((item) => {
      let condition = Number(item.condition[0].conditionId)
      return condition < 7000 && condition >= 3000
    }));
    let greatConditionData = mapPriceData(priceData.filter((item) => {
      let condition = Number(item.condition[0].conditionId)
      return condition < 3000
    }));
    return [goodConditionData, greatConditionData]
  }

  let plotData = [];
  if (priceHistoryData.length > 1){
    plotData = groupData(priceHistoryData);
  }
  const data = {
    datasets: [
      {
        label: 'Good condition',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#DC1313',
        borderColor: '#DC1313',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#DC1313',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#DC1313',
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
        backgroundColor: '#0DA50D',
        borderColor: '#0DA50D',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#0DA50D',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#0DA50D',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: plotData[1],
      }
    ]
  };
  const options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        }
      }],
      xAxes: [{
        type: 'time'
      }]
    }
  };
  let chart = <Line data={data} options={options} />
  if (priceHistoryData.length === 1) {
    chart = '';
  }
  return (
    <div>
      {chart}
    </div>
  )
}

Chart = connect(mapStateToProps, mapDispatchToProps)(Chart);

export default Chart;