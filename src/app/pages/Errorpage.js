import React from 'react'
import PageContent from '../helpers/PageContent'
import GetData from '../helpers/GetData'
import CloseMenu from '../helpers/CloseMenu'
import ValueToJSX from '../helpers/ValueToJSX'
import PageHeader from '../layout/PageHeader'

class Errorpage extends React.Component {
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
    document.title = `${this.state.title} | CSIS`
  }

  render() {
    const { siteStructure } = this.state
    console.log(siteStructure)
    return (
      <main>
        <h1>This is the 404 page!!!</h1>
      </main>
    )
  }
}

export default Errorpage
