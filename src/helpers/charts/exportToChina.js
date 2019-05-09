import Highcharts from 'Highcharts'

const exportToChina = sheet => {
  Highcharts.chart('exporttochina', {
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
        'Taiwan’s exports to Mainland China and NSP target countries (US$ billions)'
    },

    credits: {
      href: 'http://cus93.trade.gov.tw/FSCE000F/FSCE000F',
      text:
        'Source: "Trade Statistics," Bureau of Trade, Ministry of Economic Affairs, ROC (Taiwan)'
    },
    legend: {
      align: 'center',
      verticalAlign: 'bottom',
      layout: 'horizontal'
    },

    // Y Axis
    yAxis: {
      title: {
        text: 'Billions'
      },
      tickInterval: 20
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

export default exportToChina
