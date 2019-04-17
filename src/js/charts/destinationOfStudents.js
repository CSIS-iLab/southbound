import Highcharts from 'Highcharts'

const destinationOfStudents = () => {
  Highcharts.chart('destinationofstudents', {
    data: {
      googleSpreadsheetKey: '1XhbQqVqJFWpPmhRwwm28tiv8u--IgBVNsuMRrcPUjuE',
      googleSpreadsheetWorksheet: 1
    },
    // Chart options
    chart: {
      type: 'pie'
    },
    // Colors
    // colors: Highcharts.getOptions().colors,
    // Chart Title and Subtitle
    title: {
      text:
        'Study Abroad Destination of Outbound Students From Taiwan, 2015-2016'
    },
    // Credits
    credits: {
      enabled: true,
      href:
        'https://depart.moe.edu.tw/ed2500/News_Content.aspx?n=2D25F01E87D6EE17&sms=4061A6357922F45A&s=ECAAD5FFD81C8057',
      text:
        'CSIS China Power Project | Source: Statistical Table on Taiwanese Students Studying Abroad in Major Countries Around the World for 2016, Ministry of Education, ROC (Taiwan), December 22, 2016'
    },
    // Chart Legend
    legend: {
      align: 'right',
      verticalAlign: 'bottom',
      layout: 'vertical'
    },
    xAxis: {},
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
      headerFormat:
        '<span style="font-size: 13px;text-align:center;margin-bottom: 5px;font-weight: bold;font-family: \'Roboto\', arial, sans-serif;">{point.key}</span><br/>',
      pointFormatter: function() {
        return `<span style="color:${this.color}">\u25CF </span>
               ${this.y.toFixed(2)}%`
      }
    },
    // Additional Plot Options
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: 25,
          style: {
            fontWeight: 'bold'
          }
        },
        startAngle: 0,
        endAngle: 360,
        center: ['50%', '45%'],
        size: '90%'
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
