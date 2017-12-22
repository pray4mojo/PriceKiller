import React from 'react';
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { getPriceHistory, setGraphThreshold } from '../actions/priceHistory_a.jsx';
import generateChartData from '../../../chartData/setData.js';
const options = require('../../../chartData/options.js').options;
const nightStyle = require('../../../chartData/options.js').nightStyle;

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
        dispatch(getPriceHistory(searchQuery));
        dispatch(setGraphThreshold(0, 0));
        $('#lowThreshold').val('')
        $('#highThreshold').val('')
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
      dispatch(setGraphThreshold(highThreshold, lowThreshold));
    }
  }
}

let Chart = ({ setThresholds, setChartData, favorites, priceHistoryData, searchQuery, high, low }) => {

  let plotData = generateChartData(priceHistoryData, high, low)
  let chart;
  if (priceHistoryData.length === 1) {
    chart = '';
  } else {
    chart =
      <Line
        data={plotData}
        options={options}
        style={nightStyle.select}
        redraw={true}
      />;
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