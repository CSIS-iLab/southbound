export default {
  // fditoasean
  '3.1': {
    chart: {
      type: 'line'
    },
    yAxis: {
      title: {
        text: 'US$ (Billions)'
      }
    },
    tooltip: {
      shared: true,
      valuePrefix: '$',
      valueSuffix: 'B'
    }
  },
  // fditosoutheast
  '3.2': {
    chart: {
      type: 'line'
    },
    yAxis: {
      title: {
        text: 'US$ (Billions)'
      },
      tickInterval: 4
    },
    tooltip: {
      shared: true,
      valuePrefix: '$',
      valueSuffix: 'B'
    }
  },
  // percapitagrowth
  '5.1.1': {
    chart: {
      type: 'line'
    },
    xAxis: {
      offset: -135
    },
    yAxis: {
      title: {
        text: 'Change (Percent)'
      },
      tickInterval: 2,
      max: 12,
      min: -10
    },
    tooltip: {
      shared: true,
      valueSuffix: '%'
    }
  },
  // percapitagrowth
  '5.1.2': {
    chart: {
      type: 'line'
    },
    xAxis: {
      offset: -110
    },
    yAxis: {
      title: {
        text: 'Change (Percent)'
      },
      tickInterval: 2,
      max: 14,
      min: -8
    },
    tooltip: {
      shared: true,
      valueSuffix: '%'
    }
  },
  // unemployment
  '5.2': {
    chart: {
      type: 'line'
    },
    yAxis: {
      title: {
        text: 'Unemployed (Percent)'
      }
    },
    tooltip: {
      shared: true,
      valueSuffix: '%'
    }
  },
  // exporttonsp
  '5.3': {
    chart: {
      type: 'area'
    },
    yAxis: {
      title: {
        text: 'US$ (Billions)'
      },
      tickInterval: 20
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },

    tooltip: {
      shared: true,
      valuePrefix: '$',
      valueSuffix: 'B'
    }
  },
  // outboundinvestment
  '5.4': {
    chart: {
      type: 'area'
    },
    yAxis: {
      title: {
        text: 'US$ (Billions)'
      }
    },
    tooltip: {
      shared: true,
      valuePrefix: '$',
      valueSuffix: 'B'
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    }
  },
  // outboundchina
  '5.5': {
    chart: {
      type: 'line'
    },
    yAxis: {
      title: {
        text: 'US$ (Billions)'
      }
    },
    tooltip: {
      shared: true,
      valuePrefix: '$',
      valueSuffix: 'B'
    }
  },
  // exporttochina
  '5.6': {
    chart: {
      type: 'line'
    },
    yAxis: {
      title: {
        text: 'US$ (Billions)'
      },
      tickInterval: 20
    },
    tooltip: {
      shared: true,
      valuePrefix: '$',
      valueSuffix: 'B'
    }
  },
  // chinaandtaiwanexport
  '5.7': {
    chart: {
      type: 'line'
    },
    yAxis: {
      title: {
        text: 'US$ (Billions)'
      },
      tickInterval: 100
    },
    tooltip: {
      shared: true,
      valuePrefix: '$',
      valueSuffix: 'B'
    }
  },
  // chinaandtaiwanoutbound
  '5.8': {
    chart: {
      type: 'line'
    },
    yAxis: {
      title: {
        text: 'US$ (Billions)'
      }
    },
    tooltip: {
      shared: true,
      valuePrefix: '$',
      valueSuffix: 'B'
    }
  },
  // numberoftourists
  '7.1': {
    chart: {
      type: 'column'
    },
    yAxis: {
      title: {
        text: 'Tourists (Millions)'
      }
    },
    tooltip: {
      shared: false,
      valueSuffix: 'M'
    }
  },
  // sourceoftourists
  '7.2': {
    chart: {
      type: 'line'
    },
    yAxis: {
      title: {
        text: 'Tourists (Millions)'
      },
      tickInterval: 1000000
    },
    tooltip: {
      shared: true,
      valueSuffix: 'M'
    }
  },
  // touristsfromNSP
  '7.3': {
    chart: {
      type: 'line'
    },
    yAxis: {
      title: {
        text: 'Tourists (Millions)'
      },
      tickInterval: 1000000
    },
    tooltip: {
      shared: true,
      valueSuffix: 'M'
    }
  },
  // touriststotaiwan
  '7.4': {
    chart: {
      type: 'column'
    },
    yAxis: {
      title: {
        text: 'Tourists (Millions)'
      },
      tickInterval: 2000000
    },
    legend: {
      reversed: true
    },
    tooltip: {
      valueSuffix: 'M'
    }
  },
  // studentenrollees
  '8.1': {
    chart: {
      type: 'column'
    },
    yAxis: {
      title: {
        text: 'Students (Thousands)'
      },
      tickInterval: 50000
    },
    legend: {
      reversed: true
    },
    tooltip: {
      valueSuffix: 'K'
    },
    aggregate: ['Myanmar', 'Malaysia', 'Cambodia', 'Philippines', 'Thailand']
  },
  // destinationofstudents
  '8.2': {
    chart: {
      type: 'pie'
    },
    series: [
      {
        index: 0,
        innerSize: '70%'
      }
    ],
    tooltip: {
      headerFormat: '',
      valueSuffix: '%'
    },
    plotOptions: {
      pie: {
        size: '75%'
      }
    }
  },
  // destinationnsp
  '8.3': {
    chart: {
      type: 'bar',
      marginRight: 20
    },
    yAxis: {
      ceiling: 100,
      tickInterval: 10,
      title: { text: 'Students (Percent)' }
    },
    xAxis: {
      labels: {
        format: '{}'
      }
    },
    legend: {
      reversed: false
    },
    tooltip: {
      headerFormat: '',
      valueSuffix: '%'
    }
  },
  // sourceofstudents
  '8.4': {
    chart: {
      type: 'pie'
    },
    tooltip: {
      headerFormat: '',
      valueSuffix: '%'
    },
    series: [
      {
        index: 0,
        innerSize: '70%'
      }
    ],
    plotOptions: {
      pie: {
        size: '50%'
      }
    }
  },
  // shareofinbound
  '8.5': {
    chart: {
      type: 'bar',
      marginRight: 20
    },
    yAxis: {
      ceiling: 100,
      tickInterval: 10,
      title: { text: 'Students (Percent)' }
    },
    xAxis: {
      labels: {
        format: '{}'
      }
    },
    legend: {
      reversed: true
    },
    tooltip: {
      headerFormat: '',
      valueSuffix: '%'
    }
  }
}
