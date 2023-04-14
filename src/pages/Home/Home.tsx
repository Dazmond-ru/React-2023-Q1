import SearchBar from '../../components/SearchBar/SearchBar'
import React from 'react'
import ResultList from '../../components/ResultList/ResultList'

import preloader from '../../assets/preloader.gif'

import { useGetCharactersQuery } from '../../redux/api/api'
import { useSelector } from 'react-redux'
import { getPage, getSearchValue } from '../../redux/slices/search'

import styles from './Home.module.scss'
import { Management } from '../../components/Management/Management'

const Home = () => {
  const search = useSelector(getSearchValue)
  const page = useSelector(getPage)

  const { data = [], isError, isFetching } = useGetCharactersQuery({ search, page })

  return (
    <div data-testid="home">
      <SearchBar />
      <Management />
      {isFetching ? (
        <div className={styles['preloader']}>
          <img src={preloader} alt="preloader" />
        </div>
      ) : isError ? (
        <div>❌ No matches found</div>
      ) : (
        <ResultList data={data} />
      )}
    </div>
  )
}

export default Home
