import Highcharts from 'Highcharts'

const outboundChina = () => {
  Highcharts.chart('outboundchina', {
    // Load Data in from Google Sheets
    data: {
      googleSpreadsheetKey: '1Wn-eSJJ_Tj03S6juKDIN8ShEhTlvfsIn43KDs03K3Pk',
      googleSpreadsheetWorksheet: 1
    },
    // General Chart Options
    chart: {
      type: 'line'
    },
    // Colors
    // colors: Highcharts.getOptions().colors,
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
      enabled: true,
      href: 'http://www.moeaic.gov.tw/english/news_bsAn.jsp',
      text:
        'Source: "Statistics," Investment Commission, Ministry of Economic Affairs, ROC. (Taiwan)'
    },
    // Chart Legend
    legend: {
      //   title: {
      //     text:
      //       'Legend Title<br/><span style="font-size: 12px; color: #808080; font-weight: normal">(Click to hide)</span>'
      //   },
      align: 'center',
      verticalAlign: 'bottom',
      layout: 'horizontal'
    },
    // X Axis
    xAxis: {
      allowDecimals: false
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

export default outboundChina
