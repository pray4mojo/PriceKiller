  export const options = {
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

  export const nightStyle = {
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