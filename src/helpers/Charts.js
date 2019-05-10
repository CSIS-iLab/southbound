export default {
  // fditoasean
  "3.1": {
    chart: {
      type: "line"
    },
    yAxis: {
      title: {
        text: "USD"
      }
    },
    tooltip: {
      shared: true,
      valueSuffix: "B"
    }
  },
  // fditosoutheast
  "3.2": {
    chart: {
      type: "line"
    },
    yAxis: {
      title: {
        text: "USD"
      },
      tickInterval: 4
    },
    tooltip: {
      shared: true,
      valueSuffix: "B"
    }
  },
  // percapitagrowth
  "5.1": {
    chart: {
      height: 500,
      type: "line"
    },
    xAxis: {
      offset: -200
    },
    yAxis: {
      title: {
        text: "%"
      },
      tickInterval: 4,
      max: 12,
      min: -12
    },
    tooltip: {
      shared: true,
      valueSuffix: ""
    }
  },
  // unemployment
  "5.2": {
    chart: {
      type: "line"
    },
    yAxis: {
      title: {
        text: "People"
      }
    },
    tooltip: {
      shared: true,
      valueSuffix: "%"
    }
  },
  // exporttonsp
  "5.3": {
    chart: {
      type: "line"
    },
    yAxis: {
      title: {
        text: "USD"
      },
      tickInterval: 20
    },
    tooltip: {
      shared: true,
      valueSuffix: "B"
    }
  },
  // outboundinvestment
  "5.4": {
    chart: {
      type: "line"
    },
    yAxis: {
      title: {
        text: "USD"
      }
    },
    tooltip: {
      shared: true,
      valueSuffix: "B"
    }
  },
  // outboundchina
  "5.5": {
    chart: {
      type: "line"
    },
    yAxis: {
      title: {
        text: "USD"
      }
    },
    tooltip: {
      shared: true,
      valueSuffix: "B"
    }
  },
  // exporttochina
  "5.6": {
    chart: {
      type: "line"
    },
    yAxis: {
      title: {
        text: "USD"
      },
      tickInterval: 20
    },
    tooltip: {
      shared: true,
      valueSuffix: "B"
    }
  },
  // chinaandtaiwanexport
  "5.7": {
    chart: {
      type: "line"
    },
    yAxis: {
      title: {
        text: "USD"
      },
      tickInterval: 100
    },
    tooltip: {
      shared: true,
      valueSuffix: "B"
    }
  },
  // chinaandtaiwanoutbound
  "5.8": {
    chart: {
      type: "line"
    },
    yAxis: {
      title: {
        text: "USD"
      }
    },
    tooltip: {
      shared: true,
      valueSuffix: "B"
    }
  },
  // numberoftourists
  "7.1": {
    chart: {
      type: "line"
    },
    yAxis: {
      title: {
        text: "Tourists"
      }
    },
    tooltip: {
      shared: true,
      valueSuffix: "M"
    }
  },
  // sourceoftourists
  "7.2": {
    chart: {
      type: "line"
    },
    yAxis: {
      title: {
        text: "Tourists"
      },
      tickInterval: 1000000
    },
    tooltip: {
      shared: true,
      valueSuffix: "M"
    }
  },
  // touristsfromNSP
  "7.3": {
    chart: {
      type: "line"
    },
    yAxis: {
      title: {
        text: "Millions"
      },
      tickInterval: 1000000
    },
    tooltip: {
      shared: true,
      valueSuffix: "M"
    }
  },
  // touriststotaiwan
  "7.4": {
    chart: {
      type: "column"
    },
    yAxis: {
      title: {
        text: "Tourists"
      },
      tickInterval: 2000000
    },
    legend: {
      reversed: true
    },
    tooltip: {
      valueSuffix: "M"
    }
  },
  // studentenrollees
  "8.1": {
    chart: {
      type: "column"
    },
    yAxis: {
      title: {
        text: "Students"
      },
      tickInterval: 50000
    },
    legend: {
      reversed: true
    },
    tooltip: {
      valueSuffix: "K"
    }
  },
  // destinationofstudents
  "8.2": {
    chart: {
      type: "pie"
    },
    yAxis: {
      title: {
        text: "of Students"
      }
    },
    series: [
      {
        index: 0,
        innerSize: "70%"
      }
    ],
    tooltip: {
      valueSuffix: "%"
    }
  },
  // destinationnsp
  "8.3": {
    chart: {
      type: "bar"
    },
    yAxis: {
      ceiling: 100,
      tickInterval: 10,
      title: { text: "" }
    },
    xAxis: {
      labels: {
        format: "{}"
      }
    },
    legend: {
      reversed: true
    },
    tooltip: {
      headerFormat: "<b>{series.name}</b>",
      valueSuffix: "%"
    }
  },
  // sourceofstudents
  "8.4": {
    chart: {
      type: "pie"
    },
    yAxis: {
      title: {
        text: "of Students"
      }
    },
    tooltip: {
      valueSuffix: "%"
    },
    series: [
      {
        index: 0,
        innerSize: "70%"
      }
    ]
  },
  // shareofinbound
  "8.5": {
    chart: {
      type: "bar"
    },
    yAxis: {
      ceiling: 100,
      tickInterval: 10,
      title: { text: "" }
    },
    xAxis: {
      labels: {
        format: "{}"
      }
    },
    legend: {
      reversed: true
    },
    tooltip: {
      headerFormat: "<b>{series.name}</b>",
      valueSuffix: "%"
    }
  }
};
