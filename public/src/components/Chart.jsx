import React from 'react';
import { Line } from 'react-chartjs-2';

let chart = ({ priceHistoryData, searchQuery }) => {
  const data = {
    datasets: [
      {
        //label: 'Dollars',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#673AB7',
        borderColor: '#673AB7',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#673AB7',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#673AB7',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: priceHistoryData,
      }
    ]
  };
  const options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        }
       }]
     //  xAxes: [{
     //    type: 'linear',
     //    ticks: {
     //       suggestedMin: 0,
     //       suggestedMax: this._maxDate,
     //       stepSize: this._maxDate / 10 //interval between ticks
     //    }
     // }]
    }
  };
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  )
}


export default chart;