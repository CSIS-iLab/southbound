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
import sourceOfStudents from './js/charts/sourceOfStudents'
import shareOfInbound from './js/charts/shareOfInbound'
import theme from './js/theme'
import sheet from './js/sheet'
import './scss/main.scss'

window.addEventListener('DOMContentLoaded', () => {
  Highcharts.setOptions(theme)
  fdiToAsean(sheet)
  fdiToSoutheast(sheet)
  perCapitaGrowth(sheet)
  unemployment(sheet)
  exportToNSP(sheet)
  outboundInvestment(sheet)
  outboundChina(sheet)
  exportToChina(sheet)
  chinaAndTaiwanExport(sheet)
  chinaAndTaiwanOutbound(sheet)
  numberOfTourists(sheet)
  sourceOfTourists(sheet)
  touristsFromNSP(sheet)
  touristsToTaiwan(sheet)
  studentEnrollees(sheet)
  destinationOfStudents(sheet)
  destinationNSP(sheet)
  sourceOfStudents(sheet)
  shareOfInbound(sheet)
})
