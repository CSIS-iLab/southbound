export default function(options) {
  const { isDataRepo } = options;
  const chartWidth = document.querySelector("main").offsetWidth;
  const metaWidth = (chartWidth / 3) * 2;

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
        x: -3
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
    tooltip: {
      useHTML: true,
      headerFormat: "<span>{point.key}</span>",
      pointFormatter: function() {
        const { chart, yAxis } = this.series.chart.userOptions;
        const { className, subData } = this.series.userOptions;

        const color = this.className || className;
        const units = yAxis.title.text
          .replace(/ions/, "ion")
          .replace(/ands/, "and");

        // FORMAT PIE CHART
        if (chart.type === "pie") {
          return `<br><span class="${color}">\u25CF </span>
               ${this.y.toFixed(2)}%`;
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
              const prefix = getPrefix(units);
              const name = dataItem.name;
              const value = getReduceSigFigs(dataItem.data, units);
              const suffix = getSuffix(units);

              return `<br><span class="${className}"> \u25CF </span>${name}: ${getPrefix(
                units
              )}${value}${suffix}`;
            })
            .join("");
        }

        // DEFAULT FORMAT
        const prefix = getPrefix(units);
        const name = this.series.name;
        const value = getReduceSigFigs(this.y, units);
        const suffix = getSuffix(units);

        return `<p><span class="${color}">\u25CF </span>
          ${this.series.name}:<br>  ${prefix}${value}${suffix}</p>`;
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

function getReduceSigFigs(value, units) {
  if (value.toString().length > 4) {
    switch (true) {
      case units.toLowerCase().indexOf("thousand") > -1:
        return Math.round((value / 1000) * 10) / 10;
        break;
      case units.toLowerCase().indexOf("million") > -1:
        return Math.round((value / 1000000) * 10) / 10;
        break;
      case units.toLowerCase().indexOf("billion") > -1:
        return Math.round((value / 1000000000) * 10) / 10;
        break;
      default:
        return value;
    }
  } else if (
    value.toString().length > 3 &&
    units.toLowerCase().indexOf("thousand") > -1
  ) {
    return Math.round((value / 1000) * 10) / 10;
  } else {
    return value;
  }
}
function getPrefix(units) {
  if (units.toLowerCase().indexOf("billion") > -1) {
    return "$";
  } else {
    return "";
  }
}
function getSuffix(units) {
  if (units === "" || units.toLowerCase().indexOf("percent") > -1) {
    return "%";
  } else {
    return " " + units;
  }
}
