import chartVessels from './js/charts/chartVessels'
import fdiToAsean from './js/charts/fdiToAsean'
import theme from './js/theme'

window.addEventListener('DOMContentLoaded', () => {
  console.log(theme)
  Highcharts.theme = theme
  Highcharts.setOptions(Highcharts.theme)
  chartVessels()
  fdiToAsean()
})
