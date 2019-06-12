import React from 'react'
import PageContent from '../helpers/PageContent'
import GetData from '../helpers/GetData'
import CloseMenu from '../helpers/CloseMenu'
import ChartOptions from '../helpers/ChartOptions'
import Highcharts from 'Highcharts'
import InitSheets from '../helpers/InitSheets'
import ValueToJSX from '../helpers/ValueToJSX'

class Page extends React.Component {
  constructor(props) {
    super(props)
    const { siteStructure, page } = this.props

    const pageContent = PageContent(siteStructure, page, GetData(page))

    this.state = {
      siteStructure,
      page,
      pageContent,
      title: GetData(page).title
    }
  }

  loadCharts = () => {
    const { sheetData } = this.props
    if (sheetData && sheetData.length) {
      Highcharts.setOptions(ChartOptions({ isDataRepo: false }))

      const chartIDs = ['3.1', '5.1', '7.1', '8.1']
      chartIDs.forEach(key => {
        const data = sheetData.find(d => d.key === key)

        InitSheets(data, { isDataRepo: false })
      })
    }
  }

  componentDidMount() {
    document.title = `${this.state.title} | CSIS Careers`
    this.loadCharts()
  }
  componentDidUpdate() {
    this.loadCharts()
  }

  componentWillUnmount() {
    const triggers = Array.from(
      document.querySelectorAll('.menu-trigger.is-active')
    )
    triggers.forEach(trigger => {
      const target = document.querySelector(trigger.dataset.target)
      CloseMenu(trigger, target)
    })

    window.scrollTo({
      top: 0
    })
  }

  render() {
    const { pageContent, page } = this.state
    const { sheetData } = this.props
    return (
      <main className={page}>
        {pageContent
          ? pageContent.map(section => {
            const chart = sheetData.find(d => d.key === section.content.chart)

            return (
              <section
                key={section.key}
                id={section.key}
                className={
                  'row ' +
                    (section.component === 'cantilever'
                      ? section.component
                      : '')
                }
              >
                {section.title ? <h2>{section.title}</h2> : ''}

                <div
                  className={
                    'subsection ' +
                      (section.component !== 'cantilever'
                        ? section.component
                        : '')
                  }
                >
                  {Object.entries(section.content).map(value => {
                    return chart && value[0] === 'chart' ? (
                      <figure
                        key="chart"
                        id={value[1]}
                        className="chart-figure"
                      >
                        <div className="chart-figure_graph" />
                        <figcaption className="chart-figure_caption">
                          <h5>{chart.title}</h5>
                          <p>{chart.credits}</p>
                          <a href={chart.pdf} className="icon-search">
                              Find in Report
                          </a>
                          <a
                            href={`data/id/${section.chart}`}
                            className="icon-search"
                          >
                              View in Data Repository
                          </a>
                        </figcaption>
                      </figure>
                    ) : (
                      ValueToJSX(
                        value[1],
                        `${section.component} ${value[0]}`,
                        value[0]
                      )
                    )
                  })}
                </div>
              </section>
            )
          })
          : ''}
      </main>
    )
  }
}

export default Page
