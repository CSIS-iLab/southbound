import Highcharts from 'Highcharts'

const touristsToTaiwan = () => {
  Highcharts.chart('touriststotaiwan', {
    // Load Data in from Google Sheets
    data: {
      googleSpreadsheetKey: '1gyZUwXeD3rE7BxADY71fHPsbbWyV4sb9fVRZsh6PYyE',
      googleSpreadsheetWorksheet: 1
    },
    // General Chart Options
    chart: {
      type: 'column'
    },
    // Colors
    // colors: Highcharts.getOptions().colors,
    // Chart Title and Subtitle
    title: {
      text: 'Main Sources of Tourists to Taiwan, 2017 and 2018 (Millions)'
    },
    // Credits
    credits: {
      enabled: true,
      href: 'http://stat.taiwan.net.tw/system/country_months_arrival.html',
      text:
        'CSIS China Power Project | Source: "Tourism Statistic Database," Tourism Bureau, ROC (Taiwan)'
    },
    // Chart Legend
    legend: {
      align: 'center',
      verticalAlign: 'bottom',
      layout: 'horizontal',
      reversed: true
    },
    xAxis: {},
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
               $${this.y.toString().substring(0, 1)}.${this.y.toString().substring(2, 4)} Million`
        } else {
          return `<span style="color:${this.color}">\u25CF </span>
              $0.${this.y.toString().substring(0, 2)} Million`
        }
      }
    },
    // Additional Plot Options
    plotOptions: {
      column: {
        stacking: 'normal', // Normal bar graph
        // stacking: "normal", // Stacked bar graph
        dataLabels: {
          enabled: false
        },
        maxPointWidth: 150
      }
    }
  })
}

export default touristsToTaiwan
