import Highcharts from 'Highcharts'

const outboundChina = sheet => {
  Highcharts.chart('outboundchina', {
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
        'Taiwan’s outbound investment to Mainland China and NSP target countries (US$ billions), 2000-2016'
    },
    // subtitle: {
    //   text: 'Optional Subtitle'
    // },
    // Credits
    credits: {
      href: 'http://www.moeaic.gov.tw/english/news_bsAn.jsp',
      text:
        'Source: "Statistics," Investment Commission, Ministry of Economic Affairs, ROC. (Taiwan)'
    },

    // Y Axis
    yAxis: {
      title: {
        text: 'Billions'
      },
      allowDecimals: false
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

export default outboundChina
