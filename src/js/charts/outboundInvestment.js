import Highcharts from 'Highcharts'

const outboundInvestment = sheet => {
  Highcharts.chart('outboundinvestment', {
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
        'Taiwan’s outbound investment in NSP target countries, 2000-2016 (US$ billions)'
    },
    // subtitle: {
    //   text: 'Optional Subtitle'
    // },
    // Credits
    credits: {
      href: 'http://www.moeaic.gov.tw/english/news_bsAn.jsp.',
      text:
        'Source: "Statistics," Investment Commission, Ministry of Economic Affairs, ROC (Taiwan)'
    },

    // Y Axis
    yAxis: {
      title: {
        text: 'Billions'
      }
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
        $${this.y.toFixed(2)} Billion`
      }
    }
  })
}

export default outboundInvestment
