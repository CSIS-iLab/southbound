import Highcharts from 'Highcharts'

const sourceOfTourists = sheet => {
  Highcharts.chart('sourceoftourists', {
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
      text: 'Top 5 Sources of Inbound Tourists to Taiwan'
    },

    credits: {
      href: 'http://admin.taiwan.net.tw/public/public.aspx?no=315',
      text: 'Source: "Tourism Statistics," Tourism Bureau, ROC (Taiwan)'
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

export default sourceOfTourists
