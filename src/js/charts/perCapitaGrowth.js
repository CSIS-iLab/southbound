import Highcharts from 'Highcharts'

const perCapitaGrowth = () => {
  Highcharts.chart('percapitagrowth', {
    // Load Data in from Google Sheets
    data: {
      googleSpreadsheetKey: '1ovEaZyhAmti9u9Db1arWwm14mkLxH-fZhO_ccnzMPrs',
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
      text: 'GDP per capita growth of selected countries, 1995-2000'
    },
    // subtitle: {
    //   text: 'Optional Subtitle'
    // },
    // Credits
    credits: {
      enabled: true,
      href: false,
      text: 'Source: GDP per capita growth of selected countries, 1995-2000'
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
      allowDecimals: false,
      offset: -140
    },
    // Y Axis
    yAxis: {
      title: {
        text: ''
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
        ${this.y}`
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

export default perCapitaGrowth
