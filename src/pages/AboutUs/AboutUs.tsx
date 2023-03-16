import React, { Component } from 'react'
import styles from './AboutUs.module.scss'

class AboutUs extends Component {
  render() {
    return (
      <main className="main">
        <div className="container">
          <h1 data-testid="about-us">About Us</h1>
        </div>
      </main>
    )
  }
}

export default AboutUs
