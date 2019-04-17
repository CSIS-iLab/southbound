import Highcharts from 'Highcharts'

const sourceOfTourists = () => {
  Highcharts.chart('sourceoftourists', {
    // Load Data in from Google Sheets
    data: {
      googleSpreadsheetKey: '1WfXB70z4dY5auKx8gXKofAZnqJfaEfw9sDut_-YPDU0',
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
      text: 'Top 5 Sources of Inbound Tourists to Taiwan'
    },
    // subtitle: {
    //   text: 'Optional Subtitle'
    // },
    // Credits
    credits: {
      enabled: true,
      href: 'http://admin.taiwan.net.tw/public/public.aspx?no=315',
      text: 'Source: "Tourism Statistics," Tourism Bureau, ROC (Taiwan)'
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
        text: 'Millions'
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

export default sourceOfTourists
