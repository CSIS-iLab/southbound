import React from 'react'
import PageContent from '../helpers/PageContent'
import GetData from '../helpers/GetData'
import CloseMenu from '../helpers/CloseMenu'
import ChartOptions from '../helpers/ChartOptions'
import Highcharts from 'Highcharts'
import InitSheets from '../helpers/InitSheets'
import PageHeader from '../layout/PageHeader'
import ValueToJSX from '../helpers/ValueToJSX'

class Homepage extends React.Component {
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

      const chartIDs = ['5.3', '8.4', '7.4', '5.5']
      chartIDs.forEach(key => {
        const data = sheetData.find(d => d.key === key)

        InitSheets(data, { isDataRepo: false })
      })
    }
  }

  addTableOfContents = () => {
    const headings = Array.from(document.querySelectorAll('h2'))
    headings.push(document.querySelector('#further-reading h4'))

    let counter = 0

    headings.forEach((header, i) => {
      let hash = 'toc-' + counter

      header.id = hash

      counter++
    })
  }

  componentDidMount() {
    document.title = 'The New Southbound Policy | CSIS'
    this.loadCharts()

    this.addTableOfContents()

    const triggers = Array.from(document.querySelectorAll('.detail__trigger'))
    triggers.forEach(trigger => {
      trigger.addEventListener('click', function() {
        let explainers = Array.from(document.querySelectorAll('.sc-explainer'))
        explainers.forEach(explainer => explainer.classList.remove('is-active'))

        if (trigger.classList.contains('is-active')) {
          this.setAttribute('aria-expanded', 'false')
          this.setAttribute('aria-label', 'Show More')
          this.classList.remove('is-active')
        } else {
          this.setAttribute('aria-expanded', 'true')
          this.setAttribute('aria-label', 'Show Less')
          this.classList.add('is-active')
        }
      })
    })
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
      <main className={page} itemscope itemtype="http://schema.org/Article">
        {pageContent
          ? pageContent.map(section => {
            const chart = sheetData.find(d => d.key === section.content.chart)

            return (
              <section key={section.key} id={section.key} className={'row '}>
                {section.title ? <h2>{section.title}</h2> : ''}

                <div className={'subsection ' + section.component}>
                  {Object.entries(section.content).map(value => {
                    return section.key === 'page-header' ? (
                      <PageHeader
                        key={value[1]}
                        source={value[1]}
                        title={this.state.title}
                      />
                    ) : chart && value[0] === 'chart' ? (
                      <figure
                        key="chart"
                        id={value[1]}
                        className="chart chart-figure"
                      >
                        <div className="chart-figure__graph" />
                        <figcaption className="chart-figure__caption">
                          <p className="chart-figure__caption-title">
                            {chart.title}
                          </p>
                          <p>{chart.credits}</p>
                          <a
                            href={`https://csis-prod.s3.amazonaws.com/s3fs-public/publication/180613_Glaser_NewSouthboundPolicy_Web.pdf?AcoayLFliB9_iAvbmYvP_jM27mEXw5xL#${
                              chart.pdf
                            }`}
                            className="icon-report"
                          >
                              Find in Report
                          </a>
                          <a
                            href={`data/id/${value[1]}`}
                            className="icon-graph"
                          >
                              View in Data Repository
                          </a>
                        </figcaption>
                      </figure>
                    ) : (
                      ValueToJSX(value[1], value[0])
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

export default Homepage
