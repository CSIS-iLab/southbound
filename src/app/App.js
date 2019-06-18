import React, { Component } from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Data from './pages/Data'
import Errorpage from './pages/Errorpage'
import SiteMap from './SiteMap'
import { Route, Switch} from 'react-router-dom'
import SmoothScroll from 'smooth-scroll'
import sheetData from './charts.json'
import { withRouter } from 'react-router-dom'
import scroll from '@threespot/freeze-scroll'
import CloseMenu from './helpers/CloseMenu'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      siteStructure: SiteMap,
      categories: [],
      filteredCategories: [],
      filteredSheetData: [],
      sheetData: [],
      queried: false
    }
  }

  updateCharts = (input, value, param) => {
    let filteredSheetData, filteredCategories, tags, queried

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

      filteredCategories =
          tags.length > 0
            ? [...new Set(tags.reduce((a, b) => a.concat(b)))]
            : []

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

      filteredSheetData =
          filteredCategories.length > 0
            ? filteredSheetData
            : this.state.sheetData.map(d => {
              return { ...d, hide: false }
            })
      break
    default:
      return
    }

    queried = filteredCategories.length !== this.state.categories.length

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
        filteredSheetData: sheetData
      }
      // () => console.log(this.state)
    )

    new SmoothScroll('a[href*="#"]', {
      header: '.site-header',
      speed: 500
    })

    document.addEventListener(
      'scrollStart',
      () => {
        const overlay = document.querySelector('.content-overlay')
        overlay.classList.remove('is-active')
        scroll.unfreeze()
        const trigger = document.querySelector(
          '.site-header__nav-trigger.is-active'
        )
        if (!trigger) return
        const target = document.querySelector('.site-header__nav-menu')
        CloseMenu(trigger, target)
      },
      false
    )
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
        <Switch>
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
          <Route
            render={props => (
              <Errorpage {...props} siteStructure={siteStructure} page="errorpage" />
            )}
          />
        </Switch>
        <Footer siteStructure={siteStructure} />
        <div className="content-overlay" />
      </div>
    )
  }
}

export default withRouter(App)
