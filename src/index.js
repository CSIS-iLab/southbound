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
  Highcharts.setOptions(theme({ isDataRepo: false }))

  fdiToAsean(sheet)
  fdiToSoutheast(sheet)
  perCapitaGrowth(sheet)
  Highcharts.setOptions(theme({ isDataRepo: true }))
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

window.addEventListener('resize', () => {
  const highcharts = Array.from(document.querySelectorAll('article'))
  highcharts.forEach(hC => {
    const index = hC.dataset.highchartsChart
    const chart = Highcharts.charts[index]

    const chartWidth = document.querySelector('article').offsetWidth
    const metaWidth = (chartWidth / 3) * 2

    const newSize = {
      chart: { width: chartWidth, marginLeft: chartWidth / 2 },
      title: { widthAdjust: metaWidth * -1 },
      subtitle: { widthAdjust: metaWidth * -1 }
    }

    chart.update(newSize)

    const titleHeight = chart.title.getBBox().height
    const legendWidth = chart.legend.legendWidth

    const newPos = {
      subtitle: { y: titleHeight },
      legend: { x: chartWidth * 0.75 - legendWidth / 2 }
    }

    chart.update(newPos)
  })
})
