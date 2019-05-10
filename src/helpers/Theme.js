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
    tooltip: {
      headerFormat: "{point.key}<br/>"
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
