import React from 'react'
import scroll from '@threespot/freeze-scroll'
import HeaderScroll from '../helpers/HeaderScroll'
import CloseMenu from '../helpers/CloseMenu'
import Download from '../components/Download'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/images/csis_logo-short.svg'

export default class Header extends React.Component {
  componentDidMount() {
    this.registerListeners()

    this.addTableOfContents()
    const overlay = document.querySelector('.content-overlay')
    const triggers = Array.from(document.querySelectorAll('.menu-trigger'))

    window.addEventListener('scroll', HeaderScroll)

    triggers.forEach(trigger => {
      const target = document.querySelector(trigger.dataset.target)

      trigger.addEventListener('click', function() {
        if (target.classList.contains('is-active')) {
          CloseMenu(trigger, target)
        } else {
          target.classList.add('is-active')
          this.setAttribute('aria-expanded', 'true')
          this.classList.add('is-active')

          overlay.classList.add('is-active')
          scroll.freeze()
        }
      })

      overlay.addEventListener('click', function() {
        CloseMenu(trigger, target)
      })
    })
  }

  addTableOfContents = () => {
    const toc_container = Object.assign(document.createElement('ul'), {
      className: 'toc menu-item__toc'
    })

    document
      .querySelector('.site-header__nav-menu .menu-item:first-of-type')
      .appendChild(toc_container)

    const headings = [
      'The NSP’s Four Pillars',
      'Flagship Projects and Innovative Fields',
      'Further Reading'
    ]

    let counter = 0
    let toc_items = ''

    headings.forEach((heading, i) => {
      let hash = 'toc-' + counter

      toc_items += `<li><a href="/#${hash}">${heading}</a></li>`

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
      <header className="site-header">
        <nav className="site-header__nav" role="navigation">
          <div className="site-logo">
            <a
              href="https://www.csis.org"
              className="link-csis"
              title="Go to CSIS.org"
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
                <li key={page} className={'menu-item '}>
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
              <Download
                content={
                  <span className="icon-download">
                    Download the Full Report
                  </span>
                }
              />
            </li>
          </ul>
        </nav>{' '}
      </header>
    )
  }
}
