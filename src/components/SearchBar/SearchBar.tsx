import React, { useState } from 'react'
import styles from './SearchBar.module.scss'
import { useAppDispatch } from '../../redux/store'
import { getSearchValue, setPage, setSearchValue } from '../../redux/slices/search'
import { useSelector } from 'react-redux'

import { ReactComponent as SearchIcon } from '../../assets/search.svg'

const SearchBar = () => {
  const dispatch = useAppDispatch()
  const saveSearch = useSelector(getSearchValue)

  const [search, setSearch] = useState(saveSearch)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(setSearchValue(search))
    dispatch(setPage(1))
  }

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => setSearch(e.currentTarget.value)

  return (
    <form className={styles['search-bar']} onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search"
        className={styles['search-bar__input']}
        onChange={handleInputChange}
        value={search}
        data-testid="search-input"
      />
      <button type="submit" className={styles['search-bar__button']} data-testid="search-button">
        <SearchIcon />
      </button>
    </form>
  )
}

export default SearchBar
