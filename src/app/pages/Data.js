import React from 'react'
import MarkdownToSections from '../helpers/MarkdownToSections'
import PageContent from '../helpers/PageContent'
import GetData from '../helpers/GetData'
import CloseMenu from '../helpers/CloseMenu'
import InitSheets from '../helpers/InitSheets'
import ChartOptions from '../helpers/ChartOptions'
import PageHeader from '../layout/PageHeader'
import Highcharts from 'Highcharts'

class Data extends React.Component {
  constructor(props) {
    super(props)
    const { siteStructure, page } = this.props

    const pageContent = PageContent(siteStructure, page, GetData(page))

    this.state = {
      searchTerm: '',
      siteStructure,
      pageContent,
      page,
      title: GetData(page).title
    }
  }

  handleCategoryChange = e => {
    const tag = e.target
    this.setState({ param: false, searchTerm: '' }, () => {
      this.props.updateCharts('category', tag.name, false)
    })
  }

  handleClear = e => {
    this.props.updateCharts('clear')
  }

  handleSearch = e => {
    this.setState({ searchTerm: e.target.value })
    this.props.updateCharts('search', e.target.value)
  }

  noResults = () => {
    return (
      <div className="no-results">
        <h4>No entries found.</h4>
        <p>Try checking your search term for typos or toggle different tags.</p>
        <button
          onClick={this.handleClear}
          className="no-results__clear clear-all"
        >
          Clear all filters
        </button>
      </div>
    )
  }

  componentDidMount() {
    document.title = `${this.state.title} | CSIS`
    Highcharts.setOptions(ChartOptions({ isDataRepo: true }))

    const { intialized } = this.state
    const { filteredSheetData } = this.props

    if (!intialized && filteredSheetData.length) {
      filteredSheetData.forEach(data => {
        InitSheets(data, { isDataRepo: true })
      })

      this.setState({ intialized: true })
    }

    const search = document.querySelector('input[type="search"]')

    search.addEventListener('focus', event => {
      window.scrollTo({
        top: search.getBoundingClientRect().top,
        behavior: 'smooth'
      })
    })
  }

  componentDidUpdate() {
    const { intialized, param } = this.state
    const { filteredSheetData, match, updateCharts } = this.props

    if (!intialized && filteredSheetData.length) {
      filteredSheetData.forEach(data => {
        InitSheets(data, { isDataRepo: true })
      })

      this.setState({ intialized: true })
    }

    if (!param && filteredSheetData.length) {
      const { query, value } = match.params
      switch (query) {
      case 'id':
        this.setState({ param: true })
        updateCharts('id', value)
        return

      case 'category':
        this.setState({ param: true })
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

    this.setState({ param: false, searchTerm: '' })
  }
  render() {
    const {
      filteredSheetData,
      categories,
      filteredCategories,
      queried
    } = this.props

    const { page, pageContent, searchTerm } = this.state

    const header = pageContent.find(
      content => content.component === 'page-header'
    )
    const headerContent = header ? header.content : {}
    const otherContent = pageContent.filter(
      content => content.component !== 'page-header'
    )

    let chartCount

    if (filteredSheetData.length)
      chartCount = filteredSheetData.filter(c => !c.hide).length

    return (
      <main className={page}>
        <section id="page-header">
          <div className="page-header">
            <PageHeader source={headerContent.text} title={this.state.title} />
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
                  placeholder="Search the visualizations"
                  onChange={this.handleSearch}
                  value={searchTerm}
                />
              </div>
            </div>

            <div className="listings__filters-category">
              <input type="checkbox" id="filter-trigger" defaultChecked />

              <label htmlFor="filter-trigger" className="filters-label">
                Filter by tag
              </label>

              <ul className="listings__filters-category__list">
                {categories.map(category => {
                  const checked = filteredCategories.includes(category)

                  return (
                    <li key={category}>
                      <label className={queried && checked ? 'checked' : ''}>
                        <input
                          type="checkbox"
                          checked={checked}
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
          <section
            className={`listings__results ${
              !chartCount ? 'listings__results--empty' : ''
            }`}
          >
            {this.noResults()}
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
                        <a
                          href={`https://csis-prod.s3.amazonaws.com/s3fs-public/publication/180613_Glaser_NewSouthboundPolicy_Web.pdf#${
                            data.pdf
                          }?AcoayLFliB9_iAvbmYvP_jM27mEXw5xL`}
                          className="icon-report"
                        >
                          Find in Report
                        </a>
                      </section>
                      <figure className="chart-figure">
                        <div className="chart-figure__graph" />
                        <figcaption className="chart-figure__caption">
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
