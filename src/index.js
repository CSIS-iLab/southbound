import chartVessels from './js/charts/chartVessels'
import fdiToAsean from './js/charts/fdiToAsean'
import fdiToSoutheast from './js/charts/fdiToSoutheast'
import perCapitaGrowth from './js/charts/perCapitaGrowth'
import theme from './js/theme'

window.addEventListener('DOMContentLoaded', () => {
  console.log(theme)
  Highcharts.theme = theme
  Highcharts.setOptions(Highcharts.theme)
  chartVessels()
  fdiToAsean()
  fdiToSoutheast()
  perCapitaGrowth()
})
