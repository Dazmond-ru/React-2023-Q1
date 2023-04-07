import SearchBar from '../../components/SearchBar/SearchBar'
import React, { useEffect, useState } from 'react'
import ResultList from '../../components/ResultList/ResultList'
import { fetchData } from '../../api/api'

import preloader from '../../assets/preloader.gif'

import styles from './Home.module.scss'

const Home = () => {
  const [cardData, setCardData] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchData().then((data) => setCardData(data))
  }, [])

  const handleSearch = (searchValue: string) => {
    setIsLoading(true)
    fetchData(searchValue)
      .then((data) => {
        setCardData(data)
        setErrorMessage('')
        setIsLoading(false)
      })
      .catch((error) => {
        console.error(error)
        setCardData([])
        setErrorMessage('❌ No matches found')
        setIsLoading(false)
      })
  }

  return (
    <div data-testid="home">
      <SearchBar onSearch={handleSearch} />
      {isLoading ? (
        <div className={styles['home-preloader']}>
          <img src={preloader} alt="preloader" />
        </div>
      ) : (
        <ResultList cardData={cardData} errorMessage={errorMessage} />
      )}
    </div>
  )
}

export default Home
