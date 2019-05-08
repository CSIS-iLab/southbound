import Highcharts from 'Highcharts'

const perCapitaGrowth = sheet => {
  Highcharts.chart('percapitagrowth', {
    // Load Data in from Google Sheets
    data: {
      googleSpreadsheetKey: sheet,
      googleSpreadsheetWorksheet: 1
    },
    // General Chart Options
    chart: {
      type: 'line'
    },
    // Chart Title and Subtitle
    title: {
      text: 'GDP per capita growth of selected countries, 1995-2000'
    },

    // Credits
    credits: {
      href: false,
      text: 'Source: GDP per capita growth of selected countries, 1995-2000'
    },

    // X Axis
    xAxis: {
      offset: -140
    },
    // Y Axis
    yAxis: {
      title: {
        text: ''
      },
      tickInterval: 4
      // labels: {
      //   format: "${value}"
      // }
    },
    // Tooltip
    tooltip: {
      headerFormat:
        '<span style="font-size: 13px;text-align:center;margin-bottom: 5px;font-weight: bold;font-family: \'Roboto\', arial, sans-serif;">{point.key}</span><br/>',
      pointFormatter: function() {
        console.log(this)
        return `<span style="color:${this.color}">\u25CF </span>
        ${this.y} Units`
      }
    }
    // Additional Plot Options
  })
}

export default perCapitaGrowth
