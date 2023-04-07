import SearchBar from '../../components/SearchBar/SearchBar'
import React, { useEffect, useState } from 'react'
import ResultList from '../../components/ResultList/ResultList'
import { fetchData } from '../../api/api'

const Home = () => {
  const [cardData, setCardData] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    fetchData().then((data) => setCardData(data))
  }, [])

  const handleSearch = (searchValue: string) => {
    fetchData(searchValue)
      .then((data) => {
        setCardData(data)
        setErrorMessage('')
      })
      .catch((error) => {
        console.error(error)
        setCardData([])
        setErrorMessage('❌ No matches found')
      })
  }

  return (
    <div data-testid="home">
      <SearchBar onSearch={handleSearch} />
      <ResultList cardData={cardData} errorMessage={errorMessage} />
    </div>
  )
}

export default Home
