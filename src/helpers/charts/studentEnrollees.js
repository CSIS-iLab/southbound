import Highcharts from "Highcharts";

const studentEnrollees = sheet => {
  Highcharts.chart("studentenrollees", {
    // Load Data in from Google Sheets
    data: {
      googleSpreadsheetKey: sheet,
      googleSpreadsheetWorksheet: 1,
      complete: function(data) {
        // Filter out every piece of data that isn't considered a part of Other
        const filteredData = data.series.filter(
          item =>
            item.name !== "Indonesia" &&
            item.name !== "Vietnam" &&
            item.name !== "Mainland China" &&
            item.name !== "Other"
        );

        // Set these series to invisible on the chart so they don't appear
        filteredData.forEach(item => {
          item.showInLegend = false;
          item.visible = false;
        });

        // pass these items into the 'Other' series of data as an object key that we can then access later in the toolbar using 'this'
        data.series.forEach(item => {
          if (item.name === "Other") {
            item.subData = filteredData;
          }
        });
      }
    },
    // General Chart Options
    chart: {
      type: "column"
    },

    // Chart Title and Subtitle
    title: {
      text:
        "Immigrants Student Enrollees In Primary and Secondary Schools by Country of Origin, 2005-2016"
    },
    // Credits
    credits: {
      href:
        "https://depart.moe.edu.tw/ed4500/cp.aspx?n=1B58E0B736635285&s=D04C74553DB60CAD",
      text:
        'CSIS China Power Project | Source: "Statistical Summaries," Ministry of Education, ROC (Taiwan)'
    },

    yAxis: {
      title: {
        text: "Thousands"
      },
      tickInterval: 50000
    },
    // Tooltip
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
  });
};

export default studentEnrollees;