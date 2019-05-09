export default function(options) {
  const { isDataRepo } = options;
  const chartWidth = document.querySelector("main").offsetWidth;
  const metaWidth = (chartWidth / 3) * 2;

  return {
    colors: [
      "#ed392a",
      "#58a897",
      "#83badc",
      "#3b75bb",
      "#a483a8",
      "#f7890e",
      "#69518d",
      "#f7d768",
      "#8cb561",
      "#ef9a9a",
      "#728c99"
    ],
    chart: {
      backgroundColor: "#FFF",
      border: "none",
      color: "#000",
      plotShadow: false,
      height: 500,
      width: chartWidth,
      marginLeft: isDataRepo ? chartWidth / 2 : null,
      events: {
        load: function() {
          if (isDataRepo) {
            const type = this.options.chart.type;
            const titleHeight = this.title.getBBox().height;
            this.update({
              subtitle: { y: titleHeight }
            });

            if (type !== "pie") {
              let checkLoad = setInterval(() => {
                const legendWidth = this.legend.legendWidth;

                if (this.legend.display && legendWidth > 10) {
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
    title: {
      align: isDataRepo ? "left" : "center",
      floating: isDataRepo ? true : false,
      widthAdjust: isDataRepo ? metaWidth * -1 : null,
      style: {
        color: "#000",
        font: '25px "Roboto", Arial, sans-serif',
        fontWeight: "400"
      }
    },
    subtitle: {
      align: isDataRepo ? "left" : "center",
      floating: isDataRepo ? true : false,
      enabled: isDataRepo ? true : false,
      widthAdjust: isDataRepo ? metaWidth * -1 : null,
      style: {
        fontSize: "12px",
        fontFamily: "'Hind', 'Arial', sans-serif",
        color: "#808080"
      },
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    credits: {
      style: {
        cursor: "default",
        fontFamily: "'Hind', 'Arial', sans-serif"
      }
    },
    tooltip: {
      style: {
        fontSize: "13px",
        fontFamily: "'Hind', 'Arial', sans-serif"
      },
      headerFormat:
        "<span style=\"font-size: 13px;text-align:center;margin-bottom: 5px;font-weight: bold;font-family: 'Roboto', arial, sans-serif;\">{point.key}</span><br/>"
    },
    xAxis: {
      allowDecimals: false,
      labels: {
        style: {
          color: "#666",
          fontSize: "12px",
          fontFamily: "'Hind', 'Arial', sans-serif"
        }
      },
      title: {
        style: {
          color: "#666",
          fontSize: "13px",
          fontFamily: "'Hind', 'Arial', sans-serif"
        }
      },
      gridLineWidth: 1,
      lineWidth: 0,
      tickColor: "#e6e6e6"
    },
    yAxis: {
      allowDecimals: false,
      labels: {
        style: {
          color: "#666",
          fontSize: "12px",
          fontFamily: "'Hind', 'Arial', sans-serif"
        },
        x: -3
      },
      title: {
        style: {
          color: "#666",
          fontSize: "13px",
          fontFamily: "'Hind', 'Arial', sans-serif"
        },
        margin: 20
      },
      tickColor: "#e6e6e6"
    },
    legend: {
      align: "left",
      verticalAlign: "bottom",
      layout: "horizontal",
      title: {
        style: {
          fontFamily: "'Roboto', 'Arial', sans-serif",
          fontSize: "15px",
          color: "#000",
          fontStyle: "normal"
        }
      },
      itemStyle: {
        color: "#000",
        fontSize: "14px",
        fontFamily: "'Hind', 'Arial', sans-serif",
        textOverflow: null
      },
      itemHoverStyle: {
        color: "#ed392a"
      }
    },
    plotOptions: {
      column: {
        stacking: "normal", // Normal bar graph
        // stacking: "normal", // Stacked bar graph
        dataLabels: {
          enabled: false
        },
        maxPointWidth: 150
      },
      pie: {
        dataLabels: {
          enabled: true,
          distance: 25,
          style: {
            fontWeight: "bold"
          }
        },
        startAngle: 0,
        endAngle: 360,
        center: ["50%", "45%"],
        size: "90%"
      },
      bar: {
        stacking: "normal", // Normal bar graph
        // stacking: "normal", // Stacked bar graph
        dataLabels: {
          enabled: false
        },
        maxPointWidth: 125
      },
      line: {
        marker: {
          enabled: false,
          symbol: "circle",
          radius: 3
        },
        lineWidth: 3
      }
    }
  };
}
