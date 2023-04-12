import React, { useState } from 'react'
import styles from './SearchBar.module.scss'
import { FiSearch } from 'react-icons/fi'
import { useAppDispatch } from '../../redux/store'
import { getSearchValue, setSearchValue } from '../../redux/slices/search'
import { useSelector } from 'react-redux'

const SearchBar = () => {
  const dispatch = useAppDispatch()
  const saveSearch = useSelector(getSearchValue)

  const [search, setSearch] = useState(saveSearch)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(setSearchValue(search))
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
        <FiSearch />
      </button>
    </form>
  )
}

export default SearchBar
