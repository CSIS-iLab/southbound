import Highcharts from 'Highcharts'

const fdiToSoutheast = sheet => {
  Highcharts.chart('fditosoutheast', {
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
        'Taiwan’s FDI to Mainland China and to Southeast Asia, 2001-2010 (US$ billions)'
    },
    // subtitle: {
    //   text: 'Optional Subtitle'
    // },
    // Credits
    credits: {
      href: 'https://www.dois.moea.gov.tw/Home/relation3',
      text:
        'Source: Department of Investment Service, Ministry of Economic Affairs, ROC (Taiwan)'
    },

    // Y Axis
    yAxis: {
      title: {
        text: 'Billions'
      },
      allowDecimals: false,
      tickInterval: 4
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

export default fdiToSoutheast
