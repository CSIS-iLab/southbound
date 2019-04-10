import Highcharts from 'Highcharts'

const fdiToAsean = () => {
  Highcharts.chart('taiwanfdi', {
    // Load Data in from Google Sheets
    data: {
      googleSpreadsheetKey: '1uvXxceRgz3RZtn51krgVjCg_v2CDjInOsfCbSd6BlMM',
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
        'Taiwan’s FDI to Mainland China and to ASEAN, 1991-2000 (US$ billions)'
    },
    // subtitle: {
    //   text: 'Optional Subtitle'
    // },
    // Credits
    credits: {
      enabled: true,
      href: false,
      text:
        'Department of Investment Service, Ministry of Economic Affairs, ROC (Taiwan), http://www.aseancenter.org.tw/upload/files/20130111.pdf.'
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
        text: 'Y Axis Title'
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

export default fdiToAsean
