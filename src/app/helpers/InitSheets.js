import Highcharts from 'Highcharts'
import Charts from './Charts'
import { ChartColors } from './ChartOptions'

export default function InitSheets(data, location) {
  let chart = Charts[data.key]

  chart.data = {
    ...chart.data,
    csv: data.rows.map(r => r.join(',')).join('\n'),
    complete: d => {
      const { type } = chart.chart
      let series = type === 'pie' ? d.series[0].data : d.series

      if (type === 'pie') {
        series = series.map((s, i) => {
          return {
            name: s[0],
            y: s[1]
          }
        })
      }

      if (chart.aggregate) {
        let otherSeries = {}
        let excluded = []
        let aggregateData

        series.forEach(s => {
          const name = s.name.toLowerCase().replace(/ /g, '-')
          s.className = `color-${name}`

          if (
            chart.aggregate.includes(s.name) ||
            s.name.toLowerCase().includes('other')
          ) {
            s.showInLegend = false
            s.visible = false
            excluded.push(s)
          }
        })

        series = series.filter(
          s =>
            !chart.aggregate.includes(s.name) &&
            !s.name.toLowerCase().includes('other')
        )

        if (excluded.length) {
          if (type === 'pie') {
            aggregateData = excluded.map(e => e.y).reduce((a, b) => a + b)
            otherSeries.y = aggregateData
          } else {
            let xAxis = Array.from(
              new Set(
                excluded
                  .map(e => e.data)
                  .reduce((a, b) => a.concat(b))
                  .map(e => e[0])
              )
            )

            let excludedData = excluded.map(e => e.data)

            aggregateData = xAxis.map((x, i) => {
              let total = excludedData.map(y => y[i]).reduce((a, b) => {
                let sum = (a[1] ? a[1] : a) + (b[1] ? b[1] : b)
                return sum
              })
              return total[1] ? total : [x, total]
            })
          }
          otherSeries.data = aggregateData

          otherSeries.name = 'Other'
          otherSeries.subData = excluded

          series = [otherSeries, ...series]
        }
      }

      series.forEach((s, i) => {
        s.color =
          Charts[data.key].legend && Charts[data.key].legend.reversed
            ? ChartColors[series.length - 1 - i]
            : ChartColors[i]
      })

      if (type === 'pie') {
        d.series[0].data = series
      } else {
        d.series = series
      }
    }
  }

  const container = document.getElementById(`${data.key}`)
  const figure = container.querySelector('.chart-figure__graph')
  if (figure) Highcharts.chart(figure, chart)
}
