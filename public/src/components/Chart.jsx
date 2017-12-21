import React from 'react';
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { getPriceHistory, setGraphThreshold } from '../actions/priceHistory_a.jsx';

const mapStateToProps = (state) => {
  return {
    priceHistoryData: state.priceHistory.data,
    auctions: state.priceHistory.auctions,
    searchQuery: state.priceHistory.searchQuery,
    favorites: state.favorites.favorites,
    high: state.priceHistory.high,
    low: state.priceHistory.low
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setChartData: (event) => {
      const searchQuery = event.target.value
      if (searchQuery !== 'Choose Favorite') {
        dispatch(getPriceHistory(searchQuery))
      }
    },

    setThresholds: (event) => {
      let lowThreshold = $('#lowThreshold').val();
      let highThreshold = $('#highThreshold').val();
      if (!(lowThreshold > 0)) {
        lowThreshold = 0;
      }
      if (!(highThreshold > 0)) {
        highThreshold = 0;
      }
      console.log(lowThreshold, highThreshold);
      dispatch(setGraphThreshold(highThreshold, lowThreshold))
    }
  }
}

let Chart = ({ setThresholds, setChartData, favorites, priceHistoryData, searchQuery, high, low }) => {
  const groupData = (priceData) => {
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

  let plotData = [];
  if (priceHistoryData.length > 1){
    plotData = groupData(priceHistoryData);
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
  if (plotData[2] && plotData[2].length > 0) {
    data.datasets.push(
      {
        label: 'Low Limit',
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
        data: plotData[2],
      }
    );
  }
  if (plotData[3] && plotData[3].length > 0) {
    data.datasets.push(
      {
        label: 'Upper Limit',
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
        data: plotData[3],
      }
    );
  }
  const options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        },
        scaleLabel: {
          display: true,
          labelString: '$'
        }
      }],
      xAxes: [{
        type: 'time'
      }]
    },
    legend: {
      position: 'bottom'
    }
  };

  // const style = {
  //   cardContent: {
  //     paddingLeft: '0',
  //     paddingTop: '0.5rem',
  //     paddingBottom: '0.5rem'
  //   },
  //   card: {},
  //   header: {},
  //   select: {}
  // }

  const nightStyle = {
    cardContent: {
      paddingLeft: '0',
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem'
    },
    card: {
      color: '#87A3BB',
      backgroundColor: '#22282F',
      borderRadius: '2rem'
    },
    header: {
      color: '#87A3BB'
    },
    select: {
      color: '#22282F',
      backgroundColor: '#87A3BB'
    },
    input: {
      color: '#22282F',
      backgroundColor: '#87A3BB',
      marginBottom: '1rem'
    }
  }

  let chart;
  if (priceHistoryData.length === 1) {
    chart = '';
  } else {
    chart = <Line data={data} options={options} style={nightStyle.select} />;
  }

  let chartTitle = 'Price History';
  let favoritesSelector = (
    <div className="field">
      <div className="control">
        <div className="select">
          <select defaultValue="Choose a Product" style={nightStyle.select} onChange={(event) => setChartData(event)}>
            <option value="Choose Favorite" default >Choose Favorite</option>
            {favorites.map((favorite, key) => <option value={favorite.searchQuery}  key={key}>{favorite.searchQuery}</option>)}
          </select>
        </div>
      </div>
    </div>
  )
  if (favorites.length === 0) {
    favoritesSelector = '';
    chartTitle = '';
  }


  return (
    <div className="card" style={nightStyle.card}>
      <header className="card-header">
        <p className="card-header-title" style={nightStyle.header}>
          {chartTitle}
        </p>
      </header>
      <div className="card-content" style={nightStyle.cardContent}>
        <div className="content">
          {favoritesSelector}
        </div>
        <div className="content" style={nightStyle.cardContent}>
          {chart}
        </div>
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              id="lowThreshold"
              type="number"
              placeholder="Lower Limit"
              style={nightStyle.input}
            />
          </div>
          <div className="control">
            <input
              className="input"
              id="highThreshold"
              type="number"
              placeholder="Upper Limit"
              style={nightStyle.input}
            />
          </div>
          <div className="control">
            <a
              className="button is-info"
              onClick={(event) => {setThresholds(event)}}
            >
              Submit
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

Chart = connect(mapStateToProps, mapDispatchToProps)(Chart);

export default Chart;