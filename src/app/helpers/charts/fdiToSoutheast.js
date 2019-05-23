import Highcharts from "Highcharts";

const fdiToSoutheast = (sheet, data) => {
  console.log(data);
  Highcharts.chart("3.2", {
    // Load Data in from Google Sheets
    data: {
      rows: data.rows
    },
    // General Chart Options
    chart: {
      type: "line"
    },
    title: {
      text: data.title[0]
    },
    subTitle: {
      text: data.subtitle[0]
    },
    credits: {
      text: data.credits[0]
    },

    // Y Axis
    yAxis: {
      title: {
        text: "Billions"
      },
      allowDecimals: false,
      tickInterval: 4
    },
    // Tooltip
    tooltip: {
      pointFormatter: function() {
        return `<span style="color:${this.color}">\u25CF </span>
        $${this.y} Billion`;
      }
    }
  });
};

export default fdiToSoutheast;
