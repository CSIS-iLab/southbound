import React from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/images/csis_logo-short.svg'

export default function HeaderNav(obj) {
  const { siteStructure } = obj

  const orderedSiteStructure = Object.keys(siteStructure)
    .filter(page => siteStructure[page].menu !== false)
    .sort((a, b) => siteStructure[a].index - siteStructure[b].index)

  return (
    <nav className="site-header__nav" role="navigation">
      <button className="site-logo">
        <NavLink to="/" exact>
          <Logo />
          <span> The New Southbound Policy</span>
        </NavLink>
      </button>
      <button
        className="site-header__nav-trigger menu-trigger"
        aria-expanded="false"
        aria-label="Toggle Menu"
        data-target=".site-header__nav-menu"
      >
        <span className="line" />
        <span className="line" />
        <span className="line" />
        <span className="visually-hidden">Menu</span>
      </button>
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
      </ul>
    </nav>
  )
}
