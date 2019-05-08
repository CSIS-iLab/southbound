import Highcharts from 'Highcharts'

const fdiToAsean = sheet => {
  Highcharts.chart('fditoasean', {
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
        'Taiwan’s FDI to Mainland China and to ASEAN, 1991-2000 (US$ billions)'
    },
    // subtitle: {
    //   text: 'Optional Subtitle'
    // },
    // Credits
    credits: {
      href: 'http://www.aseancenter.org.tw/upload/files/20130111.pdf',
      text:
        'Source: Department of Investment Service, Ministry of Economic Affairs, ROC (Taiwan)'
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
    }
  })
}

export default fdiToAsean
