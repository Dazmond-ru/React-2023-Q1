import SearchBar from '../../components/SearchBar/SearchBar'
import React, { Component } from 'react'
import Cards from '../../components/Cards/Cards'

class Home extends Component {
  render() {
    return (
      <main className="main">
        <div className="container">
          <SearchBar />
          <Cards />
        </div>
      </main>
    )
  }
}

export default Home
