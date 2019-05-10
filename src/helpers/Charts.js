export default {
  // fditoasean
  "3.1": {
    chart: {
      type: "line"
    },
    yAxis: {
      title: {
        text: "Billions"
      }
    },
    tooltip: {
      shared: true
    }
  },
  // fditosoutheast
  "3.2": {
    chart: {
      type: "line"
    },
    yAxis: {
      title: {
        text: "Billions"
      },
      tickInterval: 4
    },
    tooltip: {
      shared: true
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
        text: "Units"
      },
      tickInterval: 4,
      max: 12,
      min: -12
    },
    tooltip: {
      shared: true
    }
  },
  // unemployment
  "5.2": {
    chart: {
      type: "line"
    },
    yAxis: {
      title: {
        text: "Percent"
      }
    },
    tooltip: {
      shared: true
    }
  },
  // exporttonsp
  "5.3": {
    chart: {
      type: "line"
    },
    yAxis: {
      title: {
        text: "Billions"
      },
      tickInterval: 20
    },
    tooltip: {
      shared: true
    }
  },
  // outboundinvestment
  "5.4": {
    chart: {
      type: "line"
    },
    yAxis: {
      title: {
        text: "Billions"
      }
    },
    tooltip: {
      shared: true
    }
  },
  // outboundchina
  "5.5": {
    chart: {
      type: "line"
    },
    yAxis: {
      title: {
        text: "Billions"
      }
    },
    tooltip: {
      shared: true
    }
  },
  // exporttochina
  "5.6": {
    chart: {
      type: "line"
    },
    yAxis: {
      title: {
        text: "Billions"
      },
      tickInterval: 20
    },
    tooltip: {
      shared: true
    }
  },
  // chinaandtaiwanexport
  "5.7": {
    chart: {
      type: "line"
    },
    yAxis: {
      title: {
        text: "Billions"
      },
      tickInterval: 100
    },
    tooltip: {
      shared: true
    }
  },
  // chinaandtaiwanoutbound
  "5.8": {
    chart: {
      type: "line"
    },
    yAxis: {
      title: {
        text: "Billions"
      }
    },
    tooltip: {
      shared: true
    }
  },
  // numberoftourists
  "7.1": {
    chart: {
      type: "line"
    },
    yAxis: {
      title: {
        text: "Millions"
      }
    },
    tooltip: {
      shared: true
    }
  },
  // sourceoftourists
  "7.2": {
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
      shared: true
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
      shared: true
    }
  },
  // touriststotaiwan
  "7.4": {
    chart: {
      type: "column"
    },
    yAxis: {
      title: {
        text: "Millions"
      },
      tickInterval: 2000000
    },
    legend: {
      reversed: true
    }
  },
  // studentenrollees
  "8.1": {
    chart: {
      type: "column"
    },
    yAxis: {
      title: {
        text: "Thousands"
      },
      tickInterval: 50000
    },
    legend: {
      reversed: true
    }
  },
  // destinationofstudents
  "8.2": {
    chart: {
      type: "pie"
    },
    yAxis: {
      title: {
        text: "Millions"
      }
    },
    series: [
      {
        index: 0,
        innerSize: "70%"
      }
    ]
  },
  // destinationnsp
  "8.3": {
    chart: {
      type: "bar"
    },
    yAxis: {
      ceiling: 100,
      tickInterval: 10,
      title: { text: "" },
      labels: {
        format: "{value}%"
      }
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
      headerFormat: ""
    }
  },
  // sourceofstudents
  "8.4": {
    chart: {
      type: "pie"
    },
    yAxis: {
      title: {
        text: "Millions"
      }
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
      title: { text: "" },
      labels: {
        format: "{value}%"
      }
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
      headerFormat: ""
    }
  }
};
