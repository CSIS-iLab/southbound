import Highcharts from 'Highcharts'

const fdiToSoutheast = () => {
  Highcharts.chart('fditosoutheast', {
    // Load Data in from Google Sheets
    data: {
      googleSpreadsheetKey: '1LFR3a4zsyvmivWmICgxXR8uqJB_h_AT5dTfkmwb01WM',
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
        'Taiwan’s FDI to Mainland China and to Southeast Asia, 2001-2010 (US$ billions)'
    },
    // subtitle: {
    //   text: 'Optional Subtitle'
    // },
    // Credits
    credits: {
      enabled: true,
      href: 'https://www.dois.moea.gov.tw/Home/relation3',
      text:
        'Source: Department of Investment Service, Ministry of Economic Affairs, ROC (Taiwan)'
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
        $${this.y} Billion`
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

export default fdiToSoutheast
