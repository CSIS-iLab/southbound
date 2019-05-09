import Highcharts from 'Highcharts'

const destinationOfStudents = sheet => {
  Highcharts.chart('destinationofstudents', {
    data: {
      googleSpreadsheetKey: sheet,
      googleSpreadsheetWorksheet: 1
    },
    // Chart options
    chart: {
      type: 'pie'
    },

    title: {
      text:
        'Study Abroad Destination of Outbound Students From Taiwan, 2015-2016'
    },
    // Credits
    credits: {
      href:
        'https://depart.moe.edu.tw/ed2500/News_Content.aspx?n=2D25F01E87D6EE17&sms=4061A6357922F45A&s=ECAAD5FFD81C8057',
      text:
        'CSIS China Power Project | Source: Statistical Table on Taiwanese Students Studying Abroad in Major Countries Around the World for 2016, Ministry of Education, ROC (Taiwan), December 22, 2016'
    },

    // Y Axis
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

export default destinationOfStudents
