export default {
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
      pointFormatter: function() {
        return `<span style="color:${this.color}">\u25CF </span>
          $${this.y} Billion`;
      }
    }
  },
  "3.2": {
    chart: {
      type: "line"
    },

    yAxis: {
      title: {
        text: "Billions"
      },
      allowDecimals: false,
      tickInterval: 4
    },
    tooltip: {
      pointFormatter: function() {
        return `<span style="color:${this.color}">\u25CF </span>
        $${this.y} Billion`;
      }
    }
  },
  "5.1": {
    chart: {
      type: "line"
    },

    xAxis: {
      offset: -140
    },
    yAxis: {
      title: {
        text: ""
      },
      tickInterval: 4
    },
    tooltip: {
      pointFormatter: function() {
        console.log(this);
        return `<span style="color:${this.color}">\u25CF </span>
        ${this.y} Units`;
      }
    }
  },
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
      pointFormatter: function() {
        return `<span style="color:${this.color}">\u25CF </span>
        ${this.y} %`;
      }
    }
  },
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
      pointFormatter: function() {
        return `<span style="color:${this.color}">\u25CF </span>
        $${this.y} Billion`;
      }
    }
  },
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
      pointFormatter: function() {
        return `<span style="color:${this.color}">\u25CF </span>
        $${this.y.toFixed(2)} Billion`;
      }
    }
  },
  "5.5": {
    chart: {
      type: "line"
    },

    yAxis: {
      title: {
        text: "Billions"
      },
      allowDecimals: false
    },
    tooltip: {
      pointFormatter: function() {
        return `<span style="color:${this.color}">\u25CF </span>
        $${this.y} Billion`;
      }
    }
  },
  "5.6": {
    chart: {
      type: "line"
    },
    legend: {
      align: "center",
      verticalAlign: "bottom",
      layout: "horizontal"
    },

    yAxis: {
      title: {
        text: "Billions"
      },
      tickInterval: 20
    },
    tooltip: {
      pointFormatter: function() {
        return `<span style="color:${this.color}">\u25CF </span>
        $${this.y} Billion`;
      }
    }
  },
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
      pointFormatter: function() {
        return `<span style="color:${this.color}">\u25CF </span>
        $${this.y} Billion`;
      }
    }
  },
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
      pointFormatter: function() {
        return `<span style="color:${this.color}">\u25CF </span>
        $${this.y} Billion`;
      }
    }
  },
  "7.1": {
    chart: {
      type: "line"
    },
    yAxis: {
      title: {
        text: "Millions"
      },
      allowDecimals: false
    },
    tooltip: {
      pointFormatter: function() {
        if (this.y.toString().split("").length === 7) {
          return `<span style="color:${this.color}">\u25CF </span>
               $${this.y
                 .toString()
                 .substring(0, 1)}.${this.y
            .toString()
            .substring(2, 4)} Million`;
        } else {
          return `<span style="color:${this.color}">\u25CF </span>
              $0.${this.y.toString().substring(0, 2)} Million`;
        }
      }
    }
  },
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
      pointFormatter: function() {
        if (this.y.toString().split("").length === 7) {
          return `<span style="color:${this.color}">\u25CF </span>
               $${this.y
                 .toString()
                 .substring(0, 1)}.${this.y
            .toString()
            .substring(2, 4)} Million`;
        } else {
          return `<span style="color:${this.color}">\u25CF </span>
              $0.${this.y.toString().substring(0, 2)} Million`;
        }
      }
    }
  },
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
      pointFormatter: function() {
        if (this.y.toString().split("").length === 7) {
          return `<span style="color:${this.color}">\u25CF </span>
               $${this.y
                 .toString()
                 .substring(0, 1)}.${this.y
            .toString()
            .substring(2, 4)} Million`;
        } else {
          return `<span style="color:${this.color}">\u25CF </span>
              $0.${this.y.toString().substring(0, 2)} Million`;
        }
      }
    }
  },
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
    tooltip: {
      pointFormatter: function() {
        if (this.y.toString().split("").length === 7) {
          return `<span style="color:${this.color}">\u25CF </span>
                ${this.series.name}<br>
               $${this.y
                 .toString()
                 .substring(0, 1)}.${this.y
            .toString()
            .substring(2, 4)} Million`;
        } else {
          return `<span style="color:${this.color}">\u25CF </span>
                 ${this.series.name}<br>
              $0.${this.y.toString().substring(0, 2)} Million`;
        }
      }
    }
  },
  "8.1": {
    data: {
      complete: function(data) {
        // // Filter out every piece of data that isn't considered a part of Other
        // const filteredData = data.series.filter(
        //   item =>
        //     item.name !== "Indonesia" &&
        //     item.name !== "Vietnam" &&
        //     item.name !== "Mainland China" &&
        //     item.name !== "Other"
        // );
        //
        // // Set these series to invisible on the chart so they don't appear
        // filteredData.forEach(item => {
        //   item.showInLegend = false;
        //   item.visible = false;
        // });
        //
        // // pass these items into the 'Other' series of data as an object key that we can then access later in the toolbar using 'this'
        // data.series.forEach(item => {
        //   if (item.name === "Other") {
        //     item.subData = filteredData;
        //   }
        // });
      }
    },
    chart: {
      type: "column"
    },

    yAxis: {
      title: {
        text: "Thousands"
      },
      tickInterval: 50000
    },
    tooltip: {
      headerFormat:
        "<span style=\"font-size: 13px;text-align:center;margin-bottom: 5px;font-weight: bold;font-family: 'Roboto', arial, sans-serif;\">{point.key}</span><br/>",

      pointFormatter: function() {
        const dataSet = this.series;
        let toolbarData = [];

        if (dataSet.name === "Other") {
          dataSet.userOptions.subData.forEach(DataItem => {
            for (let i = 0; i < DataItem.data.length; i++) {
              if (DataItem.data[i][0] === this.category) {
                const dataForYear = {
                  name: DataItem.name,
                  data: DataItem.data[i][1]
                };
                toolbarData.push(dataForYear);
              }
            }
          });

          const toolbarFormat = `${toolbarData.map(dataItem => {
            return `<br><span style="color:${this.color}"> \u25CF </span>${
              dataItem.name
            }: $${dataItem.data}`;
          })}`;
          return toolbarFormat;
        } else {
          return `<span style="color:${this.color}">\u25CF </span>
                  ${this.series.name}<br>
                 $${this.y.toString()}`;
        }
      }
    }
  },
  "8.2": {
    chart: {
      type: "pie"
    },
    yAxis: {
      title: {
        text: "Millions"
      }
    },
    tooltip: {
      pointFormatter: function() {
        return `<span style="color:${this.color}">\u25CF </span>
               ${this.y.toFixed(2)}%`;
      }
    },

    series: [
      {
        index: 0,
        innerSize: "70%"
      }
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 600,
            minWidth: 200
          },
          chartOptions: {
            plotOptions: {
              pie: {
                dataLabels: {
                  distance: -20
                }
              }
            }
          }
        }
      ]
    }
  },
  "8.3": {
    chart: {
      type: "bar"
    },
    yAxis: {
      title: "",
      ceiling: 100,
      tickInterval: 10,
      labels: {
        format: "{value}%"
      }
    },
    tooltip: {
      pointFormatter: function() {
        return `<span style="color:${this.color}">\u25CF </span>
                ${this.series.name}<br>
               ${this.y.toFixed(2)}%`;
      }
    }
  },
  "8.4": {
    chart: {
      type: "pie"
    },
    yAxis: {
      title: {
        text: "Millions"
      }
    },
    tooltip: {
      pointFormatter: function() {
        return `<span style="color:${this.color}">\u25CF </span>
               ${this.y.toFixed(2)}%`;
      }
    },
    series: [
      {
        index: 0,
        innerSize: "70%"
      }
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 600,
            minWidth: 200
          },
          chartOptions: {
            plotOptions: {
              pie: {
                dataLabels: {
                  distance: -20
                }
              }
            }
          }
        }
      ]
    }
  },
  "8.5": {
    chart: {
      type: "bar"
    },

    yAxis: {
      title: "",
      ceiling: 100,
      tickInterval: 10,
      labels: {
        format: "{value}%"
      }
    },
    tooltip: {
      pointFormatter: function() {
        return `<span style="color:${this.color}">\u25CF </span>
                ${this.series.name}<br>
               ${this.y.toFixed(2)}%`;
      }
    }
  }
};
