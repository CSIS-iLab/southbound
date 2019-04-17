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
import numberOfTourists from './js/charts/numberOfTourists'
import sourceOfTourists from './js/charts/sourceOfTourists'
import touristsFromNSP from './js/charts/touristsFromNSP'
import touristsToTaiwan from './js/charts/touristsToTaiwan'
import studentEnrollees from './js/charts/studentEnrollees'
import destinationOfStudents from './js/charts/destinationOfStudents'
import destinationNSP from './js/charts/destinationNSP'
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
  exportToChina()
  chinaAndTaiwanExport()
  chinaAndTaiwanOutbound()
  numberOfTourists()
  sourceOfTourists()
  touristsFromNSP()
  touristsToTaiwan()
  studentEnrollees()
  destinationOfStudents()
  destinationNSP()
})
