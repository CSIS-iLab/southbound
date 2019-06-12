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

  componentDidMount() {
    document.title = `${this.state.title} | CSIS Careers`
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
            return (
              <section key={section.key} id={section.key} className={'row '}>
                {section.title ? <h2>{section.title}</h2> : ''}

                <div className={'subsection ' + section.component}>
                  {Object.entries(section.content).map(value => {
                    return ValueToJSX(
                      value[1],
                      `${section.component} ${value[0]}`,
                      value[0]
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
