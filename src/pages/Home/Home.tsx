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
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '')

  useEffect(() => {
    setIsLoading(true)
    fetchData(searchValue)
      .then((data) => {
        if (data) {
          setCardData(data)
          setErrorMessage('')
        } else {
          setCardData([])
          setErrorMessage('❌ No matches found')
        }
        setIsLoading(false)
      })
      .catch((error) => {
        console.error(error)
        setIsLoading(false)
      })
  }, [searchValue])

  const handleSearch = (searchValue: string) => {
    setSearchValue(searchValue)
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
