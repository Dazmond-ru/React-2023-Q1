import Layout from './components/Layout'
import AboutUs from './pages/AboutUs/AboutUs'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import React from 'react'
import { Component } from 'react'
import { Route, Routes } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </>
    )
  }
}

export default App
