import Layout from './components/Layout'
import AboutUs from './pages/AboutUs/AboutUs'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import React from 'react'
import { Component } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Route>
        </Routes>
      </>
    )
  }
}

export default App
