import chartVessels from './js/charts/chartVessels'
import theme from './js/theme'

window.addEventListener('DOMContentLoaded', () => {
  Highcharts.setOptions(theme)
  chartVessels()
})
