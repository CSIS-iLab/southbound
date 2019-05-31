import Highcharts from 'Highcharts'

const fdiToAsean = sheet => {
  Highcharts.chart('3.1', {
    // Load Data in from Google Sheets
    data: {
      googleSpreadsheetKey: '1X5WZaBcvkt_2e3L2gYvCjsMjAE2KHtinUK1Yl5jwYpA',
      googleSpreadsheetWorksheet: 1
    },
    // General Chart Options
    chart: {
      type: 'line'
    },

    // Chart Title and Subtitle
    title: {
      text:
        'Taiwan’s FDI to Mainland China and to ASEAN, 1991-2000 (US$ billions)'
    },
    credits: {
      href: 'http://www.aseancenter.org.tw/upload/files/20130111.pdf',
      text:
        'Source: Department of Investment Service, Ministry of Economic Affairs, ROC (Taiwan)'
    },

    // Y Axis
    yAxis: {
      title: {
        text: 'Billions'
      }
    },
    // Tooltip
    tooltip: {
      pointFormatter: function() {
        return `<span style="color:${this.color}">\u25CF </span>
        $${this.y} Billion`
      }
    }
  })
}

export default fdiToAsean
