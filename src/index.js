import chartVessels from './js/charts/chartVessels'
import fdiToAsean from './js/charts/fdiToAsean'
import fdiToSoutheast from './js/charts/fdiToSoutheast'
import perCapitaGrowth from './js/charts/perCapitaGrowth'
import unemployment from './js/charts/unemployment'
import exportToNSP from './js/charts/exportToNSP'
import outboundInvestment from './js/charts/outboundInvestment'
import outboundChina from './js/charts/outboundChina'
import exportToChina from './js/charts/exportToChina'
import chinaAndTaiwanExport from './js/charts/chinaAndTaiwanExport'
import chinaAndTaiwanOutbound from './js/charts/chinaAndTaiwanOutbound'
import theme from './js/theme'

window.addEventListener('DOMContentLoaded', () => {
  Highcharts.setOptions(theme)
  chartVessels()
  fdiToAsean()
  fdiToSoutheast()
  perCapitaGrowth()
  unemployment()
  exportToNSP()
  outboundInvestment()
  outboundChina()
  exportToChina()
  chinaAndTaiwanExport()
  chinaAndTaiwanOutbound()
})
