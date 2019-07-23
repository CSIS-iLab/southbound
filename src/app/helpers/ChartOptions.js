export default function(options) {
  const { isDataRepo } = options

  return {
    chart: {
      height:
        isDataRepo && window.innerWidth > 1080 ? 400 : isDataRepo ? 275 : 300,
      styledMode: false
    },
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
        if (yAxis) units = yAxis.title.text.toLowerCase().split(' (')[0]

        if (units === 'us$') units = 'US$'
        if (valueSuffix === '%' && units !== 'change') {
          if (!units) units = 'students' // bar charts

          units = ' of ' + units
        }
        if (units === ' of unemployed') units = ''

        function formatTooltipText(value) {
          return units === 'US$'
            ? `${units}${value}${valueSuffix}`
            : `${valuePrefix || ''}${value}${valueSuffix} ${units}`
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

              return `<p><span style="color:${color}"> \u25CF </span>${name}<br/>&nbsp;&nbsp;&nbsp;${formatTooltipText(
                value
              )}</p>`
            })
            .join('')
        } else {
          // DEFAULT FORMAT
          const value = getReduceSigFigs(this.y, valueSuffix)
          const name = chart.type === 'pie' ? this.name : this.series.name

          return `<p><span style="color:${color}">\u25CF </span>
          ${name}<br/>&nbsp;&nbsp;&nbsp;${formatTooltipText(value)}</p>`
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
          const { valueSuffix } = this.chart.userOptions.tooltip

          const value = getReduceSigFigs(this.value, valueSuffix)

          return `${value}`
        }
      },
      title: {
        margin: 10,
        x: -15
      }
    },
    legend: {
      align: 'center',
      verticalAlign: 'bottom',
      layout: 'horizontal',
      itemStyle: {
        textOverflow: null
      }
    },
    plotOptions: {
      area: {
        marker: {
          enabled: false,
          symbol: 'circle'
        }
      },
      column: {
        stacking: 'normal',
        maxPointWidth: 150
      },
      pie: {
        showInLegend: true,
        size: '100%',
        dataLabels: {
          enabled: false
        }
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
            minWidth: 1080
          },
          chartOptions: {
            chart: {
              height: 500
            },
            legend: {
              align: isDataRepo ? 'left' : 'center'
            },
            plotOptions: {},
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
