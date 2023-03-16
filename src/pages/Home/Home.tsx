import SearchBar from '../../components/SearchBar/SearchBar'
import React, { Component } from 'react'
import Cards from '../../components/Cards/Cards'

class Home extends Component {
  render() {
    return (
      <main className="main">
        <div className="container">
          <div data-testid="home">
            <SearchBar />
            <Cards />
          </div>
        </div>
      </main>
    )
  }
}

export default Home
