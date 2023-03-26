import React, { Component } from 'react'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'

class Layout extends Component {
  render() {
    return (
      <>
        <Header location={location} />
        <main className="main">
          <div className="container">
            <Outlet />
          </div>
        </main>
      </>
    )
  }
}

export default Layout
