import React from 'react'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  )
}

export default Layout
