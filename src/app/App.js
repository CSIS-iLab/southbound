import React, { Component } from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Data from './pages/Data'
import SiteMap from './SiteMap'
import { Route } from 'react-router-dom'
import SmoothScroll from 'smooth-scroll'
import Highcharts from 'Highcharts'
import sheetData from './charts.json'
import { withRouter } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      siteStructure: SiteMap,
      categories: [],
      filteredCategories: [],
      filteredSheetData: [],
      sheetData: []
    }
  }

  updateCharts = (input, value, param) => {
    let filteredSheetData,
      filteredCategories,
      tags,
      queried = true

    switch (input) {
    case 'search':
      filteredSheetData = this.state.sheetData.map(data => {
        data.hide = !Object.values(data).some(d =>
          d
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        )
        return data
      })

      tags = filteredSheetData
        .filter(data => !data.hide)
        .map(data => data.tags)

      if (tags.length < 1) return

      filteredCategories = [...new Set(tags.reduce((a, b) => a.concat(b)))]

      break

    case 'id':
      filteredSheetData = this.state.sheetData.map(data => {
        data.hide = data.key !== value
        return data
      })

      tags = filteredSheetData
        .filter(data => !data.hide)
        .map(data => data.tags)

      if (tags.length < 1) return

      filteredCategories = [...new Set(tags.reduce((a, b) => a.concat(b)))]

      break

    case 'clear':
      filteredCategories = this.state.categories
      filteredSheetData = this.state.sheetData
      queried = false
      break

    case 'category':
      filteredCategories = this.state.filteredCategories

      if (!param) {
        filteredCategories = filteredCategories.includes(value)
          ? filteredCategories.filter(
            cat => cat.toLowerCase() !== value.toLowerCase()
          )
          : [...filteredCategories, value]

        this.props.history.push('/data')
      } else {
        filteredCategories = [value]
      }

      filteredSheetData = this.state.sheetData.map(data => {
        data.hide = !data.tags.some(t => filteredCategories.includes(t))
        return data
      })

      break
    default:
      return
    }

    this.setState({ filteredSheetData, filteredCategories, queried })
  }

  componentDidMount() {
    const categories = [
      ...new Set(sheetData.map(data => data.tags).reduce((a, b) => a.concat(b)))
    ]

    this.setState(
      {
        sheetData,
        categories,
        filteredSheetData: sheetData,
        filteredCategories: categories
      }
      // () => console.log(this.state)
    )

    new SmoothScroll('a[href*="#"]', {
      header: '.site-header',
      speed: 500
    })
  }

  render() {
    const {
      siteStructure,
      sheetData,
      filteredSheetData,
      categories,
      filteredCategories,
      queried
    } = this.state

    return (
      <div className="wrapper">
        <Header siteStructure={siteStructure} />
        <Route
          exact
          path="/"
          render={props => (
            <Homepage
              {...props}
              sheetData={sheetData}
              siteStructure={siteStructure}
              page="homepage"
            />
          )}
        />
        <Route
          exact
          path="/about"
          render={props => (
            <About {...props} siteStructure={siteStructure} page="about" />
          )}
        />
        <Route
          exact
          path="/data/:query?/:value?"
          render={props => (
            <Data
              {...props}
              filteredSheetData={filteredSheetData}
              categories={categories}
              filteredCategories={filteredCategories}
              updateCharts={this.updateCharts}
              queried={queried}
              siteStructure={siteStructure}
              page="data"
            />
          )}
        />
        <Footer siteStructure={siteStructure} />
        <div className="content-overlay" />
      </div>
    )
  }
}

export default withRouter(App)
