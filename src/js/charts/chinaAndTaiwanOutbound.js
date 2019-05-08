import Highcharts from 'Highcharts'

const chinaAndTaiwanOutbound = sheet => {
  Highcharts.chart('chinaandtaiwanoutbound', {
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
        'Mainland China and Taiwan’s outbound investment to NSP target countries (US$ billions)'
    },
    // subtitle: {
    //   text: 'Optional Subtitle'
    // },
    // Credits
    credits: {
      href: 'http://www.moeaic.gov.tw/english/news_bsAn.jsp',
      text:
        'Source: "Statistics," Investment Commission, Ministry of Economic Affairs, ROC (Taiwan ); "China Statistical Bulletin of China’s Outward Foreign Direct Investment," Ministry of Commerce, P.R.C.'
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
        $${this.y} Billion`
      }
    },
    // Additional Plot Options
    plotOptions: {
      line: {
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 3
        },
        lineWidth: 3
      }
    }
  })
}

export default chinaAndTaiwanOutbound
