import Highcharts from 'Highcharts'

const touristsFromNSP = sheet => {
  Highcharts.chart('touristsfromNSP', {
    // Load Data in from Google Sheets
    data: {
      googleSpreadsheetKey: sheet,
      googleSpreadsheetWorksheet: 1
    },
    // General Chart Options
    chart: {
      type: 'line'
    },

    title: {
      text:
        'Number of Inbound Tourists From Mainland China and NSP Target Countries, 2008-2017'
    },

    credits: {
      href: 'http://stat.taiwan.net.tw/system/country_months_arrival.html',
      text: 'Source: "Tourism Statistic Database," Tourism Bureau, ROC (Taiwan)'
    },

    // Y Axis
    yAxis: {
      title: {
        text: 'Millions'
      },
      tickInterval: 1000000
    },
    // Tooltip
    tooltip: {
      pointFormatter: function() {
        if (this.y.toString().split('').length === 7) {
          return `<span style="color:${this.color}">\u25CF </span>
               $${this.y
    .toString()
    .substring(0, 1)}.${this.y
  .toString()
  .substring(2, 4)} Million`
        } else {
          return `<span style="color:${this.color}">\u25CF </span>
              $0.${this.y.toString().substring(0, 2)} Million`
        }
      }
    }
  })
}

export default touristsFromNSP
