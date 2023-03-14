import React, { Component } from 'react'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'

class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <Outlet />
      </>
    )
  }
}

export default Layout
