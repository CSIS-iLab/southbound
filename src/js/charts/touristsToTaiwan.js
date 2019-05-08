import Highcharts from 'Highcharts'

const touristsToTaiwan = sheet => {
  Highcharts.chart('touriststotaiwan', {
    // Load Data in from Google Sheets
    data: {
      googleSpreadsheetKey: sheet,
      googleSpreadsheetWorksheet: 1
    },
    // General Chart Options
    chart: {
      type: 'column'
    },

    title: {
      text: 'Main Sources of Tourists to Taiwan, 2017 and 2018 (Millions)'
    },
    // Credits
    credits: {
      href: 'http://stat.taiwan.net.tw/system/country_months_arrival.html',
      text:
        'CSIS China Power Project | Source: "Tourism Statistic Database," Tourism Bureau, ROC (Taiwan)'
    },

    // Y Axis
    yAxis: {
      title: {
        text: 'Millions'
      },
      tickInterval: 2000000
      // labels: {
      //   format: "${value}"
      // }
    },
    // Tooltip
    tooltip: {
      headerFormat:
        '<span style="font-size: 13px;text-align:center;margin-bottom: 5px;font-weight: bold;font-family: \'Roboto\', arial, sans-serif;">{point.key}</span><br/>',
      pointFormatter: function() {
        if (this.y.toString().split('').length === 7) {
          return `<span style="color:${this.color}">\u25CF </span>
                ${this.series.name}<br>
               $${this.y
                 .toString()
                 .substring(0, 1)}.${this.y.toString().substring(2, 4)} Million`
        } else {
          return `<span style="color:${this.color}">\u25CF </span>
                 ${this.series.name}<br>
              $0.${this.y.toString().substring(0, 2)} Million`
        }
      }
    }
  })
}

export default touristsToTaiwan
