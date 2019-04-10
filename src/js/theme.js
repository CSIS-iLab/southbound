export default {
  colors: [
    '#ed392a',
    '#58a897',
    '#83badc',
    '#3b75bb',
    '#a483a8',
    '#f7890e',
    '#69518d',
    '#f7d768',
    '#8cb561',
    '#ef9a9a',
    '#728c99'
  ],
  chart: {
    backgroundColor: '#FFF',
    border: 'none',
    color: '#000',
    plotShadow: false,
    height: 500
  },
  title: {
    style: {
      color: '#000',
      font: '25px "Roboto", Arial, sans-serif',
      fontWeight: '400'
    },
    widthAdjust: -60
  },
  subtitle: {
    style: {
      fontSize: '12px',
      fontFamily: "'Hind', 'Arial', sans-serif",
      color: '#808080'
    }
  },
  credits: {
    style: {
      cursor: 'default',
      fontFamily: "'Hind', 'Arial', sans-serif"
    }
  },
  tooltip: {
    style: {
      fontSize: '13px',
      fontFamily: "'Hind', 'Arial', sans-serif"
    },
    headerFormat:
      '<span style="font-size: 13px;text-align:center;margin-bottom: 5px;font-weight: bold;font-family: \'Roboto\', arial, sans-serif;">{point.key}</span><br/>'
  },
  xAxis: {
    labels: {
      style: {
        color: '#666',
        fontSize: '12px',
        fontFamily: "'Hind', 'Arial', sans-serif"
      }
    },
    title: {
      style: {
        color: '#666',
        fontSize: '13px',
        fontFamily: "'Hind', 'Arial', sans-serif"
      }
    },
    gridLineWidth: 1,
    lineWidth: 0,
    tickColor: '#e6e6e6'
  },
  yAxis: {
    labels: {
      style: {
        color: '#666',
        fontSize: '12px',
        fontFamily: "'Hind', 'Arial', sans-serif"
      },
      x: -3
    },
    title: {
      style: {
        color: '#666',
        fontSize: '13px',
        fontFamily: "'Hind', 'Arial', sans-serif"
      },
      margin: 20
    },
    tickColor: '#e6e6e6'
  },
  legend: {
    title: {
      style: {
        fontFamily: "'Roboto', 'Arial', sans-serif",
        fontSize: '15px',
        color: '#000',
        fontStyle: 'normal'
      }
    },
    itemStyle: {
      color: '#000',
      fontSize: '14px',
      fontFamily: "'Hind', 'Arial', sans-serif",
      textOverflow: null
    },
    itemHoverStyle: {
      color: '#ed392a'
    }
  }
}
