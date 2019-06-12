import React from 'react'
import MarkdownToSections from '../helpers/MarkdownToSections'
import ValueToJSX from '../helpers/ValueToJSX'
import PageContent from '../helpers/PageContent'
import GetData from '../helpers/GetData'
import CloseMenu from '../helpers/CloseMenu'
import InitSheets from '../helpers/InitSheets'
import ChartOptions from '../helpers/ChartOptions'
import Highcharts from 'Highcharts'

class Data extends React.Component {
  constructor(props) {
    super(props)
    const { siteStructure, page } = this.props

    const pageContent = PageContent(siteStructure, page, GetData(page))

    this.state = {
      siteStructure,
      pageContent,
      page,
      title: GetData(page).title
    }
  }

  handleCategoryChange = e => {
    const tag = e.target
    this.setState({ queried: false }, () => {
      this.props.updateCharts('category', tag.name, false)
    })
  }

  handleClear = e => {
    this.props.updateCharts('clear')
  }

  handleSearch = e => {
    this.props.updateCharts('search', e.target.value)
  }

  componentDidMount() {
    document.title = `${this.state.title} | CSIS Careers`
    Highcharts.setOptions(ChartOptions({ isDataRepo: true }))

    const { intialized, queried } = this.state
    const { filteredSheetData, match, updateCharts } = this.props

    if (!intialized && filteredSheetData.length) {
      filteredSheetData.forEach(data => {
        InitSheets(data, { isDataRepo: true })
      })

      this.setState({ intialized: true })
    }
  }

  componentDidUpdate() {
    const { intialized, queried } = this.state
    const { filteredSheetData, match, updateCharts } = this.props

    if (!intialized && filteredSheetData.length) {
      filteredSheetData.forEach(data => {
        InitSheets(data, { isDataRepo: true })
      })

      this.setState({ intialized: true })
    }

    if (!queried && filteredSheetData.length) {
      const { query, value } = match.params
      switch (query) {
      case 'id':
        this.setState({ queried: true })
        updateCharts('id', value)
        return

      case 'category':
        this.setState({ queried: true })
        updateCharts('category', value, true)

        return
      default:
        return
      }
    }
  }

  componentWillUnmount() {
    this.props.updateCharts('clear')
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
    const { filteredSheetData, categories, filteredCategories } = this.props
    const { page, pageContent } = this.state

    const header = pageContent.find(content => content.component === 'header')
    const headerContent = header ? header.content : {}
    const otherContent = pageContent.filter(
      content => content.component !== 'header'
    )

    return (
      <main className={page}>
        <section id="#header">
          <div className="header">
            {Object.keys(headerContent).map(content => {
              return ValueToJSX(
                headerContent[content],
                `header__${content}`,
                content
              )
            })}
          </div>
        </section>
        <div id="listings">
          <section className="listings__filters">
            <div className="listings__filters-search">
              <label htmlFor="chart-search" className="filters-label">
                Filter by keyword
              </label>
              <div className="listings__filters-search-box">
                <input
                  id="chart-search"
                  type="search"
                  placeholder="Search"
                  onChange={this.handleSearch}
                />
              </div>
            </div>

            <div className="listings__filters-category">
              <input type="checkbox" id="filter-trigger" checked />

              <label htmlFor="filter-trigger" className="filters-label">
                Filter by tag
              </label>

              <ul className="listings__filters-category__list">
                {categories.map(category => {
                  return (
                    <li key={category}>
                      <label
                        className={
                          filteredCategories.includes(category) ? 'checked' : ''
                        }
                      >
                        <input
                          type="checkbox"
                          checked={filteredCategories.includes(category)}
                          name={category}
                          onChange={this.handleCategoryChange}
                        />
                        <span className="label">{category}</span>
                      </label>
                    </li>
                  )
                })}
              </ul>
            </div>
          </section>
          <section className="listings__results">
            <ul className="listings__results-list">
              {filteredSheetData ? (
                filteredSheetData.map(data => {
                  return (
                    <li
                      key={data.key}
                      id={data.key}
                      className={`two-column chart ${data.hide ? 'hide' : ''}`}
                      dataset-tags={data.tags}
                    >
                      <section className="text chart-text">
                        <h2 className="chart-text__title">{data.title}</h2>
                        <p className="chart-text__subtitle">{data.subtitle}</p>
                        <ul className="chart-text__tags">
                          {data.tags.map(t => (
                            <li
                              key={t}
                              className={
                                filteredCategories.includes(t)
                                  ? 'checked tag'
                                  : 'tag'
                              }
                            >
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                        <a href={data.pdf} className="icon-search">
                          Find in Report
                        </a>
                      </section>
                      <figure className="chart-figure">
                        <div className="chart-figure_graph" />
                        <figcaption className="chart-figure_caption">
                          <p>CSIS China Power Project</p>
                          <p>{data.credits}</p>
                        </figcaption>
                      </figure>
                    </li>
                  )
                })
              ) : (
                <div className="loader" />
              )}
            </ul>
          </section>
        </div>
        {MarkdownToSections(otherContent)}
      </main>
    )
  }
}

export default Data
