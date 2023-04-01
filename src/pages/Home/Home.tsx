import SearchBar from '../../components/SearchBar/SearchBar'
import React from 'react'
import Cards from '../../components/Cards/Cards'

import { data } from '../../data/data'

const Home = () => {
  return (
    <div data-testid="home">
      <SearchBar />
      <Cards cardData={data} />
    </div>
  )
}

export default Home
