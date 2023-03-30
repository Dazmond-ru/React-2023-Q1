import React from 'react'
import Header from './Header/Header'
import { Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
  const location = useLocation()

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

export default Layout
