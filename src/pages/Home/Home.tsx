import SearchBar from '../../components/SearchBar/SearchBar'
import React, { Component } from 'react'
import Cards from '../../components/Cards/Cards'

import { data } from '../../data/data'

class Home extends Component {
  render() {
    return (
      <div data-testid="home">
        <SearchBar />
        <Cards cardData={data} />
      </div>
    )
  }
}

export default Home
