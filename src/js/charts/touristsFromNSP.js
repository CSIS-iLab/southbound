import Highcharts from 'Highcharts'

const touristsFromNSP = () => {
  Highcharts.chart('touristsfromNSP', {
    // Load Data in from Google Sheets
    data: {
      googleSpreadsheetKey: '1wVff6GqMUWUpSVh9nQmHFWlyKpluukKjHBEJBmoZHzo',
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
        'Number of Inbound Tourists From Mainland China and NSP Target Countries, 2008-2017'
    },
    // subtitle: {
    //   text: 'Optional Subtitle'
    // },
    // Credits
    credits: {
      enabled: true,
      href: 'http://stat.taiwan.net.tw/system/country_months_arrival.html',
      text: 'Source: "Tourism Statistic Database," Tourism Bureau, ROC (Taiwan)'
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
    // X Axis
    xAxis: {
      allowDecimals: false
    },
    // Y Axis
    yAxis: {
      title: {
        text: 'Billions'
      },
      allowDecimals: false,
      tickInterval: 1000000
      // labels: {
      //   format: "${value}"
      // }
    },
    // Tooltip
    tooltip: {
      headerFormat:
        '<span style="font-size: 13px;text-align:center;margin-bottom: 5px;font-weight: bold;font-family: \'Roboto\', arial, sans-serif;">{point.key}</span><br/>',
      pointFormatter: function() {
        if (this.y.toString().split('').length >= 7) {
          return `<span style="color:${this.color}">\u25CF </span>
             $${this.y.toString().substring(0, 3)} Million`
        } else {
          return `<span style="color:${this.color}">\u25CF </span>
            $${this.y.toString().substring(0, 3)} Thousand`
        }
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

export default touristsFromNSP
