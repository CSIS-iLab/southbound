import Highcharts from 'Highcharts'

const sourceOfStudents = sheet => {
  Highcharts.chart('sourceofstudents', {
    data: {
      googleSpreadsheetKey: sheet,
      googleSpreadsheetWorksheet: 1
    },
    // Chart options
    chart: {
      type: 'pie'
    },

    title: {
      text: 'Sources of Inbound Students to Taiwan, 2015-2016'
    },
    // Credits
    credits: {
      href: 'https://ois.moe.gov.tw/fs/html/Statistics.html',
      text:
        'CSIS China Power Project | Source: "104大專校院境外學生人數統計" [ 2015 Foreign College and University Students Statistics (104 dazhuan xiaoyuan jingwai xuesheng renshu tongji)], Ministiry of Education, ROC (Taiwan)'
    },

    yAxis: {
      title: {
        text: 'Millions'
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
               ${this.y.toFixed(2)}%`
      }
    },

    series: [
      {
        index: 0,
        innerSize: '70%'
      }
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 600,
            minWidth: 200
          },
          chartOptions: {
            plotOptions: {
              pie: {
                dataLabels: {
                  distance: -20
                }
              }
            }
          }
        }
      ]
    }
  })
}

export default sourceOfStudents
