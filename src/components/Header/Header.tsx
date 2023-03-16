import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div className="container">
          <nav className={styles.header__nav}>
            <ul>
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about-us/" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                  About Us
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header
