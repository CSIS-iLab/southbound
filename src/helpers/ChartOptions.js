export default function(options) {
  const { isDataRepo } = options;
  const chartWidth = document.querySelector("main").offsetWidth;
  const metaWidth = chartWidth / 3 * 2;

  return {
    chart: {
      height: window.innerWidth > 1080 ? 500 : 750,
      styledMode: true,
      events: {
        load: function() {
          if (isDataRepo && window.innerWidth > 1080) {
            const type = this.options.chart.type;
            const titleHeight = this.title.getBBox().height + 24;
            this.update({
              subtitle: { y: titleHeight }
            });

            if (type !== "pie" && this.legend) {
              let checkLoad = setInterval(() => {
                const legendWidth = this.legend
                  ? this.legend.legendWidth
                  : null;

                if (this.legend && this.legend.display && legendWidth > 10) {
                  this.update({
                    legend: { x: chartWidth * 0.75 - legendWidth / 2 },
                    subtitle: { y: titleHeight }
                  });
                  clearInterval(checkLoad);
                }
              }, 1000);
            }
          }
        }
      }
    },
    tooltip: {
      useHTML: true,
      valuePrefix: "",
      headerFormat: "<span>{point.key}</span>",
      pointFormatter: function() {
        const { chart, yAxis, tooltip } = this.series.chart.userOptions;
        const { valueSuffix, valuePrefix } = tooltip;
        const { className, subData } = this.series.userOptions;

        const color = this.className || className;

        let units = yAxis.title.text.toLowerCase();
        units = units === "usd" ? "USD" : units;

        // FORMAT PIE CHART
        if (chart.type === "pie") {
          return `<br><span class="${color}">\u25CF </span>
        ${this.y.toFixed(1)}${tooltip.valueSuffix} ${units}`;
        }

        // FORMAT BAR CHART
        if (chart.type === "bar") {
          units = "of Students";

          return `<br><span class="${color}">\u25CF </span>
        ${this.y.toFixed(1)}${tooltip.valueSuffix} ${units}`;
        }

        // FORMAT AGGREGATED POINTS
        if (this.series.name === "Other" && subData.length) {
          let toolbarData = [];
          subData.forEach(DataItem => {
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
              const name = dataItem.name;
              const value = getReduceSigFigs(dataItem.data, valueSuffix);

              return `<p><span class="${className}"> \u25CF </span>${name}<br>&nbsp;&nbsp;&nbsp;${valuePrefix ||
                ""}${value}${valueSuffix} ${units}</p>`;
            })
            .join("");
        }

        // DEFAULT FORMAT
        const name = this.series.name;
        const value = getReduceSigFigs(this.y, valueSuffix);

        return `<p><span class="${color}">\u25CF </span>
          ${this.series.name}<br>&nbsp;&nbsp;&nbsp;${valuePrefix ||
          ""}${value}${valueSuffix} ${units}</p>`;
      }
    },
    credits: {
      href: false,
      position: { align: "center" }
    },
    xAxis: {
      allowDecimals: false
    },
    yAxis: {
      allowDecimals: false,
      labels: {
        x: -3,
        formatter: function() {
          const { valuePrefix, valueSuffix } = this.chart.userOptions.tooltip;

          const value = getReduceSigFigs(this.value, valueSuffix);

          return `${valuePrefix || ""}${value}${valueSuffix}`;
        }
      },
      title: {
        margin: 20
      }
    },
    legend: {
      verticalAlign: "bottom",
      layout: "horizontal",
      itemStyle: {
        textOverflow: null
      }
    },
    plotOptions: {
      column: {
        stacking: "normal",
        maxPointWidth: 150
      },
      pie: {
        dataLabels: {
          distance: 25,
          crop: false,
          overflow: "allow"
        },
        size: "90%"
      },
      bar: {
        stacking: "normal",
        maxPointWidth: 150
      },
      line: {
        marker: {
          enabled: false,
          symbol: "circle"
        }
      }
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 1080
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
        },
        {
          condition: {
            minWidth: 1080
          },
          chartOptions: {
            chart: {
              height: 500,
              width: isDataRepo ? chartWidth : null,
              marginLeft: isDataRepo ? chartWidth / 2 : null
            },
            title: {
              align: isDataRepo ? "left" : "center",
              floating: isDataRepo ? true : false,
              widthAdjust: isDataRepo ? metaWidth * -1 : null
            },
            subtitle: {
              align: isDataRepo ? "left" : "center",
              floating: isDataRepo ? true : false,
              widthAdjust: isDataRepo ? metaWidth * -1 : null
            },
            legend: {
              align: isDataRepo ? "left" : "center"
            },
            credits: {
              position: { align: isDataRepo ? "right" : "center" }
            }
          }
        }
      ]
    }
  };
}

function getReduceSigFigs(value, suffix) {
  if (value >= 1000000000) {
    return Math.round(value / 1000000000 * 10) / 10;
  } else if (value >= 1000000 && value < 1000000000) {
    switch (suffix) {
      case "M":
        return Math.round(value / 1000000 * 10) / 10;
        break;
      case "B":
        return Math.round(value / 1000000000 * 10) / 10;
        break;
      default:
        return value;
    }
  } else if (value < 1000000) {
    switch (suffix) {
      case "M":
        return Math.round(value / 1000000 * 10) / 10;
        break;
      case "K":
        return Math.round(value / 1000 * 10) / 10;
        break;
      default:
        return value;
    }
  } else {
    return value;
  }
}
