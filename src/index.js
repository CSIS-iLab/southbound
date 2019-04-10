import chartVessels from './js/charts/chartVessels'
import fdiToChina from './js/charts/fdiToChina'
import theme from './js/theme'

window.addEventListener('DOMContentLoaded', () => {
  Highcharts.setOptions(theme)
  chartVessels()
  fdiToChina()
})
