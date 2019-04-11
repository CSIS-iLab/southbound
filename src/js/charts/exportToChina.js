import Highcharts from 'Highcharts'

const exportToChina = () => {
  Highcharts.chart('exporttochina', {
    // Load Data in from Google Sheets
    data: {
      googleSpreadsheetKey: '1fbPsHRpcD65adBAq-SyOu-0U9CpSl6NYXZwf02DNkHk',
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
        'Taiwan’s exports to Mainland China and NSP target countries (US$ billions)'
    },
    // subtitle: {
    //   text: 'Optional Subtitle'
    // },
    // Credits
    credits: {
      enabled: true,
      href: 'http://cus93.trade.gov.tw/FSCE000F/FSCE000F',
      text:
        'Source: "Trade Statistics," Bureau of Trade, Ministry of Economic Affairs, ROC (Taiwan)'
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
      allowDecimals: false,
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

export default exportToChina
