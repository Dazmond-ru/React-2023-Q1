import SearchBar from '../../components/SearchBar/SearchBar'
import React, { Component } from 'react'
import styles from './Home.module.scss'

class Home extends Component {
  render() {
    return (
      <main className="main">
        <div className="container">
          <SearchBar />
        </div>
      </main>
    )
  }
}

export default Home
