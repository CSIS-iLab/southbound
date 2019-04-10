import chartVessels from './js/charts/chartVessels'
import fdiToAsean from './js/charts/fdiToAsean'
import fdiToSoutheast from './js/charts/fdiToSoutheast'
import perCapitaGrowth from './js/charts/perCapitaGrowth'
import theme from './js/theme'

window.addEventListener('DOMContentLoaded', () => {
  Highcharts.setOptions(theme)
  chartVessels()
  fdiToAsean()
  fdiToSoutheast()
  perCapitaGrowth()
})
