import { HeaderProps } from 'interfaces/interfaces'
import React, { Component } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styles from './Header.module.scss'

function withLocation<T>(Component: React.ComponentType<T>) {
  function ComponentWithLocation(props: T) {
    const location = useLocation()
    return <Component location={location} {...props} />
  }
  return ComponentWithLocation
}

const isClassActive = ({ isActive }: { isActive: boolean }) => (isActive ? 'active' : undefined)

class Header extends Component<HeaderProps> {
  getPageTitle() {
    const { location } = this.props
    if (location.pathname === '/') return 'Home'
    else if (location.pathname === '/about-us' || location.pathname === '/about-us/') return 'About Us'
    else if (location.pathname === '/forms' || location.pathname === '/forms/') return 'Forms'
    return 'Not Found'
  }

  render() {
    return (
      <header className={styles.header}>
        <div className={['container', styles.header__container].join(' ')}>
          <h3 className={styles.header__title}>{this.getPageTitle()}</h3>
          <nav className={styles.header__nav}>
            <ul>
              <li>
                <NavLink to="/" className={isClassActive}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about-us" className={isClassActive}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/forms" className={isClassActive}>
                  Forms
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default withLocation(Header)
