export const ChartColors = [
  '#85d8e2',
  '#39a4a3',
  '#f0d02e',
  '#f69500',
  '#e8737b',
  '#d63426',
  '#647f96',
  '#394863',
  '#8bb860'
]

export default function(options) {
  const { isDataRepo } = options

  return {
    chart: {
      height:
        isDataRepo && window.innerWidth > 1080 ? 400 : isDataRepo ? 275 : 300,
      styledMode: false
    },
    colors: ChartColors,
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    tooltip: {
      useHTML: true,
      valuePrefix: '',
      headerFormat: '<span>{point.key}</span>',
      pointFormatter: function() {
        const { chart, yAxis, tooltip } = this.series.chart.userOptions
        const { valueSuffix, valuePrefix } = tooltip
        const { subData } =
          chart.type === 'pie' ? this : this.series.userOptions

        const color = this.color

        let units
        if (yAxis) units = yAxis.title.text.toLowerCase()
        if (units === 'usd') units = 'USD'
        if (valueSuffix === '%' && units !== 'change') {
          if (!units) units = 'Students' // bar charts

          units = ' of ' + units
        }

        if (subData && subData.length) {
          // FORMAT AGGREGATED POINTS
          let toolbarData = subData.map(s => {
            return {
              name: s.name,
              data: chart.type === 'pie' ? s.y : s.data[this.index][1]
            }
          })

          return toolbarData
            .map(dataItem => {
              const value = getReduceSigFigs(dataItem.data, valueSuffix)
              const name = dataItem.name

              return `<p><span style="color:${color}"> \u25CF </span>${name}<br/>&nbsp;&nbsp;&nbsp;${valuePrefix ||
                ''}${value}${valueSuffix} ${units}</p>`
            })
            .join('')
        } else {
          // DEFAULT FORMAT
          const value = getReduceSigFigs(this.y, valueSuffix)
          const name = chart.type === 'pie' ? this.name : this.series.name

          return `<p><span style="color:${color}">\u25CF </span>
          ${name}<br/>&nbsp;&nbsp;&nbsp;${valuePrefix ||
            ''}${value}${valueSuffix} ${units}</p>`
        }
      }
    },
    credits: {
      href: false,
      position: { align: 'center' },
      text: ''
    },
    xAxis: {
      allowDecimals: false
    },
    yAxis: {
      allowDecimals: false,
      labels: {
        x: -3,
        formatter: function() {
          const { valuePrefix, valueSuffix } = this.chart.userOptions.tooltip

          const value = getReduceSigFigs(this.value, valueSuffix)

          return `${valuePrefix || ''}${value}${valueSuffix}`
        }
      },
      title: {
        margin: 10,
        x: -15
      }
    },
    legend: {
      align: 'left',
      verticalAlign: 'bottom',
      layout: 'horizontal',
      itemStyle: {
        textOverflow: null
      }
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        maxPointWidth: 150
      },
      pie: {
        colors: ChartColors,
        dataLabels: {
          crop: false,
          overflow: 'allow'
        },
        size: '90%'
      },
      bar: {
        stacking: 'normal',
        maxPointWidth: 150
      },
      line: {
        marker: {
          enabled: false,
          symbol: 'circle'
        }
      }
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 480
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
        },
        {
          condition: {
            minWidth: 1080
          },
          chartOptions: {
            chart: {
              height: 500
            },
            legend: {
              align: isDataRepo ? 'left' : 'center'
            },
            plotOptions: {
              pie: {
                dataLabels: {
                  distance: 50
                }
              }
            },
            credits: {
              position: { align: isDataRepo ? 'right' : 'center' }
            }
          }
        }
      ]
    }
  }
}

function getReduceSigFigs(value, suffix) {
  if (value >= 1000000000) {
    return Math.round((value / 1000000000) * 10) / 10
  } else if (value >= 1000000 && value < 1000000000) {
    switch (suffix) {
    case 'M':
      return Math.round((value / 1000000) * 10) / 10

    case 'B':
      return Math.round((value / 1000000000) * 10) / 10

    default:
      return value
    }
  } else if (value < 1000000) {
    switch (suffix) {
    case 'M':
      return Math.round((value / 1000000) * 10) / 10

    case 'K':
      return Math.round((value / 1000) * 10) / 10

    default:
      return value
    }
  } else {
    return value
  }
}
