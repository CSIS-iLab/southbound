import Highcharts from 'Highcharts'

const destinationNSP = sheet => {
  Highcharts.chart('destinationnsp', {
    // Load Data in from Google Sheets
    data: {
      googleSpreadsheetKey: sheet,
      googleSpreadsheetWorksheet: 1
    },
    // General Chart Options
    chart: {
      type: 'bar'
    },

    // Chart Title and Subtitle
    title: {
      text:
        'NSP study abroad destination for outbound students from Taiwan, 2015-2016'
    },
    // Credits
    credits: {
      href:
        'https://depart.moe.edu.tw/ed2500/News_Content.aspx?n=2D25F01E87D6EE17&sms=4061A6357922F45A&s=ECAAD5FFD81C8057',
      text:
        'CSIS China Power Project | Source: "105年度世界各主要國家之我國留學生人數統計表" [Statistical Table on Taiwanese Students Studying Abroad in Major Countries Around the World for 2016 (105 niandu shijie gezhuyao guojia zhi woguo liuxuesheng renshu tongjibiao)], Ministry of Education, ROC (Taiwan), December 22, 2016'
    },

    // Y Axis
    yAxis: {
      title: '',
      ceiling: 100,
      tickInterval: 10,
      labels: {
        format: '{value}%'
      }
    },
    // Tooltip
    tooltip: {
      headerFormat:
        '<span style="font-size: 13px;text-align:center;margin-bottom: 5px;font-weight: bold;font-family: \'Roboto\', arial, sans-serif;">{point.key}</span><br/>',
      pointFormatter: function() {
        return `<span style="color:${this.color}">\u25CF </span>
                ${this.series.name}<br>
               ${this.y.toFixed(2)}%`
      }
    },
    // Additional Plot Options
    plotOptions: {
      series: {
        stacking: 'normal', // Normal bar graph
        // stacking: "normal", // Stacked bar graph
        dataLabels: {
          enabled: false
        },
        maxPointWidth: 125
      }
    }
  })
}

export default destinationNSP
