import SearchBar from '../../components/SearchBar/SearchBar'
import React, { Component } from 'react'
import Cards from '../../components/Cards/Cards'

class Home extends Component {
  render() {
    return (
      <div data-testid="home">
        <SearchBar />
        <Cards />
      </div>
    )
  }
}

export default Home
