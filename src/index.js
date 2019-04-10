import chartVessels from './js/charts/chartVessels'
import fdiToAsean from './js/charts/fdiToAsean'
import fdiToSoutheast from './js/charts/fdiToSoutheast'
import perCapitaGrowth from './js/charts/perCapitaGrowth'
import unemployment from './js/charts/unemployment'
import exportToNSP from './js/charts/exportToNSP'
import outboundInvestment from './js/charts/outboundInvestment'
import outboundChina from './js/charts/outboundChina'
import theme from './js/theme'

window.addEventListener('DOMContentLoaded', () => {
  console.log(theme)
  Highcharts.theme = theme
  Highcharts.setOptions(Highcharts.theme)
  chartVessels()
  fdiToAsean()
  fdiToSoutheast()
  perCapitaGrowth()
  unemployment()
  exportToNSP()
  outboundInvestment()
  outboundChina()
})
