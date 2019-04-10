import Highcharts from 'Highcharts'

const unemployment = () => {
  Highcharts.chart('unemployment', {
    // Load Data in from Google Sheets
    data: {
      googleSpreadsheetKey: '17ZU0xF_J1KGqliOm4Jzia9hr9idZTgGqfsXwwhcjDQY',
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
      text: 'Overall and youth unemployment rate, 2001-2016'
    },
    // subtitle: {
    //   text: 'Optional Subtitle'
    // },
    // Credits
    credits: {
      enabled: true,
      href: 'http://statdb.dgbas.gov.tw/pxweb/Dialog/CityItemlist_n.asp.',
      text:
        'Source: "National Statistics," Directorate-General of Budget, Accounting and Statistics Executive Yuan, ROC (Taiwan).'
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
    // Y Axis
    yAxis: {
      title: {
        text: 'Percent'
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
        ${this.y} %`
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

export default unemployment
