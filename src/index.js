import chartVessels from './js/charts/chartVessels'
import taiwanFdis from './js/charts/taiwanFdis'
import theme from './js/theme'

window.addEventListener('DOMContentLoaded', () => {
  Highcharts.setOptions(theme)
  chartVessels()
  taiwanFdis()
})
