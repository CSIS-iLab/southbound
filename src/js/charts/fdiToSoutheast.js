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
    },
    // Tooltip
    tooltip: {
      pointFormatter: function() {
        return `<span style="color:${this.color}">\u25CF </span>
        $${this.y} Billion`
      }
    }
  })
}

export default fdiToSoutheast
