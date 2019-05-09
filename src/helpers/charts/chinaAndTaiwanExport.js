import Highcharts from 'Highcharts'

const chinaAndTaiwanExport = sheet => {
  Highcharts.chart('chinaandtaiwanexport', {
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
        'Mainland China and Taiwan’s exports to NSP target countries (US$ billions)'
    },

    credits: {
      href: 'http://cus93.trade.gov.tw/FSCE000F/FSCE000F',
      text:
        'Source: "Trade Statistics," Bureau of Trade, Ministry of Economic Affairs, ROC (Taiwan);  "National Data," National Bureau of Statistics, P.R.C.; "Customs Statistics," General Administration of Customs, P.R.C.'
    },

    // Y Axis
    yAxis: {
      title: {
        text: 'Billions'
      },
      tickInterval: 100
      // labels: {
      //   format: "${value}"
      // }
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

export default chinaAndTaiwanExport
