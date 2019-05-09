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
    },
    // Tooltip
    tooltip: {
      pointFormatter: function() {
        console.log(this)
        return `<span style="color:${this.color}">\u25CF </span>
        ${this.y} Units`
      }
    }
  })
}

export default perCapitaGrowth
