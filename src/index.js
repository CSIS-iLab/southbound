import chartVessels from './js/charts/chartVessels'
import fdiToAsean from './js/charts/fdiToAsean'
import theme from './js/theme'

window.addEventListener('DOMContentLoaded', () => {
  Highcharts.setOptions(theme)
  chartVessels()
  fdiToAsean()
})
