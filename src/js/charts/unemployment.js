import Highcharts from 'Highcharts'

const unemployment = sheet => {
  Highcharts.chart('unemployment', {
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
      text: 'Overall and youth unemployment rate, 2001-2016'
    },

    credits: {
      href: 'http://statdb.dgbas.gov.tw/pxweb/Dialog/CityItemlist_n.asp',
      text:
        'Source: "National Statistics," Directorate-General of Budget, Accounting and Statistics Executive Yuan, ROC (Taiwan).'
    },

    // Y Axis
    yAxis: {
      title: {
        text: 'Percent'
      }
    },

    // Tooltip
    tooltip: {
      pointFormatter: function() {
        return `<span style="color:${this.color}">\u25CF </span>
        ${this.y} %`
      }
    }
  })
}

export default unemployment
