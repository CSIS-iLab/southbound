import Highcharts from 'Highcharts'

const exportToNSP = sheet => {
  Highcharts.chart('exporttonsp', {
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
      text: 'Taiwan’s exports to NSP target countries, 2000-2016 (US$ billions)'
    },
    // subtitle: {
    //   text: 'Optional Subtitle'
    // },
    // Credits
    credits: {
      href: 'http://cus93.trade.gov.tw/FSCE000F/FSCE000F',
      text:
        'Source: "Trade Statistics," Bureau of Trade, Ministry of Economic Affairs, ROC (Taiwan)'
    },

    // Y Axis
    yAxis: {
      title: {
        text: 'Billions'
      },
      tickInterval: 20
      // labels: {
      //   format: "${value}"
      // }
    },
    // Tooltip
    tooltip: {
      headerFormat:
        '<span style="font-size: 13px;text-align:center;margin-bottom: 5px;font-weight: bold;font-family: \'Roboto\', arial, sans-serif;">{point.key}</span><br/>',
      pointFormatter: function() {
        return `<span style="color:${this.color}">\u25CF </span>
        $${this.y} Billion`
      }
    }
  })
}

export default exportToNSP
