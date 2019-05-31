import Highcharts from 'Highcharts'

const numberOfTourists = sheet => {
  Highcharts.chart('numberoftourists', {
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
      text:
        'Number of tourists from Mainland China, Hong Kong and Macau, and Rest of World'
    },
    credits: {
      href: 'http://admin.taiwan.net.tw/public/public.aspx?no=315',
      text: 'Source: "Tourism Statistics", Tourism Bureau, ROC (Taiwan)'
    },

    // Y Axis
    yAxis: {
      title: {
        text: 'Millions'
      },
      allowDecimals: false
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

export default numberOfTourists
