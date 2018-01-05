  export const options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          // fontColor: '#FBFBFB'
        },
        scaleLabel: {
          display: true,
          labelString: '$',
          // fontColor: '#FBFBFB'
        },
        // gridLines: {
        //   color: '#FBFBFB'
        // }
      }],
      xAxes: [{
        type: 'time',
        // gridLines: {
        //   color: '#FBFBFB'
        // },
        // ticks: {
        //   fontColor: '#FBFBFB'
        // }
      }]
    },
    legend: {
      position: 'bottom',
      labels: {
        filter: function(legendItem, chartData) {
          return legendItem.datasetIndex < 2;
        },
        // fontColor: '#FBFBFB'
      }
    }
  };

  export const nightStyle = {
    cardContent: {
      paddingLeft: '0',
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem'
    },
    card: {
      // color: '#87A3BB',
      // backgroundColor: '#22282F',
      borderRadius: '2rem'
    },
    header: {
      // color: '#87A3BB'
    },
    select: {
      // color: '#22282F',
      // backgroundColor: '#87A3BB'
    },
    input: {
      // color: '#22282F',
      // backgroundColor: '#87A3BB',
      marginBottom: '1rem'
    }
  }