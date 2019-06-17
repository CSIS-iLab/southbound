import React from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/images/csis_logo-short.svg'

export default class HeaderNav extends React.Component {
  componentDidMount() {
    this.registerListeners()

    if (!document.querySelector('main.homepage')) return

    this.addTableOfContents()
  }

  addTableOfContents = () => {
    const toc_container = Object.assign(document.createElement('ul'), {
      className: 'toc menu-item__toc'
    })

    document
      .querySelector('.site-header__nav-menu .menu-item:first-of-type')
      .append(toc_container)

    const headings = Array.from(document.querySelectorAll('h2'))
    headings.push(document.querySelector('#further-reading h4'))

    let counter = 0
    let toc_items = ''

    headings.forEach((header, i) => {
      const text = header.innerHTML
      let hash = 'toc-' + counter

      header.id = hash

      toc_items += `<li><a href="#${hash}">${text}</a></li>`

      counter++
    })

    toc_container.innerHTML += toc_items
  }

  registerListeners = () => {
    const csisLink = document.querySelector('.link-csis')
    const homeLink = document.querySelector('.link-home')

    const parent = document.querySelector('.site-logo')
    csisLink.addEventListener('mouseover', () => {
      parent.classList.remove('site-logo--home')
      parent.classList.add('site-logo--csis')
    })
    csisLink.addEventListener('mouseout', () => {
      parent.classList.remove('site-logo--csis')
    })
    homeLink.addEventListener('mouseover', () => {
      parent.classList.remove('site-logo--csis')
      parent.classList.add('site-logo--home')
    })
    homeLink.addEventListener('mouseout', () => {
      parent.classList.remove('site-logo--home')
    })
  }

  render() {
    const { siteStructure } = this.props

    const orderedSiteStructure = Object.keys(siteStructure)
      .filter(page => siteStructure[page].menu !== false)
      .sort((a, b) => siteStructure[a].index - siteStructure[b].index)

    return (
      <nav className="site-header__nav" role="navigation">
        <div className="site-logo">
          <a
            href="https://www.csis.org"
            className="link-csis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Logo />
          </a>
          <NavLink className="link-home" to="/" exact>
            <span> The New Southbound Policy</span>
          </NavLink>
        </div>
        <button
          className="site-header__nav-trigger menu-trigger"
          aria-expanded="false"
          aria-label="Toggle Menu"
          data-target=".site-header__nav-menu"
        />
        <ul className="site-header__nav-menu">
          {orderedSiteStructure.map(page => {
            return (
              <li key={page} className="menu-item">
                <NavLink
                  className="menu-item__link"
                  to={siteStructure[page].to}
                  exact
                >
                  {siteStructure[page].title}
                </NavLink>
              </li>
            )
          })}
          <li className="menu-item menu-item--large ">
            <a
              href="https://csis-prod.s3.amazonaws.com/s3fs-public/publication/180613_Glaser_NewSouthboundPolicy_Web.pdf?AcoayLFliB9_iAvbmYvP_jM27mEXw5xL"
              className="download"
            >
              <span className="icon-download">Download the Full Report</span>
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}
