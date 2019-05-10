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
      shared: true,
      pointFormatter: function() {
        const color = this.className || this.series.userOptions.className;

        return `<br/><span class="${color}">\u25CF </span>
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
      tickInterval: 4
    },
    tooltip: {
      shared: true,
      pointFormatter: function() {
        const color = this.className || this.series.userOptions.className;

        return `<br/><span class="${color}">\u25CF </span>
        $${this.y} Billion`;
      }
    }
  },
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
      shared: true,
      pointFormatter: function() {
        const color = this.className || this.series.userOptions.className;

        return `<br/><span class="${color}">\u25CF </span>
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
      shared: true,
      pointFormatter: function() {
        const color = this.className || this.series.userOptions.className;

        return `<br/><span class="${color}">\u25CF </span>
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
      shared: true,
      pointFormatter: function() {
        const color = this.className || this.series.userOptions.className;

        return `<br/><span class="${color}">\u25CF </span>
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
      shared: true,
      pointFormatter: function() {
        const color = this.className || this.series.userOptions.className;

        return `<br/><span class="${color}">\u25CF </span>
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
      }
    },
    tooltip: {
      shared: true,
      pointFormatter: function() {
        const color = this.className || this.series.userOptions.className;

        return `<br/><span class="${color}">\u25CF </span>
        $${this.y} Billion`;
      }
    }
  },
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
      shared: true,
      pointFormatter: function() {
        const color = this.className || this.series.userOptions.className;

        return `<br/><span class="${color}">\u25CF </span>
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
      shared: true,
      pointFormatter: function() {
        const color = this.className || this.series.userOptions.className;

        return `<br/><span class="${color}">\u25CF </span>
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
      shared: true,
      pointFormatter: function() {
        const color = this.className || this.series.userOptions.className;

        return `<br/><span class="${color}">\u25CF </span>
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
      }
    },
    tooltip: {
      shared: true,
      pointFormatter: function() {
        const color = this.className || this.series.userOptions.className;

        return `<br/><span class="${color}">\u25CF </span>
      $${Math.round(this.y / 1000000 * 10) / 10} Million`;
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
      shared: true,
      pointFormatter: function() {
        const color = this.className || this.series.userOptions.className;

        return `<br/><span class="${color}">\u25CF </span>
      $${Math.round(this.y / 1000000 * 10) / 10} Million`;
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
      shared: true,
      pointFormatter: function() {
        const color = this.className || this.series.userOptions.className;

        return `<br/><span class="${color}">\u25CF </span>
      $${Math.round(this.y / 1000000 * 10) / 10} Million`;
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
    legend: {
      reversed: true
    },
    tooltip: {
      pointFormatter: function() {
        if (this.y.toString().split("").length === 7) {
          return `<span class="${
            this.series.userOptions.className
          }">\u25CF </span>
                ${this.series.name}<br>
               $${this.y
                 .toString()
                 .substring(0, 1)}.${this.y
            .toString()
            .substring(2, 4)} Million`;
        } else {
          return `<span class="${
            this.series.userOptions.className
          }">\u25CF </span>
                 ${this.series.name}<br>
              $0.${this.y.toString().substring(0, 2)} Million`;
        }
      }
    }
  },
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
    },
    tooltip: {
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

          return toolbarData
            .map(dataItem => {
              return `<br><span class="${
                this.series.userOptions.className
              }"> \u25CF </span>${dataItem.name}: $${dataItem.data}`;
            })
            .join("");
        } else {
          return `<span class="${
            this.series.userOptions.className
          }">\u25CF </span>
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
        const color = this.className || this.series.userOptions.className;

        return `<span class="${color}">\u25CF </span>
               ${this.y.toFixed(2)}%`;
      }
    },
    series: [
      {
        index: 0,
        innerSize: "70%"
      }
    ]
  },
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
      pointFormatter: function() {
        const color = this.className || this.series.userOptions.className;

        return `<span class="${color}">\u25CF </span>
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
        const color = this.className || this.series.userOptions.className;

        return `<span class="${color}">\u25CF </span>
               ${this.y.toFixed(2)}%`;
      }
    },
    series: [
      {
        index: 0,
        innerSize: "70%"
      }
    ]
  },
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
      pointFormatter: function() {
        const color = this.className || this.series.userOptions.className;

        return `<span class="${color}">\u25CF </span>
                ${this.series.name}<br>
               ${this.y.toFixed(2)}%`;
      }
    }
  }
};
